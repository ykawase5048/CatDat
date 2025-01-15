import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { properties_dictionary, type PropertyName } from '$lib/dictionaries/properties'
import { categories } from '$lib/dictionaries/categories'
import { render_formulas } from '$lib/render'
import type { Category, Property } from '$lib/types'

export const load: PageServerLoad = (event) => {
	const name = event.params.name.replaceAll('_', ' ')

	const property: Property | undefined = properties_dictionary[name as PropertyName]

	if (!property) return error(404, 'Property not found')

	const categories_with_this_property = (categories as Category[]).filter((category) =>
		category.properties.includes(property.name as PropertyName),
	)

	// TODO: handle deductions here
	const categories_without_this_property = (categories as Category[]).filter(
		(category) => category.non_properties.includes(property.name as PropertyName),
	)

	const rendered_description = render_formulas(property.description)

	return {
		property,
		rendered_description,
		categories_with_this_property,
		categories_without_this_property,
	}
}
