<script>
	import { goto } from '$app/navigation'
	import { categories as all_categories } from '$lib/categories/categories'
	import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'

	const all_category_names = all_categories.map((category) => category.name)

	const category_names = $state(['', ''])

	const max_categories = 10

	function compare() {
		const chosen_categories = category_names
			.map((name) => all_categories.find((category) => category.name === name))
			.filter((category) => category !== undefined)

		if (chosen_categories.length <= 1) return

		const path = chosen_categories.map((category) => category.id).join('/')

		goto(`/compare/${path}`)
	}

	function add_name() {
		if (category_names.length === max_categories) return
		category_names.push('')
	}

	function remove_name() {
		category_names.pop()
	}
</script>

<svelte:head>
	<title>Choose categories for comparison</title>
</svelte:head>

<h2>Choose categories for comparison</h2>

{#each category_names as name, i}
	<div class="input-group">
		<label for="name_{i + 1}">Category {i + 1}</label>
		<input
			id="name_{i + 1}"
			type="text"
			list="category-list"
			bind:value={category_names[i]}
			required
			aria-invalid={name.length > 0 && !all_category_names.includes(name)}
		/>
	</div>
{/each}

<datalist id="category-list">
	{#each all_categories as category}
		<option value={category.name}>{category.name}</option>
	{/each}
</datalist>

<div class="controls">
	<button
		disabled={category_names.length === max_categories}
		class="button"
		aria-label="Add another category"
		onclick={add_name}
	>
		<Fa icon={faPlus} />
	</button>
	<button class="button" aria-label="Remove last category" onclick={remove_name}>
		<Fa icon={faMinus} />
	</button>
</div>

<button class="button" onclick={compare}>Compare</button>

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

	.controls {
		margin-bottom: 2rem;
	}
</style>
