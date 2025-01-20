import type { Property } from '$lib/types'
import { properties_dictionary } from './property.dict'
import type { PropertyID } from './propertyIDs'

export function encode_property_ID(id: PropertyID): string {
	return id.replaceAll(' ', '_')
}

export function decode_property_ID(str: string): string {
	return str.replaceAll('_', ' ')
}

export function get_property_url(id: PropertyID) {
	const encoded_ID = encode_property_ID(id)
	return `/property/${encoded_ID}`
}

export function get_dual_property(id: PropertyID): null | PropertyID {
	const property = properties_dictionary[id]
	return property.dual ?? null
}
