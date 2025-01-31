import { decode_property_ID, get_dual_properties } from '$lib/properties/properties.utils'
import { is_valid_property } from '$lib/properties/propertyIDs'
import { error } from '@sveltejs/kit'

import { category_system } from '$lib/categories/categories.utils'

/**
 * This is used to separate property IDs in the query string.
 */
export const separator = '--'

export function get_search_results(url: URL) {
	const properties_query = url.searchParams.get('properties')
	const non_properties_query = url.searchParams.get('non_properties')

	const properties = properties_query
		? properties_query.split(separator).map(decode_property_ID)
		: []
	const non_properties = non_properties_query
		? non_properties_query.split(separator).map(decode_property_ID)
		: []

	if (!properties.every(is_valid_property) || !non_properties.every(is_valid_property))
		return error(404, 'Invalid query')

	const found_categories = category_system.search(properties, non_properties)

	const dualized_properties = get_dual_properties(properties)
	const dualized_non_properties = get_dual_properties(non_properties)

	const is_self_dual_request =
		JSON.stringify(properties) === JSON.stringify(dualized_properties) &&
		JSON.stringify(non_properties) === JSON.stringify(dualized_non_properties)

	const dual_found_categories =
		!is_self_dual_request &&
		dualized_properties != null &&
		dualized_non_properties != null
			? category_system.search(dualized_properties, dualized_non_properties)
			: []

	return {
		found_categories,
		properties,
		non_properties,
		dual_found_categories,
		dualized_properties,
		dualized_non_properties,
	}
}
