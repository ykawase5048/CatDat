export type Arrayed<T extends readonly unknown[]> = {
	[K in keyof T]: T[K][]
}

type Replace<T, R extends Partial<Record<keyof T, any>>> = Omit<T, keyof R> & R

export type CategoryDisplay = {
	id: string
	name: string
	notation: string
	objects: string
	morphisms: string
	description: string | null
	nlab_link: string | null
}

export type CategoryShort = Pick<CategoryDisplay, 'id' | 'name'>

export type RelatedCategory = Pick<CategoryDisplay, 'id' | 'name' | 'notation'>

export type TagObject = { tag: string }

export type CommentObject = { id: number; comment: string }

export type ImplicationDB = {
	id: string
	is_equivalence: number
	reason: string
	assumptions: string
	conclusions: string
	is_deduced: number
	dualized_from?: string | null
}

export type ImplicationDisplay = Replace<
	ImplicationDB,
	{
		is_equivalence: boolean
		is_deduced: boolean
		assumptions: string[]
		conclusions: string[]
	}
>

export type PropertyDB = {
	id: string
	prefix: string
	description: string
	dual_property_id: string | null
	nlab_link: string | null
	invariant_under_equivalences: number
}

export type PropertyDisplay = Replace<
	PropertyDB,
	{ invariant_under_equivalences: boolean }
>

export type PropertyShort = Pick<PropertyDB, 'id' | 'prefix'>

export type DescriptionWithReason = {
	description: string
	reason: string | null
}

export type CategoryPropertyDB = {
	id: string
	reason: string | null
	prefix: string
	is_deduced: number
}

export type CategoryProperty = Replace<CategoryPropertyDB, { is_deduced: boolean }>
