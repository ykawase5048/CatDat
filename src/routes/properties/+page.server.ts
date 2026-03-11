import { query } from '$lib/server/db'
import { error } from '@sveltejs/kit'
import sql from 'sql-template-tag'

export const load = async () => {
	const { rows: properties, err } = await query<{ prefix: string; id: string }>(sql`
		SELECT prefix, id FROM properties
		ORDER BY lower(id)
	`)

	if (err) error(500, 'Could not load properties')

	return { properties }
}
