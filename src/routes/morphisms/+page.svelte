<script lang="ts">
	import type { MorphismType } from '$lib/database/morphisms/morphism-types.data'
	import MorphismCard from './MorphismCard.svelte'

	type Props = {
		data: {
			morphisms: MorphismType[]
		}
	}

	let { data }: Props = $props()
</script>

<svelte:head>
	<title>Morphisms</title>
</svelte:head>

<section>
	<h2>Types of morphisms</h2>

	<div class="cards">
		{#each data.morphisms as morphism}
			<MorphismCard {morphism} />
		{/each}
	</div>
</section>

<style>
	.cards {
		margin-top: 2rem;
		display: grid;
		gap: 2rem;
	}
</style>
