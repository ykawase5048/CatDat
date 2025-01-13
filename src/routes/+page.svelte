<script lang="ts">
	import { categories_list } from '$lib/dictionaries/categories'
	import { properties_list } from '$lib/dictionaries/properties'
	import { implications } from '$lib/dictionaries/implications'
</script>

<p>
	<a href="/search">Search</a> for categories with given properties.
</p>

The following categories are available:

<ul>
	{#each categories_list as category (category.id)}
		<li>
			<a href="/category/{category.id}">{category.name}</a>
		</li>
	{/each}
</ul>

The following properties are available:

<ul>
	{#each properties_list as property}
		<li>
			{#if property.prefix.startsWith('has')}
				{property.prefix}
			{/if}
			<a href="/property/{property.id}">
				{property.name}
			</a>
		</li>
	{/each}
</ul>

The following implications are available:

<ul>
	{#each implications as implication}
		{@const assumption = Array.isArray(implication.assumption)
			? implication.assumption.join(', ')
			: implication.assumption}
		{@const conclusion = Array.isArray(implication.conclusion)
			? implication.conclusion.join(', ')
			: implication.conclusion}
		<li>
			When a category is {assumption}, then it is also {conclusion}.
		</li>
	{/each}
</ul>
