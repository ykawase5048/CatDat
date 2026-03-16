import properties_Set from './expected-data/properties/Set.json'
import non_properties_Set from './expected-data/non_properties/Set.json'
import properties_Ab from './expected-data/properties/Ab.json'
import non_properties_Ab from './expected-data/non_properties/Ab.json'
import properties_Top from './expected-data/properties/Top.json'
import non_properties_Top from './expected-data/non_properties/Top.json'
import { are_equal_sets } from './utils'
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

const properties_dict = {
	Set: properties_Set,
	Ab: properties_Ab,
	Top: properties_Top,
} as Record<string, string[]>

const non_properties_dict = {
	Set: non_properties_Set,
	Ab: non_properties_Ab,
	Top: non_properties_Top,
} as Record<string, string[]>

for (const cat in properties_dict) {
	await test_properties(cat, properties_dict[cat])
	await test_non_properties(cat, non_properties_dict[cat])
	assert_no_unknown_properties(cat)
}

async function test_properties(category_id: string, expected: readonly string[]) {
	const properties = await get_properties(category_id)
	const ok = are_equal_sets(new Set(properties), new Set(expected))
	if (!ok) throw new Error(`❌ Incorrect properties of ${category_id}`)
	console.info(`✅ Properties of ${category_id} are correct`)
}

async function test_non_properties(category_id: string, expected: readonly string[]) {
	const non_properties = await get_non_properties(category_id)
	const ok = are_equal_sets(new Set(non_properties), new Set(expected))
	if (!ok) throw new Error(`❌ Incorrect non-properties of ${category_id}`)
	console.info(`✅ Non-properties of ${category_id} are correct`)
}

async function assert_no_unknown_properties(category_id: string) {
	const unknown_properties = await get_unknown_properties(category_id)
	const msg =
		`❌ Found ${unknown_properties.length} unknown properties` +
		` for ${category_id}, expected 0.`
	if (unknown_properties.length > 0) throw new Error(msg)
	console.info(`✅ No unknown properties for ${category_id}`)
}

async function get_properties(category_id: string) {
	const res = await db.execute(
		`
			SELECT property_id FROM category_properties
			WHERE category_id = ?
		`,
		[category_id],
	)
	return res.rows.map(({ property_id }) => property_id) as string[]
}

async function get_non_properties(category_id: string) {
	const res = await db.execute(
		`
			SELECT non_property_id FROM category_non_properties
			WHERE category_id = ?
		`,
		[category_id],
	)
	return res.rows.map(({ non_property_id }) => non_property_id) as string[]
}

async function get_unknown_properties(category_id: string) {
	const res = await db.execute(
		`
			SELECT p.id FROM properties p
			WHERE NOT EXISTS (
				SELECT 1 FROM category_properties
				WHERE property_id = p.id AND category_id = ?
			)
			AND NOT EXISTS (
				SELECT 1 FROM category_non_properties
				WHERE non_property_id = p.id AND category_id = ?
			)
			ORDER BY lower(p.id)
		`,
		[category_id, category_id],
	)

	return res.rows.map(({ id }) => id) as string[]
}
