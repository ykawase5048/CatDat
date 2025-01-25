<script lang="ts">
	import type { Category, CategoryDetailed } from '$lib/types'

	type Props = {
		items: CategoryDetailed[] | Category[]
		description?: string
	}

	let { description, items }: Props = $props()
</script>

{#if description}
	<p class="hint">
		{description}
	</p>
{/if}

{#if items.length}
	<ul>
		{#each items as item}
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
