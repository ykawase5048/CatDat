import { DeductionSystem } from './DeductionSystem'
import { ReasonHandler } from './ReasonHandler'

const default_reason_handler = new ReasonHandler<string, string>(
	() => 'is',
	() => 'is not',
)

describe('constructor', () => {
	it('should throw an error when an unknown property appears in a rule', () => {
		expect(() => {
			new DeductionSystem<string, string>(new Set(['a']), [
				{ id: '', assumptions: ['a'], conclusions: ['b'], reason: 'trivial' },
			])
		}).toThrow()
	})

	it('should initialize by default by computing the normalized rules', () => {
		const deductionSystem = new DeductionSystem<string, string>(new Set(['a', 'b']), [
			{ id: '', assumptions: ['a'], conclusions: ['b'], reason: 'trivial' },
		])
		expect(deductionSystem.normalized_rules).not.toEqual([])
	})

	it('should not initialize when said so', () => {
		const deductionSystem = new DeductionSystem<string, string>(
			new Set(['a', 'b']),
			[{ id: '', assumptions: ['a'], conclusions: ['b'], reason: 'trivial' }],

			false,
		)
		expect(deductionSystem.normalized_rules).toEqual([])
	})
})

describe('get_deductions_with_reasons', () => {
	const deductionSystem = new DeductionSystem<string, string>(
		new Set(['a', 'b', 'c', 'd', 'e']),
		[
			{ id: '', assumptions: ['a', 'b'], conclusions: ['c'], reason: '' },
			{ id: '', assumptions: ['d', 'c'], conclusions: ['e'], reason: '' },
			{ id: '', assumptions: ['c'], conclusions: ['a'], reason: '' },
		],
	)

	it('should explain why the properties follow', () => {
		const deductions = deductionSystem.get_deductions_with_reasons(
			new Set(['a', 'b']),
			default_reason_handler,
		)

		expect(deductions).toEqual([
			{
				id: 'c',
				prefix: 'is',
				reason: 'Since it is a and is b, we deduce that it is c.',
			},
		])
	})
})

describe('get_deduced_negations_with_reasons', () => {
	const deductionSystem = new DeductionSystem<string, string>(
		new Set(['a', 'b', 'c', 'd', 'e']),
		[
			{ id: '', assumptions: ['b'], conclusions: ['c'], reason: '' },
			{ id: '', assumptions: ['c'], conclusions: ['d'], reason: '' },
		],
	)

	it('should explain why the non-properties follow"', () => {
		const detailed_deduced_negations =
			deductionSystem.get_deduced_negations_with_reasons(
				new Set(['e']),
				new Set(['d']),
				default_reason_handler,
			)

		expect(detailed_deduced_negations).toEqual([
			{
				id: 'b',
				prefix: 'is',
				reason: 'Assume for a contradiction that it is b. Since it is b, we deduce that it is c. Since it is c, we deduce that it is d. This is a contradiction since we already know that it is not d.',
			},
			{
				id: 'c',
				prefix: 'is',
				reason: 'Assume for a contradiction that it is c. Since it is c, we deduce that it is d. This is a contradiction since we already know that it is not d.',
			},
		])
	})
})

describe('has_contradiction', () => {
	const deductionSystem = new DeductionSystem<string, string>(
		new Set(['a', 'b', 'c', 'd', 'e', 'f']),
		[
			{ id: '', assumptions: ['a'], conclusions: ['c'], reason: 'trivial' },
			{
				id: '',
				assumptions: ['c', 'd'],
				conclusions: ['e', 'f'],
				equivalent: true,
				reason: 'trivial',
			},
		],
	)

	it("should return true for 'a' and 'not a'", () => {
		expect(
			deductionSystem.has_contradiction(
				new Set(['a']),
				new Set(['a']),
				default_reason_handler,
			),
		).toBe(true)
	})

	it("should return true for 'a' and 'not c'", () => {
		expect(
			deductionSystem.has_contradiction(
				new Set(['a']),
				new Set(['c']),
				default_reason_handler,
			),
		).toBe(true)
	})

	it("should return true for 'a', 'd' and 'not f'", () => {
		expect(
			deductionSystem.has_contradiction(
				new Set(['a', 'd']),
				new Set(['f']),
				default_reason_handler,
			),
		).toBe(true)
	})

	it("should return false for 'a' and 'b'", () => {
		expect(
			deductionSystem.has_contradiction(
				new Set(['a', 'b']),
				new Set([]),
				default_reason_handler,
			),
		).toBe(false)
	})

	it("should return false for 'a' and 'c'", () => {
		expect(
			deductionSystem.has_contradiction(
				new Set(['a', 'c']),
				new Set([]),
				default_reason_handler,
			),
		).toBe(false)
	})

	it("should return false for 'a' and 'b', and not 'f'", () => {
		expect(
			deductionSystem.has_contradiction(
				new Set(['a', 'b']),
				new Set(['f']),
				default_reason_handler,
			),
		).toBe(false)
	})

	it("should return false for not 'f'", () => {
		expect(
			deductionSystem.has_contradiction(
				new Set([]),
				new Set(['f']),
				default_reason_handler,
			),
		).toBe(false)
	})
})

describe('get_basic_consistent_combinations', () => {
	const deductionSystem = new DeductionSystem<string, string>(
		new Set(['a', 'c', 'd', 'e']),
		[
			{ id: '', assumptions: ['a'], conclusions: ['c'], reason: 'trivial' },
			{ id: '', assumptions: ['c', 'd'], conclusions: ['e'], reason: 'trivial' },
		],
	)

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
	const deductionSystem = new DeductionSystem<string, string>(
		new Set(['a', 'b', 'c', 'd', 'e', 'f']),
		[
			{ id: '', assumptions: ['a'], conclusions: ['b'], reason: 'trivial' },
			{ id: '', assumptions: ['b'], conclusions: ['c'], reason: 'trivial' },
			{ id: '', assumptions: ['d'], conclusions: ['e'], reason: 'trivial' },
		],
	)

	it('should return null for the empty set', () => {
		const result = deductionSystem.get_redundancy(new Set())
		expect(result).toBe(null)
	})

	it("should return null for 'a'", () => {
		const result = deductionSystem.get_redundancy(new Set(['a']))
		expect(result).toBe(null)
	})

	it("should return 'b' for 'a' and 'b'", () => {
		const result = deductionSystem.get_redundancy(new Set(['a', 'b']))
		expect(result).toBe('b')
	})

	it("should return 'c' for 'a' and 'c'", () => {
		const result = deductionSystem.get_redundancy(new Set(['a', 'c']))
		expect(result).toBe('c')
	})

	it("should return null for 'a' and 'd'", () => {
		const result = deductionSystem.get_redundancy(new Set(['a', 'd']))
		expect(result).toBe(null)
	})
})

describe('get_redundancy_of_negations', () => {
	const deductionSystem = new DeductionSystem<string, string>(
		new Set(['a', 'b', 'c', 'd', 'e']),
		[
			{ id: '', assumptions: ['a'], conclusions: ['b'], reason: 'trivial' },
			{ id: '', assumptions: ['b'], conclusions: ['c'], reason: 'trivial' },
			{ id: '', assumptions: ['d'], conclusions: ['e'], reason: 'trivial' },
		],
	)

	it("should return null for 'a' and 'not e'", () => {
		const result = deductionSystem.get_redundancy_of_negations(
			new Set(['a']),
			new Set(['e']),
			default_reason_handler,
		)
		expect(result).toBe(null)
	})

	it("should return 'd' for 'a' and 'not e' and 'not d'", () => {
		const result = deductionSystem.get_redundancy_of_negations(
			new Set(['a']),
			new Set(['d', 'e']),
			default_reason_handler,
		)
		expect(result).toBe('d')
	})
})
describe('relevant rules', () => {
	const deductionSystem = new DeductionSystem<string, string>(
		new Set(['a', 'b', 'c', 'd', 'e', 'f']),
		[
			{
				id: 'rule1',
				assumptions: ['a'],
				conclusions: ['b', 'f'],
				reason: 'trivial',
			},
			{ id: 'rule2', assumptions: ['b'], conclusions: ['c'], reason: 'trivial' },
			{
				id: 'rule3',
				assumptions: ['d', 'f'],
				conclusions: ['e'],
				reason: 'trivial',
			},
		],
	)

	it('should return one rule', () => {
		const rules = deductionSystem.get_relevant_rules('d')
		expect(rules).toHaveLength(1)
		expect(rules).toContainEqual({
			id: 'rule3',
			assumptions: ['d', 'f'],
			conclusions: ['e'],
			reason: 'trivial',
		})
	})

	it('should return two rules', () => {
		const rules = deductionSystem.get_relevant_rules('b')
		expect(rules).toHaveLength(2)
		expect(rules).toContainEqual({
			id: 'rule1',
			assumptions: ['a'],
			conclusions: ['b', 'f'],
			reason: 'trivial',
		})
		expect(rules).toContainEqual({
			id: 'rule2',
			assumptions: ['b'],
			conclusions: ['c'],
			reason: 'trivial',
		})
	})
})
