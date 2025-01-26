import type { PropertyID } from '$lib/properties/propertyIDs'
import type { Implication } from '$lib/types'
import { get_dual_property } from '$lib/properties/properties.utils'
import { properties_dictionary } from '$lib/properties/property.dict'

export function get_dual_implication(implication: Implication): Implication | null {
	const dual_implication: Implication = {
		assumptions: [],
		conclusions: [],
	}
	for (const assumption of implication.assumptions) {
		const dual_assumption = get_dual_property(assumption)
		if (!dual_assumption) return null
		dual_implication.assumptions.push(dual_assumption)
	}
	for (const conclusion of implication.conclusions) {
		const dual_conclusion = get_dual_property(conclusion)
		if (!dual_conclusion) return null
		dual_implication.conclusions.push(dual_conclusion)
	}

	if (implication.equivalent) {
		dual_implication.equivalent = true
	}

	return dual_implication
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
