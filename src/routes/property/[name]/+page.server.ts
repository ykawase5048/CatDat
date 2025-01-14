export const prerender = true

import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { properties_list, type properties_dictionary } from '$lib/dictionaries/properties'
import { categories_list } from '$lib/dictionaries/categories'
import { render_formulas } from '$lib/render'

export const load: PageServerLoad = (event) => {
	const actual_name = event.params.name.replace(/_/g, ' ')
	const property = properties_list.find((property) => property.name === actual_name)
	if (!property) return error(404, 'Property not found')

	const categories_with_this_property = categories_list.filter((category) =>
		category.properties.includes(property.name as keyof typeof properties_dictionary),
	)

	const categories_without_this_property = categories_list.filter((category) =>
		category.non_properties.includes(
			property.name as keyof typeof properties_dictionary,
		),
	)

	const rendered_description = render_formulas(property.description)
	return {
		property,
		rendered_description,
		categories_with_this_property,
		categories_without_this_property,
	}
}
