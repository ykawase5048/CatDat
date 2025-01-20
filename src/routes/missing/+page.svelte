<script>
	import { negate_prefix } from '$lib/properties/prefix'
	import { properties_dictionary } from '$lib/properties/property.dict'
	import {
		missing_basic_combinations,
		properties_without_counterexample,
	} from './missing'
</script>

<svelte:head>
	<title>Missing categories</title>
</svelte:head>

<h2>Missing categories</h2>

{#if properties_without_counterexample.length}
	There are currently {properties_without_counterexample.length} properties for which the
	database does not offer a category which does <i>not</i> satisfy this property.
	<ul>
		{#each properties_without_counterexample as property}
			<li>{property.id}</li>
		{/each}
	</ul>
{/if}

Among the consistent combinations of the form "P, but not Q" for two properties of
categories "P" and "Q", the following combinations are currently not yet witnessed by an
example category in our database. Please help us fill in the gaps by contributing to the
GitHub repository. Please also report in case some combination is actually inconsistent;
this means that an implication is missing in the database.

<p>
	Number of missing basic combinations: {missing_basic_combinations.length}
</p>

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
