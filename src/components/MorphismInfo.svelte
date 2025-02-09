<script lang="ts">
	import Tooltip from './Tooltip.svelte'

	type Props = {
		name: string
		description: string
		reason: string
	}

	let { description, reason, name }: Props = $props()
</script>

{name}:
<span>
	{@html description || '?'}
	{#if reason}
		<Tooltip>
			{@html reason}
		</Tooltip>
	{/if}
</span>

<style>
	span {
		position: relative;
	}
</style>
