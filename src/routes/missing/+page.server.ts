import { batch } from '$lib/server/db'
import sql from 'sql-template-tag'
import type { CategoryShort } from '$lib/commons/types'
import { error } from '@sveltejs/kit'

export const prerender = true

export const load = async () => {
	const { results, err } = await batch<
		[CategoryShort, CategoryShort, { total: number }]
	>([
		sql`
			SELECT c.id, c.name FROM categories c
			LEFT JOIN category_isomorphisms i ON i.category_id = c.id
			LEFT JOIN category_epimorphisms e ON e.category_id = c.id
			LEFT JOIN category_monomorphisms m ON m.category_id = c.id
			WHERE
				i.description IS NULL
				OR e.description IS NULL
				OR m.description IS NULL
		`,
		sql`
			SELECT DISTINCT c.id, c.name
			FROM categories c
			INNER JOIN properties p
			LEFT JOIN category_properties cp
				ON cp.category_id = c.id
				AND cp.property_id = p.id
			LEFT JOIN category_non_properties cnp
				ON cnp.category_id = c.id
				AND cnp.non_property_id = p.id
			WHERE
				cp.property_id IS NULL
				AND cnp.non_property_id IS NULL
			ORDER BY c.id
		`,
		sql`
			SELECT COUNT(*) as total
			FROM categories c
			JOIN properties p
			LEFT JOIN category_properties cp
				ON cp.category_id = c.id
				AND cp.property_id = p.id
			LEFT JOIN category_non_properties cnp
				ON cnp.category_id = c.id
				AND cnp.non_property_id = p.id
			WHERE
				cp.property_id IS NULL
				AND cnp.non_property_id IS NULL
		`,
	])

	if (err) error(500, 'Failed to load data')

	const [
		categories_with_missing_morphisms,
		categories_with_unknown_properties,
		total_objects,
	] = results

	const total_number_unknown_properties = total_objects[0].total

	return {
		categories_with_unknown_properties,
		total_number_unknown_properties,
		categories_with_missing_morphisms,
	}
}
