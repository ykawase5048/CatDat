<script>
	import Implication from '$lib/components/Implication.svelte'
	import { implications } from '$lib/implications/implications'

	$effect(() => {
		window.MathJax?.typeset()
	})

	const sorted_implications = implications.toSorted((a, b) =>
		a.assumptions[0].localeCompare(b.assumptions[0]),
	)
</script>

<svelte:head>
	<title>List of Implications</title>
</svelte:head>

<h2>List of Implications</h2>

<p>The following implications and equivalences are available.</p>

<ul>
	{#each sorted_implications as implication}
		<li>
			<Implication {implication} />
		</li>
	{/each}
</ul>

<p>
	Deductions from these implications are automatically incorporated into each category
	whenever applicable. For instance, if a category is identified as complete, the
	property of having a terminal object is automatically inferred and added.
</p>
<p>
	Moreover, implications are automatically dualized when the corresponding dual
	properties exist. For example, the statement that finitely complete categories with
	filtered limits are complete automatically implies that finitely cocomplete categories
	with filtered colimits are cocomplete. Similarly, if a category is self-dual and, for
	example, complete, it is automatically inferred to be cocomplete as well.
</p>
