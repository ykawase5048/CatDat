import { sleep } from '$lib/commons/utils'
import { batch, query } from '$lib/server/db'
import sql from 'sql-template-tag'

const LOG_DETAILS = false

main()

async function main() {
	const { rows, err } = await query<{ category_id: string }>(sql`
		SELECT id AS category_id FROM categories
	`)

	if (err) return

	const implications = await get_normalized_implications()
	if (!implications) return

	for (const { category_id } of rows) {
		await deduce_properties(category_id, implications)
		await deduce_non_properties(category_id, implications)
		await sleep(100)
	}
}

type NormalizedImplication = { assumptions: Set<string>; conclusion: string }

async function get_normalized_implications() {
	const { rows: all_implications_db, err: err_imp } = await query<{
		assumptions: string
		conclusions: string
		is_equivalence: number
	}>(sql`
		SELECT id, assumptions, conclusions, is_equivalence
		FROM implications_view
	`)

	if (err_imp) return null

	const implications: NormalizedImplication[] = []

	for (const impl of all_implications_db) {
		const assumptions: string[] = JSON.parse(impl.assumptions)
		const conclusions: string[] = JSON.parse(impl.conclusions)
		for (const conclusion of conclusions) {
			implications.push({
				assumptions: new Set(assumptions),
				conclusion,
			})
		}

		if (impl.is_equivalence) {
			for (const assumption of assumptions) {
				implications.push({
					assumptions: new Set(conclusions),
					conclusion: assumption,
				})
			}
		}
	}

	return implications
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

	if (LOG_DETAILS) {
		console.info(`Found ${properties.size} properties in the database`)
		console.info(Array.from(properties))
	}

	const deduced_properties = new Set<string>()
	const reasons: Record<string, string> = {}

	// TODO: add order of deduced properties in db
	while (true) {
		const implication = implications.find(
			({ assumptions, conclusion }) =>
				assumptions.isSubsetOf(properties) && !properties.has(conclusion),
		)
		if (!implication) break
		const { assumptions, conclusion } = implication

		properties.add(conclusion)
		deduced_properties.add(conclusion)

		// TODO: add prefixes to the reason text, and make it readable
		const reason = `${Array.from(assumptions).join(', ')} => ${conclusion}.`
		reasons[conclusion] = reason
	}

	const deduced_properties_list = Array.from(deduced_properties)

	if (LOG_DETAILS) {
		console.info(`${deduced_properties.size} properties have been deduced`)
		console.info(deduced_properties_list)
	}

	const insert_query = (id: string) => sql`
		INSERT INTO category_properties
			(property_id, category_id, reason, is_deduced)
		VALUES (${id}, ${category_id}, ${reasons[id]}, TRUE)
	`

	const { err } = await batch(deduced_properties_list.map(insert_query))

	if (err) return

	console.info(`Added ${deduced_properties.size} properties to the database\n`)
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

	if (LOG_DETAILS) {
		console.info(`Found ${non_properties.size} non-properties in the database`)
		console.info(Array.from(non_properties))
	}

	const deduced_non_properties = new Set<string>()
	const reasons: Record<string, string> = {}

	// TODO: add order of deduced non-properties in db

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

		if (properties.has(non_property)) {
			throw new Error('Contradiction has been found')
		}

		non_properties.add(non_property)
		deduced_non_properties.add(non_property)

		// TODO: add prefixes, and make it readable
		const reason = `Assume ${non_property}. But ${[...implication.assumptions].join(', ')} => ${implication.conclusion}. This is a contradiction.`
		reasons[non_property] = reason
	}

	const deduced_non_properties_list = Array.from(deduced_non_properties)

	if (LOG_DETAILS) {
		console.info(`${deduced_non_properties.size} non-properties have been deduced`)
		console.info(deduced_non_properties_list)
	}

	const insert_query = (id: string) => sql`
		INSERT INTO category_non_properties
			(non_property_id, category_id, reason, is_deduced)
		VALUES (${id}, ${category_id}, ${reasons[id]}, TRUE)
	`

	const { err } = await batch(deduced_non_properties_list.map(insert_query))

	if (err) return

	console.info(`Added ${deduced_non_properties.size} non-properties to the database\n`)
}
