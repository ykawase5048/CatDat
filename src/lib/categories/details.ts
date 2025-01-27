import { PROPERTY_IDs, type PropertyID } from '$lib/properties/propertyIDs'
import type { Category, CategoryDetailed } from '$lib/types'
import { DeductionSystem } from '$lib/DeductionSystem'
import { implications_with_duals } from '$lib/implications/implications.duals'

export const category_deduction_system = new DeductionSystem<PropertyID>(
	implications_with_duals,
)

export function add_details(category: Category): CategoryDetailed {
	const property_set = new Set(category.properties)
	const non_property_set = new Set(category.non_properties)

	const all_properties = category_deduction_system.get_deductions(property_set)

	const all_non_properties = category_deduction_system.get_deduced_negations(
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
