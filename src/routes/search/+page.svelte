<script lang="ts">
	import CategoryList from '$lib/components/CategoryList.svelte'
	import { properties } from '$lib/properties/properties'
	import { is_valid_property, type PropertyID } from '$lib/properties/propertyIDs'
	import { get_suitable_categories } from '$lib/search'

	import Selection from './Selection.svelte'

	let selected_properties = $state<string[]>([''])
	let selected_non_properties = $state<string[]>([''])

	const valid_properties: PropertyID[] = $derived(
		selected_properties.filter(is_valid_property),
	)

	const valid_non_properties: PropertyID[] = $derived(
		selected_non_properties.filter(is_valid_property),
	)

	let suitable_categories = $derived(
		get_suitable_categories(valid_properties, valid_non_properties),
	)
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

<p>Looking for categories with these properties:</p>

<Selection
	aria_label="selection of properties"
	bind:values={selected_properties}
	name="property"
/>

<p>... and <i>not</i> with these properties:</p>

<Selection
	aria_label="selection of non-properties"
	bind:values={selected_non_properties}
	name="non-property"
/>

<datalist id="property-list">
	{#each properties as property}
		<option value={property.id}>{property.id}</option>
	{/each}
</datalist>

<h2>Results</h2>

<CategoryList items={suitable_categories} />
