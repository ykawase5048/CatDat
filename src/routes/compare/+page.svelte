<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { categories } from '$lib/categories/categories'
	import { max_categories } from './compare.config'
	import Controls from '$lib/components/Controls.svelte'

	const category_names = categories.map((category) => category.name)
	const storage_key = 'selected_category_names'

	function get_saved_category_names(): string[] {
		const default_names = ['', '']

		if (!browser) return default_names

		const names_string = window.sessionStorage.getItem(storage_key)
		if (!names_string) return default_names

		try {
			const parsed_names: unknown = JSON.parse(names_string)
			const is_valid =
				Array.isArray(parsed_names) &&
				parsed_names.every((name) => typeof name === 'string')

			return is_valid ? parsed_names : default_names
		} catch {
			return default_names
		}
	}

	const selected_category_names: string[] = $state(get_saved_category_names())

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

	function add_name() {
		if (selected_category_names.length === max_categories) return
		selected_category_names.push('')
	}

	function remove_name() {
		if (selected_category_names.length <= 1) return
		selected_category_names.pop()
	}
</script>

<svelte:head>
	<title>Choose categories for comparison</title>
</svelte:head>

<h2>Choose categories for comparison</h2>

{#each selected_category_names as name, i}
	<div class="input-group">
		<label for="name_{i + 1}">Category {i + 1}</label>
		<input
			id="name_{i + 1}"
			type="text"
			list="category-list"
			bind:value={selected_category_names[i]}
			required
			aria-invalid={name.length > 0 && !category_names.includes(name)}
		/>
	</div>
{/each}

<datalist id="category-list">
	{#each categories as category}
		<option value={category.name}>{category.name}</option>
	{/each}
</datalist>

<Controls
	add={add_name}
	remove={remove_name}
	add_disabled={selected_category_names.length === max_categories}
	remove_disabled={selected_category_names.length <= 1}
/>

<p>
	<button class="button" onclick={compare_categories}>Compare</button>
</p>

<style>
	label {
		display: block;
		margin-bottom: 0.25rem;
	}

	input {
		width: min(100%, 25rem);
	}

	.input-group {
		margin-block: 1.5rem;
	}
</style>
