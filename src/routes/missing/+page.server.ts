import type { PageServerLoad } from './$types'
import { category_system } from '$lib/categories/categories.utils'

export const load: PageServerLoad = () => {
	const {
		missing_basic_combinations,
		entities_with_unknown_properties: categories_with_unknown_properties,
	} = category_system

	return {
		missing_basic_combinations,
		categories_with_unknown_properties,
	}
}
