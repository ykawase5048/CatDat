import { DeductionSystem } from './DeductionSystem'
import { EntitySystem } from './EntitySystem'

describe('EntitySystem', () => {
	type S = {
		id: string
		properties: Set<string>
		non_properties: Set<string>
	}

	const deduction_system = new DeductionSystem<string>(new Set(['a', 'b', 'c', 'd']), [
		{ assumptions: ['a'], conclusions: ['b'] },
		{ assumptions: ['b'], conclusions: ['c', 'd'] },
	])

	deduction_system.init()

	const entity_system = new EntitySystem<S, string>(deduction_system)

	const entity_1 = entity_system.add({
		id: '1',
		properties: new Set(['a']),
		non_properties: new Set([]),
	})

	entity_system.add({
		id: '2',
		properties: new Set(['b']),
		non_properties: new Set(['a']),
	})

	const entity_3 = entity_system.add({
		id: '3',
		properties: new Set(['c']),
		non_properties: new Set(['b']),
	})

	describe('add', () => {
		it('should add objects to the list of entities', () => {
			expect(entity_system.entities).toHaveLength(3)
		})

		it('should add all the deduced properties and non-properties (1)', () => {
			expect(entity_1).toBeDefined()
			if (entity_1) {
				expect(entity_1).toEqual({
					id: '1',
					all_non_properties: new Set([]),
					all_properties: new Set(['a', 'b', 'c', 'd']),
					deduced_non_properties: new Set([]),
					deduced_properties: new Set(['b', 'c', 'd']),
					non_properties: new Set([]),
					properties: new Set(['a']),
					unknown_properties: new Set([]),
				})
			}
		})

		it('should add all the deduced properties and non-properties (3)', () => {
			expect(entity_3).toBeDefined()
			if (entity_3) {
				expect(entity_3).toEqual({
					id: '3',
					all_non_properties: new Set(['a', 'b']),
					all_properties: new Set(['c']),
					deduced_non_properties: new Set(['a']),
					deduced_properties: new Set([]),
					non_properties: new Set(['b']),
					properties: new Set(['c']),
					unknown_properties: new Set(['d']),
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
			expect(entities[0].unknown_properties.size).toBeGreaterThan(0)
		})
	})

	describe('get_comparison', () => {
		it('return a table with true/false/null for the corresponding properties', () => {
			expect(entity_1.all_properties).toEqual(new Set(['a', 'b', 'c', 'd']))
			expect(entity_3.all_properties).toEqual(new Set(['c']))
			const comparison_result = [
				['a', true, false],
				['b', true, false],
				['c', true, true],
				['d', true, null],
			]
			expect(entity_system.get_comparison(entity_1, entity_3)).toEqual(
				comparison_result,
			)
		})

		it('returns null for entities that are not part of the system', () => {
			const entity_4 = {
				id: '4',
				all_non_properties: new Set([]),
				all_properties: new Set([]),
				deduced_non_properties: new Set([]),
				deduced_properties: new Set([]),
				non_properties: new Set([]),
				properties: new Set([]),
				unknown_properties: new Set([]),
			}
			expect(entity_system.get_comparison(entity_1, entity_4)).toEqual(null)
		})
	})
})
