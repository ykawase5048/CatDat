// @vitest-environment jsdom

import { get_saved_category_names } from './comparison.utils'

import * as appenv from '$app/environment'

describe('get_saved_category_names', () => {
	afterEach(() => {
		vi.resetAllMocks()
		sessionStorage.clear()
	})

	it('should return an empty array if not in a browser environment', () => {
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(false)
		expect(get_saved_category_names()).toEqual([])
	})

	it('should return an empty array if sessionStorage item is null', () => {
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(true)
		expect(get_saved_category_names()).toEqual([])
	})

	it('should return an empty array if sessionStorage item is not valid JSON', () => {
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(true)
		const console_error_spy = vi.spyOn(console, 'error').mockImplementation(() => {})
		sessionStorage.setItem('selected_category_names', 'invalid')
		expect(get_saved_category_names()).toEqual([])
		expect(console_error_spy).toHaveBeenCalled()
	})

	it('should return an empty array if parsed names is not an array of strings', () => {
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(true)
		sessionStorage.setItem('selected_category_names', JSON.stringify([1, 2, 3]))
		expect(get_saved_category_names()).toEqual([])
	})

	it('should return the parsed names if it is an array of strings', () => {
		const validNames = ['name1', 'name2']
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(true)
		sessionStorage.setItem('selected_category_names', JSON.stringify(validNames))
		expect(get_saved_category_names()).toEqual(validNames)
	})
})
