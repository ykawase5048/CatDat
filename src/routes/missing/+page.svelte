<script>
	import CategoryList from '$components/CategoryList.svelte'
	import { negate_prefix } from '$lib/utils/data.helpers'

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

This page lists some missing data in the database. Please help us fill in the gaps by
<a href="/contribute">contributing</a> to this project.

<h3>Categories with unknown properties</h3>

There are {categories_with_unknown_properties.length} categories that have some unknown properties.

<CategoryList items={categories_with_unknown_properties} />

In total, there are {total_number_unknown_properties} unknown properties of categories.

<h3>Categories with unknown special morphisms</h3>

<CategoryList items={categories_with_unknown_special_morphisms} />

<h3>Missing property combinations</h3>

Among the consistent combinations of the form "property P, but not property Q", the
following combinations are currently not yet witnessed by an example category (or its
dual) in our database. Please help us fill in the gaps by contributing to this project.
Please also report in case some combination is inconsistent. This means that an
implication is missing in the database.

<p>
	Number of missing basic combinations: {missing_basic_combinations_with_prefixes.length}
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
