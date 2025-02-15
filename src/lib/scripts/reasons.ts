/* v8 ignore start */

/**
 * This script is used to count the amount of empty reasons in the category properties
 * and non-properties. It also calculates the fill rate of the reasons.
 */

import { CATEGORY_NON_PROPERTIES } from '$lib/database/categories/category-non-properties.data'
import { CATEGORY_PROPERTIES } from '../database/categories/category-properties.data'

const names = ['properties', 'non-properties']
const dictionaries = [CATEGORY_PROPERTIES, CATEGORY_NON_PROPERTIES]

for (let i = 0; i < names.length; i++) {
	const name = names[i]
	const dict = dictionaries[i]

	let amount_empty_reasons = 0
	let amount_filled_reasons = 0

	for (const properties of Object.values(dict)) {
		const properties_without_reasons = properties.filter(({ reason }) => !reason)
		amount_empty_reasons += properties_without_reasons.length
		amount_filled_reasons += properties.length - properties_without_reasons.length
	}

	const total_amount = amount_empty_reasons + amount_filled_reasons
	const percentage = Math.floor((amount_filled_reasons / total_amount) * 100)

	console.info(`Total amount of ${name}:`, total_amount)
	console.info(`Amount of ${name} with empty reasons:`, amount_empty_reasons)
	console.info(`Amount of ${name} with filled reasons:`, amount_filled_reasons)
	console.info(`Fill rate:`, `${percentage}%\n`)
}

/* v8 ignore stop */
