<script lang="ts">
	import CategoryList from '$lib/components/CategoryList.svelte'
	import ImplicationList from '$lib/components/ImplicationList.svelte'
	import { get_property_url } from '$lib/properties/properties.utils'

	let { data } = $props()

	let property = $derived(data.property)
	let categories_with_this_property = $derived(data.categories_with_this_property)
	let categories_without_this_property = $derived(data.categories_without_this_property)
	let unknown_categories = $derived(data.unknown_categories)
	let relevant_implications = $derived(data.relevant_implications)
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

<h3>Relevant implications</h3>

<ImplicationList items={relevant_implications} />

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
