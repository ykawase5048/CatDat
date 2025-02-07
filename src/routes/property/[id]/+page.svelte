<script lang="ts">
	import CategoryList from '$components/CategoryList.svelte'
	import ImplicationList from '$components/ImplicationList.svelte'
	import type { PropertyID } from '$lib/data/properties.data'
	import { get_property_url } from '$lib/commons/property.url'

	let { data } = $props()

	let property = $derived(data.property)
	let dual_property = $derived(data.dual_property)
	let related_properties = $derived(data.related_properties)
	let categories_with_this_property = $derived(data.categories_with_this_property)
	let categories_without_this_property = $derived(data.categories_without_this_property)
	let unknown_categories = $derived(data.unknown_categories)
	let relevant_implications = $derived(data.relevant_implications)
</script>

<svelte:head>
	<title>{property.id}</title>
</svelte:head>

<h2>{property.id}</h2>

<p>
	<strong>Definition:</strong>
	{@html property.description}
	{#if property.invariant === false}
		Warning: This property is not invariant under equivalences.
	{/if}
</p>

{#if dual_property || related_properties.length || property.nlab_link}
	<ul>
		{#if dual_property}
			<li>
				Dual property: <a href={get_property_url(dual_property)}
					>{dual_property}</a
				>
				{#if dual_property === property.id}
					(self-dual)
				{/if}
			</li>
		{/if}

		{#if related_properties.length}
			<li>
				Related properties: {#each related_properties as related_property, i}
					<a href={get_property_url(related_property)}>
						{related_property}
					</a>{#if i < related_properties.length - 1}
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

<h3>Relevant implications</h3>

<ImplicationList items={relevant_implications} highlighted={property.id as PropertyID} />

<h3>Examples</h3>

<CategoryList items={categories_with_this_property} />

<h3>Counterexamples</h3>

<CategoryList items={categories_without_this_property} />

<h3>Unknown</h3>

<CategoryList
	items={unknown_categories}
	description="For these categories the database has no info if they satisfy this property or
		not."
/>
