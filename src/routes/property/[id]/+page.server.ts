import { error } from '@sveltejs/kit'
import { render_nested_formulas } from '$lib/server/rendering'
import { decode_property_ID } from '$lib/commons/property.url'
import { batch } from '$lib/server/db'
import sql from 'sql-template-tag'
import type { CategoryShort, PropertyDB } from '$lib/commons/types'
import type { ImplicationDB } from '$lib/commons/types'
import { display_implication, display_property } from '$lib/server/utils'

export const prerender = true

export const load = async (event) => {
	const id = decode_property_ID(event.params.id)

	const { results, err } = await batch<
		[
			PropertyDB,
			{ id: string },
			ImplicationDB,
			CategoryShort,
			CategoryShort,
			CategoryShort,
		]
	>([
		sql`
			SELECT
				id, prefix, description, dual_property_id,
				nlab_link, invariant_under_equivalences
			FROM properties
			WHERE id = ${id}
		`,
		sql`
			SELECT related_property_id AS id
			FROM related_properties
			WHERE property_id = ${id}
		`,
		sql`
			SELECT
				id,
				is_equivalence,
				reason,
				assumptions,
				conclusions,
				is_deduced
			FROM implications_view
			WHERE
				EXISTS (
					SELECT 1
					FROM json_each(conclusions)
					WHERE value = ${id}
				)
				OR
				EXISTS (
					SELECT 1
					FROM json_each(assumptions)
					WHERE value = ${id}
				)
			ORDER BY lower(assumptions) || ' ' || lower(conclusions)
		`,
		sql`
			SELECT c.id, c.name
			FROM category_properties cp
			INNER JOIN categories c ON c.id = cp.category_id
			WHERE cp.property_id = ${id}
		`,
		sql`
			SELECT c.id, c.name
			FROM category_non_properties cnp
			INNER JOIN categories c ON c.id = cnp.category_id
			WHERE cnp.non_property_id = ${id}
		`,
		sql`
			SELECT c.id, c.name
			FROM categories c
			LEFT JOIN category_properties cp
				ON cp.category_id = c.id
				AND cp.property_id = ${id}
			LEFT JOIN category_non_properties cnp
				ON cnp.category_id = c.id
				AND cnp.non_property_id = ${id}
			WHERE
				cp.property_id IS NULL
				AND cnp.non_property_id IS NULL;
		`,
	])

	if (err) error(500, 'Could not load property')

	const [
		properties,
		related,
		relevant_implications_db,
		categories_with_this_property,
		categories_without_this_property,
		unknown_categories,
	] = results

	if (!properties.length) error(404, 'Property not found')

	const property = display_property(properties[0])

	const related_properties = related.map(({ id }) => id)

	const relevant_implications = relevant_implications_db.map(display_implication)

	return render_nested_formulas({
		property,
		related_properties,
		categories_with_this_property,
		categories_without_this_property,
		unknown_categories,
		relevant_implications,
	})
}
