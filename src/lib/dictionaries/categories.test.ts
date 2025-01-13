import { categories_list } from './categories'
import { category_property_list } from './category-properties'

const property_names = category_property_list.map((p) => p.name)

describe('categories list', () => {
	it('should have unique IDs', () => {
		const ids = categories_list.map((category) => category.id)
		expect(ids).toEqual([...new Set(ids)])
	})

	it('should have unique names', () => {
		const names = categories_list.map((category) => category.name)
		expect(names).toEqual([...new Set(names)])
	})

	it('should have unique notations', () => {
		const notations = categories_list.map((category) => category.notation)
		expect(notations).toEqual([...new Set(notations)])
	})
	for (const category of categories_list) {
		it(`should not have duplicate properties for: ${category.name}`, () => {
			const { properties, non_properties } = category
			expect(properties).toEqual([...new Set(properties)])
			expect(non_properties).toEqual([...new Set(non_properties)])
		})
	}

	for (const category of categories_list) {
		it(`should not have contradictory properties for: ${category.name}`, () => {
			const { properties, non_properties } = category
			for (const property of properties) {
				expect(non_properties).not.toContain(property)
			}
			for (const non_property of non_properties) {
				expect(properties).not.toContain(non_property)
			}
		})
	}

	for (const category of categories_list) {
		it(`should have all properties for: ${category.name}`, () => {
			const answered_properties = [
				...category.properties,
				...category.non_properties,
			]
			expect(new Set(answered_properties)).toEqual(new Set(property_names))
		})
	}
})
