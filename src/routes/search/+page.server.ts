import { get_search_results } from '$lib/utils/search'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = ({ url }) => {
	return get_search_results(url)
}
