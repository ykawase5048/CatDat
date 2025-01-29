import { DeductionSystem } from './DeductionSystem'
import { EntitySystem } from './EntitySystem'

describe('add', () => {
	type S = {
		id: string
		properties: string[]
		non_properties: string[]
	}
	const deduction_system = new DeductionSystem<string>(
		new Set(['a', 'b', 'c', 'd', 'e', 'f']),
		[
			{ assumptions: ['a'], conclusions: ['c'] },
			{ assumptions: ['c', 'd'], conclusions: ['e'] },
		],
	)

	deduction_system.init()

	const entity_system = new EntitySystem<S, string>(deduction_system)

	const entity_data: S = {
		id: '1',
		properties: ['a'],
		non_properties: ['e'],
	}

	it('should add an entity to the list of entities', () => {
		entity_system.add(entity_data)
		expect(entity_system.entities.length).toBe(1)
	})

	it('should add the deduced properties, non-properties, and unknown properties', () => {
		const entity = entity_system.add(entity_data)

		expect(entity.properties).toEqual(['a'])
		expect(entity.non_properties).toEqual(['e'])
		expect(entity.all_properties).toEqual(['a', 'c'])
		expect(entity.deduced_non_properties).toEqual(['d'])
		expect(entity.unknown_properties).toEqual(['b', 'f'])
	})
})

describe('search', () => {
	type S = {
		id: string
		properties: string[]
		non_properties: string[]
	}

	const deduction_system = new DeductionSystem<string>(new Set(['a', 'b', 'c', 'd']), [
		{ assumptions: ['a'], conclusions: ['b'] },
		{ assumptions: ['b'], conclusions: ['c', 'd'] },
	])

	deduction_system.init()

	const entity_system = new EntitySystem<S, string>(deduction_system)

	entity_system.add({
		id: '1',
		properties: ['a'],
		non_properties: [],
	})

	entity_system.add({
		id: '2',
		properties: ['b'],
		non_properties: ['a'],
	})

	entity_system.add({
		id: '3',
		properties: ['c'],
		non_properties: ['b'],
	})

	it('should return nothing when no properties and non-properties are specified', () => {
		expect(entity_system.search([], [])).toHaveLength(0)
	})

	it('should return one object with property a', () => {
		expect(entity_system.search(['a'], [])).toHaveLength(1)
	})

	it('should return no object with property a but not b', () => {
		expect(entity_system.search(['a'], ['b'])).toHaveLength(0)
	})

	it('should return one object with properties b, c, but not a', () => {
		expect(entity_system.search(['b', 'c'], ['a'])).toHaveLength(1)
	})

	it('should return one object with properties c, but not a, b', () => {
		expect(entity_system.search(['c'], ['a', 'b'])).toHaveLength(1)
	})
})
