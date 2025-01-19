import { properties_dictionary } from './properties/properties'
import { get_property_url, group_items, negate_prefix } from './utils'

describe('negate_prefix', () => {
	it("negates 'has a' to 'does not have a'", () => {
		expect(negate_prefix('has a')).toBe('does not have a')
	})
})

describe('get_property_url', () => {
	it("should return '/property/abelian'", () => {
		expect(get_property_url(properties_dictionary.abelian)).toBe('/property/abelian')
	})
})

describe('group_items', () => {
	it('should group items by id', () => {
		const items = [
			{ id: 'a', value: 1 },
			{ id: 'b', value: 2 },
			{ id: 'c', value: 3 },
		]
		const result = group_items(items)
		expect(result).toEqual({
			a: { id: 'a', value: 1 },
			b: { id: 'b', value: 2 },
			c: { id: 'c', value: 3 },
		})
	})

	it('should return an empty object for an empty array', () => {
		const items: { id: string; value: number }[] = []
		const result = group_items(items)
		expect(result).toEqual({})
	})
})
