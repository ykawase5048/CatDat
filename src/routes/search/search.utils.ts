import { browser } from '$app/environment'
import {
	storage_key_non_properties,
	storage_key_properties,
} from '$lib/commons/search.config'
import { is_valid_property } from '$lib/data-utils/data.helpers'
import type { PropertyID } from '$lib/database/categories/properties.data'

export function get_saved_search(): [PropertyID[], PropertyID[]] {
	if (!browser) return [[], []]

	const properties_string = window.sessionStorage.getItem(storage_key_properties)
	const non_properties_string = window.sessionStorage.getItem(
		storage_key_non_properties,
	)

	if (!properties_string || !non_properties_string) return [[], []]

	try {
		const parsed_properties: unknown = JSON.parse(properties_string)
		const parsed_non_properties: unknown = JSON.parse(non_properties_string)

		const is_valid =
			Array.isArray(parsed_properties) &&
			parsed_properties.every(is_valid_property) &&
			Array.isArray(parsed_non_properties) &&
			parsed_non_properties.every(is_valid_property)

		return is_valid ? [parsed_properties, parsed_non_properties] : [[], []]
	} catch {
		return [[], []]
	}
}
