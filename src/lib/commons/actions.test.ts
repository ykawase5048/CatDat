// @vitest-environment jsdom

import { describe, it, expect, vi } from 'vitest'
import { outsideclick_action } from './actions'

describe('outsideclick_action', () => {
	it('should dispatch an outsideclick event when clicking outside the element', () => {
		const node = document.createElement('div')
		document.body.appendChild(node)

		const mock_callback = vi.fn()
		node.addEventListener('outsideclick', mock_callback)

		const action = outsideclick_action(node, undefined)

		const outside_click_event = new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
		})

		document.body.dispatchEvent(outside_click_event)

		expect(mock_callback).toHaveBeenCalled()

		document.body.removeChild(node)
	})

	it('should not dispatch an outsideclick event when clicking inside the element', () => {
		const node = document.createElement('div')
		document.body.appendChild(node)

		const mock_callback = vi.fn()
		node.addEventListener('outsideclick', mock_callback)

		outsideclick_action(node, undefined)

		const inside_click_event = new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
		})
		node.dispatchEvent(inside_click_event)

		expect(mock_callback).not.toHaveBeenCalled()

		document.body.removeChild(node)
	})

	it('should not dispatch an outsideclick event when clicking an ignored element', () => {
		const node = document.createElement('div')
		const ignored_node = document.createElement('div')
		ignored_node.className = 'ignore'

		document.body.appendChild(node)
		document.body.appendChild(ignored_node)

		const mock_callback = vi.fn()
		node.addEventListener('outsideclick', mock_callback)

		outsideclick_action(node, '.ignore')

		const ignore_click_event = new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
		})
		ignored_node.dispatchEvent(ignore_click_event)

		expect(mock_callback).not.toHaveBeenCalled()

		document.body.removeChild(node)
		document.body.removeChild(ignored_node)
	})

	it('should do a cleanup when the action is destroyed', () => {
		const node = document.createElement('div')
		document.body.appendChild(node)

		const action = outsideclick_action(node, undefined)

		const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener')

		/** @ts-expect-error Svelte does not want use to use that */
		action.destroy()

		expect(removeEventListenerSpy).toHaveBeenCalledWith(
			'click',
			expect.any(Function),
			true,
		)

		removeEventListenerSpy.mockRestore()
		document.body.removeChild(node)
	})
})
