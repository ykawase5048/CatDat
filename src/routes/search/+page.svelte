<script lang="ts">
	import { goto } from '$app/navigation'
	import { fade } from 'svelte/transition'
	import { browser } from '$app/environment'
	import CategoryList from '$components/CategoryList.svelte'
	import Selection from '$components/Selection.svelte'
	import { encode_property_ID } from '$lib/commons/property.url'
	import MetaData from '$components/MetaData.svelte'
	import { SEARCH_SEPARATOR } from './search.config'

	let { data } = $props()

	let selected_properties = $state<string[]>(
		// svelte-ignore state_referenced_locally
		data.is_search && data.selected_properties ? data.selected_properties : [],
	)
	let selected_non_properties = $state<string[]>(
		// svelte-ignore state_referenced_locally
		data.is_search && data.selected_non_properties
			? data.selected_non_properties
			: [],
	)

	function request_search_results() {
		const properties_query = selected_properties
			.map(encode_property_ID)
			.join(SEARCH_SEPARATOR)

		const non_properties_query = selected_non_properties
			.map(encode_property_ID)
			.join(SEARCH_SEPARATOR)

		const url = new URL('/search', window.location.origin)

		if (properties_query) {
			url.searchParams.set('properties', properties_query)
		}

		if (non_properties_query) {
			url.searchParams.set('non_properties', non_properties_query)
		}

		goto(url, { invalidateAll: true })
	}

	function get_dual_search_results_link() {
		if (!data.dual_selected_properties) return '/'
		if (!data.dual_selected_non_properties) return '/'
		if (!browser) return '/'

		const properties_query = data.dual_selected_properties
			.map(encode_property_ID)
			.join(SEARCH_SEPARATOR)

		const non_properties_query = data.dual_selected_non_properties
			.map(encode_property_ID)
			.join(SEARCH_SEPARATOR)

		const url = new URL('/search', window.location.origin)

		if (properties_query) {
			url.searchParams.set('properties', properties_query)
		}

		if (non_properties_query) {
			url.searchParams.set('non_properties', non_properties_query)
		}

		return decodeURIComponent(url.toString())
	}

	const sample_search_url = `/search?properties=finitely_complete${SEARCH_SEPARATOR}pointed&non_properties=complete`
</script>

<MetaData
	title="Property combo search"
	description="Search for categories that satisfy a specific set of properties while simultaneously not satisfying another set of properties. "
/>

<h2>Property combo search</h2>

<p class="hint">
	Search for categories with certain properties while excluding others. For example, you
	can <a href={sample_search_url} data-sveltekit-reload="true">look</a>
	for categories that are finitely complete and pointed but not complete.
</p>

<div class="form">
	<Selection
		title="Looking for categories with these properties:"
		bind:selected_items={selected_properties}
		allowed_items={data.all_properties}
		section_label="Properties"
		item_label="Property"
	/>

	<Selection
		title="... and <i>not</i> with these properties:"
		bind:selected_items={selected_non_properties}
		allowed_items={data.all_properties}
		section_label="Non-properties"
		item_label="Non-property"
	/>

	<button type="button" class="button" onclick={request_search_results}>Search</button>
</div>

{#if data.is_search}
	<section transition:fade={{ duration: 150 }}>
		<h2>Results</h2>

		{#if data.is_consistent}
			<CategoryList
				categories={data.found_categories ?? []}
				description="Found {data.found_categories.length} categories."
			/>
		{:else}
			<p>No categories found because the requirements are inconsistent.</p>
		{/if}

		{#if data.dual_selected_properties && data.dual_selected_non_properties}
			<p class="hint">
				All selected properties have a dual, you may perform the <a
					href={get_dual_search_results_link()}
					data-sveltekit-reload="true"
				>
					dual search
				</a>.
			</p>
		{/if}
	</section>
{/if}

<style>
	.form {
		margin-bottom: 2rem;
	}
</style>
