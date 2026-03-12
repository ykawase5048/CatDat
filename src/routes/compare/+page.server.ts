import type { CategoryShort } from '$lib/commons/types'
import sql from 'sql-template-tag'
import { query } from '$lib/server/db'
import { error } from '@sveltejs/kit'
import { MAX_CATEGORIES_COMPARE } from '$lib/server/config'

export const load = async () => {
	const { rows: categories, err } = await query<CategoryShort>(sql`
		SELECT id, name FROM categories ORDER BY name
	`)

	if (err) error(500, 'Categories could not be loaded')

	return { categories, max_categories_compare: MAX_CATEGORIES_COMPARE }
}
