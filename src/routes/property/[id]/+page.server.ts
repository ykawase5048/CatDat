import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import { render_nested_formulas } from '$lib/commons/rendering'
import { PROPERTY_RELATIONS } from '$lib/database/property-relations.data'
import { PROPERTY_DUALS } from '$lib/database/property-duals.data'
import { decode_property_ID } from '$lib/commons/property.url'
import {
	get_category,
	get_property,
	is_valid_property,
} from '$lib/data-utils/data.helpers'
import { category_system, property_deduction_system } from '$lib/data-utils/deductions'
import { batch, query } from '$lib/server/db'
import sql from 'sql-template-tag'
import type { PropertyDB, PropertyDisplay } from '$lib/commons/types'

export const load: PageServerLoad = async (event) => {
	const id = decode_property_ID(event.params.id)

	const { results, err } = await batch<[PropertyDB, { id: string }]>([
		sql`
		SELECT
			id, prefix, description, dual_property_id,
			nlab_link, invariant_under_equivalences
		FROM properties
		WHERE id = ${id}`,
		sql`
		SELECT related_property_id AS id
		FROM related_properties
		WHERE property_id = ${id}`,
	])

	if (err) error(500, 'Could not load property')

	const [properties, related] = results

	if (!properties.length) error(404, 'Property not found')

	const row = properties[0]

	const property: PropertyDisplay = {
		id,
		prefix: row.prefix,
		description: row.description,
		dual_property: row.dual_property,
		nlab_link: row.nlab_link,
		invariant_under_equivalences: Boolean(row.invariant_under_equivalences),
	}

	const related_properties = related.map(({ id }) => id)

	return {
		property: render_nested_formulas(property),
		related_properties,
		/* TODO: bring these values back */
		categories_with_this_property: [],
		categories_without_this_property: [],
		unknown_categories: [],
		relevant_implications: [],
	}
}

// const categories_with_this_property = category_system
// 	.search([id], [], [])
// 	.map((result) => get_category(result.id))

// const categories_without_this_property = category_system
// 	.search([], [id], [])
// 	.map((result) => get_category(result.id))

// const unknown_categories = category_system
// 	.search([], [], [id])
// 	.map((result) => get_category(result.id))

// const relevant_implications = property_deduction_system
// 	.get_relevant_rules(id)
// 	.map(render_nested_formulas)
