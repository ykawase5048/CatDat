import type { PageServerLoad } from './$types'
import { select, sum } from '$lib/commons/utils'
import { category_system } from '$lib/utils/deductions'
import { CATEGORIES, type Category } from '$lib/data/categories.data'
import { get_epis, get_isos, get_monos, get_property } from '$lib/utils/data.helpers'

const has_todo = (entry: string) => !entry || entry.includes('TODO')

export const load: PageServerLoad = () => {
	const missing_basic_combinations = category_system.missing_basic_combinations
	const missing_basic_combinations_with_prefixes = missing_basic_combinations.map(
		({ assumption, negation }) => ({
			assumption,
			negation,
			assumption_prefix: get_property(assumption).prefix,
			negation_prefix: get_property(negation).prefix,
		}),
	)

	const categories_with_unknown_properties: Pick<Category, 'id' | 'name'>[] = select(
		category_system.entities_with_unknown_properties,
		['id', 'name'],
	)

	const categories_with_unknown_special_morphisms: Pick<Category, 'id' | 'name'>[] =
		select(
			CATEGORIES.filter((category) => {
				const monomorphisms = get_monos(category.id)
				const epimorphisms = get_epis(category.id)
				const isomorphisms = get_isos(category.id)
				return (
					has_todo(monomorphisms.description) ||
					has_todo(epimorphisms.description) ||
					has_todo(isomorphisms.description)
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
