<script>
	import CategoryList from '$components/CategoryList.svelte'
	import { negate_prefix } from '$lib/data-utils/data.helpers'

	const { data } = $props()

	const {
		missing_basic_combinations_with_prefixes,
		categories_with_unknown_properties,
		categories_with_unknown_special_morphisms,
		total_number_unknown_properties,
	} = data
</script>

<svelte:head>
	<title>Missing data</title>
</svelte:head>

<h2>Missing data</h2>

<p class="hint">
	This page lists some missing data in the database. Please help us fill in the gaps by
	<a href="/contribute">contributing</a> to this project.
</p>

<h3>Categories with unknown properties</h3>

<p class="hint">
	There are {categories_with_unknown_properties.length} categories that have some unknown
	properties.
</p>

<CategoryList items={categories_with_unknown_properties} />

<p class="hint">
	In total, there are {total_number_unknown_properties} unknown properties of categories.
</p>

<h3>Categories with unknown special morphisms</h3>

<CategoryList items={categories_with_unknown_special_morphisms} />

<h3>Missing combinations</h3>

<p class="hint">
	Among the consistent combinations of the form <strong>P &#8743; &#172;Q</strong>
	the following {missing_basic_combinations_with_prefixes.length}
	combinations are currently not yet witnessed by an example category (or its dual) in our
	database. Please help us fill in the gaps by <a href="/contribute">contributing</a> to
	this project. Please also report in case some combination is inconsistent. This means that
	an implication is missing in the database.
</p>

{#if missing_basic_combinations_with_prefixes.length}
	<ul>
		{#each missing_basic_combinations_with_prefixes as combination}
			<li>
				{combination.assumption_prefix}
				{combination.assumption}, <!---->
				but {negate_prefix(combination.negation_prefix)}
				{combination.negation}
			</li>
		{/each}
	</ul>
{/if}
