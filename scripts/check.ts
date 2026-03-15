import properties_Ab from './data/properties/Ab.json'
import non_properties_Ab from './data/non_properties/Ab.json'
import properties_Top from './data/properties/Top.json'
import non_properties_Top from './data/non_properties/Top.json'
import { Client } from '@libsql/client'
import { are_equal_sets } from './utils'

export async function check(db: Client) {
	await check_properties(db, 'Ab', properties_Ab)
	await check_non_properties(db, 'Ab', non_properties_Ab)
	await check_properties(db, 'Top', properties_Top)
	await check_non_properties(db, 'Top', non_properties_Top)
	await assert_no_unknown_properties(db, 'Set')
	await assert_no_unknown_properties(db, 'Ab')
}

async function check_properties(db: Client, category_id: string, expected: string[]) {
	const properties = await get_properties(db, category_id)
	const ok = are_equal_sets(new Set(properties), new Set(expected))
	if (!ok) throw new Error(`❌ Incorrect properties of ${category_id}`)
	console.info(`✅ Properties of ${category_id} are correct`)
}

async function check_non_properties(db: Client, category_id: string, expected: string[]) {
	const non_properties = await get_non_properties(db, category_id)
	const ok = are_equal_sets(new Set(non_properties), new Set(expected))
	if (!ok) throw new Error(`❌ Incorrect non-properties of ${category_id}`)
	console.info(`✅ Non-properties of ${category_id} are correct`)
}

async function assert_no_unknown_properties(db: Client, category_id: string) {
	const unknown_properties = await get_unknown_properties(db, category_id)
	if (unknown_properties.length > 0) {
		throw new Error(
			`❌ Found ${unknown_properties.length} unknown properties for ${category_id}, expected 0.`,
		)
	}
	console.info(`✅ No unknown properties for ${category_id}`)
}

async function get_properties(db: Client, category_id: string) {
	const res = await db.execute(
		`
			SELECT property_id FROM category_properties
			WHERE category_id = ?
		`,
		[category_id],
	)
	return res.rows.map(({ property_id }) => property_id) as string[]
}

async function get_non_properties(db: Client, category_id: string) {
	const res = await db.execute(
		`
			SELECT non_property_id FROM category_non_properties
			WHERE category_id = ?
		`,
		[category_id],
	)
	return res.rows.map(({ non_property_id }) => non_property_id) as string[]
}

async function get_unknown_properties(db: Client, category_id: string) {
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
