import type { CategoryShort } from '$lib/commons/types'
import { query } from '$lib/server/db'
import { error } from '@sveltejs/kit'
import sql from 'sql-template-tag'

export const load = async (event) => {
	const tag = event.url.searchParams.get('tag')

	const stmt = tag
		? sql`
			SELECT c.id, c.name
			FROM categories c
			LEFT JOIN category_tags t
			ON c.id = t.category_id
			WHERE t.tag = ${tag}
			ORDER BY name`
		: sql`
			SELECT id, name FROM categories
			ORDER BY name
	`

	const { rows: categories, err } = await query<CategoryShort>(stmt)

	if (err) error(500, 'Categories could not be loaded')

	return { categories, tag }
}
