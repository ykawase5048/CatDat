import { categories_detailed } from '$lib/categories/categories'
import type { PropertyName } from '$lib/dictionaries/properties'

export function get_suitable_categories(
	properties: PropertyName[],
	non_properties: PropertyName[],
) {
	if (properties.length === 0 && non_properties.length === 0) return []

	return categories_detailed.filter((category) => {
		const has_all_properties = properties.every((property) =>
			category.properties.some((prop) => prop.name === property),
		)
		const has_no_non_properties = non_properties.every(
			(property) => !category.properties.some((prop) => prop.name === property),
		)
		return has_all_properties && has_no_non_properties
	})
}
