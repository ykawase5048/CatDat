import type { Transaction, Client } from '@libsql/client'
import dotenv from 'dotenv'
import {
	get_assumption_string,
	get_conclusion_string,
	get_normalized_implications,
	NormalizedImplication,
} from './implication.utils'

dotenv.config({ quiet: true })

const LOG_DETAILS = process.env.LOG_DETAILS
if (!LOG_DETAILS) console.warn('No LOG_DETAILS found')

export async function deduce_all_properties(db: Client) {
	const tx = await db.transaction()

	try {
		const implications = await get_normalized_implications(tx)
		if (!implications) return

		const categories = await get_categories(tx)

		for (const { category_id } of categories) {
			await deduce_properties(tx, category_id, implications)
			await deduce_non_properties(tx, category_id, implications)
		}

		await tx.commit()
	} catch (err) {
		console.error(err)
		await tx.rollback()
		throw err
	}
}

async function get_categories(tx: Transaction) {
	const res = await tx.execute(`
		SELECT id AS category_id FROM categories ORDER BY name
	`)
	return res.rows as unknown as { category_id: string }[]
}

async function deduce_properties(
	tx: Transaction,
	category_id: string,
	implications: NormalizedImplication[],
) {
	if (LOG_DETAILS === 'true') {
		console.info('Deduce properties for category:', category_id)
	}

	await tx.execute({
		sql: `
			DELETE FROM category_properties
			WHERE category_id = ? AND is_deduced = TRUE`,
		args: [category_id],
	})

	const props_res = await tx.execute({
		sql: `
			SELECT property_id
			FROM category_properties
			WHERE category_id = ? AND is_deduced = FALSE`,
		args: [category_id],
	})

	const props_rows = props_res.rows as unknown as { property_id: string }[]

	const properties = new Set(
		props_rows.map(({ property_id }) => property_id),
	) as Set<string>

	if (LOG_DETAILS === 'true') {
		console.info(`Found ${properties.size} properties in the database`)
		console.info(Array.from(properties))
	}

	const deduced_properties: string[] = []
	const reasons: Record<string, string> = {}

	while (true) {
		const implication = implications.find(
			({ assumptions, conclusion }) =>
				[...assumptions].every((p) => properties.has(p)) &&
				!properties.has(conclusion),
		)
		if (!implication) break

		const { id: implication_id, conclusion } = implication

		properties.add(conclusion)
		deduced_properties.push(conclusion)

		const assumption_string = get_assumption_string(implication)
		const conclusion_string = get_conclusion_string(implication)

		const ref = `(see <a href="/implication/${implication_id}">here</a>)`
		const reason = `Since it ${assumption_string}, it ${conclusion_string} ${ref}.`

		reasons[conclusion] = reason
	}

	if (LOG_DETAILS === 'true') {
		console.info(`${deduced_properties.length} properties have been deduced`)
		console.info(deduced_properties)
	}

	if (deduced_properties.length > 0) {
		const value_fragments: string[] = []
		const values: (string | number)[] = []

		for (let i = 0; i < deduced_properties.length; i++) {
			const id = deduced_properties[i]
			value_fragments.push(`(?, ?, ?, ?, TRUE)`)
			values.push(id, category_id, reasons[id], i + 1)
		}

		const insert_sql = `
			INSERT INTO category_properties (
				property_id, category_id, reason, position, is_deduced
			)
			VALUES
			${value_fragments.join(',\n')}`

		await tx.execute({ sql: insert_sql, args: values })
	}

	console.info(
		`Added ${deduced_properties.length} properties for ${category_id} to the database`,
	)
}

async function deduce_non_properties(
	tx: Transaction,
	category_id: string,
	implications: NormalizedImplication[],
) {
	if (LOG_DETAILS === 'true') {
		console.info('Deduce non-properties for category:', category_id)
	}

	await tx.execute({
		sql: `
			DELETE FROM category_non_properties
			WHERE category_id = ? AND is_deduced = TRUE`,
		args: [category_id],
	})

	const props_res = await tx.execute({
		sql: `
			SELECT property_id
			FROM category_properties
			WHERE category_id = ?
			`,
		args: [category_id],
	})

	const props_rows = props_res.rows as unknown as { property_id: string }[]

	const properties = new Set(props_rows.map(({ property_id }) => property_id))

	const non_props_res = await tx.execute({
		sql: `
			SELECT non_property_id
			FROM category_non_properties
			WHERE category_id = ? AND is_deduced = FALSE
			`,
		args: [category_id],
	})

	const non_props_rows = non_props_res.rows as unknown as {
		non_property_id: string
	}[]

	const non_properties = new Set(
		non_props_rows.map(({ non_property_id }) => non_property_id),
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
					[...implication.assumptions].every(
						(q) => q === p || properties.has(q),
					)
				if (is_valid) return { implication, non_property: p }
			}
		}

		return null
	}

	while (true) {
		const next = get_next_implication()
		if (!next) break

		const { implication, non_property } = next

		const { id: implication_id, prefixes } = implication

		if (properties.has(non_property)) {
			throw new Error(`Contradiction has been found for: ${non_property}`)
		}

		non_properties.add(non_property)
		deduced_non_properties.push(non_property)

		const assumption_string = get_assumption_string(implication)
		const conclusion_string = get_conclusion_string(implication)

		const ref = `(see <a href="/implication/${implication_id}">here</a>)`

		const reason =
			`Assume that it ${prefixes[non_property]} ${non_property}. ` +
			`But since it ${assumption_string}, it ${conclusion_string} ${ref} – contradiction.`

		reasons[non_property] = reason
	}

	if (LOG_DETAILS === 'true') {
		console.info(`${deduced_non_properties.length} non-properties have been deduced`)
		console.info(deduced_non_properties)
	}

	if (deduced_non_properties.length > 0) {
		const value_fragments: string[] = []
		const values: (string | number)[] = []

		for (let i = 0; i < deduced_non_properties.length; i++) {
			const id = deduced_non_properties[i]
			value_fragments.push('(?, ?, ?, ?, TRUE)')
			values.push(id, category_id, reasons[id], i + 1)
		}

		const insert_query = `
			INSERT INTO category_non_properties (
				non_property_id, category_id, reason, position, is_deduced
			)
			VALUES
			${value_fragments.join(',\n')}`

		await tx.execute({ sql: insert_query, args: values })
	}

	console.info(
		`Added ${deduced_non_properties.length} non-properties for ${category_id} to the database`,
	)
}
