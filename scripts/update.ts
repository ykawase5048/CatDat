import { type Client, createClient } from '@libsql/client'
import dotenv from 'dotenv'
import { migrate } from './migrate'
import { deduce_implications } from './deduce-implications'
import { deduce_all_properties } from './deduce-properties'
import { check } from './check'

dotenv.config({ quiet: true })

const DB_URL = process.env.DB_URL
const DB_AUTH_TOKEN = process.env.DB_AUTH_TOKEN

if (!DB_URL) throw new Error('No DB_URL found')
if (!DB_AUTH_TOKEN) throw new Error('No DB_AUTH_TOKEN found')

const db = createClient({
	url: DB_URL,
	authToken: DB_AUTH_TOKEN!,
})

await db.execute('PRAGMA foreign_keys = ON')

async function update(db: Client) {
	const has_migrated = await migrate(db)
	if (!has_migrated) return
	console.info('')
	await deduce_implications(db)
	console.info('')
	await deduce_all_properties(db)
	console.info('')
	await check(db)
}

await update(db)
