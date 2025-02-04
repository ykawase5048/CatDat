<script lang="ts">
	import {
		is_valid_property,
		PROPERTY_IDs,
		type PropertyID,
	} from '$lib/properties/propertyIDs'
	import { faPlus } from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'

	type Props = {
		title?: string
		selected_properties: PropertyID[]
		aria_label: string
	}

	let { title, selected_properties = $bindable(), aria_label }: Props = $props()

	let value: string = $state('')
	let is_valid_value = $derived(
		value.length === 0 ||
			(is_valid_property(value) &&
				!selected_properties.includes(value as PropertyID)),
	)

	function handle_submit(e: SubmitEvent) {
		e.preventDefault()
		if (!value || !is_valid_value) return
		selected_properties.push(value as PropertyID)
		value = ''
	}

	function remove_property(property: PropertyID) {
		selected_properties = selected_properties.filter((p) => p !== property)
	}
</script>

<section aria-label={aria_label}>
	{#if title}
		<p>{@html title}</p>
	{/if}

	<form onsubmit={handle_submit}>
		<input
			aria-label="property"
			aria-invalid={!is_valid_value}
			type="text"
			bind:value
			list="property-list"
		/>
		<button type="submit" class="button">
			<Fa icon={faPlus} />
		</button>
	</form>

	<div class="chips">
		{#each selected_properties as property}
			<button class="chip" onclick={() => remove_property(property)}>
				{property}
			</button>
		{/each}
	</div>
</section>

<datalist id="property-list">
	{#each PROPERTY_IDs as property}
		<option value={property}>{property}</option>
	{/each}
</datalist>

<style>
	section {
		margin-block: 1.5rem;
	}

	form {
		display: flex;
		gap: 1rem;
	}

	input {
		flex: 1;
	}

	@media (min-width: 600px) {
		form {
			max-width: 30rem;
		}
	}

	.chips {
		margin-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.chip {
		font-size: 1rem;
		border-radius: 100vw;
		padding: 0.2rem 0.875rem;
		outline: 1px solid var(--secondary-outline-color);
		transition: outline-color 150ms;
		background-color: var(--secondary-bg-color);
	}

	.chip:hover,
	.chip:focus-visible {
		outline-color: var(--outline-color);
	}
</style>
