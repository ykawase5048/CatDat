import { prefixes, type Property } from '$lib/types'
import { properties, properties_dictionary } from './properties'

describe('properties dictionary', () => {
	it('should have consistent names', () => {
		for (const [name, property] of Object.entries(properties_dictionary)) {
			expect(name).toBe(property.name)
		}
	})
})

describe('properties of categories', () => {
	it('should have unique names', () => {
		const names = properties.map((property) => property.name)
		expect(names).toEqual([...new Set(names)])
	})

	it('should have names without prefixes', () => {
		const names = properties.map((property) => property.name)
		for (const name of names) {
			for (const prefix of prefixes) {
				expect(name.startsWith(prefix)).toBe(false)
			}
		}
	})

	it('should list dual properties mutually', () => {
		for (const property of properties) {
			if ('dual' in property) {
				const dual_property = properties.find((p) => p.name === property.dual)
				expect(dual_property).toBeDefined()
				expect('dual' in (dual_property as Property)).toBe(true)
				expect((dual_property as Property).dual).toBe(property.name)
			}
		}
	})

	it('should only list related properties that exist in the list', () => {
		for (const property of properties) {
			if ('related' in property) {
				for (const related of property.related) {
					expect(properties.some((p) => p.name === related)).toBe(true)
				}
			}
		}
	})
})
