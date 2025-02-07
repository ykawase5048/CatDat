<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import Selection from '$components/Selection.svelte'
	import { max_categories, storage_key } from './compare.config'

	let { data } = $props()
	const categories = data.categories

	const category_names = categories.map((category) => category.name)

	function get_saved_category_names(): string[] {
		if (!browser) return []

		const names_string = window.sessionStorage.getItem(storage_key)
		if (!names_string) return []

		try {
			const parsed_names: unknown = JSON.parse(names_string)
			const is_valid =
				Array.isArray(parsed_names) &&
				parsed_names.every((name) => typeof name === 'string')

			return is_valid ? parsed_names : []
		} catch {
			return []
		}
	}

	let selected_category_names: string[] = $state(get_saved_category_names())

	$effect(() => {
		if (!browser) return
		window.sessionStorage.setItem(
			storage_key,
			JSON.stringify(selected_category_names),
		)
	})

	function compare_categories() {
		const chosen_categories = selected_category_names
			.map((name) => categories.find((category) => category.name === name))
			.filter((category) => category !== undefined)

		if (chosen_categories.length === 0 || chosen_categories.length > max_categories)
			return

		const path = chosen_categories.map((category) => category.id).join('/')

		goto(`/compare/${path}`)
	}
</script>

<svelte:head>
	<title>Choose categories for comparison</title>
</svelte:head>

<h2>Choose categories for comparison</h2>

<Selection
	allowed_items={category_names}
	section_label="selected categories"
	item_label="category"
	bind:selected_items={selected_category_names}
/>

<p>
	<button class="button" onclick={compare_categories}>Compare</button>
</p>
