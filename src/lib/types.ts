import type { category_properties_dictionary } from './dictionaries/category-properties'

export type Category = {
	id: number
	name: string
	notation: string
	objects: string
	morphisms: string
	description?: string
	properties: (keyof typeof category_properties_dictionary)[]
	non_properties: (keyof typeof category_properties_dictionary)[]
}

export type CategoryWithProperties = Omit<Category, 'properties' | 'non_properties'> & {
	properties: CategoryProperty[]
	non_properties: CategoryProperty[]
}

export const prefixes = ['is', 'is a', 'is an'] as const

export type CategoryProperty = {
	id: number
	name: string
	description: string
	prefix: (typeof prefixes)[number]
}

export type CategoryPropertyImplication = {
	assumption:
		| keyof typeof category_properties_dictionary
		| (keyof typeof category_properties_dictionary)[]
	conclusion:
		| keyof typeof category_properties_dictionary
		| (keyof typeof category_properties_dictionary)[]
}
