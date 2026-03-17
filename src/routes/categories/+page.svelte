<script lang="ts">
	import CategoryList from '$components/CategoryList.svelte'
	import MetaData from '$components/MetaData.svelte'
	import SearchFilter from '$components/SearchFilter.svelte'

	let { data } = $props()

	let search = $state('')

	let searched_categories = $derived(
		search
			? data.categories.filter((category) =>
					category.name.toLowerCase().includes(search.toLowerCase()),
				)
			: data.categories,
	)
</script>

<MetaData title="List of categories" description="All available categories" />

<h2>List of categories</h2>

<SearchFilter bind:search />

<CategoryList
	categories={searched_categories}
	description={search
		? `Found ${searched_categories.length} categories`
		: `The following ${searched_categories.length} categories are available.`}
/>
