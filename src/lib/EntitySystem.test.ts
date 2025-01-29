import { DeductionSystem } from './DeductionSystem'
import { EntitySystem } from './EntitySystem'

describe('EntitySystem', () => {
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

	describe('add', () => {
		it('should add objects to the list of entities', () => {
			expect(entity_system.entities).toHaveLength(3)
		})

		it('should add all the deduced properties and non-properties (1)', () => {
			const entity_1 = entity_system.entities.find((e) => e.id === '1')
			expect(entity_1).toBeDefined()
			if (entity_1) {
				expect(entity_1).toEqual({
					all_non_properties: [],
					all_properties: ['a', 'b', 'c', 'd'],
					deduced_non_properties: [],
					deduced_properties: ['b', 'c', 'd'],
					id: '1',
					non_properties: [],
					properties: ['a'],
					unknown_properties: [],
				})
			}
		})

		it('should add all the deduced properties and non-properties (3)', () => {
			const entity_3 = entity_system.entities.find((e) => e.id === '3')
			expect(entity_3).toBeDefined()
			if (entity_3) {
				expect(entity_3).toEqual({
					all_non_properties: ['a', 'b'],
					all_properties: ['c'],
					deduced_non_properties: ['a'],
					deduced_properties: [],
					id: '3',
					non_properties: ['b'],
					properties: ['c'],
					unknown_properties: ['d'],
				})
			}
		})
	})

	describe('search', () => {
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

		it('should return one object where property d is unknown', () => {
			expect(entity_system.search([], [], ['d'])).toHaveLength(1)
		})
	})

	describe('missing_basic_combinations', () => {
		it('should return exactly three combinations', () => {
			expect(entity_system.missing_basic_combinations).toHaveLength(3)
			expect(entity_system.missing_basic_combinations).toContainEqual({
				assumption: 'c',
				negation: 'd',
			})

			expect(entity_system.missing_basic_combinations).toContainEqual({
				assumption: 'd',
				negation: 'c',
			})

			expect(entity_system.missing_basic_combinations).toContainEqual({
				assumption: 'd',
				negation: 'b',
			})
		})
	})

	describe('entities_with_unknown_properties', () => {
		it('should find one entity', () => {
			const entities = entity_system.entities_with_unknown_properties
			expect(entities).toHaveLength(1)
			expect(entities[0].id).toBe('3')
			expect(entities[0].unknown_properties.length).toBeGreaterThan(0)
		})
	})
})
