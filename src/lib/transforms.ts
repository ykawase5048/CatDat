import { properties_dictionary } from './dictionaries/properties'
import type { Category, CategoryWithProperties, Property } from './types'

export function add_properties(category: Category): CategoryWithProperties {
	const actual_properties = category.properties.map((name) => ({
		name,
		...properties_dictionary[name],
	}))
	const actual_non_properties = category.non_properties.map((name) => ({
		name,
		...properties_dictionary[name],
	}))
	const { properties: _, non_properties: __, ...rest } = category
	return {
		...rest,
		properties: actual_properties,
		non_properties: actual_non_properties,
	}
}

export function get_property_url(property: Property) {
	return `/property/${property.name.replaceAll(' ', '_')}`
}
