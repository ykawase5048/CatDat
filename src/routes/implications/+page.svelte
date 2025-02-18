<script>
	import ImplicationList from '$components/ImplicationList.svelte'
	import MetaData from '$components/MetaData.svelte'

	let { data } = $props()
</script>

<MetaData
	title="List of Implications"
	description="Implications of categorical properties"
/>

<h2>List of Implications</h2>

<ImplicationList
	implications={data.implications}
	description="The following {data.implications
		.length} implications and equivalences are available*."
/>

<p class="hint">
	*Deductions from these implications are automatically incorporated into each category
	whenever applicable. For instance, if a category is identified as complete, the
	property of having a terminal object is automatically inferred and added.
</p>

{#if !data.show_all_implications}
	<p class="hint">
		Moreover, implications are automatically dualized when the corresponding dual
		properties exist. For example, the statement that finitely complete categories
		with filtered limits are complete automatically implies that finitely cocomplete
		categories with filtered colimits are cocomplete. Similarly, if a category is
		self-dual and, for example, complete, it is automatically inferred to be
		cocomplete as well. Click <a href="/implications?show_all">here</a> to see all implications,
		including the dualizations.
	</p>
{:else}
	<p class="hint">
		Click <a href="/implications">here</a> to hide the dualizations.
	</p>
{/if}
