import { Transaction } from '@libsql/client'

export type NormalizedImplication = {
	id: string
	assumptions: Set<string>
	conclusion: string
	prefixes: Record<string, string>
}

export async function get_normalized_implications(
	tx: Transaction,
): Promise<NormalizedImplication[]> {
	const res = await tx.execute(`
        SELECT
			v.id,
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
		id: string
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
				id: impl.id,
				assumptions: new Set(assumptions),
				conclusion,
				prefixes,
			})
		}

		if (impl.is_equivalence) {
			for (const assumption of assumptions) {
				implications.push({
					id: impl.id,
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
