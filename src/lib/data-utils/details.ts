import type { CategoryID } from '$lib/database/categories.data'
import type { PropertyID } from '$lib/database/properties.data'
import { CATEGORY_EPIMORPHISMS } from '$lib/database/category-epimorphisms.data'
import { CATEGORY_ISOMORPHISMS } from '$lib/database/category-isomorphisms.data'
import { CATEGORY_MONOMORPHISMS } from '$lib/database/category-monomorphisms.data'
import { CATEGORY_NON_PROPERTIES } from '$lib/database/category-non-properties.data'
import { CATEGORY_PROPERTIES } from '$lib/database/category-properties.data'
import { CATEGORY_RELATIONS } from '$lib/database/category-relations.data'
import { CATEGORY_TAGS } from '$lib/database/category-tags.data'
import { get_category, get_prefix } from './data.helpers'
import { select } from '$lib/commons/utils'
import { categories_with_deduced_properties_dictionary } from './deductions'

const with_empty_reason = (id: PropertyID) => ({
	id,
	prefix: get_prefix(id),
	reason: '',
})

// TODO: refactor
export function get_detailed_category(id: CategoryID) {
	const category = get_category(id)

	const tags = CATEGORY_TAGS[id]

	const related_categories = select('id', 'name', 'notation').from(
		CATEGORY_RELATIONS[id].map(get_category),
	)

	const properties = CATEGORY_PROPERTIES[id].map((entry) => ({
		...entry,
		prefix: get_prefix(entry.id),
	}))

	const non_properties = CATEGORY_NON_PROPERTIES[id].map((entry) => ({
		...entry,
		prefix: get_prefix(entry.id),
	}))

	const {
		deduced_properties,
		deduced_non_properties,
		all_properties,
		all_non_properties,
		unknown_properties,
	} = categories_with_deduced_properties_dictionary[id]

	const isomorphisms = CATEGORY_ISOMORPHISMS[id]
	const monomorphisms = CATEGORY_MONOMORPHISMS[id]
	const epimorphisms = CATEGORY_EPIMORPHISMS[id]

	return {
		...category,
		tags,
		related_categories,
		monomorphisms,
		epimorphisms,
		isomorphisms,
		properties,
		non_properties,
		all_properties: Array.from(all_properties).map(with_empty_reason),
		all_non_properties: Array.from(all_non_properties).map(with_empty_reason),
		deduced_properties: Array.from(deduced_properties).map(with_empty_reason),
		deduced_non_properties: Array.from(deduced_non_properties).map(with_empty_reason),
		unknown_properties: Array.from(unknown_properties).map(with_empty_reason),
	}
}
