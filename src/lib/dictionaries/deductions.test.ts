import { normalized_implications } from './deductions'

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
})
