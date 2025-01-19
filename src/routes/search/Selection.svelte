<script lang="ts">
	import { properties } from '$lib/properties/properties'

	type Props = {
		aria_label: string
		values: string[]
		name: string
		variant: 'positive' | 'negative'
	}

	let { aria_label, name, values = $bindable(), variant }: Props = $props()

	function add() {
		values.push('')
	}

	function remove() {
		if (values.length === 0) return
		values.pop()
	}
</script>

<section class="selection" aria-label={aria_label}>
	<div class="inputs">
		{#each { length: values.length } as _, i}
			<input
				type="text"
				list="property-list"
				bind:value={values[i]}
				aria-label="{name} {i + 1}"
				aria-invalid={values[i].length > 0 &&
					properties.every((p) => p.name != values[i])}
			/>
		{/each}
	</div>
	<div class="controls">
		<button class="button {variant}" onclick={add}>+</button>
		<button class="button {variant}" onclick={remove}>-</button>
	</div>
</section>

<style>
	button {
		font-weight: bold;
		color: white;
	}

	button.positive {
		background-color: var(--positive-color);
	}

	button.negative {
		background-color: var(--negative-color);
	}

	.selection {
		display: grid;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}

	.inputs {
		display: grid;
		gap: 0.5rem;
	}

	.controls {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	input[aria-invalid='true'] {
		border-color: var(--negative-color);
		outline: 1px solid var(--negative-color);
	}

	@media (min-width: 600px) {
		.inputs {
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		}

		.controls {
			display: inline-flex;
			gap: 0.5rem;
		}

		button {
			width: 3rem;
		}
	}
</style>
