import { get_search_results } from '$lib/data-utils/search'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = ({ url }) => {
	return get_search_results(url)
}
