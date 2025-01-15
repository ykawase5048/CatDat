import type { NormalizedImplication } from '$lib/types'

import { isSubset } from '$lib/utils'
import { implications } from './implications'
import type { PropertyName } from './properties'

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
				isSubset(implication.assumptions, deductions) &&
				!deductions.has(implication.conclusion)
			if (found) {
				done = false
				deductions.add(implication.conclusion)
			}
		}
	}

	return deductions
}
