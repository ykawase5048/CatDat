import type { Implication } from '$lib/types'
import {
	get_dual_implication,
	get_new_dual_implication,
	get_self_dual_implication,
	implications_with_duals,
} from './implications.utils'

describe('get_dual_implication', () => {
	it('should return null when an assumption cannot be dualized', () => {
		const implication: Implication = {
			assumptions: ['finitary algebraic'],
			conclusions: ['cocomplete'],
		}
		expect(get_dual_implication(implication)).toBeNull()
	})

	it('should return null when a conclusion cannot be dualized', () => {
		const implication: Implication = {
			assumptions: ['finitary algebraic'],
			conclusions: ['locally finitely presentable'],
		}
		expect(get_dual_implication(implication)).toBeNull()
	})

	it('should return the dual implication if available', () => {
		const implication: Implication = {
			assumptions: ['binary products', 'equalizers'],
			conclusions: ['pullbacks'],
		}
		expect(get_dual_implication(implication)).toEqual({
			assumptions: ['binary coproducts', 'coequalizers'],
			conclusions: ['pushouts'],
		})
	})

	it('should respect equivalences', () => {
		const implication: Implication = {
			equivalent: true,
			assumptions: ['finite coproducts', 'coequalizers'],
			conclusions: ['finitely cocomplete'],
		}

		expect(get_dual_implication(implication)).toEqual({
			equivalent: true,
			assumptions: ['finite products', 'equalizers'],
			conclusions: ['finitely complete'],
		})
	})

	it('should preserve self-dual implications', () => {
		const implication: Implication = {
			assumptions: ['finite'],
			conclusions: ['small'],
		}
		expect(get_dual_implication(implication)).toEqual(implication)
	})
})

describe('get_new_dual_implication', () => {
	it('should return the dual implication if available', () => {
		const implication: Implication = {
			assumptions: ['binary products', 'equalizers'],
			conclusions: ['pullbacks'],
		}
		expect(get_new_dual_implication(implication)).toEqual({
			assumptions: ['binary coproducts', 'coequalizers'],
			conclusions: ['pushouts'],
		})
	})

	it('should return null for a self-dual implication', () => {
		const implication: Implication = {
			assumptions: ['abelian'],
			conclusions: ['pointed'],
		}
		expect(get_new_dual_implication(implication)).toBe(null)
	})

	it('should not preserve self-dual implications', () => {
		const implication: Implication = {
			assumptions: ['finite'],
			conclusions: ['small'],
		}
		expect(get_new_dual_implication(implication)).toBe(null)
	})

	it('should ignore the order when checking for a new implication', () => {
		const implication: Implication = {
			assumptions: ['abelian'],
			conclusions: ['finitely complete', 'finitely cocomplete'],
		}
		expect(get_new_dual_implication(implication)).toBe(null)
	})
})

describe('get_self_dual_implication', () => {
	it("should return null for properties that don't have a dual", () => {
		expect(get_self_dual_implication('cartesian closed')).toBe(null)
	})

	it('should return null for properties that are already self-dual', () => {
		expect(get_self_dual_implication('thin')).toBe(null)
	})

	it('should return the corresponding self-dual implication if available', () => {
		expect(get_self_dual_implication('complete')).toEqual({
			assumptions: ['self-dual', 'complete'],
			conclusions: ['cocomplete'],
		})
	})
})

describe('implications_with_duals', () => {
	it('should contain the existing implications', () => {
		const implication = {
			assumptions: ['small'],
			conclusions: ['locally small', 'essentially small'],
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
