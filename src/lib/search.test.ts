import { get_all_properties } from './categories/details'
import { get_suitable_categories } from './search'

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
