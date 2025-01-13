<script lang="ts">
	import { categories_list } from '$lib/dictionaries/categories'
	import { category_property_list } from '$lib/dictionaries/category-properties'
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
	{#each category_property_list as property}
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
