<script lang="ts">
	import Tooltip from '$components/Tooltip.svelte'
	import type { MorphismImplication as MorphismImplicationType } from '$lib/database/morphisms/morphism-implications.data'

	type Props = {
		implication: MorphismImplicationType
	}

	let { implication }: Props = $props()
</script>

<div>
	{#if implication.requirements}
		[{implication.requirements.join(' + ')}]
	{/if}

	{implication.assumptions.join(' + ')} &rarr; {implication.conclusions.join(' + ')}

	{#if implication.reason}
		<Tooltip>
			{@html implication.reason}
		</Tooltip>
	{/if}
</div>

<style>
	div {
		position: relative;
	}
</style>
