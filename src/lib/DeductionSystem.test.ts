import { DeductionSystem } from './DeductionSystem'

describe('Deduction systems', () => {
	describe('get_deductions', () => {
		const deductionSystem = new DeductionSystem<string>([
			{ assumptions: ['a'], conclusions: ['c'] },
			{ assumptions: ['c', 'd'], conclusions: ['e', 'f'], equivalent: true },
		])

		it("should deduce 'a,c' from 'a'", () => {
			expect(deductionSystem.get_deductions(new Set(['a']))).toEqual(
				new Set(['a', 'c']),
			)
		})

		it("should deduce 'a,b,c' from 'a,b'", () => {
			expect(deductionSystem.get_deductions(new Set(['a', 'b']))).toEqual(
				new Set(['a', 'b', 'c']),
			)
		})

		it("should deduce 'a,b,c,d,e,f' from 'a,b,d'", () => {
			expect(deductionSystem.get_deductions(new Set(['a', 'b', 'd']))).toEqual(
				new Set(['a', 'b', 'c', 'd', 'e', 'f']),
			)
		})

		it("should deduce 'c' and 'd' from 'e,f'", () => {
			expect(deductionSystem.get_deductions(new Set(['e', 'f']))).toContain('c')
			expect(deductionSystem.get_deductions(new Set(['e', 'f']))).toContain('d')
		})

		it('should deduce nothing from the empty set', () => {
			expect(deductionSystem.get_deductions(new Set())).toEqual(new Set())
		})

		it("should deduce just 'b' from 'b'", () => {
			expect(deductionSystem.get_deductions(new Set(['b']))).toEqual(new Set(['b']))
		})
	})

	describe('get_deduced_negations', () => {
		const deductionSystem = new DeductionSystem<string>([
			{ assumptions: ['a', 'b'], conclusions: ['c'] },
			{ assumptions: ['c', 'd'], conclusions: ['e'] },
			{ assumptions: ['e'], conclusions: ['f'] },
		])

		it("should deduce 'not a' from 'not a'", () => {
			expect(
				deductionSystem.get_deduced_negations(new Set([]), new Set(['a'])),
			).toEqual(new Set(['a']))
		})

		it("should deduce everything from 'a' and 'not a'", () => {
			expect(
				deductionSystem.get_deduced_negations(new Set(['a']), new Set(['a'])),
			).toEqual(new Set(['a', 'b', 'c', 'd', 'e', 'f']))
		})

		it("should deduce 'not e' from 'not f'", () => {
			expect(
				deductionSystem.get_deduced_negations(new Set([]), new Set(['f'])),
			).toEqual(new Set(['e', 'f']))
		})

		it("should deduce 'not b' from 'a' and 'not c'", () => {
			expect(
				deductionSystem.get_deduced_negations(new Set(['a']), new Set(['c'])),
			).toContain('b')
		})

		it("should deduce 'not d' from 'a,b' and 'not e'", () => {
			expect(
				deductionSystem.get_deduced_negations(
					new Set(['a', 'b']),
					new Set(['e']),
				),
			).toContain('d')
		})
	})

	describe('has_contradiction', () => {
		const deductionSystem = new DeductionSystem<string>([
			{ assumptions: ['a'], conclusions: ['c'] },
			{ assumptions: ['c', 'd'], conclusions: ['e', 'f'], equivalent: true },
		])

		it("should return true for 'a' and 'not a'", () => {
			expect(
				deductionSystem.has_contradiction(new Set(['a']), new Set(['a'])),
			).toBe(true)
		})

		it("should return true for 'a' and 'not c'", () => {
			expect(
				deductionSystem.has_contradiction(new Set(['a']), new Set(['c'])),
			).toBe(true)
		})

		it("should return true for 'a', 'd' and 'not f'", () => {
			expect(
				deductionSystem.has_contradiction(new Set(['a', 'd']), new Set(['f'])),
			).toBe(true)
		})

		it("should return false for 'a' and 'b'", () => {
			expect(
				deductionSystem.has_contradiction(new Set(['a', 'b']), new Set([])),
			).toBe(false)
		})

		it("should return false for 'a' and 'c'", () => {
			expect(
				deductionSystem.has_contradiction(new Set(['a', 'c']), new Set([])),
			).toBe(false)
		})

		it("should return false for 'a' and 'b', and not 'f'", () => {
			expect(
				deductionSystem.has_contradiction(new Set(['a', 'b']), new Set(['f'])),
			).toBe(false)
		})

		it("should return false for not 'f'", () => {
			expect(deductionSystem.has_contradiction(new Set([]), new Set(['f']))).toBe(
				false,
			)
		})
	})

	describe('get_basic_consistent_combinations', () => {
		const deductionSystem = new DeductionSystem<string>([
			{ assumptions: ['a'], conclusions: ['c'] },
			{ assumptions: ['c', 'd'], conclusions: ['e'] },
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
})
