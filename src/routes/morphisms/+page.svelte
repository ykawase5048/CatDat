<script lang="ts">
	import type { MorphismImplication } from '$lib/database/morphisms/morphism-implications.data'
	import type {
		MorphismType,
		MorphismTypeID,
	} from '$lib/database/morphisms/morphism-types.data'
	import { slide } from 'svelte/transition'
	import MorphismCard from './MorphismCard.svelte'
	import MorphismImplicationItem from './MorphismImplicationItem.svelte'
	import { prefersReducedMotion } from 'svelte/motion'

	type Props = {
		data: {
			morphisms: MorphismType[]
			morphism_implications: MorphismImplication[]
		}
	}

	let { data }: Props = $props()

	let expanded_morphism = $state<MorphismTypeID | null>(null)

	function toggle_morphism(morphism: MorphismTypeID) {
		if (expanded_morphism === morphism) {
			expanded_morphism = null
		} else {
			expanded_morphism = morphism
		}
	}
</script>

<svelte:head>
	<title>Morphisms</title>
</svelte:head>

<section>
	<h2>Types of morphisms</h2>

	<p class="hint">
		The following {data.morphisms.length} types of morphisms are defined in the database.
		Click on a type to see more information.
	</p>

	<ul>
		{#each data.morphisms as morphism}
			<li>
				<button
					class:selected={expanded_morphism === morphism.id}
					onclick={() => toggle_morphism(morphism.id)}
				>
					{morphism.id}
				</button>

				{#if expanded_morphism === morphism.id}
					<div
						class="card-container"
						transition:slide={{
							duration: prefersReducedMotion.current ? 0 : 200,
						}}
					>
						<MorphismCard {morphism} />
					</div>
				{/if}
			</li>
		{/each}
	</ul>
</section>

<section>
	<h2>Implications of morphisms</h2>
	<p class="hint">
		Of course, these implications may be dualized in the usual way. The brackets
		[property] mean that the ambient category needs to satisfy this property.
	</p>
	<ul>
		{#each data.morphism_implications as implication}
			<li>
				<MorphismImplicationItem {implication} />
			</li>
		{/each}
	</ul>
</section>

<style>
	button:active,
	button.selected {
		color: var(--accent-color);
	}

	section {
		margin-bottom: 2rem;
	}

	.card-container {
		margin-block: 1rem;
	}
</style>
