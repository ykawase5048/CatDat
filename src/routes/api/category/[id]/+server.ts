import { error } from '@sveltejs/kit'
import { json } from '@sveltejs/kit'
import type { RequestHandler } from '@sveltejs/kit'

import { is_valid_category } from '$lib/data-utils/data.helpers'
import { get_detailed_category } from '$lib/data-utils/details'

export const GET: RequestHandler = (event) => {
	const id = event.params.id
	if (!id) return error(404, 'category ID is required')

	const is_valid = is_valid_category(id)
	if (!is_valid) return error(404, 'Invalid category ID')

	const detailed_category = get_detailed_category(id)

	return json({ data: detailed_category })
}
