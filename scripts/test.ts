import Set_expected from './expected-data/Set.json'
import Ab_expected from './expected-data/Ab.json'
import Top_expected from './expected-data/Top.json'
import { get_excluded } from './utils'
import { createClient } from '@libsql/client'
import dotenv from 'dotenv'

dotenv.config({ quiet: true })

const DB_URL = process.env.DB_URL
const DB_AUTH_TOKEN = process.env.DB_AUTH_TOKEN

if (!DB_URL) throw new Error('No DB_URL found')

const db = createClient({
	url: DB_URL,
	authToken: DB_AUTH_TOKEN,
})

await test_mutual_duality()

const expected = {
	Set: Set_expected,
	Ab: Ab_expected,
	Top: Top_expected,
} as Record<string, { properties: string[]; non_properties: string[] }>

for (const cat in expected) {
	await test_properties(cat, expected[cat])
}

async function test_properties(
	category_id: string,
	expected: { properties: string[]; non_properties: string[] },
) {
	const [props_res, non_props_res, unknown_props_res] = await db.batch([
		{
			sql: `
				SELECT property_id AS id
				FROM category_properties
				WHERE category_id = ?`,
			args: [category_id],
		},
		{
			sql: `
				SELECT non_property_id AS id
				FROM category_non_properties
				WHERE category_id = ?`,
			args: [category_id],
		},
		{
			sql: `
				SELECT p.id FROM properties p
				WHERE NOT EXISTS
					(
						SELECT 1 FROM category_properties
						WHERE category_id = ? AND property_id = p.id
					)
				AND NOT EXISTS
					(
						SELECT 1 FROM category_non_properties
						WHERE category_id = ? AND non_property_id = p.id
					)
			`,
			args: [category_id, category_id],
		},
	])

	const properties = props_res.rows.map((row) => row.id) as string[]
	const non_properties = non_props_res.rows.map((row) => row.id) as string[]
	const unknown_properties = unknown_props_res.rows.map((row) => row.id) as string[]

	const unexpected_property = get_excluded(properties, expected.properties)

	if (unexpected_property) {
		throw new Error(
			`❌ Unexpected property of ${category_id}: ${unexpected_property}`,
		)
	}

	const expected_property = get_excluded(expected.properties, properties)
	if (expected_property) {
		throw new Error(`❌ Expected property of ${category_id}: ${expected_property}`)
	}

	const unexpected_non_property = get_excluded(non_properties, expected.non_properties)

	if (unexpected_non_property) {
		throw new Error(
			`❌ Unexpected non_property of ${category_id}: ${unexpected_non_property}`,
		)
	}

	const expected_non_property = get_excluded(expected.properties, properties)
	if (expected_non_property) {
		throw new Error(
			`❌ Expected non_property of ${category_id}: ${expected_non_property}`,
		)
	}

	if (unknown_properties.length > 0) {
		throw new Error(
			`❌ Found unknown properties of ${category_id}: ` +
				unknown_properties.join(','),
		)
	}

	console.info(`✅ Properties and non-properties of ${category_id} are correct`)
}

async function test_mutual_duality() {
	const res = await db.execute('SELECT id, dual_property_id FROM properties')
	const dict: Record<string, string | null> = {}

	const properties = res.rows as unknown as {
		id: string
		dual_property_id: string | null
	}[]

	for (const { id, dual_property_id } of properties) {
		dict[id] = dual_property_id
	}

	for (const id in dict) {
		const dual = dict[id]
		if (dual && dict[dual] !== id) {
			throw new Error(`❌ Found non-mutual duality: ${id}, ${dual}`)
		}
	}

	console.info(`✅ Properties are mutually dual`)
}
