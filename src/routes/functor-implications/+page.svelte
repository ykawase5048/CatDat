<script>
	import ImplicationList from '$components/ImplicationList.svelte'
	import MetaData from '$components/MetaData.svelte'
	import { pluralize } from '$lib/client/utils'

	let { data } = $props()
</script>

<MetaData
	title="List of implications of functors"
	description="Implications of functorial properties"
/>

<h2>List of implications of functors</h2>

<!-- TODO: make this list more pretty -->

<ul>
	{#each data.implications as implication (implication.id)}
		<li>
			<a href="/functor-implication/{implication.id}">{implication.id}</a>
		</li>
	{/each}
</ul>
