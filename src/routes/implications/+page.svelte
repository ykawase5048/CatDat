<script>
	import Implication from '$lib/components/Implication.svelte'
	import { implications } from '$lib/dictionaries/implications'

	$effect(() => {
		window.MathJax?.typeset()
	})
</script>

<svelte:head>
	<title>List of Implications</title>
</svelte:head>

<h2>List of Implications</h2>

<p>The following implications and equivalences are available.</p>

<ul>
	{#each implications as implication}
		<li>
			<Implication {implication} />
		</li>
	{/each}
</ul>

<p>
	Deductions from these implications are automatically added to each category when
	appropriate. For example, the category of sets is registered as complete, and then the
	property of having a terminal object is automatically added as well.
</p>

<p>
	Also, implications are automatically dualized when the dual properties are available.
	For example, the fact that finitely complete categories with filtered limits are
	complete automatically implies that finitely cocomplete categories with filtered
	colimits are cocomplete. Also, when a category is self-dual and, say, complete, it is
	automatically cocomplete.
</p>
