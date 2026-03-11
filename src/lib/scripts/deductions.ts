import { sleep } from '$lib/commons/utils'
import { batch, query } from '$lib/server/db'
import sql from 'sql-template-tag'

const LOG_DETAILS = false

main()

async function main() {
	const { rows, err } = await query<{ id: string }>(sql`
		SELECT id FROM categories
	`)

	if (err) return

	for (const { id } of rows) {
		await deduce_properties(id)
		await sleep(250)
	}
}

async function deduce_properties(category_id: string) {
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

	const { rows: all_implications_db, err: err_imp } = await query<{
		assumptions: string
		conclusions: string
	}>(sql`
		SELECT id, assumptions, conclusions
		FROM implications_view
	`)

	if (err_imp) return

	// TODO: compute dualized implications
	// TODO: add reasons
	// TODO: add order

	const implications: { assumptions: Set<string>; conclusion: string }[] = []

	for (const impl of all_implications_db) {
		const assumptions = new Set<string>(JSON.parse(impl.assumptions))
		const conclusions: string[] = JSON.parse(impl.conclusions)
		for (const conclusion of conclusions) {
			implications.push({ assumptions, conclusion })
		}
	}

	const deduced_properties = new Set<string>()
	const reasons: Record<string, string> = {}

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
