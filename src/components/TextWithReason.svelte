<script lang="ts">
	import Fa from 'svelte-fa'
	import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
	import { slide } from 'svelte/transition'
	import type { Snippet } from 'svelte'

	type Props = {
		children: Snippet
		reason?: string | null
	}

	let { children, reason }: Props = $props()

	let show_reason = $state(false)

	function toggle() {
		show_reason = !show_reason
	}

	const reason_id = $props.id()
</script>

{#if reason}
	<span class="wrapper">
		<span>
			{@render children()}

			<button
				onclick={toggle}
				class="toggle"
				aria-expanded={show_reason}
				aria-label={show_reason ? 'Hide reason' : 'Show reason'}
				aria-controls={reason_id}
			>
				<Fa icon={faCommentDots} scale={0.825} />
			</button>
		</span>

		{#if show_reason}
			<span transition:slide={{ duration: 120 }} class="hint reason" id={reason_id}>
				{@html reason}
			</span>
		{/if}
	</span>
{:else}
	<span>
		{@render children()}
	</span>
{/if}

<style>
	.wrapper {
		display: inline-grid;
	}

	.toggle {
		padding-inline: 0.25rem;
		margin-inline: -0.25rem;
		color: var(--secondary-text-color);
		transition: color 150ms;

		&[aria-expanded='true'] {
			color: var(--accent-color);
		}
	}

	.reason {
		padding-block: 0.5rem;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			left: -0.78rem;
			top: 0;
			bottom: 0;
			border-left: 1px dashed var(--secondary-outline-color);
		}
	}
</style>
