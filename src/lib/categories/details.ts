import type { PropertyID } from '$lib/properties/propertyIDs'
import type { Category, CategoryDetailed } from '$lib/types'

import { DeductionSystem } from '$lib/DeductionSystem'
import { implications_with_duals } from '$lib/implications/implications.duals'
import { properties_dictionary } from '$lib/properties/property.dict'
import { properties } from '../properties/properties'

export const category_deduction_system = new DeductionSystem<PropertyID>(
	implications_with_duals,
)

/**
 * Adds the actual properties (not just their names) and
 * all their deductions to a given category. Same with non-properties.
 */
export function add_details(category: Category): CategoryDetailed {
	const deduced_properties = category_deduction_system.get_deductions(
		new Set(category.properties),
	)

	const deduced_non_properties = category_deduction_system.get_deduced_negations(
		deduced_properties,
		new Set(category.non_properties),
	)

	const property_objects = Array.from(deduced_properties)
		.map((name) => ({
			...properties_dictionary[name],
			deduced: !category.properties.includes(name),
		}))
		.toSorted((p, q) => p.id.localeCompare(q.id))

	const non_property_objects = Array.from(deduced_non_properties)
		.map((name) => ({
			...properties_dictionary[name],
			deduced: !category.non_properties.includes(name),
		}))
		.toSorted((p, q) => p.id.localeCompare(q.id))

	const { properties: _, non_properties: __, ...rest } = category

	const unknown_properties = properties
		.filter(
			(property) =>
				!deduced_properties.has(property.id) &&
				!deduced_non_properties.has(property.id),
		)
		.toSorted((p, q) => p.id.localeCompare(q.id))

	return {
		...rest,
		properties: property_objects,
		non_properties: non_property_objects,
		unknown_properties,
	}
}
