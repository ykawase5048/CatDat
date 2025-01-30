import { categories_detailed } from '$lib/categories/categories.utils'

console.info('find unknown properties ...\n')

for (const category of categories_detailed) {
	const unknowns = Array.from(category.unknown_properties)
	if (!unknowns.length) continue
	console.info(category.id, ' --- ', unknowns.join(', '))
}
