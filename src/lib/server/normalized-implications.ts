import sql from 'sql-template-tag'
import { query } from './db'
import type { NormalizedImplication } from '$lib/commons/types'

export async function get_normalized_implications() {
	const { rows: all_implications_db, err: err_imp } = await query<{
		assumptions: string
		conclusions: string
		is_equivalence: number
		prefixes: string
	}>(sql`
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

	if (err_imp) return null

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

export function get_assumption_string(implication: NormalizedImplication): string {
	const { assumptions, prefixes } = implication
	return Array.from(assumptions)
		.map((assumption) => `${prefixes[assumption]} ${assumption}`)
		.join(' and ')
}

export function get_conclusion_string(implication: NormalizedImplication): string {
	const { conclusion, prefixes } = implication
	return `${prefixes[conclusion]} ${conclusion}`
}
