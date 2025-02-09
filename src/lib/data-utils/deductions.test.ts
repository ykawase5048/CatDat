import { CATEGORIES, type CategoryID } from '$lib/database/categories.data'
import { PROPERTIES, type PropertyID } from '$lib/database/properties.data'
import {
	get_non_properties_of_category,
	get_properties_of_category,
} from './data.helpers'
import {
	categories_with_deduced_properties,
	implications_with_duals,
	property_deduction_system,
} from './deductions'

describe('property_deduction_system', () => {
	const redundancy_exceptions: [CategoryID, PropertyID][] = [
		['FreeAb', 'equalizers'],
		['Zdiv', 'products'],
	]

	for (const category of CATEGORIES) {
		const properties = get_properties_of_category(category.id)
		const non_properties = get_non_properties_of_category(category.id)

		it(`should have no redundancy for the properties of: ${category.name}`, () => {
			const redundancy = property_deduction_system.get_redundancy(
				new Set(properties),
			)
			const is_exception = redundancy_exceptions.some(
				(entry) => entry[0] === category.id && entry[1] === redundancy,
			)
			if (!is_exception) {
				expect(redundancy).toBe(null)
			}
		})

		it(`should have no redundancy for the non-properties of: ${category.name}`, () => {
			const redundancy = property_deduction_system.get_redundancy_of_negations(
				new Set(properties),
				new Set(non_properties),
			)
			expect(redundancy).toBe(null)
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

describe('categories with deduced properties', () => {
	for (const category of categories_with_deduced_properties) {
		it(`should not have any contradictory properties for: ${category.id}`, () => {
			const property_set = category.all_properties
			const non_property_set = category.all_non_properties
			expect(property_set.intersection(non_property_set)).toHaveLength(0)
		})
	}

	for (const property of PROPERTIES) {
		it(`should have at least one counterexample for: ${property.id}`, () => {
			const counterexample = categories_with_deduced_properties.find((category) =>
				category.all_non_properties.has(property.id),
			)
			expect(counterexample).toBeDefined()
		})
	}
})
