import { prefixes } from '$lib/types'
import { category_property_list } from './category-properties'

describe('properties of categories', () => {
	it('should have unique IDs', () => {
		const ids = category_property_list.map((property) => property.id)
		expect(ids).toEqual([...new Set(ids)])
	})

	it('should have unique names', () => {
		const names = category_property_list.map((property) => property.name)
		expect(names).toEqual([...new Set(names)])
	})

	it('should have names without prefixes', () => {
		const names = category_property_list.map((property) => property.name)
		for (const name of names) {
			for (const prefix of prefixes) {
				expect(name.startsWith(prefix)).toBe(false)
			}
		}
	})
})
