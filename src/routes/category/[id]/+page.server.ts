export const prerender = true

import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import { add_properties } from '$lib/transforms'
import { categories_list } from '$lib/dictionaries/categories'
import { render_formula } from '$lib/render'

export const load: PageServerLoad = (event) => {
	const id = event.params.id
	const category = categories_list.find((category) => category.id.toString() === id)
	if (!category) return error(404, 'Category not found')
	const formula = render_formula(category.notation, false)
	const category_with_properties = add_properties(category)
	return { category: category_with_properties, formula }
}
