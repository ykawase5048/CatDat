<script lang="ts">
	import { goto } from '$app/navigation'

	import CategoryList from '$lib/components/CategoryList.svelte'
	import { properties } from '$lib/properties/properties'
	import { encode_property_ID } from '$lib/properties/properties.utils'
	import { is_valid_property } from '$lib/properties/propertyIDs'
	import PropertySelection from '$lib/components/PropertySelection.svelte'
	import { separator } from '$lib/categories/search.js'

	let { data } = $props()

	let selected_properties = $state<string[]>(
		data.properties.length ? data.properties : [''],
	)
	let selected_non_properties = $state<string[]>(
		data.non_properties.length ? data.non_properties : [''],
	)

	function request_search_results() {
		const properties_query = selected_properties
			.filter(is_valid_property)
			.map(encode_property_ID)
			.join(separator)

		const non_properties_query = selected_non_properties
			.filter(is_valid_property)
			.map(encode_property_ID)
			.join(separator)

		const url = new URL('/search', window.location.origin)

		if (properties_query) {
			url.searchParams.set('properties', properties_query)
		}

		if (non_properties_query) {
			url.searchParams.set('non_properties', non_properties_query)
		}

		goto(url, { invalidateAll: true })
	}
</script>

<svelte:head>
	<title>Search for categories</title>
</svelte:head>

<h2>Search for categories</h2>

<p class="hint">
	On this page, you can search for categories that satisfy a specific set of properties
	while simultaneously not satisfying another set of properties. For example, you can
	look for categories that are finitely complete and pointed but not complete.
</p>

<div class="form">
	<p>Looking for categories with these properties:</p>

	<PropertySelection
		aria_label="selection of properties"
		bind:values={selected_properties}
		name="property"
	/>

	<p>... and <i>not</i> with these properties:</p>

	<PropertySelection
		aria_label="selection of non-properties"
		bind:values={selected_non_properties}
		name="non-property"
	/>

	<datalist id="property-list">
		{#each properties as property}
			<option value={property.id}>{property.id}</option>
		{/each}
	</datalist>

	<button class="button" onclick={request_search_results}>Search</button>
</div>

{#if data.found_categories}
	<h2>Results</h2>
	<CategoryList items={data.found_categories} />
{/if}

{#if data.dual_found_categories?.length}
	<h2>Results for dual search</h2>

	<p class="hint">
		These categories satisfy the dual properties ({data.dualized_properties?.join(
			', ',
		)}) resp. non-properties ({data.dualized_non_properties?.join(', ')}).
	</p>

	<CategoryList items={data.dual_found_categories} />
{/if}

<style>
	.form {
		margin-bottom: 2rem;
	}
</style>
