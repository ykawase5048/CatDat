import { decode_property_ID } from '$lib/commons/property.url'
import type { CategoryShort } from '$lib/commons/types'
import { query } from '$lib/server/db'
import { error } from '@sveltejs/kit'
import sql from 'sql-template-tag'

export const load = async (event) => {
	const { rows: rows_props, err: err_all } = await query<{ id: string }>(sql`
		SELECT id FROM properties	
	`)

	if (err_all) error(500, 'Failed to load properties')

	const all_properties = rows_props.map(({ id }) => id)

	const properties_query = event.url.searchParams.get('properties')
	const non_properties_query = event.url.searchParams.get('non_properties')

	if (!properties_query && !non_properties_query) {
		return {
			is_search: false,
			all_properties,
			found_categories: [],
		}
	}

	const all_properties_set = new Set(all_properties)

	const selected_properties = properties_query
		? properties_query.split(',').map(decode_property_ID)
		: []

	const selected_non_properties = non_properties_query
		? non_properties_query.split(',').map(decode_property_ID)
		: []

	const join_fragments: string[] = []
	const join_fragments_negated: string[] = []
	const values: string[] = []

	selected_properties.forEach((p, i) => {
		if (!all_properties_set.has(p)) return
		join_fragments.push(`
			INNER JOIN category_properties cp${i}
			ON cp${i}.category_id = c.id
			AND cp${i}.property_id = ?
		`)
		values.push(p)
	})

	selected_non_properties.forEach((p, i) => {
		if (!all_properties_set.has(p)) return
		join_fragments.push(`
			INNER JOIN category_non_properties cnp${i}
			ON cnp${i}.category_id = c.id
			AND cnp${i}.non_property_id = ?
		`)
		values.push(p)
	})

	const stmt = `
		SELECT c.id, c.name
		FROM categories c
		${join_fragments.join('\n')}
		${join_fragments_negated.join('\n')}
	`

	const { rows: found_categories, err } = await query<CategoryShort>({
		sql: stmt,
		values,
	})

	if (err) error(500, 'Search failed')

	return {
		is_search: true,
		all_properties,
		selected_properties,
		selected_non_properties,
		found_categories,
	}
}
