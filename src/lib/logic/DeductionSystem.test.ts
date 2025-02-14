import { DeductionSystem } from './DeductionSystem'
import { default_reason_handler } from './ReasonHandler'

describe('constructor', () => {
	it('should throw an error when an unknown property appears in a rule', () => {
		expect(() => {
			new DeductionSystem<string, string>(new Set(['a']), [
				{ id: '', assumptions: ['a'], conclusions: ['b'], reason: 'trivial' },
			])
		}).toThrow()
	})
})

describe('get_deductions_with_reasons', () => {
	it('should explain why the properties follow', () => {
		const deductionSystem = new DeductionSystem<string, string>(
			new Set(['a', 'b', 'c', 'd', 'e']),
			[
				{ id: '', assumptions: ['a', 'b'], conclusions: ['c'], reason: '' },
				{ id: '', assumptions: ['d', 'c'], conclusions: ['e'], reason: '' },
				{ id: '', assumptions: ['c'], conclusions: ['a'], reason: '' },
			],
		)

		const deductions_with_reasons = deductionSystem.get_deductions_with_reasons(
			new Set(['a', 'b']),
			default_reason_handler,
		)

		expect(deductions_with_reasons).toEqual([
			{
				id: 'c',
				prefix: 'is',
				reason: 'Since it is a and is b, we deduce that it is c.',
			},
		])
	})

	it('should check all rules', () => {
		const deductionSystem = new DeductionSystem<string, string>(
			new Set(['a', 'b', 'c', 'd', 'e']),
			[
				{ id: '', assumptions: ['a', 'b'], conclusions: ['c'], reason: '' },
				{ id: '', assumptions: ['d', 'c'], conclusions: ['e'], reason: '' },
			],
		)

		const deductions_with_reasons = deductionSystem.get_deductions_with_reasons(
			new Set(['a', 'b', 'd']),
			default_reason_handler,
		)

		expect(deductions_with_reasons).toEqual([
			{
				id: 'c',
				prefix: 'is',
				reason: 'Since it is a and is b, we deduce that it is c.',
			},
			{
				id: 'e',
				prefix: 'is',
				reason: 'Since it is d and is c, we deduce that it is e.',
			},
		])
	})

	it("should run over the rules as many times as needed to deduce all properties'", () => {
		const deductionSystem = new DeductionSystem<string, string>(
			new Set(['a', 'b', 'c', 'd', 'e', 'f']),
			[
				{ id: '', assumptions: ['a'], conclusions: ['e'], reason: '' },
				{ id: '', assumptions: ['b', 'c'], conclusions: ['a'], reason: '' },
				{ id: '', assumptions: ['d', 'e'], conclusions: ['f'], reason: '' },
			],
		)
		const deductions_with_reasons = deductionSystem.get_deductions_with_reasons(
			new Set(['b', 'c', 'd']),
			default_reason_handler,
		)
		expect(deductions_with_reasons).toEqual([
			{
				id: 'a',
				prefix: 'is',
				reason: 'Since it is b and is c, we deduce that it is a.',
			},
			{
				id: 'e',
				prefix: 'is',
				reason: 'Since it is a, we deduce that it is e.',
			},
			{
				id: 'f',
				prefix: 'is',
				reason: 'Since it is d and is e, we deduce that it is f.',
			},
		])
	})
})

describe('get_deduced_negations_with_reasons', () => {
	it('should explain why the non-properties follow"', () => {
		const deductionSystem = new DeductionSystem<string, string>(
			new Set(['a', 'b', 'c', 'd', 'e']),
			[
				{ id: '', assumptions: ['b'], conclusions: ['c'], reason: '' },
				{ id: '', assumptions: ['c'], conclusions: ['d'], reason: '' },
			],
		)

		const negations_with_reasons = deductionSystem.get_deduced_negations_with_reasons(
			new Set(['e']),
			new Set(['d']),
			default_reason_handler,
		)

		expect(negations_with_reasons).toEqual([
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

	it('should run over the rules as many times as needed to deduce all non-properties', () => {
		const deductionSystem = new DeductionSystem<string, string>(
			new Set(['a', 'b', 'c', 'd', 'e', 'f']),
			[
				{ id: '', assumptions: ['b', 'd'], conclusions: ['f'], reason: '' },
				{ id: '', assumptions: ['c', 'b'], conclusions: ['d'], reason: '' },
			],
		)

		const negations_with_reasons = deductionSystem.get_deduced_negations_with_reasons(
			new Set(['c', 'e']),
			new Set(['f']),
			default_reason_handler,
		)

		expect(negations_with_reasons).toContainEqual({
			id: 'b',
			prefix: 'is',
			reason: 'Assume for a contradiction that it is b. Since it is c and is b, we deduce that it is d. Since it is b and is d, we deduce that it is f. This is a contradiction since we already know that it is not f.',
		})
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
		expect(deductionSystem.has_contradiction(new Set(['a']), new Set(['a']))).toBe(
			true,
		)
	})

	it("should return true for 'a' and 'not c'", () => {
		expect(deductionSystem.has_contradiction(new Set(['a']), new Set(['c']))).toBe(
			true,
		)
	})

	it("should return true for 'a', 'd' and 'not f'", () => {
		expect(
			deductionSystem.has_contradiction(new Set(['a', 'd']), new Set(['f'])),
		).toBe(true)
	})

	it("should return false for 'a' and 'b'", () => {
		expect(deductionSystem.has_contradiction(new Set(['a', 'b']), new Set([]))).toBe(
			false,
		)
	})

	it("should return false for 'a' and 'c'", () => {
		expect(deductionSystem.has_contradiction(new Set(['a', 'c']), new Set([]))).toBe(
			false,
		)
	})

	it("should return false for 'a' and 'b', and not 'f'", () => {
		expect(
			deductionSystem.has_contradiction(new Set(['a', 'b']), new Set(['f'])),
		).toBe(false)
	})

	it("should return false for not 'f'", () => {
		expect(deductionSystem.has_contradiction(new Set([]), new Set(['f']))).toBe(false)
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
		)
		expect(result).toBe(null)
	})

	it("should return 'd' for 'a' and 'not e' and 'not d'", () => {
		const result = deductionSystem.get_redundancy_of_negations(
			new Set(['a']),
			new Set(['d', 'e']),
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

// TODO: check this test group
describe('DeductionSystem with duals', () => {
	const dual_config: Record<string, string> = {
		'c': 'c^op',
		'd': 'd^op',
		'e': 'e^op',
		'x': 'x',
		'y': 'y',
		'self-dual': 'self-dual',
	}

	const deductionSystem = new DeductionSystem<string, string>(
		// prettier-ignore
		new Set(['a','b','c','d','e','f','x','y','self-dual','c^op','d^op','e^op']),
		[
			{ id: 'ac', assumptions: ['a'], conclusions: ['c'], reason: 'trivial' },
			{ id: 'cde', assumptions: ['c', 'd'], conclusions: ['e'], reason: 'trivial' },
			{
				id: 'xy',
				equivalent: true,
				assumptions: ['x'],
				conclusions: ['y'],
				reason: 'trivial',
			},
		],
		(property) => dual_config[property] ?? null,
	)

	it('should have all given and all dualized rules', () => {
		expect(deductionSystem.rules).toContainEqual({
			id: 'ac',
			assumptions: ['a'],
			conclusions: ['c'],
			reason: 'trivial',
		})

		expect(deductionSystem.rules).toContainEqual({
			id: 'cde',
			assumptions: ['c', 'd'],
			conclusions: ['e'],
			reason: 'trivial',
		})

		expect(deductionSystem.rules).toContainEqual({
			id: 'xy',
			equivalent: true,
			assumptions: ['x'],
			conclusions: ['y'],
			reason: 'trivial',
		})

		expect(deductionSystem.rules).toContainEqual({
			id: 'cde_dual',
			assumptions: ['c^op', 'd^op'],
			conclusions: ['e^op'],
			reason: '[dualized] trivial',
		})
	})

	it('should not contain rules that cannot be dualized', () => {
		expect(deductionSystem.rules).not.toContainEqual({
			id: expect.any(String),
			assumptions: ['a^op'],
			conclusions: ['c^op'],
			reason: 'trivial',
		})
	})

	it('should contain all self-dual rules', () => {
		expect(deductionSystem.rules).toContainEqual({
			id: 'c_selfdual',
			assumptions: ['self-dual', 'c'],
			conclusions: ['c^op'],
			reason: 'trivial by self-duality',
		})

		expect(deductionSystem.rules).not.toContainEqual({
			id: expect.any(String),
			assumptions: ['self-dual', 'x'],
			conclusions: ['x'],
			reason: 'trivial',
		})
	})
})
