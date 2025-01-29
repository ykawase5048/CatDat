<script>
	import CategoryList from '$lib/components/CategoryList.svelte'
	import {
		negate_prefix,
		properties_dictionary,
	} from '$lib/properties/properties.utils'

	const { data } = $props()

	const { missing_basic_combinations, categories_with_unknown_properties } = data
</script>

<svelte:head>
	<title>Missing data</title>
</svelte:head>

<h2>Categories with unknown properties</h2>

There are {categories_with_unknown_properties.length} categories that have some unknown properties.
Please help us fill in the gaps by contributing to the GitHub repository.

<CategoryList items={categories_with_unknown_properties} />

<h2>Missing property combinations</h2>

Among the consistent combinations of the form "property P, but not property Q", the
following combinations are currently not yet witnessed by an example category in our
database. Please help us fill in the gaps by contributing to the GitHub repository. Please
also report in case some combination is inconsistent. This means that an implication is
missing in the database.

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
