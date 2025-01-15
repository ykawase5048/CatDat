import { isSubset } from './utils'

describe('isSubset', () => {
	it('should return true when subset is a subset of superset', () => {
		const subset = new Set([1, 2, 3])
		const superset = new Set([1, 2, 3, 4, 5])
		expect(isSubset(subset, superset)).toBe(true)
	})

	it('should return false when subset is not a subset of superset', () => {
		const subset = new Set([1, 2, 6])
		const superset = new Set([1, 2, 3, 4, 5])
		expect(isSubset(subset, superset)).toBe(false)
	})

	it('should return true when subset is empty', () => {
		const subset = new Set()
		const superset = new Set([1, 2, 3, 4, 5])
		expect(isSubset(subset, superset)).toBe(true)
	})

	it('should return true when both sets are empty', () => {
		const subset = new Set()
		const superset = new Set()
		expect(isSubset(subset, superset)).toBe(true)
	})

	it('should return false when superset is empty and subset is not', () => {
		const subset = new Set([1, 2, 3])
		const superset = new Set()
		expect(isSubset(subset, superset)).toBe(false)
	})
})
