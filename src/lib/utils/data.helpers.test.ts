import { get_dual_properties, get_dual_property, negate_prefix } from './data.helpers'

describe('negate_prefix', () => {
	it("negates 'has a' to 'does not have a'", () => {
		expect(negate_prefix('has a')).toBe('does not have a')
	})
})

describe('get_dual_property', () => {
	it("should return 'small' for 'small'", () => {
		expect(get_dual_property('small')).toBe('small')
	})

	it("should return 'complete' for 'cocomplete'", () => {
		expect(get_dual_property('cocomplete')).toBe('complete')
	})

	it("should return null for 'cartesian closed'", () => {
		expect(get_dual_property('cartesian closed')).toBe(null)
	})
})

describe('get_dual_properties', () => {
	it('should return null when a property has no dual', () => {
		expect(get_dual_properties(['small', 'cartesian closed'])).toBe(null)
	})

	it('should return small,complete for small,cocomplete', () => {
		expect(get_dual_properties(['small', 'cocomplete'])).toEqual([
			'small',
			'complete',
		])
	})
})
