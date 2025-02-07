<script lang="ts">
	import { goto } from '$app/navigation'

	import CategoryList from '$components/CategoryList.svelte'

	import {
		separator,
		storage_key_non_properties,
		storage_key_properties,
	} from '$lib/utils/search'
	import Warning from '$components/Warning.svelte'
	import { concatenate_info } from '$lib/commons/utils'
	import { browser } from '$app/environment'
	import Selection from '$components/Selection.svelte'
	import { is_valid_property, propertyIDs } from '$lib/utils/data.helpers'
	import type { PropertyID } from '$lib/data/properties.data'
	import { encode_property_ID } from '$lib/commons/property.url'

	function get_saved_search(): [PropertyID[], PropertyID[]] {
		if (!browser) return [[], []]

		const properties_string = window.sessionStorage.getItem(storage_key_properties)
		const non_properties_string = window.sessionStorage.getItem(
			storage_key_non_properties,
		)

		if (!properties_string || !non_properties_string) return [[], []]

		try {
			const parsed_properties: unknown = JSON.parse(properties_string)
			const parsed_non_properties: unknown = JSON.parse(non_properties_string)

			const is_valid =
				Array.isArray(parsed_properties) &&
				parsed_properties.every(is_valid_property) &&
				Array.isArray(parsed_non_properties) &&
				parsed_non_properties.every(is_valid_property)

			return is_valid ? [parsed_properties, parsed_non_properties] : [[], []]
		} catch {
			return [[], []]
		}
	}

	$effect(() => {
		if (!browser) return
		window.sessionStorage.setItem(
			storage_key_properties,
			JSON.stringify(selected_properties),
		)
		window.sessionStorage.setItem(
			storage_key_non_properties,
			JSON.stringify(selected_non_properties),
		)
	})

	const [saved_properties, saved_non_properties] = get_saved_search()

	let { data } = $props()

	let selected_properties = $state<PropertyID[]>(
		data.is_search && data.properties ? data.properties : saved_properties,
	)
	let selected_non_properties = $state<PropertyID[]>(
		data.is_search && data.non_properties
			? data.non_properties
			: saved_non_properties,
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

	const sample_search_url =
		'/search?properties=finitely_complete--pointed&non_properties=complete'
</script>

<svelte:head>
	<title>Search for categories</title>
</svelte:head>

<h2>Search for categories</h2>

<p class="hint">
	On this page, you can search for categories that satisfy a specific set of properties
	while simultaneously not satisfying another set of properties. For example, you can
	<a href={sample_search_url} target="_blank">look</a> for categories that are finitely complete
	and pointed but not complete.
</p>

<div class="form">
	<Selection
		title="Looking for categories with these properties:"
		bind:selected_items={selected_properties}
		allowed_items={propertyIDs}
		section_label="Properties"
		item_label="Property"
	/>

	<Selection
		title="... and <i>not</i> with these properties:"
		bind:selected_items={selected_non_properties}
		allowed_items={propertyIDs}
		section_label="Non-properties"
		item_label="Non-property"
	/>

	<button type="button" class="button" onclick={request_search_results}>Search</button>
</div>

{#if data.contradiction}
	<Warning>
		The properties and non-properties contradict each other according to the
		<a href="/implications">implications</a>. There cannot be any search results.
	</Warning>
{/if}

{#if data.is_search}
	<section>
		<h2>Results</h2>

		<p class="hint">
			These categories satisfy the properties ({concatenate_info(data.properties)})
			resp. non-properties ({concatenate_info(data.non_properties)}).
		</p>

		<CategoryList items={data.found_categories ?? []} />
	</section>
{/if}

{#if data.is_dual_search}
	<section>
		<h2>Results for dual search</h2>

		<p class="hint">
			These categories satisfy the dual properties ({concatenate_info(
				data.dualized_properties,
			)}) resp. non-properties ({concatenate_info(data.dualized_non_properties)}).
		</p>

		<CategoryList items={data.found_dualized_categories ?? []} />
	</section>
{/if}

<style>
	.form {
		margin-bottom: 2rem;
	}
</style>
