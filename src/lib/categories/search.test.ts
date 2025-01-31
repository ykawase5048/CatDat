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

	it('computes the properties and non-properties', () => {
		const url = new URL(
			'http://localhost?properties=complete&non_properties=cocomplete--abelian',
		)
		const result = get_search_results(url)
		expect(result.properties).toEqual(['complete'])
		expect(result.non_properties).toEqual(['cocomplete', 'abelian'])
	})

	it('computes the dual properties and dual non-properties', () => {
		const url = new URL(
			'http://localhost?properties=initial_object&non_properties=complete',
		)
		const result = get_search_results(url)
		expect(result.dualized_properties).toEqual(['terminal object'])
		expect(result.dualized_non_properties).toEqual(['cocomplete'])
	})

	it('finds appropriate categories', () => {
		const url = new URL(
			'http://localhost?properties=initial_object--terminal_object&non_properties=complete',
		)
		const result = get_search_results(url)

		expect(result.found_categories.length).toBeGreaterThan(0)

		for (const category of result.found_categories) {
			expect(category.all_properties).toContain('initial object')
			expect(category.all_properties).toContain('terminal object')
			expect(category.all_non_properties).toContain('complete')
		}
	})

	it('finds appropriate dual categories', () => {
		const url = new URL(
			'http://localhost?properties=well-copowered&non_properties=well-powered',
		)
		const result = get_search_results(url)

		expect(result.dual_found_categories.length).toBeGreaterThan(0)

		for (const category of result.dual_found_categories) {
			expect(category.all_properties).toContain('well-powered')
			expect(category.all_non_properties).toContain('well-copowered')
		}
	})

	it("does return null for dual properties and dual non-properties when they're the same as the original", () => {
		const url = new URL(
			'http://localhost?properties=abelian&non_properties=essentially_small',
		)
		const result = get_search_results(url)
		expect(result.dual_found_categories).toEqual([])
	})
})
