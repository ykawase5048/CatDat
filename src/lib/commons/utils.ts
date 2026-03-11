export function group_items<S extends string, T extends { id: S }>(
	array: T[] | readonly T[],
): Record<S, T> {
	// @ts-expect-error will build up the object
	const acc: Record<S, T> = {}
	for (const item of array) {
		acc[item.id] = item
	}
	return acc
}

export type NonEmptyArray<T> = [T, ...T[]]

export function is_object(obj: unknown): obj is Record<string, unknown> {
	return obj != null && obj.constructor.name === 'Object'
}

export const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0)

export function concatenate_info(items: string[] | undefined | null) {
	return items?.join(', ') || '-'
}

export function select<T extends Record<string, any>, K extends keyof T>(...keys: K[]) {
	return {
		from: (array: T[] | readonly T[]): Pick<T, K>[] => {
			return array.map((item) => {
				const arr = keys.map((key) => [key, item[key]])
				return Object.fromEntries(arr)
			})
		},
	}
}

export function equal_up_to_order(a: string[], b: string[]): boolean {
	return (
		a.length === b.length &&
		JSON.stringify(a.toSorted()) === JSON.stringify(b.toSorted())
	)
}

export const sleep = (delay: number) => new Promise<void>((res) => setTimeout(res, delay))
