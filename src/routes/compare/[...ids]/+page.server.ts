import { error } from '@sveltejs/kit'
import { query } from '$lib/server/db'
import { render_nested_formulas } from '$lib/commons/rendering'
import { max_categories } from '$lib/commons/comparison.config'

export const load = async (event) => {
	const compared_ids = event.params.ids.split('/')

	if (!compared_ids.length) error(400, 'No category selected for comparison')

	if (compared_ids.length > max_categories) {
		error(400, `It is only possible to compare up to ${max_categories} categories`)
	}

	const placeholders = compared_ids.map(() => '?').join(', ')

	const { rows, err: err_cat } = await query<{
		id: string
		name: string
		notation: string
	}>({
		sql: `
			SELECT id, name, notation 
			FROM categories
			WHERE id in (${placeholders})`,
		values: compared_ids,
	})

	if (err_cat) error(500, 'Could not load categories')

	const invalid_id = compared_ids.find((id) => rows.every((row) => row.id !== id))
	if (invalid_id) error(404, `Could not find category with ID '${invalid_id}'`)

	const categories = rows.sort(
		(a, b) => compared_ids.indexOf(a.id) - compared_ids.indexOf(b.id),
	)

	const select_columns = compared_ids
		.map(
			(_, i) =>
				`CASE 
					WHEN cp${i}.property_id IS NOT NULL THEN 'yes'
					WHEN cnp${i}.non_property_id IS NOT NULL THEN 'no'
					ELSE 'unknown'
				END AS cat${i}`,
		)
		.join(',\n')

	const join_fragments: string[] = []
	const values: string[] = []

	compared_ids.forEach((category_id, i) => {
		join_fragments.push(`
			LEFT JOIN category_properties cp${i}
			ON cp${i}.property_id = p.id AND cp${i}.category_id = ?
			LEFT JOIN category_non_properties cnp${i}
			ON cnp${i}.non_property_id = p.id AND cnp${i}.category_id = ?
		`)
		values.push(category_id, category_id)
	})

	const stmt = `
		SELECT
			p.id AS property_id,
			${select_columns}
		FROM properties p
		${join_fragments.join('\n')}
		ORDER BY lower(p.id)`

	const { rows: comparison_objects, err } = await query<Record<string, string>>({
		sql: stmt,
		values,
	})

	if (err) error(500, 'Could not load properties')

	const comparison_table = comparison_objects.map((obj) => Object.values(obj))

	return { categories: render_nested_formulas(categories), comparison_table }
}
