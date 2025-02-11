import { DeductionSystem, type DetailedProperty } from './DeductionSystem'

describe('constructor', () => {
	it('should throw an error when an unknown property appears in a rule', () => {
		expect(() => {
			new DeductionSystem<string>(new Set(['a']), [
				{ assumptions: ['a'], conclusions: ['b'], reason: 'trivial' },
			])
		}).toThrow()
	})

	it('should initialize by default by computing the normalized rules', () => {
		const deductionSystem = new DeductionSystem<string>(new Set(['a', 'b']), [
			{ assumptions: ['a'], conclusions: ['b'], reason: 'trivial' },
		])
		expect(deductionSystem.normalized_rules).not.toEqual([])
	})

	it('should not initialize when said so', () => {
		const deductionSystem = new DeductionSystem<string>(
			new Set(['a', 'b']),
			[{ assumptions: ['a'], conclusions: ['b'], reason: 'trivial' }],
			false,
		)
		expect(deductionSystem.normalized_rules).toEqual([])
	})
})

describe('get_detailed_deductions', () => {
	const deductionSystem = new DeductionSystem<string>(
		new Set(['a', 'b', 'c', 'd', 'e']),
		[
			{ assumptions: ['a', 'b'], conclusions: ['c'], reason: '' },
			{ assumptions: ['d', 'c'], conclusions: ['e'], reason: '' },
			{ assumptions: ['c'], conclusions: ['a'], reason: '' },
		],
		true,
		() => 'has',
	)

	it('should explain why the properties follow', () => {
		const assumptions: DetailedProperty<string>[] = [
			{ id: 'a', prefix: 'has', reason: 'clear' },
			{ id: 'b', prefix: 'has', reason: 'easy' },
		]

		const detailed_deductions = deductionSystem.get_detailed_deductions(assumptions)

		expect(detailed_deductions).toEqual([
			{
				id: 'a',
				prefix: 'has',
				reason: 'clear',
			},
			{
				id: 'b',
				prefix: 'has',
				reason: 'easy',
			},
			{
				id: 'c',
				prefix: 'has',
				reason: 'Since it has a and has b, we deduce that it has c.',
			},
		])
	})
})

describe('get_detailed_deduced_negations', () => {
	const deductionSystem = new DeductionSystem<string>(
		new Set(['a', 'b', 'c', 'd', 'e']),
		[
			{ assumptions: ['b'], conclusions: ['c'], reason: '' },
			{ assumptions: ['c'], conclusions: ['d'], reason: '' },
		],
		true,
	)

	it('should explain why the non-properties follow, and take default prefix "is"', () => {
		const assumptions: DetailedProperty<string>[] = [
			{ id: 'e', prefix: 'has', reason: 'clear' },
		]
		const negations: DetailedProperty<string>[] = [
			{ id: 'd', prefix: 'has', reason: 'clear' },
		]

		const detailed_deduced_negations = deductionSystem.get_detailed_deduced_negations(
			assumptions,
			negations,
		)

		expect(detailed_deduced_negations).toEqual([
			{
				id: 'd',
				prefix: 'has',
				reason: 'clear',
			},
			{
				id: 'b',
				prefix: 'is',
				reason: 'Assume for a contradiction that it is b. Since it is b, we deduce that it is c. Since it is c, we deduce that it is d. This is a contradiction since we already know that "d" is not satisfied.',
			},
			{
				id: 'c',
				prefix: 'is',
				reason: 'Assume for a contradiction that it is c. Since it is c, we deduce that it is d. This is a contradiction since we already know that "d" is not satisfied.',
			},
		])
	})
})

describe('has_contradiction', () => {
	const deductionSystem = new DeductionSystem<string>(
		new Set(['a', 'b', 'c', 'd', 'e', 'f']),
		[
			{ assumptions: ['a'], conclusions: ['c'], reason: 'trivial' },
			{
				assumptions: ['c', 'd'],
				conclusions: ['e', 'f'],
				equivalent: true,
				reason: 'trivial',
			},
		],
	)

	it("should return true for 'a' and 'not a'", () => {
		expect(deductionSystem.has_contradiction(['a'], ['a'])).toBe(true)
	})

	it("should return true for 'a' and 'not c'", () => {
		expect(deductionSystem.has_contradiction(['a'], ['c'])).toBe(true)
	})

	it("should return true for 'a', 'd' and 'not f'", () => {
		expect(deductionSystem.has_contradiction(['a', 'd'], ['f'])).toBe(true)
	})

	it("should return false for 'a' and 'b'", () => {
		expect(deductionSystem.has_contradiction(['a', 'b'], [])).toBe(false)
	})

	it("should return false for 'a' and 'c'", () => {
		expect(deductionSystem.has_contradiction(['a', 'c'], [])).toBe(false)
	})

	it("should return false for 'a' and 'b', and not 'f'", () => {
		expect(deductionSystem.has_contradiction(['a', 'b'], ['f'])).toBe(false)
	})

	it("should return false for not 'f'", () => {
		expect(deductionSystem.has_contradiction([], ['f'])).toBe(false)
	})
})

describe('get_basic_consistent_combinations', () => {
	const deductionSystem = new DeductionSystem<string>(new Set(['a', 'c', 'd', 'e']), [
		{ assumptions: ['a'], conclusions: ['c'], reason: 'trivial' },
		{ assumptions: ['c', 'd'], conclusions: ['e'], reason: 'trivial' },
	])

	it('should work as expected', () => {
		const combinations = deductionSystem.get_basic_consistent_combinations()
		expect(combinations).toHaveLength(11)

		const expected = [
			{ assumption: 'a', negation: 'd' },
			{ assumption: 'a', negation: 'e' },
			{ assumption: 'c', negation: 'a' },
			{ assumption: 'c', negation: 'd' },
			{ assumption: 'c', negation: 'e' },
			{ assumption: 'd', negation: 'a' },
			{ assumption: 'd', negation: 'c' },
			{ assumption: 'd', negation: 'e' },
			{ assumption: 'e', negation: 'a' },
			{ assumption: 'e', negation: 'c' },
			{ assumption: 'e', negation: 'd' },
		]

		expect(combinations).toEqual(expected)
	})
})

describe('get_redundancy', () => {
	const deductionSystem = new DeductionSystem<string>(
		new Set(['a', 'b', 'c', 'd', 'e', 'f']),
		[
			{ assumptions: ['a'], conclusions: ['b'], reason: 'trivial' },
			{ assumptions: ['b'], conclusions: ['c'], reason: 'trivial' },
			{ assumptions: ['d'], conclusions: ['e'], reason: 'trivial' },
		],
	)

	it('should return null for the empty set', () => {
		const result = deductionSystem.get_redundancy([])
		expect(result).toBe(null)
	})

	it("should return null for 'a'", () => {
		const result = deductionSystem.get_redundancy([
			{ id: 'a', prefix: 'is', reason: '-' },
		])
		expect(result).toBe(null)
	})

	it("should return 'b' for 'a' and 'b'", () => {
		const result = deductionSystem.get_redundancy([
			{ id: 'a', prefix: 'is', reason: '-' },
			{ id: 'b', prefix: 'is', reason: '-' },
		])
		expect(result).toBe('b')
	})

	it("should return 'c' for 'a' and 'c'", () => {
		const result = deductionSystem.get_redundancy([
			{ id: 'a', prefix: 'is', reason: '-' },
			{ id: 'c', prefix: 'is', reason: '-' },
		])
		expect(result).toBe('c')
	})

	it("should return null for 'a' and 'd'", () => {
		const result = deductionSystem.get_redundancy([
			{ id: 'a', prefix: 'is', reason: '-' },
			{ id: 'd', prefix: 'is', reason: '-' },
		])
		expect(result).toBe(null)
	})
})

describe('get_redundancy_of_negations', () => {
	const deductionSystem = new DeductionSystem<string>(
		new Set(['a', 'b', 'c', 'd', 'e']),
		[
			{ assumptions: ['a'], conclusions: ['b'], reason: 'trivial' },
			{ assumptions: ['b'], conclusions: ['c'], reason: 'trivial' },
			{ assumptions: ['d'], conclusions: ['e'], reason: 'trivial' },
		],
	)

	it("should return null for 'a' and 'not e'", () => {
		const result = deductionSystem.get_redundancy_of_negations(
			[{ id: 'a', prefix: 'is', reason: '-' }],
			[{ id: 'e', prefix: 'is', reason: '-' }],
		)
		expect(result).toBe(null)
	})

	it("should return 'd' for 'a' and 'not e' and 'not d'", () => {
		const result = deductionSystem.get_redundancy_of_negations(
			[{ id: 'a', prefix: 'is', reason: '-' }],
			[
				{ id: 'd', prefix: 'is', reason: '-' },
				{ id: 'e', prefix: 'is', reason: '-' },
			],
		)
		expect(result).toBe('d')
	})
})
describe('relevant rules', () => {
	const deductionSystem = new DeductionSystem<string>(
		new Set(['a', 'b', 'c', 'd', 'e', 'f']),
		[
			{ assumptions: ['a'], conclusions: ['b', 'f'], reason: 'trivial' },
			{ assumptions: ['b'], conclusions: ['c'], reason: 'trivial' },
			{ assumptions: ['d', 'f'], conclusions: ['e'], reason: 'trivial' },
		],
	)

	it('should return one rule', () => {
		const rules = deductionSystem.get_relevant_rules('d')
		expect(rules).toHaveLength(1)
		expect(rules).toContainEqual({
			assumptions: ['d', 'f'],
			conclusions: ['e'],
			reason: 'trivial',
		})
	})

	it('should return two rules', () => {
		const rules = deductionSystem.get_relevant_rules('b')
		expect(rules).toHaveLength(2)
		expect(rules).toContainEqual({
			assumptions: ['a'],
			conclusions: ['b', 'f'],
			reason: 'trivial',
		})
		expect(rules).toContainEqual({
			assumptions: ['b'],
			conclusions: ['c'],
			reason: 'trivial',
		})
	})
})
