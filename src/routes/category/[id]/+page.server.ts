import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import { render_formulas_in_object } from '$lib/commons/rendering'
import { CATEGORY_RELATIONS } from '$lib/database/category-relations.data'
import {
	get_category,
	get_epis,
	get_isos,
	get_monos,
	get_property,
	is_valid_category,
} from '$lib/data-utils/data.helpers'
import { select } from '$lib/commons/utils'
import { CATEGORY_TAGS } from '$lib/database/category-tags.data'
import { categories_with_deduced_properties_dictionary } from '$lib/data-utils/deductions'

export const load: PageServerLoad = (event) => {
	const id = event.params.id

	const is_valid = is_valid_category(id)
	if (!is_valid) return error(404, 'Invalid category ID')

	const category = get_category(id)
	const tags = CATEGORY_TAGS[id]

	const related_category_ids = CATEGORY_RELATIONS[id] ?? []

	const related_categories = select(related_category_ids.map(get_category), [
		'id',
		'name',
	])

	const deductions = categories_with_deduced_properties_dictionary[id]

	const isomorphisms = render_formulas_in_object(get_monos(id))
	const monomorphisms = render_formulas_in_object(get_epis(id))
	const epimorphisms = render_formulas_in_object(get_isos(id))

	return {
		category: render_formulas_in_object(category),
		tags,
		related_categories,
		properties: Array.from(deductions.properties).map(get_property),
		non_properties: Array.from(deductions.non_properties).map(get_property),
		deduced_properties: Array.from(deductions.deduced_properties).map(get_property),
		deduced_non_properties: Array.from(deductions.deduced_non_properties).map(
			get_property,
		),
		unknown_properties: Array.from(deductions.unknown_properties).map(get_property),
		all_properties: Array.from(deductions.all_properties).map(get_property),
		all_non_properties: Array.from(deductions.all_non_properties).map(get_property),
		isomorphisms,
		monomorphisms,
		epimorphisms,
	}
}
