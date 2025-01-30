import type { CategoryID } from './categoryIDs'
import type { Category } from '$lib/commons/types'
import { group_items } from '$lib/commons/utils'
import { categories } from './categories'
import { type PropertyID } from '$lib/properties/propertyIDs'
import { property_deduction_system } from '$lib/properties/properties.utils'
import { EntitySystem, type EntityWithAllProperties } from '$lib/logic/EntitySystem'

export type CategoryDetailed = EntityWithAllProperties<Category, PropertyID>

export const category_system = new EntitySystem<Category, PropertyID>(
	property_deduction_system,
	categories as Category[],
)

export const categories_detailed: CategoryDetailed[] = category_system.entities

export const categories_dictionary_detailed = group_items<CategoryID, CategoryDetailed>(
	categories_detailed,
)
