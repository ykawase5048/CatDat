import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'

import {
	categories_dictionary_detailed,
	category_system,
} from '$lib/categories/categories.utils'
import { is_valid_category } from '$lib/categories/categoryIDs'

export const load: PageServerLoad = (event) => {
	const id_1 = event.params.id1
	const id_2 = event.params.id2

	const is_valid = is_valid_category(id_1) && is_valid_category(id_2)

	if (!is_valid) throw error(404, 'Invalid query')

	const category_1 = categories_dictionary_detailed[id_1]
	const category_2 = categories_dictionary_detailed[id_2]

	const comparison_result = category_system.get_comparison(category_1, category_2)

	if (!comparison_result) {
		return error(404, 'Invalid query')
	}

	return {
		category_1: { id: id_1, name: category_1.name },
		category_2: { id: id_2, name: category_2.name },
		comparison_result,
	}
}
