<script lang="ts">
	import Implication from '$lib/components/Implication.svelte'
	import { implications_with_duals } from '$lib/dictionaries/implications'
	import { properties, type PropertyName } from '$lib/dictionaries/properties'
	import { get_property_url } from '$lib/utils'

	let { data } = $props()
	let property = $derived(data.property)
	let categories_with_this_property = $derived(data.categories_with_this_property)
	let categories_without_this_property = $derived(data.categories_without_this_property)

	$effect(() => {
		window.MathJax?.typeset()
	})

	let relevant_implications = $derived(
		implications_with_duals.filter(
			(implication) =>
				implication.conclusions.includes(property.name as PropertyName) ||
				implication.assumptions.includes(property.name as PropertyName),
		),
	)
</script>

<svelte:head>
	<title>Property: {property.name}</title>
</svelte:head>

<h2>{property.name}</h2>

<p><strong>Definition:</strong> {@html property.description}</p>

{#if property.dual}
	{@const dual_property = properties.find((p) => p.name === property.dual)!}
	<p>
		Dual property: <a href={get_property_url(dual_property)}>{property.dual}</a>
		{#if property.dual === property.name}
			(self-dual)
		{/if}
	</p>
{/if}

{#if property.related}
	Related properties: {#each property.related as related_property, i}
		<a href={get_property_url(properties.find((p) => p.name === related_property)!)}>
			{related_property}
		</a>{#if i < property.related.length - 1}
			,&nbsp;
		{/if}
	{/each}
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

{#if relevant_implications.length}
	<h3>Relevant implications</h3>

	<ul>
		{#each relevant_implications as implication}
			<li>
				<Implication {implication} />
			</li>
		{/each}
	</ul>
{/if}
