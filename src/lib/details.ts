import { DeductionSystem } from '$lib/DeductionSystem'
import type { Category, CategoryDetailed } from '$lib/types'
import { implications } from './dictionaries/implications'
import {
	properties,
	properties_dictionary,
	type PropertyName,
} from './dictionaries/properties'
import { get_new_dual_implication } from './dualization'

const dual_implications = implications.map(get_new_dual_implication)

const category_deduction_system = new DeductionSystem<PropertyName>([
	...implications,
	...dual_implications.filter((impl) => impl != null),
])

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

	const property_objects = Array.from(deduced_properties).map((name) => ({
		...properties_dictionary[name],
		deduced: !category.properties.includes(name),
	}))

	const non_property_objects = Array.from(deduced_non_properties).map((name) => ({
		...properties_dictionary[name],
		deduced: !category.non_properties.includes(name),
	}))

	const { properties: _, non_properties: __, ...rest } = category

	const unknown_properties = properties.filter(
		(property) =>
			!deduced_properties.has(property.name) &&
			!deduced_non_properties.has(property.name),
	)

	return {
		...rest,
		properties: property_objects,
		non_properties: non_property_objects,
		unknown_properties,
	}
}
