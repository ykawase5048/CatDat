import { get_search_results } from './search'

vi.mock('@sveltejs/kit', () => ({
	error: vi.fn(),
}))

const { error } = await import('@sveltejs/kit')

describe('search', () => {
	it('returns a 404 error when the URL contains invalid properties', () => {
		const url = new URL('http://localhost?properties=invalid-property')
		get_search_results(url)

		expect(error).toHaveBeenCalledWith(404, 'Invalid query')
	})

	it('returns a 404 error when the URL contains invalid non-properties', () => {
		const url = new URL('http://localhost?non-properties=invalid-property')
		get_search_results(url)

		expect(error).toHaveBeenCalledWith(404, 'Invalid query')
	})

	it('detects when no search term was given', () => {
		const url = new URL('http://localhost')
		const result = get_search_results(url)

		expect(result.is_search).toBe(false)
	})

	it('computes the properties', () => {
		const url = new URL('http://localhost?properties=complete--abelian')
		const result = get_search_results(url)

		expect(result.is_search).toBe(true)
		expect(result.contradiction).toBe(false)
		expect(result.properties).toEqual(['complete', 'abelian'])
		expect(result.non_properties).toEqual([])
	})

	it('computes the non-properties', () => {
		const url = new URL('http://localhost?non_properties=thin--small')
		const result = get_search_results(url)

		expect(result.is_search).toBe(true)
		expect(result.contradiction).toBe(false)
		expect(result.properties).toEqual([])
		expect(result.non_properties).toEqual(['thin', 'small'])
	})

	it('computes the properties and non-properties', () => {
		const url = new URL(
			'http://localhost?properties=complete&non_properties=cocomplete--abelian',
		)
		const result = get_search_results(url)

		expect(result.is_search).toBe(true)
		expect(result.contradiction).toBe(false)
		expect(result.properties).toEqual(['complete'])
		expect(result.non_properties).toEqual(['cocomplete', 'abelian'])
	})

	it('computes the dual properties and dual non-properties', () => {
		const url = new URL(
			'http://localhost?properties=initial_object&non_properties=complete',
		)
		const result = get_search_results(url)

		expect(result.is_search).toBe(true)
		expect(result.contradiction).toBe(false)
		expect(result.dualized_properties).toEqual(['terminal object'])
		expect(result.dualized_non_properties).toEqual(['cocomplete'])
	})

	it('returns a contradiction when the URL contains contradictory properties and non-properties (1)', () => {
		const url = new URL(
			'http://localhost?properties=complete&non_properties=terminal_object',
		)
		const result = get_search_results(url)

		expect(result.is_search).toBe(true)
		expect(result.contradiction).toBe(true)
	})

	it('returns a contradiction when the URL contains contradictory properties and non-properties (2)', () => {
		const url = new URL(
			'http://localhost?properties=equalizers--products&non_properties=complete',
		)
		const result = get_search_results(url)

		expect(result.is_search).toBe(true)
		expect(result.contradiction).toBe(true)
	})

	it('finds categories with the given properties and non-properties', () => {
		const url = new URL(
			'http://localhost?properties=initial_object--terminal_object&non_properties=complete',
		)
		const result = get_search_results(url)

		expect(result.is_search).toBe(true)
		expect(result.contradiction).toBe(false)
		expect(result.found_categories?.length).toBeGreaterThan(0)
		expect(result.found_categories).toContainEqual({
			id: 'FinSet',
			name: 'category of finite sets',
		})
	})

	it('finds appropriate dual categories', () => {
		const url = new URL(
			'http://localhost?properties=well-copowered&non_properties=well-powered',
		)
		const result = get_search_results(url)

		expect(result.is_search).toBe(true)
		expect(result.contradiction).toBe(false)
		expect(result.is_dual_search).toBe(true)
		expect(result.found_dualized_categories?.length).toBeGreaterThan(0)
		expect(result.found_dualized_categories).toContainEqual({
			id: 'Fld',
			name: 'category of fields',
		})
	})

	it('does not find appropriate dual categories when the property has no dual', () => {
		const url = new URL('http://localhost?properties=locally_presentable')
		const result = get_search_results(url)

		expect(result.is_search).toBe(true)
		expect(result.found_dualized_categories).toEqual([])
	})
})
