import { decode_property_ID } from '$lib/commons/property.url.js'
import type { FunctorPropertyDB } from '$lib/commons/types'
import { query } from '$lib/server/db'
import { render_nested_formulas } from '$lib/server/rendering.js'
import { display_functor_property } from '$lib/server/utils'
import { error } from '@sveltejs/kit'
import sql from 'sql-template-tag'

export const load = async (event) => {
	const id = decode_property_ID(event.params.id)

	const { rows: properties, err } = await query<FunctorPropertyDB>(sql`
        SELECT
            id,
            prefix,
            description,
            nlab_link,
            invariant_under_equivalences,
            dual_property_id
        FROM
            functor_properties
        WHERE id = ${id}
    `)

	if (err) error(500, 'Could not load properties')

	if (!properties.length) error(404, `There is no property with ID '${id}'`)

	const property = display_functor_property(properties[0])

	return render_nested_formulas({ property })
}
