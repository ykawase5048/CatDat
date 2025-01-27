import { properties } from '$lib/properties/properties'
import {
	categories_detailed,
	categories_dictionary,
	get_all_non_properties,
	get_all_properties,
	get_details,
	get_suitable_categories,
} from './categories.utils'

describe('categories dictionary', () => {
	it('should have consistent IDs', () => {
		for (const [id, category] of Object.entries(categories_dictionary)) {
			expect(id).toBe(category.id)
		}
	})
})

describe('categories detailed', () => {
	for (const category of categories_detailed) {
		it(`should not have contradictory properties for: ${category.name}`, () => {
			const property_set = new Set(get_all_properties(category))
			const non_property_set = new Set(get_all_non_properties(category))
			expect(property_set.intersection(non_property_set)).toHaveLength(0)
		})
	}

	for (const property of properties) {
		it(`should have at least one counterexample for: ${property.id}`, () => {
			const counterexample = categories_detailed.find((category) =>
				get_all_non_properties(category).includes(property.id),
			)
			expect(counterexample).toBeDefined()
		})
	}

	it('should distribute all the properties', () => {
		const random_index = Math.floor(Math.random() * categories_detailed.length)
		const example_category = categories_detailed[random_index]
		const property_count =
			example_category.properties.length +
			example_category.deduced_properties.length +
			example_category.non_properties.length +
			example_category.deduced_non_properties.length +
			example_category.unknown_properties.length
		expect(property_count).toBe(properties.length)
	})
})

describe('get_details', () => {
	it('adds the actual properties and deductions of these', () => {
		const FinAb = categories_dictionary.FinAb
		const FinAbTransformed = get_details(FinAb)

		expect(FinAbTransformed.properties).toContain('self-dual')
		expect(FinAbTransformed.deduced_properties).toContain('initial object')
	})

	it('adds the non-properties and their deductions', () => {
		const Set = categories_dictionary.Set
		const SetDetailed = get_details(Set)

		expect(SetDetailed.non_properties).toContain('strict terminal object')
		expect(SetDetailed.deduced_non_properties).toContain('small')
	})

	it('removes any missing properties for the category of Sets', () => {
		const SetCat = categories_dictionary.Set
		const SetDetailed = get_details(SetCat)
		expect(SetDetailed.unknown_properties).toHaveLength(0)
	})

	it('removes any missing properties for the category of abelian groups', () => {
		const Ab = categories_dictionary.Ab
		const AbDetailed = get_details(Ab)
		expect(AbDetailed.unknown_properties).toHaveLength(0)
	})

	it('removes any missing properties for the category of topological spaces', () => {
		const Top = categories_dictionary.Top
		const TopDetailed = get_details(Top)
		expect(TopDetailed.unknown_properties).toHaveLength(0)
	})
})

describe('get_suitable_categories', () => {
	it('should return an empty array if there are no properties or non-properties', () => {
		expect(get_suitable_categories([], [])).toEqual([])
	})

	it('should return only the empty category', () => {
		const results = get_suitable_categories([], ['inhabited'])
		expect(results).toHaveLength(1)
		expect(results[0].name).toBe('The empty category')
	})

	it('should return only the category of finite abelian groups', () => {
		const results = get_suitable_categories(
			['abelian', 'essentially small', 'self-dual'],
			['groupoid'],
		)
		expect(results).toHaveLength(1)
		expect(results[0].name).toBe('The category of finite abelian groups')
	})

	it('should return all complete categories', () => {
		const results = get_suitable_categories(['complete'], [])
		for (const result of results) {
			expect(get_all_properties(result)).toContain('complete')
		}
	})

	it('should return no thin categories', () => {
		const results = get_suitable_categories([], ['thin'])
		for (const result of results) {
			expect(result.properties).not.toContain('thin')
		}
	})

	it('should return nothing for contradictory searches (1)', () => {
		const results = get_suitable_categories(['abelian'], ['equalizers'])
		expect(results).toHaveLength(0)
	})

	it('should return nothing for contradictory searches (2)', () => {
		const results = get_suitable_categories(['complete'], ['terminal object'])
		expect(results).toHaveLength(0)
	})
})
