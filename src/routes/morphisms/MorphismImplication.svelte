<script lang="ts">
	import LabelWithReason from '$components/LabelWithReason.svelte'
	import type { MorphismImplication as MorphismImplicationType } from '$lib/database/morphisms/morphism-implications.data'

	type Props = {
		implication: MorphismImplicationType
	}

	let { implication }: Props = $props()
</script>

<LabelWithReason reason={implication.reason}>
	{#if implication.requirements}
		[{implication.requirements.join(' + ')}]
	{/if}
	{implication.assumptions.join(' + ')}
	&rarr;
	{implication.conclusions.join(' + ')}
</LabelWithReason>
