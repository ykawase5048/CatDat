import type { CategoryID } from './categories/categoryIDs'
import type { Prefix } from './properties/prefix'
import type { PropertyID } from './properties/propertyIDs'

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
}

export type CategoryDetailed = Omit<Category, 'properties' | 'non_properties'> & {
	properties: (Property & { deduced: boolean })[]
	non_properties: (Property & { deduced: boolean })[]
	unknown_properties: Property[]
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
