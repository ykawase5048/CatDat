<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import MetaData from '$components/MetaData.svelte'
	import Selection from '$components/Selection.svelte'

	let { data } = $props()

	let categories = $derived(data.categories)
	let category_names = $derived(categories.map((category) => category.name))

	let selected_category_names: string[] = $state(get_saved_category_names())

	const COMPARISON_STORAGE_KEY = 'comparison'

	function get_saved_category_names(): string[] {
		if (!browser) return []

		const names_string = window.sessionStorage.getItem(COMPARISON_STORAGE_KEY)
		if (!names_string) return []

		try {
			const parsed_names: unknown = JSON.parse(names_string)
			const is_valid =
				Array.isArray(parsed_names) &&
				parsed_names.every((name) => typeof name === 'string')

			return is_valid ? parsed_names : []
		} catch {
			console.error('Error parsing category names from sessionStorage')
			return []
		}
	}

	$effect(() => {
		if (!browser) return
		window.sessionStorage.setItem(
			COMPARISON_STORAGE_KEY,
			JSON.stringify(selected_category_names),
		)
	})

	function compare_categories() {
		const chosen_categories = selected_category_names
			.map((name) => categories.find((category) => category.name === name))
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
	allowed_items={category_names}
	section_label="selected categories"
	item_label="category"
	bind:selected_items={selected_category_names}
/>

<p>
	<button class="button" onclick={compare_categories}>Compare</button>
</p>
