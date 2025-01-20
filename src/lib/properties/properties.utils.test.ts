import {
	encode_property_ID,
	decode_property_ID,
	get_dual_property,
	get_property_url,
} from './properties.utils'
import { properties_dictionary } from './property.dict'

describe('encode_property_ID', () => {
	it("should return 'locally_small' for 'locally small'", () => {
		expect(encode_property_ID('locally small')).toBe('locally_small')
	})

	it("should return 'abelian' for 'abelian'", () => {
		expect(encode_property_ID('abelian')).toBe('abelian')
	})
})

describe('decode_property_ID', () => {
	it("should return 'locally small' for 'locally_small'", () => {
		expect(decode_property_ID('locally_small')).toBe('locally small')
	})

	it("should return 'abelian' for 'abelian'", () => {
		expect(decode_property_ID('abelian')).toBe('abelian')
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
