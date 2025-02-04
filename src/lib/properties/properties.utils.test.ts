import { categories } from '$lib/categories/categories'
import {
	encode_property_ID,
	decode_property_ID,
	get_dual_property,
	get_property_url,
	get_dual_properties,
	negate_prefix,
	properties_dictionary,
	property_deduction_system,
	implications_with_duals,
} from './properties.utils'

describe('properties dictionary', () => {
	it('should have consistent names', () => {
		for (const [name, property] of Object.entries(properties_dictionary)) {
			expect(name).toBe(property.id)
		}
	})
})

describe('encode_property_ID', () => {
	it("should return 'locally_small' for 'locally small'", () => {
		expect(encode_property_ID('locally small')).toBe('locally_small')
	})

	it("should return 'abelian' for 'abelian'", () => {
		expect(encode_property_ID('abelian')).toBe('abelian')
	})
})

describe('decode_property_ID', () => {
	it("should return 'locally small' for 'locally_small'", () => {
		expect(decode_property_ID('locally_small')).toBe('locally small')
	})

	it("should return 'abelian' for 'abelian'", () => {
		expect(decode_property_ID('abelian')).toBe('abelian')
	})
})

describe('get_property_url', () => {
	it("should return '/property/locally_small'", () => {
		expect(get_property_url('locally small')).toBe('/property/locally_small')
	})

	it("should return '/property/abelian'", () => {
		expect(get_property_url('abelian')).toBe('/property/abelian')
	})
})

describe('get_dual_property', () => {
	it("should return 'small' for 'small'", () => {
		expect(get_dual_property('small')).toBe('small')
	})

	it("should return 'complete' for 'cocomplete'", () => {
		expect(get_dual_property('cocomplete')).toBe('complete')
	})

	it("should return null for 'cartesian closed'", () => {
		expect(get_dual_property('cartesian closed')).toBe(null)
	})
})

describe('get_dual_properties', () => {
	it('should return null when a property has no dual', () => {
		expect(get_dual_properties(['small', 'cartesian closed'])).toBe(null)
	})

	it('should return small,complete for small,cocomplete', () => {
		expect(get_dual_properties(['small', 'cocomplete'])).toEqual([
			'small',
			'complete',
		])
	})
})

describe('negate_prefix', () => {
	it("negates 'has a' to 'does not have a'", () => {
		expect(negate_prefix('has a')).toBe('does not have a')
	})
})

describe('property_deduction_system', () => {
	for (const category of categories) {
		it(`should have no redundancy for the properties of: ${category.name}`, () => {
			const has_redundancy = property_deduction_system.check_redundancy(
				new Set(category.properties),
			)
			expect(has_redundancy).toBe(false)
		})

		it(`should have no redundancy for the non-properties of: ${category.name}`, () => {
			const has_redundancy =
				property_deduction_system.check_redundancy_of_negations(
					new Set(category.properties),
					new Set(category.non_properties),
				)
			expect(has_redundancy).toBe(false)
		})
	}
})

describe('implications_with_duals', () => {
	it('should contain the existing implications', () => {
		const implication = {
			assumptions: ['small'],
			conclusions: ['locally small', 'essentially small'],
			reason: expect.any(String),
		}
		expect(implications_with_duals).toContainEqual(implication)
	})

	it('should contain dual implications', () => {
		const implication = {
			equivalent: true,
			assumptions: ['complete'],
			conclusions: ['products', 'equalizers'],
			reason: expect.any(String),
		}
		expect(implications_with_duals).toContainEqual(implication)

		const dual_implication = {
			equivalent: true,
			assumptions: ['cocomplete'],
			conclusions: ['coproducts', 'coequalizers'],
			reason: expect.any(String),
		}
		expect(implications_with_duals).toContainEqual(dual_implication)
	})

	it('should contain basic self-dual implications (1)', () => {
		const implication = {
			assumptions: ['self-dual', 'binary products'],
			conclusions: ['binary coproducts'],
			reason: 'trivial by self-duality',
		}
		expect(implications_with_duals).toContainEqual(implication)
	})

	it('should contain basic self-dual implications (2)', () => {
		const implication = {
			assumptions: ['self-dual', 'equalizers'],
			conclusions: ['coequalizers'],
			reason: 'trivial by self-duality',
		}
		expect(implications_with_duals).toContainEqual(implication)
	})

	it('should not contain trivial self-dual implications', () => {
		const implication = {
			assumptions: ['self-dual', 'thin'],
			conclusions: ['thin'],
			reason: expect.any(String),
		}
		expect(implications_with_duals).not.toContainEqual(implication)
	})
})
