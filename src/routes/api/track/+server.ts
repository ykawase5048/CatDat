import { query } from '$lib/server/db'
import { get_geo_data, is_allowed, is_object } from '$lib/server/utils'
import { json } from '@sveltejs/kit'
import sql from 'sql-template-tag'

export const POST = async (event) => {
	if (!is_allowed(event)) return json({ error: 'Forbidden' }, { status: 403 })

	if (event.request.headers.get('Content-Type') !== 'application/json') {
		return json({ error: 'Invalid Request' }, { status: 400 })
	}

	const body: unknown = await event.request.json()

	const is_valid_body =
		is_object(body) &&
		'device_type' in body &&
		typeof body.device_type === 'string' &&
		'theme' in body &&
		typeof body.theme === 'string'

	if (!is_valid_body) {
		return json({ error: 'Invalid Request Body' }, { status: 400 })
	}

	const { device_type, theme } = body

	const { country } = get_geo_data(event.request)

	const { err } = await query(sql`
        INSERT INTO visits (theme, device_type, country)
        VALUES (${theme}, ${device_type}, ${country})
    `)

	if (err) return json({ error: 'Database error' }, { status: 500 })

	return json({ message: 'Visit has been tracked' })
}
