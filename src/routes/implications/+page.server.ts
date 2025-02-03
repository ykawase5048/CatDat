import { render_formulas_in_object } from '$lib/commons/rendering'
import { implications } from '$lib/implications/implications'
import { implications_with_duals } from '$lib/properties/properties.utils'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = (event) => {
	const show_all_implications = event.url.searchParams.has('show_all')

	const implications_to_show = show_all_implications
		? implications_with_duals
		: implications

	return {
		implications: implications_to_show
			.toSorted((a, b) => a.assumptions[0].localeCompare(b.assumptions[0]))
			.map(render_formulas_in_object),
		show_all_implications,
	}
}
