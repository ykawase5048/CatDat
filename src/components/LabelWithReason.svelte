<script lang="ts">
	import type { Snippet } from 'svelte'
	import Fa from 'svelte-fa'
	import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

	type Props = {
		children: Snippet
		reason?: string
	}

	let { children, reason }: Props = $props()
</script>

{#if reason}
	<details>
		<summary>
			{@render children()}
			<Fa class="toggle" icon={faCommentDots} />
		</summary>

		<div class="hint reason">
			{@html reason}
		</div>
	</details>
{:else}
	{@render children()}
{/if}

<style>
	summary::marker,
	summary::-webkit-details-marker {
		display: none;
		content: '';
	}

	details :global(.toggle) {
		scale: 0.825;
		cursor: pointer;
	}

	details[open] :global(.toggle) {
		color: var(--accent-color);
	}

	.reason {
		padding-block: 0.5rem;
		position: relative;
	}

	.reason::before {
		content: '';
		position: absolute;
		left: -0.78rem;
		top: 0;
		bottom: 0;
		border-left: 1px dashed var(--secondary-outline-color);
	}
</style>
