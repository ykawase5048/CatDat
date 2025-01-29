<script lang="ts">
	import { properties } from '$lib/properties/properties'
	import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
	import { tick } from 'svelte'
	import Fa from 'svelte-fa'

	type Props = {
		aria_label: string
		values: string[]
		name: string
	}

	let { aria_label, name, values = $bindable() }: Props = $props()

	let input_elements = $state<HTMLInputElement[]>([])

	async function add() {
		values.push('')
		await tick()
		input_elements[values.length - 1]?.focus()
	}

	function remove() {
		if (values.length === 0) return
		values.pop()
		input_elements.pop()
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
				bind:this={input_elements[i]}
			/>
		{/each}
	</div>

	<div class="controls">
		<button class="button" onclick={add} aria-label="add property">
			<Fa icon={faPlus} />
		</button>
		<button class="button" onclick={remove} aria-label="remove property">
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
