import { decode_property_ID, encode_property_ID, get_property_url } from './property.url'

describe('encode_property_ID', () => {
	it("should return 'locally_small' for 'locally small'", () => {
		expect(encode_property_ID('locally small')).toBe('locally_small')
	})

	it("should return 'abelian' for 'abelian'", () => {
		expect(encode_property_ID('abelian')).toBe('abelian')
	})

	it("should return 'locally aleph1-presentable'", () => {
		expect(encode_property_ID('locally ℵ₁-presentable')).toBe(
			'locally_aleph1-presentable',
		)
	})
})

describe('decode_property_ID', () => {
	it("should return 'locally small' for 'locally_small'", () => {
		expect(decode_property_ID('locally_small')).toBe('locally small')
	})

	it("should return 'abelian' for 'abelian'", () => {
		expect(decode_property_ID('abelian')).toBe('abelian')
	})

	it("should return 'locally ℵ₁-presentable'", () => {
		expect(decode_property_ID('locally_aleph1-presentable')).toBe(
			'locally ℵ₁-presentable',
		)
	})
})

describe('get_property_url', () => {
	it("should return '/property/locally_small'", () => {
		expect(get_property_url('locally small')).toBe('/property/locally_small')
	})

	it("should return '/property/abelian'", () => {
		expect(get_property_url('abelian')).toBe('/property/abelian')
	})
})
