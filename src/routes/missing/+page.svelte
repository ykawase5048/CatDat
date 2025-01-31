<script>
	import CategoryList from '$lib/components/CategoryList.svelte'
	import {
		negate_prefix,
		properties_dictionary,
	} from '$lib/properties/properties.utils'

	const { data } = $props()

	const {
		missing_basic_combinations,
		categories_with_unknown_properties,
		categories_with_unknown_monomorphisms,
		categories_with_unknown_epimorphisms,
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

<h3>Categories with unknown monomorphisms</h3>

<CategoryList items={categories_with_unknown_monomorphisms} />

<h3>Categories with unknown epimorphisms</h3>

<CategoryList items={categories_with_unknown_epimorphisms} />

<h3>Missing property combinations</h3>

Among the consistent combinations of the form "property P, but not property Q", the
following combinations are currently not yet witnessed by an example category in our
database. Please help us fill in the gaps by contributing to this project. Please also
report in case some combination is inconsistent. This means that an implication is missing
in the database.

<p>
	Number of missing basic combinations: {missing_basic_combinations.length}
</p>

{#if missing_basic_combinations.length}
	<ul>
		{#each missing_basic_combinations as combination}
			{@const prefix1 = properties_dictionary[combination.assumption].prefix}
			{@const prefix2 = properties_dictionary[combination.negation].prefix}
			<li>
				{prefix1}
				{combination.assumption}, but {negate_prefix(prefix2)}
				{combination.negation}
			</li>
		{/each}
	</ul>
{/if}
