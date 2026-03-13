import type { CategoryShort } from '$lib/commons/types'
import { query } from '$lib/server/db'
import { error } from '@sveltejs/kit'
import sql from 'sql-template-tag'

export const prerender = true

export const load = async (event) => {
	const tag = event.params.tag

	const { rows: categories, err } = await query<CategoryShort>(sql`
		SELECT c.id, c.name FROM categories c
		LEFT JOIN category_tags t ON c.id = t.category_id
		WHERE t.tag = ${tag}
		ORDER BY name
	`)

	if (err) error(500, 'Categories could not be loaded')

	return { categories, tag }
}
