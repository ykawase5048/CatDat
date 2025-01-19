import type { CategoryID } from './categories/categoryIDs'
import type { PropertyName } from './dictionaries/properties'

export type Category = {
	id: CategoryID
	name: string
	notation: string
	objects: string
	morphisms: string
	description?: string
	nlab_link?: string
	properties: PropertyName[]
	non_properties: PropertyName[]
	related?: CategoryID[]
}

export type CategoryDetailed = Omit<Category, 'properties' | 'non_properties'> & {
	properties: (Property & { deduced: boolean })[]
	non_properties: (Property & { deduced: boolean })[]
	unknown_properties: Property[]
}

export const prefixes = ['is', 'is a', 'is an', 'has', 'has a', 'has an'] as const

export type Prefix = (typeof prefixes)[number]

export type Property = {
	name: string // cannot use PropertyName because of circularity
	description: string
	prefix: Prefix
	dual?: string
	related?: string[]
}

export type Implication = {
	equivalent?: boolean
	assumptions: PropertyName[]
	conclusions: PropertyName[]
}

export type NormalizedImplication = {
	assumptions: Set<PropertyName>
	conclusion: PropertyName
}
