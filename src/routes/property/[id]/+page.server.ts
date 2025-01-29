import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import { category_system } from '$lib/categories/categories.utils'
import { is_valid_property } from '$lib/properties/propertyIDs'
import {
	decode_property_ID,
	implications_with_duals,
	properties_dictionary,
} from '$lib/properties/properties.utils'
import { render_formulas_in_object } from '$lib/rendering'

export const load: PageServerLoad = (event) => {
	const id = decode_property_ID(event.params.id)

	const valid = is_valid_property(id)

	if (!valid) return error(404, 'Property not found')

	const categories_with_this_property = category_system.search([id], [])
	const categories_without_this_property = category_system.search([], [id])
	const unknown_categories = category_system.search([], [], [id])

	const property = properties_dictionary[id]

	const relevant_implications = implications_with_duals.filter(
		(implication) =>
			implication.conclusions.includes(property.id) ||
			implication.assumptions.includes(property.id),
	)

	return {
		property: render_formulas_in_object(property, ['description']),
		categories_with_this_property,
		categories_without_this_property,
		unknown_categories,
		relevant_implications,
	}
}
