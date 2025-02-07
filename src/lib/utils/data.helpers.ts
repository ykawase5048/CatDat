import { group_items } from '$lib/commons/utils'
import { categories, type Category, type CategoryID } from '$lib/data/categories.data'
import { category_non_properties } from '$lib/data/category-non-properties.data'
import { category_properties } from '$lib/data/category-properties.data'
import { PREFIXES, type Prefix } from '$lib/data/prefix.data'
import { properties, type Property, type PropertyID } from '$lib/data/properties.data'
import { property_duals } from '$lib/data/property-duals.data'

export const propertyIDs = properties.map((property) => property.id)

const categoryIDs = categories.map((category) => category.id)

export const properties_dictionary: Record<PropertyID, Property> = group_items(properties)

export const categories_dictionary: Record<CategoryID, Category> = group_items(categories)

export function negate_prefix(prefix: Prefix) {
	return PREFIXES[prefix]
}

export function is_valid_category(id: string): id is CategoryID {
	return (categoryIDs as readonly string[]).includes(id)
}

export function is_valid_property(id: string): id is PropertyID {
	return (propertyIDs as readonly string[]).includes(id)
}

export function get_properties_of_category(id: CategoryID): PropertyID[] {
	return category_properties
		.filter((entry) => entry.category === id)
		.map((entry) => entry.property)
}

export function get_non_properties_of_category(id: CategoryID): PropertyID[] {
	return category_non_properties
		.filter((entry) => entry.category === id)
		.map((entry) => entry.property)
}

export function get_dual_property(id: PropertyID): null | PropertyID {
	return property_duals[id] ?? null
}

export function get_dual_properties(ids: PropertyID[]): null | PropertyID[] {
	const duals = ids.map(get_dual_property)
	if (duals.includes(null)) return null
	return duals as PropertyID[]
}
