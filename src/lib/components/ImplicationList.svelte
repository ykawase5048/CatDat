<script lang="ts">
	import type { PropertyID } from '$lib/properties/propertyIDs'
	import type { Implication as ImplicationType } from '$lib/types'
	import Implication from './Implication.svelte'

	type Props = {
		items: ImplicationType[]
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
				<Implication {implication} {highlighted} />
			</li>
		{/each}
	</ul>
{:else}
	<p>&mdash;</p>
{/if}
