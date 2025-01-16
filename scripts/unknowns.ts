import { categories_dictionary_detailed } from '../src/lib/dictionaries/categories'

console.info('find unknown properties\n')

const with_unknowns: string[] = []

for (const id in categories_dictionary_detailed) {
	const category = categories_dictionary_detailed[id]
	console.info(id, ':', category.unknown_properties.length)
	if (category.unknown_properties.length > 0) {
		with_unknowns.push(category.id)
	}
}

console.info('\ncategories with unknown properties:')
console.info(with_unknowns.join(', '))
