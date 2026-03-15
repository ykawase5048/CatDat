import { createClient } from '@libsql/client'
import fs from 'node:fs/promises'
import path from 'node:path'
import dotenv from 'dotenv'

dotenv.config()

const DB_URL = process.env.DB_URL
const DB_AUTH_TOKEN = process.env.DB_AUTH_TOKEN

if (!DB_URL) throw new Error('No DB_URL found')
if (!DB_AUTH_TOKEN) throw new Error('No DB_AUTH_TOKEN found')

const db = createClient({
	url: DB_URL,
	authToken: DB_AUTH_TOKEN!,
})

await db.execute('PRAGMA foreign_keys = ON')

await db.execute(`
    CREATE TABLE IF NOT EXISTS migrations (
        file TEXT PRIMARY KEY,
        applied_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
`)

const { rows } = await db.execute('SELECT file FROM migrations')
const applied_migrations = new Set<string>(rows.map((row) => row.file) as string[])

const migrations_folder = path.join(process.cwd(), 'database', 'migrations')
const unsorted_files = await fs.readdir(migrations_folder, 'utf8')
const files = unsorted_files.filter((f) => f.endsWith('.sql')).sort()

for (const file of files) {
	if (applied_migrations.has(file)) continue

	const sql = await fs.readFile(path.join(migrations_folder, file), 'utf8')

	const tx = await db.transaction()
	try {
		await tx.executeMultiple(sql)
		await tx.execute({
			sql: 'INSERT INTO migrations (file) VALUES (?)',
			args: [file],
		})
		await tx.commit()
		console.info(`Applied migration: ${file}`)
	} catch (err) {
		console.error(`Failed migration: ${file}`, err)
		await tx.rollback()
		process.exit(1)
	}
}

console.info('All migrations applied')
