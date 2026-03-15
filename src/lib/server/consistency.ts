import sql from 'sql-template-tag'
import { query } from '$lib/server/db'
type AtomicImplication = { assumptions: string[]; conclusion: string }

export async function check_consistency(
	properties: Set<string>,
	non_properties: Set<string>,
) {
	for (const p of properties) {
		if (non_properties.has(p)) return { consistent: false }
	}

	const implications = await get_atomic_implications()
	if (!implications) return null

	const deduced_properties = new Set<string>()

	while (true) {
		const implication = implications.find(
			({ assumptions, conclusion }) =>
				assumptions.every((p) => properties.has(p)) &&
				!properties.has(conclusion),
		)
		if (!implication) break

		const { conclusion } = implication

		if (non_properties.has(conclusion)) return { consistent: false }

		properties.add(conclusion)
		deduced_properties.add(conclusion)
	}

	return { consistent: true }
}

async function get_atomic_implications(): Promise<AtomicImplication[]> {
	const res = await query(sql`
        SELECT assumptions, conclusions, is_equivalence
        FROM implications_view
    `)

	const all_implications_db = res.rows as unknown as {
		assumptions: string
		conclusions: string
		is_equivalence: number
	}[]

	const implications: AtomicImplication[] = []

	for (const impl of all_implications_db) {
		const assumptions: string[] = JSON.parse(impl.assumptions)
		const conclusions: string[] = JSON.parse(impl.conclusions)

		for (const conclusion of conclusions) {
			implications.push({
				assumptions: assumptions.slice(),
				conclusion,
			})
		}

		if (impl.is_equivalence) {
			for (const assumption of assumptions) {
				implications.push({
					assumptions: conclusions.slice(),
					conclusion: assumption,
				})
			}
		}
	}

	return implications
}
