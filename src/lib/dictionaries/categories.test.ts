import { categories_dictionary } from './categories'

describe('categories dictionary', () => {
	it('should not have duplicate properties per category', () => {
		const categories = Object.values(categories_dictionary)
		for (const category of categories) {
			const { properties, non_properties } = category
			expect(properties).toEqual([...new Set(properties)])
			expect(non_properties).toEqual([...new Set(non_properties)])
		}
	})
})
