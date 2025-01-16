import { categories_dictionary } from './dictionaries/categories'
import { add_properties, negate_prefix } from './transforms'

describe('add_properties', () => {
	it('adds the actual properties and deductions of these', () => {
		const FinAb = categories_dictionary.FinAb
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

	it('adds the non-properties and their deductions', () => {
		const Set = categories_dictionary.Set
		const SetDetailed = add_properties(Set)

		expect(
			SetDetailed.non_properties.some((p) => p.name === 'small' && p.deduced),
		).toBe(true)
	})

	it('removes any missing properties for the category of Sets', () => {
		const SetCat = categories_dictionary.Set
		const SetDetailed = add_properties(SetCat)
		expect(SetDetailed.unknown_properties).toHaveLength(0)
	})

	it('removes any missing properties for the category of abelian groups', () => {
		const Ab = categories_dictionary.Ab
		const AbDetailed = add_properties(Ab)
		expect(AbDetailed.unknown_properties).toHaveLength(0)
	})

	it('removes any missing properties for the category of topological spaces', () => {
		const Top = categories_dictionary.Top
		const TopDetailed = add_properties(Top)
		expect(TopDetailed.unknown_properties).toHaveLength(0)
	})
})

describe('negate_prefix', () => {
	it("negates 'has a' to 'does not have a'", () => {
		expect(negate_prefix('has a')).toBe('does not have a')
	})
})
