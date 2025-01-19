import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import { categories_dictionary_detailed } from '$lib/categories/categories'
import { is_valid_category } from '$lib/categories/categoryIDs'

export const load: PageServerLoad = (event) => {
	const id = event.params.id
	const valid = is_valid_category(id)
	if (valid) {
		const category = categories_dictionary_detailed[id]
		return { category }
	}

	throw error(404, 'Category not found')
}
