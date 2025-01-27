import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import { categories_detailed } from '$lib/categories/categories.dict'
import { properties_dictionary } from '$lib/properties/property.dict'
import { is_valid_property } from '$lib/properties/propertyIDs'
import { decode_property_ID } from '$lib/properties/properties.utils'
import { render_formulas_in_object } from '$lib/rendering'
import { get_all_non_properties, get_all_properties } from '$lib/categories/details'

export const load: PageServerLoad = (event) => {
	const id = decode_property_ID(event.params.id)
	const valid = is_valid_property(id)

	if (!valid) return error(404, 'Property not found')

	const property = properties_dictionary[id]

	const categories_with_this_property = categories_detailed.filter((category) =>
		get_all_properties(category).includes(property.id),
	)

	const categories_without_this_property = categories_detailed.filter((category) =>
		get_all_non_properties(category).includes(property.id),
	)

	const unknown_categories = categories_detailed.filter((category) =>
		category.unknown_properties.includes(property.id),
	)

	return {
		property: render_formulas_in_object(property, ['description']),
		categories_with_this_property,
		categories_without_this_property,
		unknown_categories,
	}
}
