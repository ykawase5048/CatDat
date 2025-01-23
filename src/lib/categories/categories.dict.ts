import type { CategoryID } from './categoryIDs'
import type { Category, CategoryDetailed } from '$lib/types'
import { add_details } from '$lib/categories/details'
import { group_items } from '$lib/utils'
import { categories } from './categories'

export const categories_dictionary = group_items<CategoryID, Category>(categories)

export const categories_detailed = categories.map(add_details)

export const categories_dictionary_detailed = group_items<CategoryID, CategoryDetailed>(
	categories_detailed,
)
export const categories_with_unknown_properties = categories_detailed.filter(
	(category) => category.unknown_properties.length > 0,
)
