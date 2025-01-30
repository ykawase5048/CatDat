import type { CategoryID } from './categoryIDs'
import type { Category, CategoryDetailed, CategoryImproved } from '$lib/commons/types'
import type { PropertyID } from '$lib/properties/propertyIDs'

import { categories } from './categories'
import { group_items } from '$lib/commons/utils'
import { property_deduction_system } from '$lib/properties/properties.utils'
import { EntitySystem } from '$lib/logic/EntitySystem'

/**
 * Converts properties and non-properties to sets.
 * This is necessary for the EntitySystem to work.
 */
function make_sets(category: Category): CategoryImproved {
	const { properties, non_properties, ...rest } = category
	return {
		...rest,
		properties: new Set<PropertyID>(properties),
		non_properties: new Set<PropertyID>(non_properties),
	}
}

export const category_system = new EntitySystem<CategoryImproved, PropertyID>(
	property_deduction_system,
	categories.map(make_sets),
)

export const categories_detailed: CategoryDetailed[] = category_system.entities

export const categories_dictionary_detailed = group_items<CategoryID, CategoryDetailed>(
	categories_detailed,
)
