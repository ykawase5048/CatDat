// @vitest-environment jsdom

import { selected_tooltip } from './tooltip.svelte'

describe('selected_tooltip', () => {
	it('should be null by default', () => {
		expect(selected_tooltip.id).toBe(null)
	})

	it('should be assignable to a string', () => {
		selected_tooltip.id = '123'
		expect(selected_tooltip.id).toBe('123')
		// @ts-expect-error 123 is not a string
		selected_tooltip.id = 123
	})
})
