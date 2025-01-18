import { implications, implications_with_duals } from './implications'

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
})

describe('implications_with_duals', () => {
	it('should contain the existing implications', () => {
		const implication = {
			assumptions: ['small'],
			conclusions: ['locally small'],
		}
		expect(implications_with_duals).toContainEqual(implication)
	})

	it('should contain dual implications', () => {
		const implication = {
			equivalent: true,
			assumptions: ['products', 'equalizers'],
			conclusions: ['complete'],
		}
		expect(implications_with_duals).toContainEqual(implication)

		const dual_implication = {
			equivalent: true,
			assumptions: ['coproducts', 'coequalizers'],
			conclusions: ['cocomplete'],
		}
		expect(implications_with_duals).toContainEqual(dual_implication)
	})

	it('should contain basic self-dual implications (1)', () => {
		const implication = {
			assumptions: ['self-dual', 'binary products'],
			conclusions: ['binary coproducts'],
		}
		expect(implications_with_duals).toContainEqual(implication)
	})

	it('should contain basic self-dual implications (2)', () => {
		const implication = {
			assumptions: ['self-dual', 'equalizers'],
			conclusions: ['coequalizers'],
		}
		expect(implications_with_duals).toContainEqual(implication)
	})

	it('should not contain trivial self-dual implications', () => {
		const implication = {
			assumptions: ['self-dual', 'thin'],
			conclusions: ['thin'],
		}
		expect(implications_with_duals).not.toContainEqual(implication)
	})
})
