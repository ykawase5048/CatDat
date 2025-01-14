import { properties_list } from './dictionaries/properties'
import { add_properties } from './transforms'
import type { Category, CategoryWithProperties } from './types'

describe('add_properties', () => {
	it('converts the property name to the whole property for each property in the category', () => {
		const sample_category: Category = {
			id: 'SC',
			name: 'Sample Category',
			objects: 'foo',
			morphisms: 'bar',
			notation: '\\SC',
			properties: ['small'],
			non_properties: ['complete'],
		}

		expect(properties_list[0].name).toBe('small')
		expect(properties_list[2].name).toBe('complete')

		const expected: CategoryWithProperties = {
			id: 'SC',
			name: 'Sample Category',
			objects: 'foo',
			morphisms: 'bar',
			notation: '\\SC',
			properties: [properties_list[0]],
			non_properties: [properties_list[2]],
		}

		expect(add_properties(sample_category)).toEqual(expected)
	})
})
