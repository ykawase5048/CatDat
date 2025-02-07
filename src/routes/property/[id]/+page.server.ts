import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import { render_formulas_in_object } from '$lib/commons/rendering'
import { property_relations } from '$lib/data/property-relations.data'
import { property_duals } from '$lib/data/property-duals.data'
import { decode_property_ID } from '$lib/commons/property.url'
import {
	categories_dictionary,
	is_valid_property,
	properties_dictionary,
} from '$lib/utils/data.helpers'
import { category_system, property_deduction_system } from '$lib/utils/deductions'
import type { CategoryID } from '$lib/data/categories.data'

export const load: PageServerLoad = (event) => {
	const id = decode_property_ID(event.params.id)

	const is_valid = is_valid_property(id)
	if (!is_valid) return error(404, 'Property not found')

	const property = properties_dictionary[id]
	const dual_property = property_duals[id] ?? null
	const related_properties = property_relations[id] ?? []

	const categories_with_this_property = category_system
		.search([id], [])
		.map((result) => categories_dictionary[result.id as CategoryID])

	const categories_without_this_property = category_system
		.search([], [id])
		.map((result) => categories_dictionary[result.id as CategoryID])

	const unknown_categories = category_system
		.search([], [], [id])
		.map((result) => categories_dictionary[result.id as CategoryID])

	const relevant_implications = property_deduction_system
		.get_relevant_rules(id)
		.map(render_formulas_in_object)

	return {
		property: render_formulas_in_object(property),
		dual_property,
		related_properties,
		categories_with_this_property,
		categories_without_this_property,
		unknown_categories,
		relevant_implications,
	}
}
