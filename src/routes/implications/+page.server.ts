import { render_formulas_in_object } from '$lib/commons/rendering'
import { implications, type Implication } from '$lib/data/implications.data'
import { implications_with_duals } from '$lib/utils/deductions'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = (event) => {
	const show_all_implications = event.url.searchParams.has('show_all')

	// TODO: remove the typecast later
	const implications_to_show: Implication[] = show_all_implications
		? implications_with_duals
		: Array.from(implications)

	const sorted_implications = implications_to_show.toSorted((a, b) =>
		a.assumptions[0].localeCompare(b.assumptions[0]),
	)

	const rendered_implications = sorted_implications.map(render_formulas_in_object)

	return {
		implications: rendered_implications,
		show_all_implications,
	}
}
