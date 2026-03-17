<script>
	import { browser } from '$app/environment'
	import ImplicationList from '$components/ImplicationList.svelte'
	import MetaData from '$components/MetaData.svelte'
	import SearchFilter from '$components/SearchFilter.svelte'

	let { data } = $props()

	let show_deduced_implications = $state(false)

	function toggle() {
		show_deduced_implications = !show_deduced_implications
		if (browser) window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	let displayed_implications = $derived(
		show_deduced_implications
			? data.implications
			: data.implications.filter((implication) => !implication.is_deduced),
	)

	let search = $state('')

	let searched_implications = $derived(
		search
			? displayed_implications.filter(
					(implication) =>
						implication.assumptions.some((prop) =>
							prop.toLowerCase().includes(search.toLowerCase()),
						) ||
						implication.conclusions.some((prop) =>
							prop.toLowerCase().includes(search.toLowerCase()),
						),
				)
			: displayed_implications,
	)
</script>

<MetaData
	title="List of Implications"
	description="Implications of categorical properties"
/>

<h2>List of Implications</h2>

<SearchFilter bind:search />

<ImplicationList
	implications={searched_implications}
	description={search
		? `Found ${searched_implications.length} implications`
		: `The following ${searched_implications.length} implications and equivalences are available*.`}
/>

<p class="hint">
	*Deductions from these implications are automatically incorporated into each category
	whenever applicable. For instance, if a category is identified as complete, the
	property of having a terminal object is automatically inferred and added.
</p>

<p class="hint">
	Moreover, implications are automatically dualized when the corresponding dual
	properties exist. For example, the statement that finitely complete categories with
	filtered limits are complete automatically implies that finitely cocomplete categories
	with filtered colimits are cocomplete. Similarly, if a category is self-dual and, for
	example, complete, it is automatically inferred to be cocomplete as well.
</p>

<button class="button" onclick={toggle}>
	{#if show_deduced_implications}
		Hide deduced implications
	{:else}
		Show deduced implications
	{/if}
</button>
