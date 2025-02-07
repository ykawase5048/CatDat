import { select } from '$lib/commons/utils'
import { categories } from '$lib/data/categories.data'
import type { PageServerLoad } from '../missing/$types'

export const load: PageServerLoad = () => {
	return { categories: select(categories, ['id', 'name']) }
}
