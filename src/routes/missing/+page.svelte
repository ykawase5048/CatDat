<script>
	import CategoryList from '$components/CategoryList.svelte'
	import MetaData from '$components/MetaData.svelte'
	import { get_property_url } from '$lib/commons/property.url'

	const { data } = $props()
</script>

<MetaData
	title="Missing data in CatDat"
	description="Missing properties, missing special morphisms, and more."
/>

<h2>Missing data</h2>

<p>
	This page lists some missing data in the database. Please help us fill in the gaps by
	<a href="/contribute">contributing</a> to this project.
</p>

<h3>Categories with unknown properties</h3>

<CategoryList
	categories={data.categories_with_unknown_properties}
	description="There are {data.categories_with_unknown_properties.length} categories
	that have some unknown properties."
/>

<p class="hint">
	In total, there are {data.total_number_unknown_pairs} unknown (category, property)-pairs.
</p>

<h3>Categories with properties without recorded reason</h3>

<CategoryList
	categories={data.categories_with_unreasoned_properties}
	description="There are {data.categories_with_unreasoned_properties
		.length} categories with properties (satisfied or unsatisfied) that have no reason specified."
/>

<h3>Categories with unknown special morphisms</h3>

<CategoryList
	categories={data.categories_with_missing_morphisms}
	description="There are {data.categories_with_missing_morphisms
		.length} categories whose iso-, epi-, or monomorphisms are unknown."
/>

<h3>Missing combinations</h3>

{#if data.missing_combinations}
	<p class="hint">
		Among the consistent combinations of the form p &and; &not;q, the following are
		not yet witnessed by a category in the database. If some of these combinations <i
			>are</i
		>
		inconsistent, this indicates that some
		<a href="/implications">implication</a> is missing.
	</p>

	<details>
		<summary>Show all {data.missing_combinations.length} combinations</summary>

		<ul class="combinations">
			{#each data.missing_combinations as [p, q]}
				<li class="combination">
					<a href={get_property_url(p)}>{p}</a> &and; &not;<a
						href={get_property_url(q)}>{q}</a
					>
				</li>
			{/each}
		</ul>
	</details>
{:else}
	<p>Missing combinations could not be loaded</p>
{/if}

<style>
	.combinations {
		margin-top: 0.5rem;

		a {
			text-decoration: none;
		}
	}
</style>
