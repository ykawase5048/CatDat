import type { PageServerLoad } from './$types'
import { select, sum } from '$lib/commons/utils'
import { category_system } from '$lib/utils/deductions'
import { categories, type Category } from '$lib/data/categories.data'
import { category_monomorphisms } from '$lib/data/category-monomorphisms.data'
import { category_epimorphisms } from '$lib/data/category-epimorphisms.data'
import { category_isomorphisms } from '$lib/data/category-isomorphisms.data'

const has_todo = (entry: string | undefined) => !entry || entry.includes('TODO')

export const load: PageServerLoad = () => {
	const missing_basic_combinations = category_system.missing_basic_combinations

	const categories_with_unknown_properties: Pick<Category, 'id' | 'name'>[] = select(
		category_system.entities_with_unknown_properties,
		['id', 'name'],
	)

	const categories_with_unknown_special_morphisms: Pick<Category, 'id' | 'name'>[] =
		select(
			categories.filter((category) => {
				const monomorphisms = category_monomorphisms[category.id]?.description
				const epimorphisms = category_epimorphisms[category.id]?.description
				const isomorphisms = category_isomorphisms[category.id]?.description
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
		missing_basic_combinations,
		categories_with_unknown_properties,
		categories_with_unknown_special_morphisms,
		total_number_unknown_properties,
	}
}
