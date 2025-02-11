import {
	get_category,
	get_dual_properties,
	get_dual_property,
	get_prefix,
	get_property,
	get_related_categories,
	is_valid_category,
	is_valid_property,
	negate_prefix,
} from './data.helpers'

describe('get_category', () => {
	it('returns the category with the given ID', () => {
		const FinAb = get_category('FinAb')
		expect(FinAb.id).toBe('FinAb')
		expect(FinAb.name).toBe('category of finite abelian groups')
	})
})

describe('get_property', () => {
	it('returns the property with the given ID', () => {
		const small = get_property('small')
		expect(small.id).toBe('small')
		expect(small.prefix).toBe('is')
	})
})

describe('get_prefix', () => {
	it("returns 'is' for 'small", () => {
		expect(get_prefix('small')).toBe('is')
	})
	it("returns 'has' for 'finite products'", () => {
		expect(get_prefix('finite products')).toBe('has')
	})
})

describe('is_valid_category', () => {
	it('should return true for FinAb', () => {
		expect(is_valid_category('FinAb')).toBe(true)
	})
	it('should return false for CompAbTop', () => {
		expect(is_valid_category('CompAbTop')).toBe(false)
	})
})

describe('is_valid_property', () => {
	it('should return true for small', () => {
		expect(is_valid_property('small')).toBe(true)
	})
	it('should return false for minimalistic', () => {
		expect(is_valid_property('minimalistic')).toBe(false)
	})
})

describe('negate_prefix', () => {
	it("negates 'has a' to 'does not have a'", () => {
		expect(negate_prefix('has a')).toBe('does not have a')
	})
})

describe('get_related_categories', () => {
	it('should list id, name, and notation of related categories', () => {
		const related_categories = get_related_categories('FinAb')
		expect(related_categories).toContainEqual({
			id: 'Ab',
			name: 'category of abelian groups',
			notation: expect.any(String),
		})

		expect(related_categories).toContainEqual({
			id: 'Abfg',
			name: 'category of finitely generated abelian groups',
			notation: expect.any(String),
		})
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
