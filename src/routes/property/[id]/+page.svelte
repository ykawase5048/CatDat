<script lang="ts">
	import CategoryList from '$components/CategoryList.svelte'
	import ImplicationList from '$components/ImplicationList.svelte'
	import MetaData from '$components/MetaData.svelte'
	import { get_property_url } from '$lib/commons/property.url'

	let { data } = $props()

	let {
		property,
		related_properties,
		relevant_implications,
		categories_with_this_property,
		categories_without_this_property,
		unknown_categories,
	} = $derived(data)
</script>

<MetaData title={property.id} description="Discover this property of categories" />

<h2>{property.id}</h2>

<p>
	{@html property.description}

	{#if property.invariant_under_equivalences === false}
		Warning: This property is not invariant under equivalences.
	{/if}
</p>

{#if property.dual_property_id || related_properties.length || property.nlab_link}
	<ul>
		{#if property.dual_property_id}
			<li>
				Dual property: <a href={get_property_url(property.dual_property_id)}
					>{property.dual_property_id}</a
				>
				{#if property.dual_property_id === property.id}
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

<ImplicationList
	implications={relevant_implications}
	highlighted_property={property.id}
/>

<!-- TODO: bring these components back -->

<!--

<h3>Examples</h3>

<CategoryList categories={categories_with_this_property} />

<h3>Counterexamples</h3>

<CategoryList categories={categories_without_this_property} />

<h3>Unknown</h3>

<CategoryList
	categories={unknown_categories}
	description="For these categories the database has no info if they satisfy this property or
		not."
/>
-->
