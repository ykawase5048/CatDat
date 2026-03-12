<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import MetaData from '$components/MetaData.svelte'
	import Selection from '$components/Selection.svelte'
	import { is_string_array } from '$lib/commons/utils'

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

	function compare_categories() {
		const chosen_categories = compared_categories
			.map((name) => data.categories.find((category) => category.name === name))
			.filter((category) => category !== undefined)

		if (
			chosen_categories.length === 0 ||
			chosen_categories.length > data.max_categories_compare
		)
			return

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
	Select up to {data.max_categories_compare} categories to compare their properties with each
	other.
</p>

<Selection
	allowed_items={data.categories.map((category) => category.name)}
	section_label="selected categories"
	item_label="category"
	bind:selected_items={compared_categories}
/>

<p>
	<button class="button" onclick={compare_categories}>Compare</button>
</p>
