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
			{property.prefix}
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
			? implication.assumption.join(' &and; ')
			: implication.assumption}
		{@const conclusion = Array.isArray(implication.conclusion)
			? implication.conclusion.join(' &and; ')
			: implication.conclusion}
		<li>
			{@html assumption}
			&rArr;
			{@html conclusion}
		</li>
	{/each}
</ul>
