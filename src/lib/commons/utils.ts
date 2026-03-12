export function is_string_array(arr: unknown): arr is string[] {
	return Array.isArray(arr) && arr.every((el) => typeof el === 'string')
}
