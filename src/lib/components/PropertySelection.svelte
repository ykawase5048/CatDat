<script lang="ts">
	import { properties } from '$lib/properties/properties'
	import { tick } from 'svelte'
	import Controls from './Controls.svelte'

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
		{#each values as value, i}
			<input
				type="text"
				list="property-list"
				bind:value={values[i]}
				aria-label="{name} {i + 1}"
				aria-invalid={value.length > 0 && properties.every((p) => p.id != value)}
				bind:this={input_elements[i]}
			/>
		{/each}
	</div>

	<Controls {add} {remove} remove_disabled={values.length === 0} />
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

	@media (min-width: 600px) {
		.inputs {
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		}
	}
</style>
