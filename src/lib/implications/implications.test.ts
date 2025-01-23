import { implications } from './implications'

describe('implications', () => {
	it('should contain basic implications', () => {
		const implication = {
			assumptions: ['cartesian closed'],
			conclusions: ['finite products'],
		}
		expect(implications).toContainEqual(implication)
	})

	it('should contain not deductions of the implications', () => {
		const implication = {
			assumptions: ['cartesian closed'],
			conclusions: ['terminal object'],
		}
		expect(implications).not.toContainEqual(implication)
	})

	it('should not contain basic self-dual implications', () => {
		const implication = {
			assumptions: ['self-dual', 'binary products'],
			conclusions: ['binary coproducts'],
		}
		expect(implications).not.toContainEqual(implication)
	})

	it('should have always at least one assumption and one conclusion', () => {
		// we don't check this with a type because of the way we generate a dual implication
		for (const implication of implications) {
			expect(implication.assumptions.length).toBeGreaterThan(0)
			expect(implication.conclusions.length).toBeGreaterThan(0)
		}
	})
})
