import { properties } from '$lib/properties/properties'
import { categories_detailed, categories_dictionary } from './categories.dict'
import { get_all_non_properties, get_all_properties } from './details'

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
			const property_set = new Set(get_all_properties(category))
			const non_property_set = new Set(get_all_non_properties(category))
			expect(property_set.intersection(non_property_set)).toHaveLength(0)
		})
	}

	for (const property of properties) {
		it(`should have at least one counterexample for: ${property.id}`, () => {
			const counterexample = categories_detailed.find((category) =>
				get_all_non_properties(category).includes(property.id),
			)
			expect(counterexample).toBeDefined()
		})
	}

	it('should distribute all the properties', () => {
		const random_index = Math.floor(Math.random() * categories_detailed.length)
		const example_category = categories_detailed[random_index]
		const property_count =
			example_category.properties.length +
			example_category.deduced_properties.length +
			example_category.non_properties.length +
			example_category.deduced_non_properties.length +
			example_category.unknown_properties.length
		expect(property_count).toBe(properties.length)
	})
})
