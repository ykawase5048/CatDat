<script lang="ts">
	import type { Implication } from '$lib/database/implications.data'
	import type { PropertyID } from '$lib/database/properties.data'
	import ImplicationItem from './ImplicationItem.svelte'

	type Props = {
		items: Implication[]
		description?: string
		highlighted?: PropertyID
	}

	let { items, description, highlighted }: Props = $props()
</script>

{#if description}
	<p class="hint">
		{description}
	</p>
{/if}

{#if items.length}
	<ul>
		{#each items as implication}
			<li>
				<ImplicationItem {implication} {highlighted} />
			</li>
		{/each}
	</ul>
{:else}
	<p>&mdash;</p>
{/if}
