<script lang="ts">
	import { faPlus } from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'
	import ChipGroup from './ChipGroup.svelte'
	import Chip from './Chip.svelte'

	type Props = {
		title?: string
		allowed_items: readonly string[]
		selected_items: string[]
		section_label: string
		item_label: string
		max?: number
	}

	let {
		title,
		allowed_items,
		selected_items = $bindable(),
		section_label,
		item_label,
		max = Infinity,
	}: Props = $props()

	let item: string = $state('')

	let is_valid = $derived(
		item.length === 0 ||
			(allowed_items.includes(item) &&
				!selected_items.includes(item) &&
				selected_items.length < max),
	)

	function handle_submit(e: SubmitEvent) {
		e.preventDefault()
		if (!item || !is_valid) return
		selected_items.push(item)
		item = ''
	}

	function remove_item(item: string) {
		selected_items = selected_items.filter((_item) => _item !== item)
	}
</script>

<section aria-label={section_label}>
	{#if title}
		<p>{@html title}</p>
	{/if}

	<form onsubmit={handle_submit}>
		<input
			aria-label={item_label}
			aria-invalid={!is_valid}
			type="text"
			bind:value={item}
			list="list-{item_label}"
		/>
		<button type="submit" class="button" disabled={selected_items.length >= max}>
			<Fa icon={faPlus} />
		</button>
	</form>

	<ChipGroup>
		{#each selected_items as selected_item}
			<Chip handle_click={() => remove_item(selected_item)}>
				{selected_item}
			</Chip>
		{/each}
	</ChipGroup>
</section>

<datalist id="list-{item_label}">
	{#each allowed_items as item}
		<option value={item}>{item}</option>
	{/each}
</datalist>

<style>
	section {
		margin-block: 1.5rem;
	}

	form {
		display: flex;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	input {
		flex: 1;
	}

	@media (min-width: 600px) {
		form {
			max-width: 30rem;
		}
	}
</style>
