import { PREFIX_CONFIG } from './properties.utils'
import { properties } from './properties'
import type { Property } from '$lib/commons/types'

describe('properties of categories', () => {
	it('should have unique names', () => {
		const names = properties.map((property) => property.id)
		expect(names).toEqual([...new Set(names)])
	})

	it('should have names without prefixes', () => {
		const names = properties.map((property) => property.id)
		for (const name of names) {
			for (const prefix in PREFIX_CONFIG) {
				expect(name.startsWith(prefix)).toBe(false)
			}
		}
	})

	it('should list dual properties mutually', () => {
		for (const property of properties) {
			if ('dual' in property) {
				const dual_property = properties.find((p) => p.id === property.dual)
				assert(dual_property !== undefined)
				expect(dual_property).toHaveProperty('dual')
				expect(dual_property.dual).toBe(property.id)
			}
		}
	})
	it('should have all properties in the same order', () => {
		type PropertyKey = keyof Property

		const property_keys = [
			'id',
			'prefix',
			'nlab_link',
			'description',
			'dual',
			'related',
			'invariant_under_equivalences',
		] satisfies PropertyKey[]

		for (const property of properties) {
			const keys = Object.keys(property)
			const sorted_keys = property_keys.filter((key) => keys.includes(key))
			expect(keys).toEqual(sorted_keys)
		}
	})
})
