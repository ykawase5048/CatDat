import { get_deduced_non_properties, get_deductions } from './dictionaries/deductions'
import { properties, properties_dictionary } from './dictionaries/properties'
import type { Category, CategoryDetailed, Prefix, Property } from './types'

/**
 * Adds the actual properties (not just their names) and
 * all their deductions to a given category. Same with non-properties.
 */
export function add_properties(category: Category): CategoryDetailed {
	const deduced_properties = get_deductions(new Set(category.properties))

	const deduced_non_properties = get_deduced_non_properties(
		deduced_properties,
		new Set(category.non_properties),
	)

	const property_objects = Array.from(deduced_properties).map((name) => ({
		...properties_dictionary[name],
		deduced: !category.properties.includes(name),
	}))

	const non_property_objects = Array.from(deduced_non_properties).map((name) => ({
		...properties_dictionary[name],
		deduced: !category.non_properties.includes(name),
	}))

	const { properties: _, non_properties: __, ...rest } = category

	const unknown_properties = properties.filter(
		(property) =>
			!deduced_properties.has(property.name) &&
			!deduced_non_properties.has(property.name),
	)

	return {
		...rest,
		properties: property_objects,
		non_properties: non_property_objects,
		unknown_properties,
	}
}

export function get_property_url(property: Property) {
	return `/property/${property.name.replaceAll(' ', '_')}`
}

const negation_prefixes: Record<Prefix, string> = {
	'is': 'is not',
	'is a': 'is not a',
	'is an': 'is not an',
	'has': 'does not have',
	'has a': 'does not have a',
	'has an': 'does not have an',
}

export function negate_prefix(prefix: Prefix): string {
	return negation_prefixes[prefix]
}
