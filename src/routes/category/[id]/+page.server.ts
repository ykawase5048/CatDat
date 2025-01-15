import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import { add_properties } from '$lib/transforms'
import { categories_dictionary, type CategoryID } from '$lib/dictionaries/categories'
import { render_formula } from '$lib/render'
import type { Category } from '$lib/types'

export const load: PageServerLoad = (event) => {
	const id = event.params.id

	const category: Category | undefined = categories_dictionary[id as CategoryID]

	if (!category) throw error(404, 'Category not found')

	const formula = render_formula(category.notation, false)
	const category_with_properties = add_properties(category)

	return { category: category_with_properties, formula }
}
