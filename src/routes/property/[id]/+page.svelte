<script lang="ts">
	import Implication from '$lib/components/Implication.svelte'
	import { implications_with_duals } from '$lib/implications/implications.duals'
	import { get_property_url } from '$lib/properties/properties.utils'

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
				implication.conclusions.includes(property.id) ||
				implication.assumptions.includes(property.id),
		),
	)
</script>

<svelte:head>
	<title>Property: {property.id}</title>
</svelte:head>

<h2>{property.id}</h2>

<p>
	<strong>Definition:</strong>
	{@html property.description}
	{#if property.invariant_under_equivalences === false}
		Warning: This property is not invariant under equivalences.
	{/if}
</p>

{#if property.dual || property.related || property.nlab_link}
	<ul class="dashed-list">
		{#if property.dual}
			<li>
				Dual property: <a href={get_property_url(property.dual)}
					>{property.dual}</a
				>
				{#if property.dual === property.id}
					(self-dual)
				{/if}
			</li>
		{/if}

		{#if property.related}
			<li>
				Related properties: {#each property.related as related_property, i}
					<a href={get_property_url(related_property)}>
						{related_property}
					</a>{#if i < property.related.length - 1}
						,&nbsp;
					{/if}
				{/each}
			</li>
		{/if}

		{#if property.nlab_link}
			<li>
				<a href={property.nlab_link} target="_blank">nLab Link</a>
			</li>
		{/if}
	</ul>
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

<style>
	ul {
		padding-left: 1.5rem;
	}
</style>
