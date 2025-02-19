import type { Action } from 'svelte/action'

type IgnoreSelector = string | undefined

interface Attributes {
	onoutsideclick: (event: CustomEvent) => void
}

/**
 * @deprecated This action is currently not used.
 * We keep it here in case we need it in the future.
 */
export const outsideclick_action: Action<HTMLElement, IgnoreSelector, Attributes> = (
	node,
	ignore,
) => {
	function listener(event: MouseEvent) {
		const target = event.target as HTMLElement
		if (!event.target || (ignore && target.closest(ignore))) {
			return
		}

		if (node && !node.contains(target) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('outsideclick', { detail: { target } }))
		}
	}

	document.addEventListener('click', listener, true)

	return {
		destroy() {
			document.removeEventListener('click', listener, true)
		},
	}
}
