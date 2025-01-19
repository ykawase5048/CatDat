import { add_details } from '$lib/details'
import type { Category, CategoryDetailed } from '$lib/types'
import { categories } from './categories'
import type { CategoryID } from './categoryIDs'

export const categories_dictionary = categories.reduce(
	(acc, category) => ({ ...acc, [category.id]: category }),
	{} as const,
) as Record<CategoryID, Category>

export const categories_dictionary_detailed = categories.reduce(
	(acc, category) => ({ ...acc, [category.id]: add_details(category) }),
	{},
) as Record<CategoryID, CategoryDetailed>

export const categories_detailed = categories.map(add_details)
