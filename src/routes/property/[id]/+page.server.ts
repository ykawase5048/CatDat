import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import {
	category_property_list,
	type category_properties_dictionary,
} from '$lib/dictionaries/category-properties'
import { categories_list } from '$lib/dictionaries/categories'

export const load: PageServerLoad = (event) => {
	const id = event.params.id
	const property = category_property_list.find(
		(property) => property.id.toString() === id,
	)
	if (!property) return error(404, 'Property not found')

	const categories_with_this_property = categories_list.filter((category) =>
		category.properties.includes(
			property.name as keyof typeof category_properties_dictionary,
		),
	)
	return { property, categories_with_this_property }
}
