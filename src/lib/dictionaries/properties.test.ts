import { prefixes } from '$lib/types'
import { properties_list } from './properties'

describe('properties of categories', () => {
	it('should have unique IDs', () => {
		const ids = properties_list.map((property) => property.id)
		expect(ids).toEqual([...new Set(ids)])
	})

	it('should have unique names', () => {
		const names = properties_list.map((property) => property.name)
		expect(names).toEqual([...new Set(names)])
	})

	it('should have names without prefixes', () => {
		const names = properties_list.map((property) => property.name)
		for (const name of names) {
			for (const prefix of prefixes) {
				expect(name.startsWith(prefix)).toBe(false)
			}
		}
	})
})
