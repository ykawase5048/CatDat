import { error } from '@sveltejs/kit'
import { render_nested_formulas } from '$lib/server/rendering'
import { batch } from '$lib/server/db'
import sql from 'sql-template-tag'
import type {
	CategoryDisplay,
	CategoryProperty,
	CategoryPropertyDB,
	DescriptionWithReason,
	RelatedCategory,
	UnknownCategoryProperty,
} from '$lib/commons/types'

export const load = async (event) => {
	const id = event.params.id

	const { results, err } = await batch<
		[
			CategoryDisplay,
			RelatedCategory,
			{ tag: string },
			DescriptionWithReason,
			DescriptionWithReason,
			DescriptionWithReason,
			CategoryPropertyDB,
			CategoryPropertyDB,
			UnknownCategoryProperty,
		]
	>([
		sql`
			SELECT
				id, name, notation, objects, morphisms,
				description, nlab_link
			FROM categories
			WHERE id = ${id}
		`,
		sql`
			SELECT
				r.related_category_id AS id,
				c.name,
				c.notation
			FROM related_categories r
			INNER JOIN categories c ON c.id = r.related_category_id
			WHERE r.category_id = ${id}
			ORDER BY id
		`,
		sql`
			SELECT tag
			FROM category_tags
			WHERE category_id = ${id}
			ORDER BY tag
		`,
		sql`
			SELECT description, reason
			FROM category_isomorphisms
			WHERE category_id = ${id}
		`,
		sql`
			SELECT description, reason
			FROM category_epimorphisms
			WHERE category_id = ${id}
		`,
		sql`
			SELECT description, reason
			FROM category_monomorphisms
			WHERE category_id = ${id}
		`,
		sql`
			SELECT
				cp.property_id AS id,
				cp.reason,
				cp.is_deduced,
				p.prefix
			FROM category_properties cp
			INNER JOIN properties p ON p.id = cp.property_id
			WHERE cp.category_id = ${id}
			ORDER BY cp.position, cp.property_id
		`,
		sql`
			SELECT
				cnp.non_property_id AS id,
				cnp.reason,
				cnp.is_deduced,
				pf.negation as prefix
			FROM category_non_properties cnp
			INNER JOIN properties p ON p.id = cnp.non_property_id
			INNER JOIN prefixes pf ON pf.prefix = p.prefix
			WHERE cnp.category_id = ${id}
			ORDER BY cnp.position, cnp.non_property_id
		`,
		sql`
			SELECT
				p.id,
				p.prefix
			FROM properties p
			WHERE NOT EXISTS (
				SELECT 1 FROM category_properties
				WHERE property_id = p.id AND category_id = ${id}
			)
			AND NOT EXISTS (
				SELECT 1 FROM category_non_properties
				WHERE non_property_id = p.id AND category_id = ${id}
			)
			ORDER BY lower(p.id)
		`,
	])

	if (err) error(500, 'Could not load category')

	const [
		categories,
		related_categories,
		tag_objects,
		iso_rows,
		epi_rows,
		mono_rows,
		properties_db,
		non_properties_db,
		unknown_properties,
	] = results

	if (!categories.length) error(404, `Could not find category with ID '${id}'`)

	const category = categories[0]
	const tags = tag_objects.map(({ tag }) => tag)
	const isomorphisms = iso_rows.at(0)
	const epimorphisms = epi_rows.at(0)
	const monomorphisms = mono_rows.at(0)

	const properties: CategoryProperty[] = properties_db.map((p) => ({
		id: p.id,
		reason: p.reason,
		prefix: p.prefix,
		is_deduced: Boolean(p.is_deduced),
	}))

	const non_properties: CategoryProperty[] = non_properties_db.map((p) => ({
		id: p.id,
		reason: p.reason,
		prefix: p.prefix,
		is_deduced: Boolean(p.is_deduced),
	}))

	return render_nested_formulas({
		category,
		related_categories,
		tags,
		isomorphisms,
		epimorphisms,
		monomorphisms,
		properties,
		non_properties,
		unknown_properties,
	})
}
