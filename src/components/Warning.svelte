<script lang="ts">
	import { faWarning } from '@fortawesome/free-solid-svg-icons'
	import type { Snippet } from 'svelte'
	import Fa from 'svelte-fa'

	type Props = {
		children?: Snippet
	}
	let { children }: Props = $props()
</script>

<div>
	<Fa scale={1.25} icon={faWarning} />&nbsp;
	{@render children?.()}
</div>

<style>
	div {
		padding: 1rem;
		background-color: var(--secondary-bg-color);
		border-radius: 0.4rem;
		font-size: 1rem;
	}
</style>
