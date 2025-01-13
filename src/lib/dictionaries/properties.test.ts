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

	it('should list dual properties mutually', () => {
		for (const property of properties_list) {
			if (!('dual' in property)) continue
			const dual_property = properties_list.find((p) => p.id === property.dual)
			expect(dual_property && 'dual' in dual_property).toBe(true)
			expect(dual_property?.dual).toBe(property.id)
		}
	})
})
