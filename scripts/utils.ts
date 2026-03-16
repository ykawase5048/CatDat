export function are_equal_sets<T>(a: Set<T>, b: Set<T>) {
	return a.size === b.size && [...a].every((el) => b.has(el))
}

export function get_excluded<T>(a: T[], b: T[]): T | undefined {
	return a.find((el) => !b.includes(el))
}
