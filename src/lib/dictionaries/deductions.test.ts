import { get_deductions, normalized_implications } from './deductions'

describe('normalized implications', () => {
	it("should deduce 'finitely complete' from the set {complete}", () => {
		const found = normalized_implications.find(
			(implication) =>
				implication.conclusion === 'finitely complete' &&
				implication.assumptions.has('complete') &&
				implication.assumptions.size === 1,
		)
		expect(found).toBeDefined()
	})

	it("should deduce 'complete' from the set {finitely complete, filtered limits}", () => {
		const found = normalized_implications.find(
			(implication) =>
				implication.conclusion === 'complete' &&
				implication.assumptions.has('finitely complete') &&
				implication.assumptions.has('filtered limits') &&
				implication.assumptions.size === 2,
		)
		expect(found).toBeDefined()
	})

	it("should deduce 'pointed' from the set {abelian}", () => {
		const found = normalized_implications.find(
			(implication) =>
				implication.conclusion === 'pointed' &&
				implication.assumptions.has('abelian') &&
				implication.assumptions.size === 1,
		)
		expect(found).toBeDefined()
	})

	it('should not have empty assumptions', () => {
		for (const implication of normalized_implications) {
			expect(implication.assumptions.size).toBeGreaterThan(0)
		}
	})
})

describe('deductions', () => {
	it('should include the assumptions', () => {
		const deductions = get_deductions(new Set(['abelian']))
		expect(deductions).toContain('abelian')
	})

	it('should include direct implications (e.g. abelian)', () => {
		const deductions = get_deductions(new Set(['abelian']))
		expect(deductions).toContain('finitely complete')
	})

	it('should include indirect implications (e.g. abelian)', () => {
		const deductions = get_deductions(new Set(['abelian']))
		expect(deductions).toContain('finite products')
		expect(deductions).toContain('terminal object')
		expect(deductions).toContain('initial object')
	})

	it('should include deductions of all parts of the assumptions', () => {
		const deductions = get_deductions(
			new Set(['finitely complete', 'finitely cocomplete']),
		)
		expect(deductions).toContain('finite products')
		expect(deductions).toContain('finite coproducts')
		expect(deductions).toContain('terminal object')
		expect(deductions).toContain('initial object')
		expect(deductions).toContain('coequalizers')
		expect(deductions).toContain('equalizers')
	})

	it('should include direct implications of more than one assumption', () => {
		const deductions = get_deductions(new Set(['elementary topos', 'locally small']))
		expect(deductions).toContain('well-powered')
	})

	it('should not deduce wrong stuff', () => {
		const assumptions = new Set([
			'Grothendieck topos',
			'locally finitely presentable',
		] as const)
		const deductions = get_deductions(assumptions)
		expect(deductions).not.toContain('small')
	})
})
