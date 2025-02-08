import {
	get_category,
	get_dual_properties,
	get_dual_property,
	get_epis,
	get_isos,
	get_monos,
	get_property,
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

describe('get_monos, get_epis, get_isos', () => {
	it('should return the correct info about monos, epis, isos', () => {
		const id = 'FinAb'
		const monos = get_monos(id)
		const epis = get_epis(id)
		const isos = get_isos(id)
		expect(monos.description).toContain('injective')
		expect(epis.description).toContain('surjective')
		expect(isos.description).toContain('bijective')
	})
})
