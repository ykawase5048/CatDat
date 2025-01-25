<script lang="ts">
	import type { Implication as ImplicationType } from '$lib/types'
	import Implication from './Implication.svelte'

	type Props = {
		items: ImplicationType[]
		description?: string
	}

	let { items, description }: Props = $props()
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
				<Implication {implication} />
			</li>
		{/each}
	</ul>
{:else}
	<p>&mdash;</p>
{/if}
