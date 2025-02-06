<script lang="ts">
	import type { Category } from '$lib/data/categories.data'

	type Props = {
		items: Pick<Category, 'id' | 'name'>[]
		description?: string
	}

	let { description, items }: Props = $props()

	let sorted_items = $derived(items.toSorted((a, b) => a.name.localeCompare(b.name)))
</script>

{#if description}
	<p class="hint">
		{description}
	</p>
{/if}

{#if items.length}
	<ul>
		{#each sorted_items as item}
			<li>
				<a href="/category/{item.id}">
					{item.name}
				</a>
			</li>
		{/each}
	</ul>
{:else}
	<p>&mdash;</p>
{/if}

<style>
	ul {
		margin-block: 1rem;
	}
</style>
