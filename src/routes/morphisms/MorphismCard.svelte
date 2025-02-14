<script lang="ts">
	import type { MorphismType } from '$lib/database/morphisms/morphism-types.data'

	type Props = {
		morphism: MorphismType
	}

	let { morphism }: Props = $props()
</script>

<div class="card">
	<h3>{morphism.id}</h3>

	<p class="description">
		{@html morphism.description}
	</p>

	<ul>
		<li>
			Dual: {morphism.dual}
		</li>
		<li>
			<a href={morphism.nlab_link} target="_blank">nLab link</a>
		</li>
	</ul>
</div>

<style>
	h3 {
		margin-block: 0.5rem 1.5rem;
	}

	.card {
		background-color: var(--secondary-bg-color);
		padding: 1rem;
		border-radius: 0.5rem;
	}
</style>
