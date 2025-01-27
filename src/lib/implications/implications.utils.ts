import type { PropertyID } from '$lib/properties/propertyIDs'
import type { Implication } from '$lib/types'
import {
	get_dual_properties,
	get_dual_property,
	properties_dictionary,
} from '$lib/properties/properties.utils'
import { implications } from './implications'
import { properties } from '$lib/properties/properties'

export function get_dual_implication(implication: Implication): Implication | null {
	const dual_assumptions = get_dual_properties(implication.assumptions)
	if (!dual_assumptions) return null

	const dual_conclusions = get_dual_properties(implication.conclusions)
	if (!dual_conclusions) return null

	return {
		assumptions: dual_assumptions,
		conclusions: dual_conclusions,
		equivalent: implication.equivalent,
	}
}

export function get_new_dual_implication(implication: Implication): Implication | null {
	const dual_implication = get_dual_implication(implication)
	if (!dual_implication) return null
	const is_the_same =
		implication.assumptions.toSorted().join(',') ===
			dual_implication.assumptions.toSorted().join(',') &&
		implication.conclusions.toSorted().join(',') ===
			dual_implication.conclusions.toSorted().join(',')
	if (is_the_same) return null
	return dual_implication
}

export function get_self_dual_implication(property: PropertyID): null | Implication {
	const property_data = properties_dictionary[property]
	if (property_data.invariant_under_equivalences === false) return null

	const dual_property = get_dual_property(property)
	if (!dual_property) return null
	if (dual_property === property) return null

	return {
		assumptions: ['self-dual', property],
		conclusions: [dual_property],
	}
}

export const implications_with_duals: Implication[] = [
	...implications,
	...implications.map(get_new_dual_implication),
	...properties.map((property) => get_self_dual_implication(property.id)),
].filter((implication) => implication != null)
