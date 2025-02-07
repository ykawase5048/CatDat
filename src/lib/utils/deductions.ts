import { implications } from '$lib/data/implications.data'
import type { PropertyID } from '$lib/data/properties.data'
import { DeductionSystemWithDuals } from '$lib/logic/DeductionSystemWithDuals'
import { get_dual_property, propertyIDs } from '$lib/utils/data.helpers'

import { categories, type Category } from '$lib/data/categories.data'
import {
	get_non_properties_of_category,
	get_properties_of_category,
} from '$lib/utils/data.helpers'
import { group_items } from '$lib/commons/utils'
import { EntitySystemWithDuals } from '$lib/logic/EntitySystemWithDuals'
import type { EntityDetailed } from '$lib/logic/EntitySystem'

export const property_deduction_system = new DeductionSystemWithDuals<PropertyID>(
	new Set(propertyIDs),
	Array.from(implications),
	get_dual_property,
)

property_deduction_system.init_with_duals()

export const implications_with_duals = property_deduction_system.rules

export const category_system = new EntitySystemWithDuals<Category, PropertyID>(
	property_deduction_system,
)

export type CategoryWithDeducedProperties = EntityDetailed<Category, PropertyID>

for (const category of categories) {
	category_system.add(
		category,
		new Set(get_properties_of_category(category.id)),
		new Set(get_non_properties_of_category(category.id)),
	)
}

export const categories_with_deduced_properties: CategoryWithDeducedProperties[] =
	category_system.entities

export const categories_with_deduced_properties_dictionary = group_items(
	categories_with_deduced_properties,
)
