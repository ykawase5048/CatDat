<script lang="ts">
	import { properties } from '$lib/dictionaries/properties'
	import { get_property_url } from '$lib/utils'

	let { data } = $props()
	let property = $derived(data.property)
	let categories_with_this_property = $derived(data.categories_with_this_property)
	let categories_without_this_property = $derived(data.categories_without_this_property)
	let rendered_description = $derived(data.rendered_description)
</script>

<svelte:head>
	<title>Property: {property.name}</title>
</svelte:head>

<h2>{property.name}</h2>

<p><strong>Definition:</strong> {@html rendered_description}</p>

{#if property.dual}
	{@const dual_property = properties.find((p) => p.name === property.dual)!}
	<p>
		Dual property: <a href={get_property_url(dual_property)}>{property.dual}</a>
		{#if property.dual === property.name}
			(self-dual)
		{/if}
	</p>
{/if}

<h3>Examples</h3>

<ul>
	{#each categories_with_this_property as category}
		<li>
			<a href="/category/{category.id}">
				{category.name}
			</a>
		</li>
	{/each}
</ul>

<h3>Counterexamples</h3>

<ul>
	{#each categories_without_this_property as category}
		<li>
			<a href="/category/{category.id}">
				{category.name}
			</a>
		</li>
	{/each}
</ul>
