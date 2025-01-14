<script lang="ts">
	import { properties_list } from '$lib/dictionaries/properties'
	import { get_suitable_categories } from './search'

	let expected_properties = $state<string[]>([])
	let expected_non_properties = $state<string[]>([])

	let suitable_categories = $derived(
		get_suitable_categories(expected_properties, expected_non_properties),
	)

	let no_selection = $derived(
		expected_properties.length === 0 && expected_non_properties.length === 0,
	)

	$inspect(expected_properties, expected_non_properties)
</script>

<a href="/">Home</a>

<h2>Search for categories</h2>

<p>
	On this page you can search for categories that satisfy a set of properties and do not
	satisfy a set of properties at the same. For example, you can search for categories
	that have finite limits and a zero object, but are not complete.
</p>

<div class="two-columns">
	<div>
		<p>The category <strong>should have</strong> these properties:</p>

		{#each properties_list as property}
			<label>
				<input
					type="checkbox"
					value={property.name}
					bind:group={expected_properties}
				/>
				{property.name}
			</label>
		{/each}
	</div>

	<div>
		<p>The category <strong>should not have</strong> these properties:</p>

		{#each properties_list as property}
			<label>
				<input
					type="checkbox"
					value={property.name}
					bind:group={expected_non_properties}
				/>
				{property.name}
			</label>
		{/each}
	</div>
</div>

<h2>Results</h2>

{#if no_selection}
	<p>Please select some properties to get results</p>
{:else if suitable_categories.length === 0}
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
	label {
		display: block;
	}
	@media (min-width: 600px) {
		.two-columns {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
