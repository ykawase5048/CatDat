import { categories } from '../categories/categories'
import { CATEGORY_IDs } from '../categories/categoryIDs'

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
