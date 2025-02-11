<script lang="ts">
	import type { Snippet } from 'svelte'
	import { fade } from 'svelte/transition'
	import Fa from 'svelte-fa'
	import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
	import { outsideclick_action } from '$lib/commons/actions'

	type Props = {
		children: Snippet
	}

	let { children }: Props = $props()

	let open = $state(false)

	function toggle() {
		open = !open
	}

	function close() {
		open = false
	}

	const tooltip_id = 'tooltip-' + Math.random().toString(36).slice(2, 9)
</script>

<button
	onclick={toggle}
	aria-label="toggle tooltip"
	aria-expanded={open}
	aria-controls={tooltip_id}
	class:open
>
	<Fa icon={faCircleQuestion} />
</button>

{#if open}
	<div
		class="tooltip"
		use:outsideclick_action={'button[aria-expanded="true"]'}
		onoutsideclick={close}
		id={tooltip_id}
		transition:fade={{ duration: 100 }}
	>
		{@render children()}
	</div>
{/if}

<style>
	button {
		transition: color 100ms;
	}

	button:not(.open) {
		color: var(--secondary-text-color);
	}

	button.open {
		color: var(--accent-color);
	}

	.tooltip {
		position: absolute;
		top: calc(100% + 5px);
		left: 0;
		z-index: 10;
		font-size: 0.85rem;
		padding: 0.25rem 0.5rem;
		box-shadow: 0px 0px 20px var(--shadow-color);
		background-color: var(--secondary-bg-color);
		width: max-content;
		max-width: 250px;
		border: 1px solid var(--secondary-outline-color);
		border-radius: 0.2rem;
	}

	.tooltip::after {
		content: '';
		position: absolute;
		top: -8.5px;
		left: 25px;
		width: 10px;
		height: 10px;
		border: 1px solid var(--secondary-outline-color);
		border-bottom-color: transparent;
		border-right-color: transparent;
		background-color: var(--secondary-bg-color);
		transform-origin: top left;
		rotate: 45deg;
	}

	.tooltip::before {
		content: '';
		position: absolute;
		inset: -1rem;
		pointer-events: none;
	}
</style>
