<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import MetaData from '$components/MetaData.svelte'
	import Selection from '$components/Selection.svelte'
	import type { CategoryShort } from '$lib/commons/types'
	import { is_string_array } from '$lib/commons/utils'
	import { MAX_CATEGORIES_COMPARE } from './compare.config'

	let { data } = $props()

	const COMPARISON_STORAGE_KEY = 'comparison'

	function get_compared_categories(): string[] {
		if (!browser) return []

		const names_string = window.sessionStorage.getItem(COMPARISON_STORAGE_KEY)
		if (!names_string) return []

		try {
			const parsed_names: unknown = JSON.parse(names_string)
			const is_valid = is_string_array(parsed_names)
			return is_valid ? parsed_names : []
		} catch {
			console.error('Error parsing saved categories from sessionStorage')
			return []
		}
	}

	let compared_categories: string[] = $state(get_compared_categories())

	$effect(() => {
		if (!browser) return
		window.sessionStorage.setItem(
			COMPARISON_STORAGE_KEY,
			JSON.stringify(compared_categories),
		)
	})

	let chosen_categories: CategoryShort[] = $derived(
		compared_categories
			.map((name) => data.categories.find((category) => category.name === name))
			.filter((category) => category !== undefined),
	)

	let is_valid_comparison = $derived(
		chosen_categories.length > 0 &&
			chosen_categories.length <= MAX_CATEGORIES_COMPARE,
	)

	function compare_categories() {
		if (!is_valid_comparison) return
		const path = chosen_categories.map((category) => category.id).join('/')
		goto(`/compare/${path}`)
	}
</script>

<MetaData
	title="Choose categories for comparison"
	description="Compare categories based on their properties"
/>

<h2>Choose categories for comparison</h2>

<p class="hint">
	Select up to {MAX_CATEGORIES_COMPARE} categories to compare their properties with each other.
	{#if compared_categories.length === MAX_CATEGORIES_COMPARE}
		The maximum is reached.
	{/if}
</p>

<Selection
	allowed_items={data.categories.map((category) => category.name)}
	section_label="selected categories"
	item_label="category"
	bind:selected_items={compared_categories}
	max={MAX_CATEGORIES_COMPARE}
/>

<p>
	<button class="button" onclick={compare_categories} disabled={!is_valid_comparison}>
		Compare
	</button>
</p>
