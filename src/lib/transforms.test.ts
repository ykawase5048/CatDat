import { categories_list } from './dictionaries/categories'
import { add_properties } from './transforms'

describe('add_properties', () => {
	it('adds the actual properties and deductions of these', () => {
		const FinAb = categories_list.find((cat) => cat.id === 'FinAb')!
		const FinAbTransformed = add_properties(FinAb)

		expect(
			FinAbTransformed.properties.some((p) => p.name === 'self-dual' && !p.deduced),
		).toBe(true)

		expect(
			FinAbTransformed.properties.some(
				(p) => p.name === 'initial object' && p.deduced,
			),
		).toBe(true)
	})
})
