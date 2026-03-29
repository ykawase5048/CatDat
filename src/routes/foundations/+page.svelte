<script lang="ts">
	import MetaData from '$components/MetaData.svelte'
	let { data } = $props()
</script>

<MetaData
	title="Foundations"
	description="How to make sense of categories in set theory"
/>

<h2>Foundations</h2>

{#each data.foundations as para}
	<p>{@html para}</p>
{/each}
