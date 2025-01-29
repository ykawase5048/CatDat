import { properties } from '$lib/properties/properties'
import { categories_detailed, categories_dictionary } from './categories.utils'

describe('categories dictionary', () => {
	it('should have consistent IDs', () => {
		for (const [id, category] of Object.entries(categories_dictionary)) {
			expect(id).toBe(category.id)
		}
	})
})

describe('categories detailed', () => {
	for (const category of categories_detailed) {
		it(`should not have contradictory properties for: ${category.name}`, () => {
			const property_set = new Set(category.all_properties)
			const non_property_set = new Set(category.non_properties)
			expect(property_set.intersection(non_property_set)).toHaveLength(0)
		})
	}

	for (const property of properties) {
		it(`should have at least one counterexample for: ${property.id}`, () => {
			const counterexample = categories_detailed.find((category) =>
				category.all_non_properties.includes(property.id),
			)
			expect(counterexample).toBeDefined()
		})
	}
})
