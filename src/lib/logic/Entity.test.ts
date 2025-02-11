import { DeductionSystem } from './DeductionSystem'
import { Entity } from './Entity'

const deduction_system = new DeductionSystem<string, string>(
	new Set(['a', 'b', 'c', 'd', 'e']),
	[
		{ id: '', assumptions: ['a'], conclusions: ['b'], reason: '' },
		{ id: '', assumptions: ['b'], conclusions: ['c', 'd'], reason: '' },
	],
	() => 'is',
	() => 'is not',
)

describe('constructor', () => {
	it('adds the id, properties and non-properties', () => {
		const entity = new Entity<string, string, string>(
			'xyz',
			[{ id: 'a', prefix: 'is', reason: 'clear' }],
			[{ id: 'b', prefix: 'is', reason: 'easy' }],
		)
		expect(entity.id).toBe('xyz')
		expect(entity.properties).toEqual([{ id: 'a', prefix: 'is', reason: 'clear' }])
		expect(entity.non_properties).toEqual([{ id: 'b', prefix: 'is', reason: 'easy' }])
	})
})

describe('deduce_properties', () => {
	it('should deduce all properties', () => {
		const entity = new Entity<string, string, string>(
			'1',
			[{ id: 'a', prefix: 'is', reason: 'clear' }],
			[],
		)

		entity.deduce_properties(deduction_system)

		expect(entity.properties).toEqual([{ id: 'a', prefix: 'is', reason: 'clear' }])

		expect(entity.all_properties).toEqual([
			{ id: 'a', prefix: 'is', reason: 'clear' },
			{ id: 'b', prefix: 'is', reason: 'Since it is a, we deduce that it is b.' },
			{ id: 'c', prefix: 'is', reason: 'Since it is b, we deduce that it is c.' },
			{ id: 'd', prefix: 'is', reason: 'Since it is b, we deduce that it is d.' },
		])

		expect(entity.deduced_properties).toEqual([
			{ id: 'b', prefix: 'is', reason: 'Since it is a, we deduce that it is b.' },
			{ id: 'c', prefix: 'is', reason: 'Since it is b, we deduce that it is c.' },
			{ id: 'd', prefix: 'is', reason: 'Since it is b, we deduce that it is d.' },
		])
	})

	it('should deduce all non-properties', () => {
		const entity = new Entity<string, string, string>(
			'2',
			[],
			[{ id: 'd', prefix: 'is', reason: 'clear' }],
		)

		entity.deduce_properties(deduction_system)

		expect(entity.non_properties).toEqual([
			{ id: 'd', prefix: 'is', reason: 'clear' },
		])

		expect(entity.all_non_properties).toEqual([
			{ id: 'd', prefix: 'is', reason: 'clear' },
			{ id: 'a', prefix: 'is', reason: expect.any(String) },
			{ id: 'b', prefix: 'is', reason: expect.any(String) },
		])
	})

	it('should deduce all unknown properties', () => {
		const entity = new Entity<string, string, string>(
			'3',
			[{ id: 'd', prefix: 'is', reason: 'clear' }],
			[],
		)

		entity.deduce_properties(deduction_system)

		expect(entity.unknown_properties).toEqual([
			{ id: 'a', prefix: 'is', reason: '' },
			{ id: 'b', prefix: 'is', reason: '' },
			{ id: 'c', prefix: 'is', reason: '' },
			{ id: 'e', prefix: 'is', reason: '' },
		])
	})
})

describe('satisfies', () => {
	const entity = new Entity<string, string, string>(
		'xyz',
		[{ id: 'b', prefix: 'is', reason: 'easy' }],
		[{ id: 'a', prefix: 'is', reason: 'easy' }],
	)

	entity.deduce_properties(deduction_system)

	it('returns "true" when all properties, non-properties and unknown properties are satisfied', () => {
		expect(entity.satisfies(['b'], [], [])).toBe(true)
		expect(entity.satisfies([], ['a'], [])).toBe(true)
		expect(entity.satisfies([], [], ['e'])).toBe(true)
		expect(entity.satisfies(['b'], ['a'], ['e'])).toBe(true)
		expect(entity.satisfies([], ['a'], ['e'])).toBe(true)
		expect(entity.satisfies(['b'], [], ['e'])).toBe(true)
		expect(entity.satisfies(['b', 'c'], [], ['e'])).toBe(true)
		expect(entity.satisfies(['c', 'd'], ['a'], ['e'])).toBe(true)
	})

	it('returns "false" otherwise', () => {
		expect(entity.satisfies(['a'], [], [])).toBe(false)
		expect(entity.satisfies([], [], ['a'])).toBe(false)
		expect(entity.satisfies([], ['b'], [])).toBe(false)
		expect(entity.satisfies(['d'], ['a', 'b'], ['e'])).toBe(false)
	})
})

describe('get_comparison_value', () => {
	const entity = new Entity<string, string, string>(
		'xyz',
		[{ id: 'b', prefix: 'is', reason: 'easy' }],
		[{ id: 'a', prefix: 'is', reason: 'easy' }],
	)

	entity.deduce_properties(deduction_system)

	it('returns "null" for unknown properties', () => {
		expect(entity.get_comparison_value('e')).toBe(null)
	})

	it('returns "true" for properties', () => {
		expect(entity.get_comparison_value('b')).toBe(true)
	})

	it('returns "false" for non-properties', () => {
		expect(entity.get_comparison_value('a')).toBe(false)
	})
})
