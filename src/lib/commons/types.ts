export type Arrayed<T extends readonly unknown[]> = {
	[K in keyof T]: T[K][]
}

export type ImplicationDisplay = {
	id: string
	is_equivalence: boolean
	reason: string
	assumptions: string[]
	conclusions: string[]
}
