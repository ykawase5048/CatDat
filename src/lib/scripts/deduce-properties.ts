import { LOG_DETAILS } from '$env/static/private'
import type { NormalizedImplication } from '$lib/commons/types'
import { batch, query } from '$lib/server/db'
import {
	get_assumption_string,
	get_conclusion_string,
	get_normalized_implications,
} from '$lib/server/normalized-implications'
import sql from 'sql-template-tag'

deduce_all_properties()

async function deduce_all_properties() {
	const implications = await get_normalized_implications()
	if (!implications) return

	const categories = await get_categories()

	for (const { category_id } of categories) {
		await deduce_properties(category_id, implications)
		await deduce_non_properties(category_id, implications)
	}
}

async function get_categories() {
	const { rows } = await query<{ category_id: string }>(sql`
		SELECT id AS category_id FROM categories ORDER BY name
	`)
	return rows ?? []
}

async function deduce_properties(
	category_id: string,
	implications: NormalizedImplication[],
) {
	console.info('Deduce properties for category:', category_id)

	const { err: err_clear } = await query(sql`
        DELETE FROM category_properties
        WHERE category_id = ${category_id} AND is_deduced = TRUE
    `)

	if (err_clear) return

	const { rows: property_objects, err: err_prop } = await query<{
		property_id: string
	}>(sql`
		SELECT property_id
		FROM category_properties
		WHERE category_id = ${category_id} AND is_deduced = FALSE
	`)

	if (err_prop) return

	const properties = new Set(property_objects.map(({ property_id }) => property_id))

	if (LOG_DETAILS === 'true') {
		console.info(`Found ${properties.size} properties in the database`)
		console.info(Array.from(properties))
	}

	const deduced_properties: string[] = []
	const reasons: Record<string, string> = {}

	while (true) {
		const implication = implications.find(
			({ assumptions, conclusion }) =>
				assumptions.isSubsetOf(properties) && !properties.has(conclusion),
		)
		if (!implication) break
		const { conclusion } = implication

		properties.add(conclusion)
		deduced_properties.push(conclusion)

		const assumption_string = get_assumption_string(implication)
		const conclusion_string = get_conclusion_string(implication)

		const reason = `Since it ${assumption_string}, it ${conclusion_string}.`

		reasons[conclusion] = reason
	}

	if (LOG_DETAILS === 'true') {
		console.info(`${deduced_properties.length} properties have been deduced`)
		console.info(deduced_properties)
	}

	const insert_query = (id: string, position: number) => sql`
		INSERT INTO category_properties
			(property_id, category_id, reason, position, is_deduced)
		VALUES (${id}, ${category_id}, ${reasons[id]}, ${position}, TRUE)
	`

	const { err } = await batch(
		deduced_properties.map((id, index) => insert_query(id, index + 1)),
	)

	if (err) return

	console.info(`Added ${deduced_properties.length} properties to the database\n`)
}

async function deduce_non_properties(
	category_id: string,
	implications: NormalizedImplication[],
) {
	console.info('Deduce non-properties for category:', category_id)

	const { err: err_clear } = await query(sql`
        DELETE FROM category_non_properties
        WHERE category_id = ${category_id} AND is_deduced = TRUE
    `)

	if (err_clear) return

	const { rows: property_objects, err: err_prop } = await query<{
		property_id: string
	}>(sql`
		SELECT property_id
		FROM category_properties
		WHERE category_id = ${category_id}
	`)

	if (err_prop) return

	const properties = new Set(property_objects.map(({ property_id }) => property_id))

	const { rows: non_property_objects, err: err_non_prop } = await query<{
		non_property_id: string
	}>(sql`
		SELECT non_property_id
		FROM category_non_properties
		WHERE category_id = ${category_id} AND is_deduced = FALSE
	`)

	if (err_non_prop) return

	const non_properties = new Set(
		non_property_objects.map(({ non_property_id }) => non_property_id),
	)

	if (LOG_DETAILS === 'true') {
		console.info(`Found ${non_properties.size} non-properties in the database`)
		console.info(Array.from(non_properties))
	}

	const deduced_non_properties: string[] = []
	const reasons: Record<string, string> = {}

	function get_next_implication() {
		for (const implication of implications) {
			if (!non_properties.has(implication.conclusion)) continue
			for (const p of implication.assumptions) {
				const is_valid =
					!non_properties.has(p) &&
					implication.assumptions
						.difference(new Set([p]))
						.isSubsetOf(properties)
				if (is_valid) return { implication, non_property: p }
			}
		}

		return null
	}

	while (true) {
		const next = get_next_implication()
		if (!next) break

		const { implication, non_property } = next

		const { prefixes } = implication

		if (properties.has(non_property)) {
			throw new Error('Contradiction has been found')
		}

		non_properties.add(non_property)
		deduced_non_properties.push(non_property)

		const assumption_string = get_assumption_string(implication)
		const conclusion_string = get_conclusion_string(implication)

		const reason =
			`Assume that it ${prefixes[non_property]} ${non_property}. ` +
			`But since it ${assumption_string}, it ${conclusion_string} – contradiction.`

		reasons[non_property] = reason
	}

	if (LOG_DETAILS === 'true') {
		console.info(`${deduced_non_properties.length} non-properties have been deduced`)
		console.info(deduced_non_properties)
	}

	const insert_query = (id: string, position: number) => sql`
		INSERT INTO category_non_properties
			(non_property_id, category_id, reason, position, is_deduced)
		VALUES (${id}, ${category_id}, ${reasons[id]}, ${position}, TRUE)
	`

	const { err } = await batch(
		deduced_non_properties.map((id, index) => insert_query(id, index + 1)),
	)

	if (err) return

	console.info(
		`Added ${deduced_non_properties.length} non-properties to the database\n`,
	)
}
