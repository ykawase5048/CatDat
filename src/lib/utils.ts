import { properties_dictionary, type PropertyName } from './dictionaries/properties'
import type { Prefix, Property } from './types'

export function get_property_url(property: Property) {
	return `/property/${property.name.replaceAll(' ', '_')}`
}

const negation_prefixes: Record<Prefix, string> = {
	'is': 'is not',
	'is a': 'is not a',
	'is an': 'is not an',
	'has': 'does not have',
	'has a': 'does not have a',
	'has an': 'does not have an',
}

export function negate_prefix(prefix: Prefix): string {
	return negation_prefixes[prefix]
}

export function get_dual_property(p: PropertyName): null | PropertyName {
	const property = properties_dictionary[p]
	if ('dual' in property) {
		return property.dual as PropertyName
	}
	return null
}
