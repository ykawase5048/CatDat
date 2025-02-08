import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'

import { max_categories } from '../compare.config'
import { render_formulas } from '$lib/commons/rendering'
import { get_category, is_valid_category } from '$lib/data-utils/data.helpers'
import {
	categories_with_deduced_properties_dictionary,
	category_system,
} from '$lib/data-utils/deductions'

export const load: PageServerLoad = (event) => {
	const ids = event.params.ids.split('/')
	const is_valid = ids.every(is_valid_category)

	if (!is_valid) throw error(404, 'Invalid query')

	if (ids.length > max_categories) throw error(404, 'Too many categories')

	const compared_categories_with_properties = ids.map(
		(id) => categories_with_deduced_properties_dictionary[id],
	)

	const comparison_table = category_system.get_comparison_table(
		compared_categories_with_properties,
	)

	if (!comparison_table) {
		return error(404, 'Invalid query')
	}

	const compared_categories = compared_categories_with_properties.map((category) => {
		const { id, name, notation } = get_category(category.id)
		return {
			id,
			name,
			notation: render_formulas(notation),
		}
	})

	return {
		compared_categories,
		comparison_table,
	}
}
