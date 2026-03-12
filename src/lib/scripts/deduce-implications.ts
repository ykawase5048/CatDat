import { LOG_DETAILS } from '$env/static/private'
import { query } from '$lib/server/db'
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
	const { rows: dual_implications, err } = await query<{ id: string }>(sql`
       INSERT INTO implication_input (
            id,
            assumptions,
            conclusions,
            is_equivalence,
            reason,
            is_deduced
        )
        SELECT
            'dual_' || v.id,
            v.dual_assumptions,
            v.dual_conclusions,
            v.is_equivalence,
            '[dualized] ' || v.reason,
            TRUE
        FROM (
            SELECT
                v.id,
                v.is_equivalence,
                v.reason,
                v.assumptions,
                v.conclusions,
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
        ) v
        WHERE NOT EXISTS (
            SELECT 1
            FROM json_each(v.dual_assumptions) d
            WHERE d.value IS NULL
        )
        AND NOT EXISTS (
            SELECT 1
            FROM json_each(v.dual_conclusions) d
            WHERE d.value IS NULL
        )
        AND (v.dual_assumptions != v.assumptions
            OR v.dual_conclusions != v.conclusions)
            
        RETURNING id;
    `)

	if (err) return

	console.info(`Dualized ${dual_implications.length} implications`)
	if (LOG_DETAILS === 'true') console.info(dual_implications.map((i) => i.id))
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
