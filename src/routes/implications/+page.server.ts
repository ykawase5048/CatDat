import { render_nested_formulas } from '$lib/commons/rendering'
import { IMPLICATIONS, type Implication } from '$lib/database/implications.data'
import { implications_with_duals } from '$lib/data-utils/deductions'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = (event) => {
	const show_all_implications = event.url.searchParams.has('show_all')

	const implications_to_show: Implication[] = show_all_implications
		? implications_with_duals
		: Array.from(IMPLICATIONS)

	const sorted_implications = implications_to_show.toSorted((a, b) =>
		a.assumptions[0].localeCompare(b.assumptions[0]),
	)

	const rendered_implications = sorted_implications.map(render_nested_formulas)

	return {
		implications: rendered_implications,
		show_all_implications,
	}
}
