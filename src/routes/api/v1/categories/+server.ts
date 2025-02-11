import { get_detailed_category } from '$lib/data-utils/details'
import { CATEGORIES } from '$lib/database/categories.data'
import { json, type RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async (event) => {
	const show_all = event.url.searchParams.has('all')
	if (!show_all) return json(CATEGORIES)
	const categories_with_details = CATEGORIES.map((category) =>
		get_detailed_category(category.id),
	)
	return json(categories_with_details)
}
