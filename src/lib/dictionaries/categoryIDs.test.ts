import { is_valid_category } from './categoryIDs'

describe('is valid category', () => {
	it("should return true for 'Set'", () => {
		expect(is_valid_category('Set')).toBe(true)
	})
	it("should return false for 'Bla'", () => {
		expect(is_valid_category('Bla')).toBe(false)
	})
})
