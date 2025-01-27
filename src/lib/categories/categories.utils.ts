import type { CategoryID } from './categoryIDs'
import type { Category, CategoryDetailed } from '$lib/types'
import { group_items } from '$lib/utils'
import { categories } from './categories'
import { PROPERTY_IDs, type PropertyID } from '$lib/properties/propertyIDs'
import { property_deduction_system } from '$lib/properties/properties.utils'

export function get_details(category: Category): CategoryDetailed {
	const property_set = new Set(category.properties)
	const non_property_set = new Set(category.non_properties)

	const all_properties = property_deduction_system.get_deductions(property_set)

	const all_non_properties = property_deduction_system.get_deduced_negations(
		all_properties,
		non_property_set,
	)

	const deduced_properties = Array.from(
		all_properties.difference(property_set),
	).toSorted()

	const deduced_non_properties = Array.from(
		all_non_properties.difference(non_property_set),
	).toSorted()

	const unknown_properties = PROPERTY_IDs.filter(
		(property) => !all_properties.has(property) && !all_non_properties.has(property),
	).toSorted()

	return {
		...category,
		deduced_properties,
		deduced_non_properties,
		unknown_properties,
	}
}

export function get_all_properties(category: CategoryDetailed): PropertyID[] {
	return category.properties.concat(category.deduced_properties)
}

export function get_all_non_properties(category: CategoryDetailed): PropertyID[] {
	return category.non_properties.concat(category.deduced_non_properties)
}

export const categories_dictionary = group_items<CategoryID, Category>(categories)

export const categories_detailed = categories.map(get_details)

export const categories_dictionary_detailed = group_items<CategoryID, CategoryDetailed>(
	categories_detailed,
)
export const categories_with_unknown_properties = categories_detailed.filter(
	(category) => category.unknown_properties.length > 0,
)

export function get_suitable_categories(
	properties: PropertyID[],
	non_properties: PropertyID[],
): CategoryDetailed[] {
	if (properties.length === 0 && non_properties.length === 0) return []

	return categories_detailed.filter((category) => {
		const has_all_properties = properties.every(
			(property) =>
				category.properties.includes(property) ||
				category.deduced_properties.includes(property),
		)
		const has_all_non_properties = non_properties.every(
			(property) =>
				category.non_properties.includes(property) ||
				category.deduced_non_properties.includes(property),
		)
		return has_all_properties && has_all_non_properties
	})
}
