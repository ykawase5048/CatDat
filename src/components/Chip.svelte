<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		handle_remove?: () => void // undefined if not removable
		children: Snippet
		size?: 'small' | 'medium'
	}

	let { handle_remove, children, size = 'medium' }: Props = $props()
</script>

{#if handle_remove !== undefined}
	<button class="chip {size}" onclick={handle_remove}>
		{@render children()}
	</button>
{:else}
	<div class="chip {size}">
		{@render children()}
	</div>
{/if}

<style>
	.chip {
		display: inline-block;
		border-radius: 100vw;
		background-color: var(--secondary-bg-color);
		outline: 1px solid var(--secondary-outline-color);
	}

	.chip.medium {
		font-size: 1rem;
		padding: 0.2rem 0.875rem;
	}

	.chip.small {
		font-size: 0.875rem;
		padding: 0.15rem 0.85rem;
	}

	button.chip {
		transition: outline-color 150ms;
	}

	button.chip:hover,
	button.chip:focus-visible {
		outline-color: var(--outline-color);
	}
</style>
