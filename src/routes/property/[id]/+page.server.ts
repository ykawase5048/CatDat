import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import { render_formulas_in_object } from '$lib/commons/rendering'
import { PROPERTY_RELATIONS } from '$lib/database/property-relations.data'
import { PROPERTY_DUALS } from '$lib/database/property-duals.data'
import { decode_property_ID } from '$lib/commons/property.url'
import {
	get_category,
	get_property,
	is_valid_property,
} from '$lib/data-utils/data.helpers'
import { category_system, property_deduction_system } from '$lib/data-utils/deductions'

export const load: PageServerLoad = (event) => {
	const id = decode_property_ID(event.params.id)

	const is_valid = is_valid_property(id)
	if (!is_valid) return error(404, 'Property not found')

	const property = get_property(id)
	const dual_property = PROPERTY_DUALS[id] ?? null
	const related_properties = PROPERTY_RELATIONS[id] ?? []

	const categories_with_this_property = category_system
		.search([id], [])
		.map((result) => get_category(result.id))

	const categories_without_this_property = category_system
		.search([], [id])
		.map((result) => get_category(result.id))

	const unknown_categories = category_system
		.search([], [], [id])
		.map((result) => get_category(result.id))

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
