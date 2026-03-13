import { DB_AUTH_TOKEN_HTTP, DB_HTTP_URL, INTERNAL_API_KEY } from '$env/static/private'
import { json } from '@sveltejs/kit'

export const GET = async (event) => {
	const auth = event.request.headers.get('x-api-key')
	if (auth !== INTERNAL_API_KEY) {
		return new Response('Unauthorized', { status: 401 })
	}

	const res = await fetch(`${DB_HTTP_URL}/dump`, {
		headers: {
			Authorization: `Bearer ${DB_AUTH_TOKEN_HTTP}`,
		},
	})

	if (!res.ok) {
		return json({ error: 'Bad Gateway' }, { status: 501 })
	}

	return new Response(res.body, {
		headers: {
			'content-type': 'application/sql',
		},
	})
}
