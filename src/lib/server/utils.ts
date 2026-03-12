import type {
	ImplicationDB,
	ImplicationDisplay,
	PropertyDB,
	PropertyDisplay,
} from '$lib/commons/types'

export function display_implication(implication: ImplicationDB): ImplicationDisplay {
	return {
		id: implication.id,
		is_equivalence: Boolean(implication.is_equivalence),
		reason: implication.reason,
		assumptions: JSON.parse(implication.assumptions),
		conclusions: JSON.parse(implication.conclusions),
	}
}

export function display_property(property: PropertyDB): PropertyDisplay {
	return {
		id: property.id,
		prefix: property.prefix,
		description: property.description,
		dual_property_id: property.dual_property_id,
		nlab_link: property.nlab_link,
		invariant_under_equivalences: Boolean(property.invariant_under_equivalences),
	}
}
