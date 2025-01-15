import type { NormalizedImplication } from '$lib/types'

import { implications } from './implications'
import { properties, type PropertyName } from './properties'

/**
 * Converts implications of the form [p1,...,ps] ---> [q1,...,qt] to
 * implications of the form {p1,....,ps} ---> q.
 * Also takes into account reversible implications.
 */
function get_normalized_implications(): NormalizedImplication[] {
	const normalized_implications: NormalizedImplication[] = []

	for (const { conclusions, assumptions, equivalent } of implications) {
		for (const conclusion of conclusions) {
			normalized_implications.push({
				assumptions: new Set(assumptions),
				conclusion,
			})
		}

		if (equivalent) {
			for (const assumption of assumptions) {
				normalized_implications.push({
					assumptions: new Set(conclusions),
					conclusion: assumption,
				})
			}
		}
	}
	return normalized_implications
}

export const normalized_implications = get_normalized_implications()

/**
 * A deduction is an iterated implication using some of the assumptions.
 * For example: Given implications p -> q,q' and q -> r, then r is a deduction of p.
 */
export function get_deductions(assumptions: Set<PropertyName>): Set<PropertyName> {
	let done = false
	const deductions: Set<PropertyName> = assumptions

	while (!done) {
		done = true
		for (const implication of normalized_implications) {
			const found =
				implication.assumptions.isSubsetOf(deductions) &&
				!deductions.has(implication.conclusion)
			if (found) {
				done = false
				deductions.add(implication.conclusion)
			}
		}
	}

	return deductions
}

/**
 * Given some assumed properties p1,...,ps and some negated properties
 * 'not q1',..., 'not qr', determines all negated properties 'not q' that follow.
 */
export function get_deduced_non_properties(
	assumptions: Set<PropertyName>,
	non_properties: Set<PropertyName>,
): Set<PropertyName> {
	let done = false
	const deduced_non_properties: Set<PropertyName> = non_properties

	while (!done) {
		done = true
		for (const property of properties) {
			const new_assumptions = new Set([...assumptions, property.name])
			const new_deductions = get_deductions(new_assumptions)
			const has_contradiction =
				new_deductions.intersection(deduced_non_properties).size > 0
			const is_new = !deduced_non_properties.has(property.name)
			if (has_contradiction && is_new) {
				done = false
				deduced_non_properties.add(property.name)
			}
		}
	}
	return deduced_non_properties
}
