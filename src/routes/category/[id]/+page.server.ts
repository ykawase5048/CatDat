import { error } from '@sveltejs/kit'
import { render_nested_formulas } from '$lib/server/rendering'
import { batch } from '$lib/server/db'
import sql from 'sql-template-tag'
import type {
	CategoryDisplay,
	CategoryProperty,
	CategoryPropertyDB,
	CommentObject,
	PropertyShort,
	RelatedCategory,
	SpecialMorphism,
	SpecialObject,
	TagObject,
} from '$lib/commons/types'

export const load = async (event) => {
	const id = event.params.id

	const { results, err } = await batch<
		[
			CategoryDisplay,
			RelatedCategory,
			TagObject,
			CategoryPropertyDB & { is_satisfied: number },
			PropertyShort,
			SpecialObject,
			SpecialMorphism,
			CommentObject,
		]
	>([
		// basic information
		sql`
			SELECT
				c.id,
				c.name,
				c.notation,
				c.objects,
				c.morphisms,
				c.description,
				c.nlab_link,
				c.dual_category_id,
				d.name as dual_category_name,
				d.notation as dual_category_notation
			FROM categories c
			LEFT JOIN categories d ON d.id = c.dual_category_id
			WHERE c.id = ${id}
		`,
		// related categories
		sql`
			SELECT
				r.related_category_id AS id,
				c.name,
				c.notation
			FROM related_categories r
			INNER JOIN categories c ON c.id = r.related_category_id
			WHERE r.category_id = ${id}
			ORDER BY lower(c.name)
		`,
		// tags
		sql`
			SELECT ct.tag
			FROM category_tags ct
			INNER JOIN tags t ON t.tag = ct.tag
			WHERE ct.category_id = ${id}
			ORDER BY t.position
		`,
		// properties
		sql`
			SELECT
				cp.property_id AS id,
				cp.is_satisfied,
				cp.reason,
				cp.is_deduced,
				CASE
        			WHEN cp.is_satisfied = TRUE THEN p.prefix
        			ELSE pf.negation
    			END AS prefix
			FROM category_property_assignments cp
			INNER JOIN properties p ON p.id = cp.property_id
			INNER JOIN prefixes pf ON pf.prefix = p.prefix
			WHERE cp.category_id = ${id}
			ORDER BY cp.position, lower(cp.property_id)
		`,
		// unknown properties
		sql`
			SELECT
				p.id,
				p.prefix
			FROM properties p
			WHERE NOT EXISTS (
				SELECT 1 FROM category_property_assignments
				WHERE category_id = ${id} AND property_id = p.id
			)
			ORDER BY lower(p.id)
		`,
		// special objects
		sql`
			SELECT s.type, s.description
			FROM special_objects s
			INNER JOIN special_object_types t ON t.type = s.type
			WHERE s.category_id = ${id}
			ORDER BY t.position
		`,
		// special morphisms
		sql`
			SELECT s.type, s.description, s.reason
			FROM special_morphisms s
			INNER JOIN special_morphism_types t ON t.type = s.type
			WHERE s.category_id = ${id}
			ORDER BY t.position
		`,
		// comments
		sql`
			SELECT id, comment FROM category_comments
			WHERE category_id = ${id}
			ORDER BY created_at
		`,
	])

	if (err) error(500, 'Could not load category')

	const [
		categories,
		related_categories,
		tag_objects,
		properties_db,
		unknown_properties,
		special_objects,
		special_morphisms,
		comments,
	] = results

	if (!categories.length) error(404, `Could not find category with ID '${id}'`)

	const category = categories[0]
	const tags = tag_objects.map(({ tag }) => tag)

	const satisfied_properties: CategoryProperty[] = properties_db
		.filter((obj) => obj.is_satisfied)
		.map((p) => ({
			id: p.id,
			reason: p.reason,
			is_deduced: Boolean(p.is_deduced),
			prefix: p.prefix,
		}))

	const unsatisfied_properties: CategoryProperty[] = properties_db
		.filter((obj) => !obj.is_satisfied)
		.map((p) => ({
			id: p.id,
			reason: p.reason,
			is_deduced: Boolean(p.is_deduced),
			prefix: p.prefix,
		}))

	return render_nested_formulas({
		category,
		related_categories,
		tags,
		satisfied_properties,
		unsatisfied_properties,
		unknown_properties,
		special_objects,
		special_morphisms,
		comments,
	})
}
