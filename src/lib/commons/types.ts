export type Arrayed<T extends readonly unknown[]> = {
	[K in keyof T]: T[K][]
}

type Replace<T, R extends Partial<Record<keyof T, any>>> = Omit<T, keyof R> & R

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
