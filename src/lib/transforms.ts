import { get_deductions } from './dictionaries/deductions'
import { properties_dictionary } from './dictionaries/properties'
import type { Category, CategoryWithProperties, Property } from './types'

/**
 * Adds the actual properties (not just their names) and
 * all their deductions to a given category.
 */
export function add_properties(category: Category): CategoryWithProperties {
	const deduced_properties = Array.from(get_deductions(new Set(category.properties)))

	const actual_properties = deduced_properties.map((name) => ({
		name,
		...properties_dictionary[name],
		deduced: !category.properties.includes(name),
	}))

	// TODO: handle deduced non-properties

	const actual_non_properties = category.non_properties.map((name) => ({
		name,
		...properties_dictionary[name],
		deduced: false,
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
