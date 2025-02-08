import { group_items } from '$lib/commons/utils'
import { CATEGORIES, type Category, type CategoryID } from '$lib/database/categories.data'
import { CATEGORY_EPIMORPHISMS } from '$lib/database/category-epimorphisms.data'
import { CATEGORY_ISOMORPHISMS } from '$lib/database/category-isomorphisms.data'
import { CATEGORY_MONOMORPHISMS } from '$lib/database/category-monomorphisms.data'
import { CATEGORY_NON_PROPERTIES } from '$lib/database/category-non-properties.data'
import { CATEGORY_PROPERTIES } from '$lib/database/category-properties.data'
import { PREFIXES, type Prefix } from '$lib/database/prefix.data'
import { PROPERTIES, type Property, type PropertyID } from '$lib/database/properties.data'
import { PROPERTY_DUALS } from '$lib/database/property-duals.data'

export const propertyIDs = PROPERTIES.map((property) => property.id)
export const categoryIDs = CATEGORIES.map((category) => category.id)

export type CategorySimple = Pick<Category, 'id' | 'name'>

const properties_dictionary: Record<PropertyID, Property> = group_items(PROPERTIES)
const categories_dictionary: Record<CategoryID, Category> = group_items(CATEGORIES)

export function get_category(id: CategoryID): Category {
	return categories_dictionary[id]
}

export function get_property(id: PropertyID): Property {
	return properties_dictionary[id]
}

export function is_valid_category(id: string): id is CategoryID {
	return id in categories_dictionary
}

export function is_valid_property(id: string): id is PropertyID {
	return (propertyIDs as string[]).includes(id)
}

export function get_monos(id: CategoryID) {
	const entry = CATEGORY_MONOMORPHISMS[id]
	return { description: entry[0], reason: entry[1] }
}

export function get_epis(id: CategoryID) {
	const entry = CATEGORY_EPIMORPHISMS[id]
	return { description: entry[0], reason: entry[1] }
}

export function get_isos(id: CategoryID) {
	const entry = CATEGORY_ISOMORPHISMS[id]
	return { description: entry[0], reason: entry[1] }
}

export function negate_prefix(prefix: Prefix) {
	return PREFIXES[prefix]
}

export function get_properties_of_category(id: CategoryID): PropertyID[] {
	return CATEGORY_PROPERTIES[id].map((entry) => entry[0])
}

export function get_non_properties_of_category(id: CategoryID): PropertyID[] {
	return CATEGORY_NON_PROPERTIES[id].map((entry) => entry[0])
}

export function get_dual_property(id: PropertyID): null | PropertyID {
	return PROPERTY_DUALS[id]
}

export function get_dual_properties(ids: PropertyID[]): null | PropertyID[] {
	const duals = ids.map(get_dual_property)
	if (duals.includes(null)) return null
	return duals as PropertyID[]
}
