<script lang="ts">
	import { properties_list } from '$lib/dictionaries/properties.js'

	let { data } = $props()
	let property = $derived(data.property)
	let categories_with_this_property = $derived(data.categories_with_this_property)
	let rendered_description = $derived(data.rendered_description)
</script>

<a href="/">Home</a>

<h2>{property.name}</h2>

<p><strong>Definition:</strong> {@html rendered_description}</p>

{#if property.dual}
	{@const dual_property = properties_list.find((p) => p.id === property.dual)!}
	<p>
		Dual property: <a href="/property/{dual_property.id}">{dual_property.name}</a>
		{#if dual_property.id === property.id}
			(self-dual)
		{/if}
	</p>
{/if}

Each of the following categories {property.prefix}
{property.name}:

<ul>
	{#each categories_with_this_property as category}
		<li>
			<a href="/category/{category.id}">
				{category.name}
			</a>
		</li>
	{/each}
</ul>
