import type {
	ImplicationDB,
	ImplicationDisplay,
	PropertyDB,
	PropertyDisplay,
} from '$lib/commons/types'

export function is_object(obj: unknown): obj is Record<string, unknown> {
	return obj != null && obj.constructor.name === 'Object'
}

export function are_equal_sets<T>(a: Set<T>, b: Set<T>) {
	return a.size === b.size && a.isSubsetOf(b)
}

export const sleep = (delay: number) => new Promise<void>((res) => setTimeout(res, delay))

export function display_implication(implication: ImplicationDB): ImplicationDisplay {
	return {
		id: implication.id,
		is_equivalence: Boolean(implication.is_equivalence),
		reason: implication.reason,
		is_deduced: Boolean(implication.is_deduced),
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
