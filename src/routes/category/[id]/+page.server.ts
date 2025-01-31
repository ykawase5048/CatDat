import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import { is_valid_category } from '$lib/categories/categoryIDs'
import { categories_dictionary_detailed } from '$lib/categories/categories.utils'
import { render_formulas_in_object } from '$lib/commons/rendering'
import type { RelatedCategory } from '$lib/commons/types'

export const load: PageServerLoad = (event) => {
	const id = event.params.id
	const valid = is_valid_category(id)

	if (!valid) return error(404, 'Category not found')

	const category = categories_dictionary_detailed[id]

	const related_categories: RelatedCategory[] | undefined = category.related
		? category.related.map((related_id) => ({
				id: related_id,
				name: categories_dictionary_detailed[related_id].name,
			}))
		: undefined

	return {
		category: render_formulas_in_object(category, [
			'name',
			'notation',
			'description',
			'objects',
			'morphisms',
			'monomorphisms',
			'epimorphisms',
		]),
		related_categories,
	}
}
