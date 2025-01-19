import { categories_dictionary, categories, categories_detailed } from './categories'
import { CATEGORY_IDs } from './categoryIDs'

describe('categories dictionary', () => {
	it('should have consistent IDs', () => {
		for (const [id, category] of Object.entries(categories_dictionary)) {
			expect(id).toBe(category.id)
		}
	})
})

describe('categories list', () => {
	it('should have unique IDs', () => {
		const ids = categories.map((category) => category.id)
		expect(ids).toEqual([...new Set(ids)])
	})

	it('should have exactly the IDs as in the list of IDs', () => {
		expect(categories.map((category) => category.id)).toEqual(CATEGORY_IDs)
	})

	it('should have unique names', () => {
		const names = categories.map((category) => category.name)
		expect(names).toEqual([...new Set(names)])
	})

	it('should have unique notations', () => {
		const notations = categories.map((category) => category.notation)
		expect(notations).toEqual([...new Set(notations)])
	})

	for (const category of categories) {
		it(`should not have duplicate properties for: ${category.name}`, () => {
			const { properties, non_properties } = category
			expect(properties).toEqual([...new Set(properties)])
			expect(non_properties).toEqual([...new Set(non_properties)])
		})
	}

	for (const category of categories) {
		it(`should not have contradictory properties for: ${category.name}`, () => {
			const { properties, non_properties } = category
			expect(new Set(properties).intersection(new Set(non_properties)).size).toBe(0)
		})
	}
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
