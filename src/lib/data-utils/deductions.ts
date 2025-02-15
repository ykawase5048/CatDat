import { group_items } from '$lib/commons/utils'
import {
	get_dual_property,
	get_non_properties,
	get_prefix,
	get_properties,
	negate_prefix,
	propertyIDs,
} from '$lib/data-utils/data.helpers'
import { CATEGORIES, type CategoryID } from '$lib/database/categories/categories.data'
import { IMPLICATIONS } from '$lib/database/categories/implications.data'
import type { Prefix } from '$lib/database/categories/prefix.data'
import type { PropertyID } from '$lib/database/categories/properties.data'
import { DeductionSystem } from '$lib/logic/DeductionSystem'
import type { Entity } from '$lib/logic/Entity'
import { EntitySystem } from '$lib/logic/EntitySystem'
import { ReasonHandler } from '$lib/logic/ReasonHandler'

export const property_deduction_system = new DeductionSystem<Prefix, PropertyID>(
	new Set(propertyIDs),
	Array.from(IMPLICATIONS),
	get_dual_property,
)

export const implications_with_duals = property_deduction_system.rules

export const category_system = new EntitySystem<Prefix, CategoryID, PropertyID>(
	property_deduction_system,
)

export type CategoryWithDeducedProperties = Entity<Prefix, CategoryID, PropertyID>

const reason_handler = new ReasonHandler<Prefix, PropertyID>(get_prefix, negate_prefix)

for (const category of CATEGORIES) {
	category_system.add(
		category.id,
		get_properties(category.id),
		get_non_properties(category.id),
		reason_handler,
	)
}

export const categories_with_deduced_properties: CategoryWithDeducedProperties[] =
	category_system.entities

export const categories_with_deduced_properties_dictionary = group_items(
	categories_with_deduced_properties,
)

/**
 * We currently do not need this, maybe later.
 */
// export const morphism_deduction_system = new DeductionSystem<'is a', MorphismTypeID>(
// 	new Set(MORPHISM_TYPES.map((m) => m.id)),
// 	select('id', 'assumptions', 'conclusions', 'reason').from(
// 		MORPHISM_IMPLICATIONS.filter((m) => !m.requirements),
// 	),
// 	get_dual_morphism,
// )
