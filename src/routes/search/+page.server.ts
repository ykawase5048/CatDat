import type { PageServerLoad } from './$types'
import { get_search_results } from './search'

export const load: PageServerLoad = ({ url }) => {
	return get_search_results(url)
}
