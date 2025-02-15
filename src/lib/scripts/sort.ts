/* v8 ignore start */

/**
 * This script sorts various dictionaries in the database folder.
 * It does not touch the lists of categories, properties, and implications.
 * It just adapts the remaining data to these lists.
 */

import fs from 'fs'
import path from 'path'

import { categoryIDs, propertyIDs } from '$lib/data-utils/data.helpers'
import { CATEGORY_EPIMORPHISMS } from '$lib/database/categories/category-epimorphisms.data'
import { CATEGORY_ISOMORPHISMS } from '$lib/database/categories/category-isomorphisms.data'
import { CATEGORY_MONOMORPHISMS } from '$lib/database/categories/category-monomorphisms.data'
import { CATEGORY_NON_PROPERTIES } from '$lib/database/categories/category-non-properties.data'
import { CATEGORY_PROPERTIES } from '$lib/database/categories/category-properties.data'
import { CATEGORY_RELATIONS } from '$lib/database/categories/category-relations.data'
import { CATEGORY_TAGS } from '$lib/database/categories/category-tags.data'
import { PROPERTY_DUALS } from '$lib/database/categories/property-duals.data'
import { PROPERTY_RELATIONS } from '$lib/database/categories/property-relations.data'

function sort_dictionary(
	keys: string[],
	file: string,
	obj: any,
	name: string,
	beautify = false,
) {
	const sorted_obj: any = {}

	for (const key of keys) {
		sorted_obj[key] = obj[key] ?? null
	}

	const filepath = path.resolve(`src/lib/database/categories/${file}`)
	const content = fs.readFileSync(filepath, 'utf8')
	const exportIndex = content.indexOf(`export const ${name}`)
	const curlyBracketIndex = content.indexOf('{', exportIndex)
	const code = beautify
		? JSON.stringify(sorted_obj, null, 4)
		: JSON.stringify(sorted_obj)
	const new_content = `${content.slice(0, curlyBracketIndex)}\n${code}`
	fs.writeFileSync(filepath, new_content)
}

sort_dictionary(
	categoryIDs,
	'category-epimorphisms.data.ts',
	CATEGORY_EPIMORPHISMS,
	'CATEGORY_EPIMORPHISMS',
)

sort_dictionary(
	categoryIDs,
	'category-isomorphisms.data.ts',
	CATEGORY_ISOMORPHISMS,
	'CATEGORY_ISOMORPHISMS',
)

sort_dictionary(
	categoryIDs,
	'category-monomorphisms.data.ts',
	CATEGORY_MONOMORPHISMS,
	'CATEGORY_MONOMORPHISMS',
)

sort_dictionary(
	categoryIDs,
	'category-properties.data.ts',
	CATEGORY_PROPERTIES,
	'CATEGORY_PROPERTIES',
)

sort_dictionary(
	categoryIDs,
	'category-non-properties.data.ts',
	CATEGORY_NON_PROPERTIES,
	'CATEGORY_NON_PROPERTIES',
)

sort_dictionary(categoryIDs, 'category-tags.data.ts', CATEGORY_TAGS, 'CATEGORY_TAGS')

sort_dictionary(
	categoryIDs,
	'category-relations.data.ts',
	CATEGORY_RELATIONS,
	'CATEGORY_RELATIONS',
	true,
)

sort_dictionary(propertyIDs, 'property-duals.data.ts', PROPERTY_DUALS, 'PROPERTY_DUALS')

sort_dictionary(
	propertyIDs,
	'property-relations.data.ts',
	PROPERTY_RELATIONS,
	'PROPERTY_RELATIONS',
	true,
)

/* v8 ignore stop */
