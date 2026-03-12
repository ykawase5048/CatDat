import { sum } from '$lib/commons/utils'
import { category_system } from '$lib/data-utils/deductions'
import { get_category, type CategorySimple } from '$lib/data-utils/data.helpers'
import { batch } from '$lib/server/db'
import sql from 'sql-template-tag'
import type { CategoryShort } from '$lib/commons/types'
import { error } from '@sveltejs/kit'

export const load = async () => {
	const { results, err } = await batch<[CategoryShort]>([
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
	])

	if (err) error(500, 'Failed to load data')

	const [categories_with_missing_morphisms] = results

	const entities_with_unknown_properties =
		category_system.get_entities_with_unknown_properties()

	const categories_with_unknown_properties: CategorySimple[] =
		entities_with_unknown_properties.map((category) => ({
			id: category.id,
			name: get_category(category.id).name,
		}))

	const total_number_unknown_properties = sum(
		entities_with_unknown_properties.map(
			(category) => category.unknown_properties.length,
		),
	)

	return {
		categories_with_unknown_properties,
		total_number_unknown_properties,
		categories_with_missing_morphisms,
	}
}
