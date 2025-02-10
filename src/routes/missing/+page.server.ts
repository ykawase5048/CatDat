import type { PageServerLoad } from './$types'
import { select, sum } from '$lib/commons/utils'
import { category_system } from '$lib/data-utils/deductions'
import { CATEGORIES } from '$lib/database/categories.data'
import { get_property, type CategorySimple } from '$lib/data-utils/data.helpers'
import { CATEGORY_MONOMORPHISMS } from '$lib/database/category-monomorphisms.data'
import { CATEGORY_EPIMORPHISMS } from '$lib/database/category-epimorphisms.data'
import { CATEGORY_ISOMORPHISMS } from '$lib/database/category-isomorphisms.data'

const has_todo = (entry: string) => !entry || entry.includes('TODO')

export const load: PageServerLoad = () => {
	const missing_basic_combinations = category_system.get_missing_basic_combinations()

	const missing_basic_combinations_with_prefixes = missing_basic_combinations.map(
		({ assumption, negation }) => ({
			assumption,
			negation,
			assumption_prefix: get_property(assumption).prefix,
			negation_prefix: get_property(negation).prefix,
		}),
	)

	const entities_with_unknown_properties =
		category_system.get_entities_with_unknown_properties()

	const categories_with_unknown_properties: CategorySimple[] = select(
		'id',
		'name',
	).from(entities_with_unknown_properties)

	const categories_with_unknown_special_morphisms: CategorySimple[] = select(
		'id',
		'name',
	).from(
		CATEGORIES.filter((category) => {
			const monomorphisms = CATEGORY_MONOMORPHISMS[category.id]
			const epimorphisms = CATEGORY_EPIMORPHISMS[category.id]
			const isomorphisms = CATEGORY_ISOMORPHISMS[category.id]
			return (
				has_todo(monomorphisms.description) ||
				has_todo(epimorphisms.description) ||
				has_todo(isomorphisms.description)
			)
		}),
	)

	const total_number_unknown_properties = sum(
		entities_with_unknown_properties.map(
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
