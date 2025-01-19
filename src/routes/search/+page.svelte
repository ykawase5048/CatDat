<script lang="ts">
	import {
		properties,
		properties_dictionary,
		type PropertyName,
	} from '$lib/properties/properties'
	import { get_suitable_categories } from '$lib/search'

	import Selection from './Selection.svelte'

	let selected_properties = $state<string[]>([''])
	let selected_non_properties = $state<string[]>([''])

	const valid_properties = $derived(
		selected_properties.filter((p) => p != '' && p in properties_dictionary),
	) as PropertyName[]

	const valid_non_properties = $derived(
		selected_non_properties.filter((p) => p != '' && p in properties_dictionary),
	) as PropertyName[]

	let suitable_categories = $derived(
		get_suitable_categories(valid_properties, valid_non_properties),
	)
</script>

<svelte:head>
	<title>Search for categories</title>
</svelte:head>

<h2>Search for categories</h2>

<p class="hint">
	On this page you can search for categories that satisfy a set of properties and do <i
		>not</i
	>
	satisfy a set of properties at the same. For example, you can search for categories that
	are finitely complete and pointed, but not complete.
</p>

<p>Looking for categories with these properties:</p>

<Selection
	aria_label="selection of properties"
	bind:values={selected_properties}
	name="property"
	variant="positive"
/>

<p>... and <i>not</i> with these properties:</p>

<Selection
	aria_label="selection of non-properties"
	bind:values={selected_non_properties}
	name="non-property"
	variant="negative"
/>

<datalist id="property-list">
	{#each properties as property}
		<option value={property.name}>{property.name}</option>
	{/each}
</datalist>

<h2>Results</h2>

{#if suitable_categories.length === 0}
	<p>No categories found</p>
{:else}
	<ul>
		{#each suitable_categories as category}
			<li>
				<a href="/category/{category.id}">{category.name}</a>
			</li>
		{/each}
	</ul>
{/if}
