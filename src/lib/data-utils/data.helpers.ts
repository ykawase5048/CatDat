import { group_items, select } from '$lib/commons/utils'
import {
	CATEGORIES,
	type Category,
	type CategoryID,
} from '$lib/database/categories/categories.data'
import { CATEGORY_NON_PROPERTIES } from '$lib/database/categories/category-non-properties.data'
import { CATEGORY_PROPERTIES } from '$lib/database/categories/category-properties.data'
import { CATEGORY_RELATIONS } from '$lib/database/categories/category-relations.data'
import { CATEGORY_TAGS } from '$lib/database/categories/category-tags.data'
import { PREFIXES, type Prefix } from '$lib/database/categories/prefix.data'
import {
	PROPERTIES,
	type Property,
	type PropertyID,
} from '$lib/database/categories/properties.data'
import { PROPERTY_DUALS } from '$lib/database/categories/property-duals.data'
import {
	MORPHISM_TYPES,
	type MorphismType,
	type MorphismTypeID,
} from '$lib/database/morphisms/morphism-types.data'

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

export function get_prefix(id: PropertyID): Prefix {
	return properties_dictionary[id].prefix
}

export function get_properties(id: CategoryID) {
	return CATEGORY_PROPERTIES[id].map((property) => ({
		...property,
		prefix: get_prefix(property.id),
	}))
}

export function get_non_properties(id: CategoryID) {
	return CATEGORY_NON_PROPERTIES[id].map((property) => ({
		...property,
		prefix: get_prefix(property.id),
	}))
}

export function is_valid_category(id: string): id is CategoryID {
	return id in categories_dictionary
}

export function is_valid_property(id: string): id is PropertyID {
	return id in properties_dictionary
}

export function negate_prefix(prefix: Prefix) {
	return PREFIXES[prefix]
}

export function get_related_categories(id: CategoryID) {
	return select('id', 'name', 'notation').from(CATEGORY_RELATIONS[id].map(get_category))
}

export function get_dual_property(id: PropertyID): null | PropertyID {
	return PROPERTY_DUALS[id]
}

export function get_dual_properties(ids: PropertyID[]): null | PropertyID[] {
	const duals = ids.map(get_dual_property)
	if (duals.includes(null)) return null
	return duals as PropertyID[]
}

export function get_tags(id: CategoryID): string[] {
	return CATEGORY_TAGS[id]
}

export function get_categories_with_tag(tag: string | null): CategorySimple[] {
	const categories = select('id', 'name').from(CATEGORIES)
	if (!tag) return categories
	return categories.filter(({ id }) => get_tags(id).includes(tag))
}

// export function get_morphism(id: MorphismTypeID): MorphismType {
// 	return MORPHISM_TYPES.find((m) => m.id == id)!
// }

// export function get_dual_morphism(id: MorphismTypeID): MorphismTypeID {
// 	return get_morphism(id).dual
// }
