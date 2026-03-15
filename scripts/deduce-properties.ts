import type { Transaction, Client } from '@libsql/client'
import dotenv from 'dotenv'

dotenv.config({ quiet: true })

const LOG_DETAILS = process.env.LOG_DETAILS
if (!LOG_DETAILS) console.warn('No LOG_DETAILS found')

type NormalizedImplication = {
	assumptions: Set<string>
	conclusion: string
	prefixes: Record<string, string>
}

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
	console.info('Deduce properties for category:', category_id)

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

	for (let i = 0; i < deduced_properties.length; i++) {
		const id = deduced_properties[i]
		await tx.execute({
			sql: `
				INSERT INTO category_properties (
					property_id,
					category_id,
					reason,
					position,
					is_deduced
				)
				VALUES (?, ?, ?, ?, TRUE)`,
			args: [id, category_id, reasons[id], i + 1],
		})
	}

	console.info(`Added ${deduced_properties.length} properties to the database\n`)
}

async function deduce_non_properties(
	tx: Transaction,
	category_id: string,
	implications: NormalizedImplication[],
) {
	console.info('Deduce non-properties for category:', category_id)

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

		const { prefixes } = implication

		if (properties.has(non_property)) {
			throw new Error(`Contradiction has been found for: ${non_property}`)
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

	for (let i = 0; i < deduced_non_properties.length; i++) {
		const id = deduced_non_properties[i]
		await tx.execute({
			sql: `
					INSERT INTO category_non_properties (
						non_property_id,
						category_id,
						reason,
						position,
						is_deduced
					)
					VALUES (?, ?, ?, ?, TRUE)`,
			args: [id, category_id, reasons[id], i + 1],
		})
	}

	console.info(
		`Added ${deduced_non_properties.length} non-properties to the database\n`,
	)
}

async function get_normalized_implications(
	tx: Transaction,
): Promise<NormalizedImplication[]> {
	const res = await tx.execute(`
        SELECT
            v.assumptions,
            v.conclusions,
            v.is_equivalence,
            (
                SELECT json_group_object(p.id, p.prefix)
                FROM properties p
                WHERE p.id IN (
                    SELECT value FROM json_each(v.assumptions)
                    UNION
                    SELECT value FROM json_each(v.conclusions)
                )
            ) AS prefixes
        FROM implications_view v
    `)

	const all_implications_db = res.rows as unknown as {
		assumptions: string
		conclusions: string
		is_equivalence: number
		prefixes: string
	}[]

	const implications: NormalizedImplication[] = []

	for (const impl of all_implications_db) {
		const assumptions: string[] = JSON.parse(impl.assumptions)
		const conclusions: string[] = JSON.parse(impl.conclusions)
		const prefixes: Record<string, string> = JSON.parse(impl.prefixes)

		for (const conclusion of conclusions) {
			implications.push({
				assumptions: new Set(assumptions),
				conclusion,
				prefixes,
			})
		}

		if (impl.is_equivalence) {
			for (const assumption of assumptions) {
				implications.push({
					assumptions: new Set(conclusions),
					conclusion: assumption,
					prefixes,
				})
			}
		}
	}

	return implications
}

function get_assumption_string(implication: NormalizedImplication): string {
	const { assumptions, prefixes } = implication
	return Array.from(assumptions)
		.map((assumption) => `${prefixes[assumption]} ${assumption}`)
		.join(' and ')
}

function get_conclusion_string(implication: NormalizedImplication): string {
	const { conclusion, prefixes } = implication
	return `${prefixes[conclusion]} ${conclusion}`
}
