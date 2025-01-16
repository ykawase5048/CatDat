import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import {
	categories_dictionary_detailed,
	type CategoryID,
} from '$lib/dictionaries/categories'
import { render_formula } from '$lib/render'
import type { CategoryDetailed } from '$lib/types'

export const load: PageServerLoad = (event) => {
	const id = event.params.id

	const category: CategoryDetailed | undefined =
		categories_dictionary_detailed[id as CategoryID]

	if (!category) throw error(404, 'Category not found')

	const formula = render_formula(category.notation, false)

	return { category, formula }
}
