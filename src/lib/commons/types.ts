import type { CategoryID } from '$lib/categories/categoryIDs'
import type { Prefix } from '$lib/properties/properties.utils'
import type { PropertyID } from '$lib/properties/propertyIDs'
import type { NonEmptyArray } from '$lib/commons/utils'
import type { EntityWithAllProperties } from '$lib/logic/EntitySystem'

type CategoryTag =
	| 'basic'
	| 'intermediate'
	| 'advanced'
	| 'well-behaved'
	| 'badly-behaved'
	| 'artificial'
	| 'algebra'
	| 'algebraic geometry'
	| 'topology'
	| 'order theory'
	| 'measure theory'
	| 'geometry'
	| 'set theory'
	| 'representation theory'
	| 'combinatorics'
	| 'category theory'

export type Category = {
	id: CategoryID
	name: string
	notation: string
	objects: string
	morphisms: string
	description?: string
	nlab_link?: string
	properties: PropertyID[]
	non_properties: PropertyID[]
	related?: CategoryID[]
	tags: NonEmptyArray<CategoryTag>
}

export type CategoryImproved = Omit<Category, 'properties' | 'non_properties'> & {
	properties: Set<PropertyID>
	non_properties: Set<PropertyID>
}

export type CategoryDetailed = EntityWithAllProperties<CategoryImproved, PropertyID>

export type RelatedCategory = { id: CategoryID; name: string }

export type Property = {
	id: PropertyID
	description: string
	prefix: Prefix
	dual?: PropertyID
	related?: PropertyID[]
	invariant_under_equivalences?: false
	nlab_link?: string
}

export type Implication = {
	equivalent?: boolean
	assumptions: PropertyID[]
	conclusions: PropertyID[]
}
