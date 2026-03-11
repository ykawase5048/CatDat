import { render_nested_formulas } from '$lib/commons/rendering'
import { query } from '$lib/server/db'
import sql from 'sql-template-tag'
import { error } from '@sveltejs/kit'
import type { ImplicationDB, ImplicationDisplay } from '$lib/commons/types'

export const load = async (event) => {
	const show_all_implications = event.url.searchParams.has('show_all')

	const { rows, err } = await query<ImplicationDB>(sql`
		SELECT id, is_equivalence, reason, assumptions, conclusions
		FROM implications_view
		${show_all_implications ? sql`` : sql`WHERE is_deduced = FALSE`}
		ORDER BY lower(assumptions) || ' ' || lower(conclusions)`)

	if (err) error(500, 'Could not load implications')

	const implications: ImplicationDisplay[] = rows.map((row) => ({
		id: row.id,
		is_equivalence: Boolean(row.is_equivalence),
		reason: row.reason,
		assumptions: JSON.parse(row.assumptions),
		conclusions: JSON.parse(row.conclusions),
	}))

	return {
		implications: render_nested_formulas(implications),
		show_all_implications,
	}
}
