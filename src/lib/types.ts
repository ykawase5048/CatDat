import type { CategoryID } from './categories/categoryIDs'
import type { Prefix } from './properties/prefix'
import type { PropertyID } from './properties/propertyIDs'
import type { NonEmptyArray } from './utils'

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

export type CategoryDetailed = Category & {
	deduced_properties: PropertyID[]
	deduced_non_properties: PropertyID[]
	unknown_properties: PropertyID[]
}

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
