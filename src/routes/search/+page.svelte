<script lang="ts">
	import { goto } from '$app/navigation'
	import { fade } from 'svelte/transition'
	import { browser } from '$app/environment'
	import CategoryList from '$components/CategoryList.svelte'
	import {
		storage_key_non_properties,
		storage_key_properties,
	} from '$lib/commons/search.config'
	import Selection from '$components/Selection.svelte'
	import { encode_property_ID } from '$lib/commons/property.url'
	import { get_saved_search } from '$lib/commons/search.utils'
	import MetaData from '$components/MetaData.svelte'

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

	let selected_properties = $state<string[]>(
		// svelte-ignore state_referenced_locally
		data.is_search && data.selected_properties
			? data.selected_properties
			: saved_properties,
	)
	let selected_non_properties = $state<string[]>(
		// svelte-ignore state_referenced_locally
		data.is_search && data.selected_non_properties
			? data.selected_non_properties
			: saved_non_properties,
	)

	function request_search_results() {
		const properties_query = selected_properties.map(encode_property_ID).join(',')

		const non_properties_query = selected_non_properties
			.map(encode_property_ID)
			.join(',')

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
		'/search?properties=finitely_complete,pointed&non_properties=complete'
</script>

<MetaData
	title="Search for categories"
	description="Search for categories that satisfy a specific set of properties while simultaneously not satisfying another set of properties. "
/>

<h2>Search for categories</h2>

<p class="hint">
	Search for categories that satisfy a specific set of properties while simultaneously
	not satisfying another set of properties. For example, you can
	<a href={sample_search_url} target="_blank">look</a>
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

<!-- TODO: bring back contradiction detection -->

<!-- {#if data.contradiction}
	<Warning>
		The properties and non-properties contradict each other according to the
		<a href="/implications">implications</a>. There cannot be any search results.
	</Warning>
{/if} -->

{#if data.is_search}
	<section transition:fade={{ duration: 150 }}>
		<h2>Results</h2>

		<CategoryList
			categories={data.found_categories ?? []}
			description="Found {data.found_categories.length} categories."
		/>
	</section>
{/if}

<!-- TODO: bring back dual search if applicable -->
<!-- idea: just add a link to it, do not display both results here -->

<!-- {#if data.is_dual_search}
	<section
		transition:fade={{
			duration: 150,
		}}
	>
		<h2>Results for dual search</h2>

		<p class="hint">
			These categories satisfy the dual properties ({concatenate_info(
				data.dualized_properties,
			)}) resp. non-properties ({concatenate_info(data.dualized_non_properties)}).
		</p>

		<CategoryList categories={data.found_dualized_categories ?? []} />
	</section>
{/if} -->

<style>
	.form {
		margin-bottom: 2rem;
	}
</style>
