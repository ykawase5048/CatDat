export type Arrayed<T extends readonly unknown[]> = {
	[K in keyof T]: T[K][]
}
