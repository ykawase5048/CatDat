// @vitest-environment jsdom

import { get_saved_search } from './search.utils'
import * as appenv from '$app/environment'

describe('get_saved_search', () => {
	afterEach(() => {
		vi.resetAllMocks()
		sessionStorage.clear()
	})

	it('returns empty arrays when outside of the browser', () => {
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(false)
		expect(get_saved_search()).toEqual([[], []])
	})

	it('returns empty arrays when nothing is stored in the sessionStorage', () => {
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(true)
		expect(get_saved_search()).toEqual([[], []])
	})

	it("returns empty arrays when the sessionStorage doesn't contain valid search data", () => {
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(true)
		const console_error_spy = vi.spyOn(console, 'error')
		sessionStorage.setItem('search_properties', 'invalid')
		sessionStorage.setItem('search_non_properties', 'a')
		expect(get_saved_search()).toEqual([[], []])
		expect(console_error_spy).toHaveBeenCalled()
	})

	it('returns empty arrays when the saved properties are invalid', () => {
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(true)
		sessionStorage.setItem('search_properties', JSON.stringify(['complete']))
		sessionStorage.setItem('search_non_properties', JSON.stringify(['smol']))
		expect(get_saved_search()).toEqual([[], []])
	})

	it("returns the saved search when it's valid", () => {
		const properties = ['complete', 'abelian']
		const non_properties = ['small']
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(true)
		sessionStorage.setItem('search_properties', JSON.stringify(properties))
		sessionStorage.setItem('search_non_properties', JSON.stringify(non_properties))
		expect(get_saved_search()).toEqual([properties, non_properties])
	})
})
