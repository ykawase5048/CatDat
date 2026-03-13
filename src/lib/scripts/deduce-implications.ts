import { LOG_DETAILS } from '$env/static/private'
import { batch, query } from '$lib/server/db'
import { are_equal_sets } from '$lib/server/utils'
import sql from 'sql-template-tag'

deduce_implications()

async function deduce_implications() {
	const { err: err_clear } = await query(sql`
        DELETE FROM implications WHERE is_deduced = TRUE    
    `)

	if (err_clear) return

	await create_dualized_implications()
	await create_self_dual_implications()
}

async function create_dualized_implications() {
	const { rows: implications, err: err_impl } = await query<{
		id: string
		assumptions: string
		conclusions: string
		dual_assumptions: string
		dual_conclusions: string
		is_equivalence: boolean
		reason: string | null
	}>(sql`
        SELECT
            v.id,
            v.assumptions,
            v.conclusions,
            v.is_equivalence,
            v.reason,
            (
                SELECT json_group_array(p.dual_property_id)
                FROM json_each(v.assumptions) a
                JOIN properties p ON p.id = a.value
            ) AS dual_assumptions,
            (
                SELECT json_group_array(p.dual_property_id)
                FROM json_each(v.conclusions) c
                JOIN properties p ON p.id = c.value
            ) AS dual_conclusions
        FROM implications_view v
        WHERE v.is_deduced = FALSE
    `)

	if (err_impl) return

	const dualizable_implications = implications.filter((impl) => {
		const has_null =
			JSON.parse(impl.dual_assumptions).includes(null) ||
			JSON.parse(impl.dual_conclusions).includes(null)
		if (has_null) return false

		const assumptions = new Set(JSON.parse(impl.assumptions))
		const conclusions = new Set(JSON.parse(impl.conclusions))
		const dual_assumptions = new Set(JSON.parse(impl.dual_assumptions))
		const dual_conclusions = new Set(JSON.parse(impl.dual_conclusions))

		return (
			!are_equal_sets(assumptions, dual_assumptions) ||
			!are_equal_sets(conclusions, dual_conclusions)
		)
	})

	const { err } = await batch(
		dualizable_implications.map(
			(impl) => sql`
            INSERT INTO implication_input (
                id,
                assumptions,
                conclusions,
                is_equivalence,
                reason,
                is_deduced
            ) VALUES (
                ${`dual_${impl.id}`},
                ${impl.dual_assumptions},
                ${impl.dual_conclusions},
                ${impl.is_equivalence},
                ${`[dualized] ${impl.reason}`},
                TRUE
            )`,
		),
	)

	if (err) return

	console.info(`Dualized ${dualizable_implications.length} implications`)
	if (LOG_DETAILS === 'true') console.info(dualizable_implications.map((i) => i.id))
}

async function create_self_dual_implications() {
	const { rows: self_dual_implications, err } = await query<{
		id: string
	}>(sql`
        INSERT INTO implication_input (
            id,
            assumptions,
            conclusions,
            is_equivalence,
            reason,
            is_deduced
        )
        SELECT
            'selfdual_' || p.id,
            json_array('self-dual', p.id),
            json_array(p.dual_property_id),
            FALSE,
            'trivial by self-duality',
            TRUE
        FROM
            properties p
        WHERE
            p.dual_property_id IS NOT NULL
            AND p.id != 'self-dual'
            AND p.id != p.dual_property_id
            AND p.invariant_under_equivalences = TRUE
        RETURNING id
    `)

	if (err) return

	console.info(`Created ${self_dual_implications.length} self-dual implications`)
	if (LOG_DETAILS === 'true') console.info(self_dual_implications.map((i) => i.id))
}
