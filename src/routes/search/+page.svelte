<script lang="ts">
	import {
		category_system,
		type CategoryDetailed,
	} from '$lib/categories/categories.utils'
	import CategoryList from '$lib/components/CategoryList.svelte'
	import { properties } from '$lib/properties/properties'
	import { get_dual_properties } from '$lib/properties/properties.utils'
	import { is_valid_property, type PropertyID } from '$lib/properties/propertyIDs'

	import Selection from './Selection.svelte'

	let selected_properties = $state<string[]>([''])
	let selected_non_properties = $state<string[]>([''])

	const valid_properties: PropertyID[] = $derived(
		selected_properties.filter(is_valid_property),
	)

	const valid_non_properties: PropertyID[] = $derived(
		selected_non_properties.filter(is_valid_property),
	)

	let suitable_categories: CategoryDetailed[] = $derived(
		category_system.search(valid_properties, valid_non_properties),
	)

	let dualized_properties: PropertyID[] | null = $derived(
		get_dual_properties(valid_properties),
	)
	let dualized_non_properties: PropertyID[] | null = $derived(
		get_dual_properties(valid_non_properties),
	)

	let dual_suitable_categories: CategoryDetailed[] = $derived(
		dualized_properties && dualized_non_properties
			? category_system.search(dualized_properties, dualized_non_properties)
			: [],
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

{#if dual_suitable_categories.length}
	<h2>Results for dual search</h2>

	<p class="hint">
		These categories satisfy the dual properties ({dualized_properties?.join(', ')})
		resp. non-properties ({dualized_non_properties?.join(', ')}).
	</p>

	<CategoryList items={dual_suitable_categories} />
{/if}
