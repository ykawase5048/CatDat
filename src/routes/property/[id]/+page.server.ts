import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import { category_system } from '$lib/categories/categories.utils'
import { is_valid_property } from '$lib/properties/propertyIDs'
import {
	decode_property_ID,
	properties_dictionary,
	property_deduction_system,
} from '$lib/properties/properties.utils'
import { render_formulas_in_object } from '$lib/commons/rendering'

export const load: PageServerLoad = (event) => {
	const id = decode_property_ID(event.params.id)

	const valid = is_valid_property(id)

	if (!valid) return error(404, 'Property not found')

	const categories_with_this_property = category_system.search([id], [])
	const categories_without_this_property = category_system.search([], [id])
	const unknown_categories = category_system.search([], [], [id])

	const property = properties_dictionary[id]

	const relevant_implications = property_deduction_system.get_relevant_rules(id)

	return {
		property: render_formulas_in_object(property),
		categories_with_this_property,
		categories_without_this_property,
		unknown_categories,
		relevant_implications,
	}
}
