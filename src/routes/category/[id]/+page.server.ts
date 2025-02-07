import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import { render_formulas_in_object } from '$lib/commons/rendering'
import { type CategoryID } from '$lib/data/categories.data'
import { category_relations } from '$lib/data/category-relations.data'
import {
	categories_dictionary,
	is_valid_category,
	properties_dictionary,
} from '$lib/utils/data.helpers'
import { select } from '$lib/commons/utils'
import { category_tags } from '$lib/data/category-tags.data'
import { category_monomorphisms } from '$lib/data/category-monomorphisms.data'
import { category_epimorphisms } from '$lib/data/category-epimorphisms.data'
import { category_isomorphisms } from '$lib/data/category-isomorphisms.data'
import { categories_with_deduced_properties_dictionary } from '$lib/utils/deductions'

export const load: PageServerLoad = (event) => {
	const id = event.params.id

	const is_valid = is_valid_category(id)
	if (!is_valid) return error(404, 'Invalid category ID')

	const category = categories_dictionary[id]
	const tags = category_tags[id]

	const related_category_ids = category_relations[id] ?? []

	const related_categories = select(
		related_category_ids.map((related_id) => categories_dictionary[related_id]),
		['id', 'name'],
	)

	const deductions = categories_with_deduced_properties_dictionary[id]

	const isomorphisms = category_isomorphisms[id as CategoryID]
	const monomorphisms = category_monomorphisms[id as CategoryID]
	const epimorphisms = category_epimorphisms[id as CategoryID]

	return {
		category: render_formulas_in_object(category),
		tags,
		related_categories,
		properties: Array.from(deductions.properties).map(
			(property) => properties_dictionary[property],
		),
		non_properties: Array.from(deductions.non_properties).map(
			(property) => properties_dictionary[property],
		),
		deduced_properties: Array.from(deductions.deduced_properties).map(
			(property) => properties_dictionary[property],
		),
		deduced_non_properties: Array.from(deductions.deduced_non_properties).map(
			(property) => properties_dictionary[property],
		),
		unknown_properties: Array.from(deductions.unknown_properties).map(
			(property) => properties_dictionary[property],
		),
		all_properties: Array.from(deductions.all_properties).map(
			(property) => properties_dictionary[property],
		),
		all_non_properties: Array.from(deductions.all_non_properties).map(
			(property) => properties_dictionary[property],
		),
		isomorphisms,
		monomorphisms,
		epimorphisms,
	}
}
