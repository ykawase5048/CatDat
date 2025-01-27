import { categories_detailed } from '$lib/categories/categories.dict'
import {
	category_deduction_system,
	get_all_non_properties,
	get_all_properties,
} from '$lib/categories/details'
import type { PropertyID } from '$lib/properties/propertyIDs'

type Combination = {
	assumption: PropertyID
	negation: PropertyID
}

const consistent_basic_combinations: Combination[] =
	category_deduction_system.get_basic_consistent_combinations()

function combination_is_present(combination: Combination): boolean {
	return categories_detailed.some((category) => {
		return (
			get_all_properties(category).includes(combination.assumption) &&
			get_all_non_properties(category).includes(combination.negation)
		)
	})
}

export const missing_basic_combinations: Combination[] =
	consistent_basic_combinations.filter(
		(combination) => !combination_is_present(combination),
	)
