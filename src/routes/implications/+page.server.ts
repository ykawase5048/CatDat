import { implications } from '$lib/implications/implications'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
	return {
		sorted_implications: implications.toSorted((a, b) =>
			a.assumptions[0].localeCompare(b.assumptions[0]),
		),
	}
}
