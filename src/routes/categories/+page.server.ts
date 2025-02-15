import type { PageServerLoad } from '../missing/$types'

import { get_categories_with_tag } from '$lib/data-utils/data.helpers'

export const load: PageServerLoad = (event) => {
	const tag = event.url.searchParams.get('tag')
	return { categories: get_categories_with_tag(tag), tag }
}
