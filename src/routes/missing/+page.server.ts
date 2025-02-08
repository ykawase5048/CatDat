import type { PageServerLoad } from './$types'
import { select, sum } from '$lib/commons/utils'
import { category_system } from '$lib/utils/deductions'
import { CATEGORIES, type Category } from '$lib/data/categories.data'
import { CATEGORY_MONOMORPHISMS } from '$lib/data/category-monomorphisms.data'
import { CATEGORY_EPIMORPHISMS } from '$lib/data/category-epimorphisms.data'
import { CATEGORY_ISOMORPHISMS } from '$lib/data/category-isomorphisms.data'
import { properties_dictionary } from '$lib/utils/data.helpers'

const has_todo = (entry: string) => !entry || entry.includes('TODO')

export const load: PageServerLoad = () => {
	const missing_basic_combinations = category_system.missing_basic_combinations
	const missing_basic_combinations_with_prefixes = missing_basic_combinations.map(
		({ assumption, negation }) => ({
			assumption,
			negation,
			assumption_prefix: properties_dictionary[assumption].prefix,
			negation_prefix: properties_dictionary[negation].prefix,
		}),
	)

	const categories_with_unknown_properties: Pick<Category, 'id' | 'name'>[] = select(
		category_system.entities_with_unknown_properties,
		['id', 'name'],
	)

	const categories_with_unknown_special_morphisms: Pick<Category, 'id' | 'name'>[] =
		select(
			CATEGORIES.filter((category) => {
				const monomorphisms = CATEGORY_MONOMORPHISMS[category.id].description
				const epimorphisms = CATEGORY_EPIMORPHISMS[category.id].description
				const isomorphisms = CATEGORY_ISOMORPHISMS[category.id].description
				return (
					has_todo(monomorphisms) ||
					has_todo(epimorphisms) ||
					has_todo(isomorphisms)
				)
			}),
			['id', 'name'],
		)

	const total_number_unknown_properties = sum(
		category_system.entities_with_unknown_properties.map(
			(category) => category.unknown_properties.size,
		),
	)

	return {
		missing_basic_combinations_with_prefixes,
		categories_with_unknown_properties,
		categories_with_unknown_special_morphisms,
		total_number_unknown_properties,
	}
}
