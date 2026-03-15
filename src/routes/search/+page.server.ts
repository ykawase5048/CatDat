import { decode_property_ID } from '$lib/commons/property.url'
import type { CategoryShort } from '$lib/commons/types'
import { query } from '$lib/server/db'
import { error } from '@sveltejs/kit'
import sql from 'sql-template-tag'
import { SEARCH_SEPARATOR } from './search.config'
import { check_consistency } from '$lib/server/consistency'

export const load = async (event) => {
	const properties_query = event.url.searchParams.get('properties')
	const non_properties_query = event.url.searchParams.get('non_properties')

	const { rows: all_properties_objects, err: err_all } = await query<{
		id: string
		dual_property_id: string | null
	}>(sql`
		SELECT id, dual_property_id FROM properties	
	`)

	if (err_all) error(500, 'Failed to load properties')

	const all_properties = all_properties_objects.map(({ id }) => id)

	if (!properties_query && !non_properties_query) {
		return {
			is_search: false,
			is_consistent: true,
			all_properties,
			found_categories: [],
		}
	}

	const dual_properties_dict: Record<string, string | null> = {}
	for (const row of all_properties_objects) {
		dual_properties_dict[row.id] = row.dual_property_id
	}

	const all_properties_set = new Set(all_properties)

	const selected_properties = properties_query
		? properties_query.split(SEARCH_SEPARATOR).map(decode_property_ID)
		: []

	const selected_non_properties = non_properties_query
		? non_properties_query.split(SEARCH_SEPARATOR).map(decode_property_ID)
		: []

	const potential_dual_selected_properties = selected_properties.map(
		(p) => dual_properties_dict[p],
	)

	const potential_dual_selected_non_properties = selected_non_properties.map(
		(p) => dual_properties_dict[p],
	)

	const dual_selected_properties = potential_dual_selected_properties.every(
		(p) => p !== null,
	)
		? potential_dual_selected_properties
		: null

	const dual_selected_non_properties = potential_dual_selected_non_properties.every(
		(p) => p !== null,
	)
		? (potential_dual_selected_non_properties as string[])
		: null

	const check = await check_consistency(
		new Set(selected_properties),
		new Set(selected_non_properties),
	)

	if (!check) error(500, 'Search failed')

	if (!check.consistent) {
		return {
			is_search: true,
			is_consistent: false,
			all_properties,
			selected_properties,
			selected_non_properties,
			found_categories: [],
			dual_selected_properties,
			dual_selected_non_properties,
		}
	}

	const join_fragments_properties: string[] = []
	const join_fragments_non_properties: string[] = []
	const values: string[] = []

	selected_properties.forEach((p, i) => {
		if (!all_properties_set.has(p)) return
		join_fragments_properties.push(`
			INNER JOIN category_properties cp${i}
			ON cp${i}.category_id = c.id
			AND cp${i}.property_id = ?
		`)
		values.push(p)
	})

	selected_non_properties.forEach((p, i) => {
		if (!all_properties_set.has(p)) return
		join_fragments_properties.push(`
			INNER JOIN category_non_properties cnp${i}
			ON cnp${i}.category_id = c.id
			AND cnp${i}.non_property_id = ?
		`)
		values.push(p)
	})

	const search_sql = `
		SELECT c.id, c.name
		FROM categories c
		${join_fragments_properties.join('\n')}
		${join_fragments_non_properties.join('\n')}
	`

	const { rows: found_categories, err } = await query<CategoryShort>({
		sql: search_sql,
		values,
	})

	if (err) error(500, 'Search failed')

	return {
		is_search: true,
		is_consistent: true,
		all_properties,
		selected_properties,
		selected_non_properties,
		found_categories,
		dual_selected_properties,
		dual_selected_non_properties,
	}
}
