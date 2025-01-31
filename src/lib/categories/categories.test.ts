import type { PreCategory } from '$lib/commons/types'
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

	it('should have all properties in the same order', () => {
		type CategoryKey = keyof PreCategory

		const category_keys = [
			'id',
			'name',
			'notation',
			'nlab_link',
			'objects',
			'morphisms',
			'description',
			'related',
			'tags',
			'properties',
			'non_properties',
			'monomorphisms',
			'epimorphisms',
		] satisfies CategoryKey[]

		for (const category of categories) {
			const keys = Object.keys(category) as CategoryKey[]
			const sorted_keys = category_keys.filter((key) => keys.includes(key))
			expect(keys).toEqual(sorted_keys)
		}
	})
})
