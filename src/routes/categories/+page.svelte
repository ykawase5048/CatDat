<script lang="ts">
	import CategoryList from '$components/CategoryList.svelte'
	import Chip from '$components/Chip.svelte'
	import ChipGroup from '$components/ChipGroup.svelte'
	import MetaData from '$components/MetaData.svelte'
	import SearchFilter from '$components/SearchFilter.svelte'
	import { filter_by_tag } from '$lib/client/utils'

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

<section>
	<h2>List of categories</h2>

	<SearchFilter bind:search />

	<CategoryList
		categories={searched_categories}
		description={search
			? `Found ${searched_categories.length} categories`
			: `The following ${searched_categories.length} categories are available.`}
	/>
</section>

<section>
	<h2>List of tags</h2>

	<ChipGroup>
		{#each data.tags as tag}
			<Chip size="small" handle_click={() => filter_by_tag(tag)}>{tag}</Chip>
		{/each}
	</ChipGroup>
</section>

<style>
	section + section {
		margin-top: 2rem;
	}
</style>
