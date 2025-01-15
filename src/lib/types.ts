import type { properties_dictionary } from './dictionaries/properties'

export type PropertyName = keyof typeof properties_dictionary

export type Category = {
	id: string
	name: string
	notation: string
	objects: string
	morphisms: string
	description?: string
	nlab_link?: string
	properties: PropertyName[]
	non_properties: PropertyName[]
}

export type CategoryWithProperties = Omit<Category, 'properties' | 'non_properties'> & {
	properties: (Property & { deduced: boolean })[]
	non_properties: (Property & { deduced: boolean })[]
}

export const prefixes = ['is', 'is a', 'is an', 'has', 'has a', 'has an'] as const

export type Property = {
	name: string
	description: string
	prefix: (typeof prefixes)[number]
	dual?: Property['name']
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
