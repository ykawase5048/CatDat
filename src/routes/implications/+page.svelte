<script>
	import ImplicationList from '$lib/components/ImplicationList.svelte'
	import { implications } from '$lib/implications/implications'

	const sorted_implications = implications.toSorted((a, b) =>
		a.assumptions[0].localeCompare(b.assumptions[0]),
	)
</script>

<svelte:head>
	<title>List of Implications</title>
</svelte:head>

<h2>List of Implications</h2>

<ImplicationList
	items={sorted_implications}
	description="The following {implications.length} implications and equivalences are available*."
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
