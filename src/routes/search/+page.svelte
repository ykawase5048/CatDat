<script lang="ts">
	import { properties } from '$lib/dictionaries/properties'
	import { get_suitable_categories } from './search'

	let expected_properties = $state<string[]>([''])
	let expected_non_properties = $state<string[]>([''])

	let suitable_categories = $derived(
		get_suitable_categories(
			expected_properties.filter(Boolean),
			expected_non_properties.filter(Boolean),
		),
	)

	function add_property() {
		expected_properties.push('')
	}

	function remove_property() {
		if (expected_properties.length === 0) return
		expected_properties.pop()
	}

	function add_non_property() {
		expected_non_properties.push('')
	}

	function remove_non_property() {
		if (expected_non_properties.length === 0) return
		expected_non_properties.pop()
	}
</script>

<svelte:head>
	<title>Search for categories</title>
</svelte:head>

<h2>Search for categories</h2>

<p class="hint">
	On this page you can search for categories that satisfy a set of properties and do <i
		>not</i
	>
	satisfy a set of properties at the same. For example, you can search for categories that
	are finitely complete and pointed, but not complete.
</p>

<p>Looking for categories with these properties:</p>

<section class="selection" aria-label="selection of properties">
	<div class="inputs">
		{#each { length: expected_properties.length } as _, i}
			<input
				type="text"
				list="property-list"
				bind:value={expected_properties[i]}
				aria-label="property {i + 1}"
				aria-invalid={expected_properties[i].length > 0 &&
					properties.every((p) => p.name != expected_properties[i])}
			/>
		{/each}
	</div>
	<div class="controls">
		<button class="button positive" aria-label="add property" onclick={add_property}
			>+</button
		>
		<button
			class="button positive"
			aria-label="remove property"
			onclick={remove_property}>-</button
		>
	</div>
</section>

<p>... and <i>not</i> with these properties:</p>

<section class="selection" aria-label="selection of non-properties">
	<div class="inputs">
		{#each { length: expected_non_properties.length } as _, i}
			<input
				type="text"
				list="property-list"
				bind:value={expected_non_properties[i]}
				aria-label="non-property {i + 1}"
				aria-invalid={expected_non_properties[i].length > 0 &&
					properties.every((p) => p.name != expected_non_properties[i])}
			/>
		{/each}
	</div>
	<div class="controls">
		<button class="button negative" onclick={add_non_property}>+</button>
		<button class="button negative" onclick={remove_non_property}>-</button>
	</div>
</section>

<datalist id="property-list">
	{#each properties as property}
		<option value={property.name}>{property.name}</option>
	{/each}
</datalist>

<h2>Results</h2>

{#if suitable_categories.length === 0}
	<p>No categories found</p>
{:else}
	<ul>
		{#each suitable_categories as category}
			<li>
				<a href="/category/{category.id}">{category.name}</a>
			</li>
		{/each}
	</ul>
{/if}

<style>
	button {
		font-weight: bold;
		color: white;
	}

	button.positive {
		background-color: var(--positive-color);
	}

	button.negative {
		background-color: var(--negative-color);
	}

	.selection {
		display: grid;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}

	.inputs {
		display: grid;
		gap: 0.5rem;
	}

	.controls {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	input[aria-invalid='true'] {
		border-color: var(--negative-color);
		outline: 1px solid var(--negative-color);
	}

	@media (min-width: 600px) {
		.inputs {
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		}

		.controls {
			display: inline-flex;
			gap: 0.5rem;
		}

		button {
			width: 3rem;
		}
	}
</style>
