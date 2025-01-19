import { categories_detailed, categories_dictionary } from './categories.details'

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
			const { properties, non_properties } = category
			const property_names = new Set(properties.map((x) => x.name))
			const non_property_names = new Set(non_properties.map((x) => x.name))
			expect(property_names.intersection(non_property_names).size).toBe(0)
		})
	}
})
