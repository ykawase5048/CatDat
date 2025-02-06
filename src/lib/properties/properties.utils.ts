import { DeductionSystemWithDuals } from '$lib/logic/DeductionSystemWithDuals'
import { implications } from '$lib/implications/implications'
import type { Property } from '$lib/commons/types'
import { group_items } from '$lib/commons/utils'
import { properties } from './properties'
import { PROPERTY_IDs, type PropertyID } from './propertyIDs'

/**
 * @deprecated
 */
export const properties_dictionary = group_items<PropertyID, Property>(
	properties as Property[],
)
const ENCODE_MAP: Record<string, string> = {
	' ': '_',
	'ℵ₁': 'aleph1',
}

const DECODE_MAP: Record<string, string> = {
	_: ' ',
	aleph1: 'ℵ₁',
}

export function encode_property_ID(id: string): string {
	let encoded = id
	for (const key in ENCODE_MAP) {
		encoded = encoded.replaceAll(key, ENCODE_MAP[key])
	}
	return encoded
}

export function decode_property_ID(str: string): string {
	let decoded = str
	for (const key in DECODE_MAP) {
		decoded = decoded.replaceAll(key, DECODE_MAP[key])
	}
	return decoded
}

export function get_property_url(id: PropertyID) {
	return `/property/${encode_property_ID(id)}`
}

/**
 * @deprecated
 */
export function get_dual_property(id: PropertyID): null | PropertyID {
	return properties_dictionary[id].dual ?? null
}

/**
 * @deprecated
 */
export function get_dual_properties(ids: PropertyID[]): null | PropertyID[] {
	const duals = ids.map(get_dual_property)
	if (duals.includes(null)) return null
	return duals as PropertyID[]
}

/**
 * @deprecated
 */
export const PREFIX_CONFIG = {
	'is': 'is not',
	'is a': 'is not a',
	'is an': 'is not an',
	'has': 'does not have',
	'has a': 'does not have a',
	'has an': 'does not have an',
} as const

/**
 * @deprecated
 */
export type Prefix = keyof typeof PREFIX_CONFIG

export function negate_prefix(prefix: Prefix) {
	return PREFIX_CONFIG[prefix]
}

export const property_deduction_system = new DeductionSystemWithDuals<PropertyID>(
	new Set(PROPERTY_IDs),
	[...implications],
	get_dual_property,
)

property_deduction_system.init_with_duals()

export const implications_with_duals = property_deduction_system.rules
