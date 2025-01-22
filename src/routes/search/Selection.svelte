<script lang="ts">
	import { properties } from '$lib/properties/properties'
	import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'

	type Props = {
		aria_label: string
		values: string[]
		name: string
	}

	let { aria_label, name, values = $bindable() }: Props = $props()

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
					properties.every((p) => p.id != values[i])}
			/>
		{/each}
	</div>
	<div class="controls">
		<button class="button" onclick={add}>
			<Fa icon={faPlus} />
		</button>
		<button class="button" onclick={remove}>
			<Fa icon={faMinus} />
		</button>
	</div>
</section>

<style>
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
	}
</style>
