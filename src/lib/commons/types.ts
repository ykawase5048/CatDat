import type { CategoryID } from '$lib/categories/categoryIDs'
import type { Prefix } from '$lib/properties/properties.utils'
import type { PropertyID } from '$lib/properties/propertyIDs'
import type { NonEmptyArray } from '$lib/commons/utils'
import type { Rule } from '$lib/logic/DeductionSystem'
import type { EntityDetailed } from '$lib/logic/EntitySystem'

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
	| 'analysis'
	| 'order theory'
	| 'measure theory'
	| 'geometry'
	| 'set theory'
	| 'representation theory'
	| 'combinatorics'
	| 'category theory'

export type PreCategory = {
	id: CategoryID
	name: string
	notation: string
	nlab_link?: string
	objects: string
	morphisms: string
	description?: string
	related?: CategoryID[]
	tags: NonEmptyArray<CategoryTag>
	properties: PropertyID[]
	non_properties: PropertyID[]
	special_morphisms: {
		isomorphisms?: string
		monomorphisms?: string
		epimorphisms?: string
	}
}

// same as PreCategory, but with properties and non-properties as sets
export type Category = Omit<PreCategory, 'properties' | 'non_properties'> & {
	properties: Set<PropertyID>
	non_properties: Set<PropertyID>
}

// includes all deduces properties and non-properties
export type CategoryDetailed = EntityDetailed<Category, PropertyID>

// contains only what is relevant for lists of categories
/**
 * @deprecated
 */
export type CategoryShort = Pick<Category, 'id' | 'name'>

export type Property = {
	id: PropertyID
	prefix: Prefix
	nlab_link?: string
	description: string
	dual?: PropertyID
	related?: PropertyID[]
	invariant_under_equivalences?: false
}

export type Implication = Rule<PropertyID>
