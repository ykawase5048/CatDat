import { DeductionSystem } from './DeductionSystem'
import { Entity } from './Entity'
import { EntitySystem } from './EntitySystem'

describe('EntitySystem', () => {
	const deduction_system = new DeductionSystem<string, string>(
		new Set(['a', 'b', 'c', 'd']),
		[
			{ id: '', assumptions: ['a'], conclusions: ['b'], reason: 'trivial' },
			{ id: '', assumptions: ['b'], conclusions: ['c', 'd'], reason: 'trivial' },
		],
		() => 'is',
		() => 'is not',
	)

	const entity_system = new EntitySystem<string, string, string>(deduction_system)

	const entity_1 = entity_system.add(
		'1',
		[{ id: 'a', prefix: 'is', reason: 'clear' }],
		[],
	)
	entity_system.add(
		'2',
		[{ id: 'b', prefix: 'is', reason: 'clear' }],
		[{ id: 'a', prefix: 'is', reason: 'easy' }],
	)

	const entity_3 = entity_system.add(
		'3',
		[{ id: 'c', prefix: 'is', reason: 'clear' }],
		[{ id: 'b', prefix: 'is', reason: 'easy' }],
	)

	describe('add', () => {
		it('should add objects to the list of entities', () => {
			expect(entity_system.entities).toHaveLength(3)
		})

		it('should add all the deduced properties and non-properties', () => {
			const expected = ['a', 'b', 'c', 'd']
			expect(entity_1.all_properties.map((property) => property.id)).toEqual(
				expected,
			)
		})
	})

	describe('search', () => {
		it('should return nothing when no properties and non-properties are specified', () => {
			expect(entity_system.search([], [], [])).toHaveLength(0)
		})

		it('should return one object with property a', () => {
			expect(entity_system.search(['a'], [], [])).toHaveLength(1)
		})

		it('should return no object with property a but not b', () => {
			expect(entity_system.search(['a'], ['b'], [])).toHaveLength(0)
		})

		it('should return one object with properties b, c, but not a', () => {
			expect(entity_system.search(['b', 'c'], ['a'], [])).toHaveLength(1)
		})

		it('should return one object with properties c, but not a, b', () => {
			expect(entity_system.search(['c'], ['a', 'b'], [])).toHaveLength(1)
		})

		it('should return one object where property d is unknown', () => {
			expect(entity_system.search([], [], ['d'])).toHaveLength(1)
		})
	})

	describe('get_basic_combinations', () => {
		it('should return exactly three combinations', () => {
			const combinations = entity_system.get_missing_basic_combinations()
			expect(combinations).toHaveLength(3)
			expect(combinations).toContainEqual({
				assumption: 'c',
				negation: 'd',
			})

			expect(combinations).toContainEqual({
				assumption: 'd',
				negation: 'c',
			})

			expect(combinations).toContainEqual({
				assumption: 'd',
				negation: 'b',
			})
		})
	})

	describe('entities_with_unknown_properties', () => {
		it('should find one entity', () => {
			const entities = entity_system.get_entities_with_unknown_properties()
			expect(entities).toHaveLength(1)
			expect(entities[0].id).toBe('3')
			expect(entities[0].unknown_properties.length).toBeGreaterThan(0)
		})
	})

	describe('get_comparison_table', () => {
		it('return a table with true/false/null for the corresponding properties', () => {
			const comparison_result = [
				['a', true, false],
				['b', true, false],
				['c', true, true],
				['d', true, null],
			]
			expect(entity_system.get_comparison_table([entity_1, entity_3])).toEqual(
				comparison_result,
			)
		})

		it('returns null for entities that are not part of the system', () => {
			const entity_4 = new Entity('4', [], [])
			expect(entity_system.get_comparison_table([entity_1, entity_4])).toEqual(null)
		})
	})
})
