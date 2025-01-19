import { categories_dictionary } from './categories/categories'
import { add_details } from './details'

describe('add_details', () => {
	it('adds the actual properties and deductions of these', () => {
		const FinAb = categories_dictionary.FinAb
		const FinAbTransformed = add_details(FinAb)

		expect(
			FinAbTransformed.properties.some((p) => p.name === 'self-dual' && !p.deduced),
		).toBe(true)

		expect(
			FinAbTransformed.properties.some(
				(p) => p.name === 'initial object' && p.deduced,
			),
		).toBe(true)
	})

	it('adds the non-properties and their deductions', () => {
		const Set = categories_dictionary.Set
		const SetDetailed = add_details(Set)

		expect(
			SetDetailed.non_properties.some((p) => p.name === 'small' && p.deduced),
		).toBe(true)
	})

	it('removes any missing properties for the category of Sets', () => {
		const SetCat = categories_dictionary.Set
		const SetDetailed = add_details(SetCat)
		expect(SetDetailed.unknown_properties).toHaveLength(0)
	})

	it('removes any missing properties for the category of abelian groups', () => {
		const Ab = categories_dictionary.Ab
		const AbDetailed = add_details(Ab)
		expect(AbDetailed.unknown_properties).toHaveLength(0)
	})

	it('removes any missing properties for the category of topological spaces', () => {
		const Top = categories_dictionary.Top
		const TopDetailed = add_details(Top)
		expect(TopDetailed.unknown_properties).toHaveLength(0)
	})
})
