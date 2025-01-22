<script lang="ts">
	import type { Implication } from '$lib/types'

	type Props = {
		implication: Implication
	}

	let { implication }: Props = $props()
</script>

{#each implication.assumptions as assumption, i}
	{assumption}
	{#if i < implication.assumptions.length - 1}
		<span>$+$</span>&nbsp;
	{/if}
{/each}

<span>
	{#if implication.equivalent}
		$\iff$
	{:else}
		$\implies$
	{/if}
</span>

{#each implication.conclusions as conclusion, i}
	{conclusion}
	{#if i < implication.conclusions.length - 1}
		<span>$+$</span>&nbsp;
	{/if}
{/each}
