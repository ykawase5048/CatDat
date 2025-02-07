export function group_items<S extends string, T extends { id: S }>(
	array: T[],
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

export function select<T extends Record<string, any>, K extends keyof T>(
	array: T[],
	properties: K[],
): Pick<T, K>[] {
	return array.map((item) => {
		const arr = properties.map((prop) => [prop, item[prop]])
		return Object.fromEntries(arr) as Pick<T, K>
	})
}
