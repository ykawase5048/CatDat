import { error } from '@sveltejs/kit'

import { decode_property_ID } from '$lib/commons/property.url'
import {
	get_category,
	get_dual_properties,
	is_valid_property,
} from '$lib/data-utils/data.helpers'
import { category_system, property_deduction_system } from '$lib/data-utils/deductions'
import type { Category } from '$lib/database/categories/categories.data'
import { separator_in_url } from './search.config'

export function get_search_results(url: URL) {
	const properties_query = url.searchParams.get('properties')
	const non_properties_query = url.searchParams.get('non_properties')

	if (!properties_query && !non_properties_query) {
		return { is_search: false }
	}

	const properties = properties_query
		? properties_query.split(separator_in_url).map(decode_property_ID)
		: []

	const non_properties = non_properties_query
		? non_properties_query.split(separator_in_url).map(decode_property_ID)
		: []

	const is_valid =
		properties.every(is_valid_property) && non_properties.every(is_valid_property)

	if (!is_valid) return error(404, 'Invalid query')

	const has_contradiction = property_deduction_system.has_contradiction(
		new Set(properties),
		new Set(non_properties),
	)

	if (has_contradiction) {
		return {
			is_search: true,
			contradiction: true,
		}
	}

	const found_categories: Category[] = category_system
		.search(properties, non_properties, [])
		.map((category) => get_category(category.id))

	const dualized_properties = get_dual_properties(properties)
	const dualized_non_properties = get_dual_properties(non_properties)

	const is_dual_search = dualized_properties != null && dualized_non_properties != null

	const found_dualized_categories: Category[] = is_dual_search
		? category_system
				.search(dualized_properties, dualized_non_properties, [])
				.map((category) => get_category(category.id))
		: []

	return {
		is_search: true,
		contradiction: false,
		properties,
		non_properties,
		found_categories,
		is_dual_search,
		dualized_properties,
		dualized_non_properties,
		found_dualized_categories,
	}
}
