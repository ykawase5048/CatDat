import { batch } from '$lib/server/db'
import sql from 'sql-template-tag'
import type { CategoryShort } from '$lib/commons/types'
import { error } from '@sveltejs/kit'
import { get_missing_combinations } from '$lib/server/consistency'

export const prerender = true

export const load = async () => {
	const { results, err } = await batch<
		[CategoryShort, CategoryShort, { total: number }, CategoryShort]
	>([
		// missing special morphisms
		sql`
			SELECT c.id, c.name
			FROM categories c
			LEFT JOIN special_morphisms sm_iso
				ON sm_iso.category_id = c.id
				AND sm_iso.type = 'isomorphisms'
			LEFT JOIN special_morphisms sm_epi
				ON sm_epi.category_id = c.id
				AND sm_epi.type = 'epimorphisms'
			LEFT JOIN special_morphisms sm_mono
				ON sm_mono.category_id = c.id
				AND sm_mono.type = 'monomorphisms'
			WHERE
				sm_iso.category_id IS NULL
				OR sm_epi.category_id IS NULL
				OR sm_mono.category_id IS NULL
		`,
		// categories with unknown properties
		sql`
			SELECT DISTINCT c.id, c.name
			FROM categories c
			INNER JOIN properties p
			LEFT JOIN category_property_assignments cp
				ON cp.category_id = c.id
				AND cp.property_id = p.id
			WHERE
				cp.property_id IS NULL
			ORDER BY c.id
		`,
		// number of unknown (category, property)-pairs
		sql`
			SELECT COUNT(*) as total
			FROM categories c
			JOIN properties p
			LEFT JOIN category_property_assignments cp
				ON cp.category_id = c.id
				AND cp.property_id = p.id
			WHERE
				cp.property_id IS NULL
		`,
		// missing reasons
		sql`
			SELECT c.id, c.name
			FROM categories c
			WHERE EXISTS (
				SELECT 1 FROM category_property_assignments cp
				WHERE cp.category_id = c.id AND cp.reason IS NULL
			)
		`,
	])

	if (err) error(500, 'Failed to load data')

	const [
		categories_with_missing_morphisms,
		categories_with_unknown_properties,
		unknown_pair_count,
		categories_with_unreasoned_properties,
	] = results

	const total_number_unknown_pairs = unknown_pair_count[0].total

	const missing_combinations = await get_missing_combinations() // FIXME

	return {
		categories_with_unknown_properties,
		total_number_unknown_pairs,
		categories_with_missing_morphisms,
		categories_with_unreasoned_properties,
		missing_combinations,
	}
}
