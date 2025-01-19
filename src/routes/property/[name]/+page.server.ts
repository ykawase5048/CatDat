import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { properties_dictionary, type PropertyName } from '$lib/properties/properties'
import type { Property } from '$lib/types'
import { categories_detailed } from '$lib/categories/categories.details'

export const load: PageServerLoad = (event) => {
	const name = event.params.name.replaceAll('_', ' ')

	const property: Property | undefined = properties_dictionary[name as PropertyName]

	if (!property) return error(404, 'Property not found')

	const categories_with_this_property = categories_detailed.filter((category) =>
		category.properties.some((p) => p.name === property.name),
	)

	const categories_without_this_property = categories_detailed.filter((category) =>
		category.non_properties.some((p) => p.name === property.name),
	)

	return {
		property,
		categories_with_this_property,
		categories_without_this_property,
	}
}
