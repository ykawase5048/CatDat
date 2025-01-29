import { DeductionSystemWithDuals } from '$lib/DeductionSystemWithDuals'
import { implications } from '$lib/implications/implications'
import type { Property } from '$lib/types'
import { group_items } from '$lib/utils'
import { properties } from './properties'
import { PROPERTY_IDs, type PropertyID } from './propertyIDs'

export const properties_dictionary = group_items<PropertyID, Property>(properties)

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

export function get_dual_properties(ids: PropertyID[]): null | PropertyID[] {
	const duals = ids.map(get_dual_property)
	if (duals.includes(null)) return null
	return duals as PropertyID[]
}

export const PREFIX_CONFIG = {
	'is': 'is not',
	'is a': 'is not a',
	'is an': 'is not an',
	'has': 'does not have',
	'has a': 'does not have a',
	'has an': 'does not have an',
} as const

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

export const implications_with_duals = property_deduction_system.all_rules
