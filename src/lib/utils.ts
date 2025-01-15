/**
 * Should be available natively, see
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf
 * But for some reason it doesn't work yet, hence this utility.
 */
export function isSubset<T>(subset: Set<T>, superset: Set<T>): boolean {
	return [...subset].every((elem) => superset.has(elem))
}
