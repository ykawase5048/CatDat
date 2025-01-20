import { categories_detailed } from '$lib/categories/categories.dict'
import { category_deduction_system } from '$lib/categories/details'
import { properties } from '$lib/properties/properties'
import type { PropertyID } from '$lib/properties/propertyIDs'

export const properties_without_counterexample = properties.filter((p) =>
	categories_detailed.every((category) =>
		category.properties.some((q) => q.id === p.id),
	),
)

type Combination = {
	assumption: PropertyID
	negation: PropertyID
}

const consistent_basic_combinations: Combination[] =
	category_deduction_system.get_basic_consistent_combinations()

function combination_is_present(combination: Combination): boolean {
	return categories_detailed.some((catergory) => {
		return (
			catergory.properties.some((p) => p.id === combination.assumption) &&
			catergory.non_properties.some((q) => q.id === combination.negation)
		)
	})
}

export const missing_basic_combinations: Combination[] =
	consistent_basic_combinations.filter(
		(combination) => !combination_is_present(combination),
	)
