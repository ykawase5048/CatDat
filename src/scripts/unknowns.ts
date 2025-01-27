import { categories_detailed } from '$lib/categories/categories.utils'

console.info('find unknown properties ...\n')

for (const category of categories_detailed) {
	if (category.unknown_properties.length === 0) continue
	console.info(category.id, ' --- ', category.unknown_properties.join(', '))
}
