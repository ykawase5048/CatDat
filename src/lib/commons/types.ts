export type Arrayed<T extends readonly unknown[]> = {
	[K in keyof T]: T[K][]
}

type Replace<T, R extends Partial<Record<keyof T, any>>> = Omit<T, keyof R> & R

export type CategoryShort = {
	id: string
	name: string
}

export type CategoryDisplay = {
	id: string
	name: string
	notation: string
	objects: string
	morphisms: string
	description: string
	nlab_link: string | null
}

export type RelatedCategory = Pick<CategoryDisplay, 'id' | 'name' | 'notation'>

export type ImplicationDB = {
	id: string
	is_equivalence: number
	reason: string
	assumptions: string
	conclusions: string
}

export type ImplicationDisplay = Replace<
	ImplicationDB,
	{
		is_equivalence: boolean
		assumptions: string[]
		conclusions: string[]
	}
>

export type PropertyDB = {
	id: string
	prefix: string
	description: string
	dual_property: string | null
	nlab_link: string | null
	invariant_under_equivalences: number
}

export type PropertyDisplay = Replace<
	PropertyDB,
	{ invariant_under_equivalences: boolean }
>

export type DescriptionWithReason = {
	description: string
	reason: string
}

export type CategoryPropertyDB = {
	id: string
	reason: string
	prefix: string
	is_deduced: number
}

export type CategoryProperty = Replace<CategoryPropertyDB, { is_deduced: boolean }>

export type UnknownCategoryProperty = Pick<PropertyDB, 'id' | 'prefix'>
