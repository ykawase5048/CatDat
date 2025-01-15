import type { NormalizedImplication } from '$lib/types'
import { implications } from './implications'

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
