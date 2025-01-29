import type { PageServerLoad } from './$types'
import { category_system } from '$lib/categories/categories.utils'

export const load: PageServerLoad = () => {
	const { missing_basic_combinations } = category_system
	return { missing_basic_combinations }
}
