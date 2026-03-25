<script lang="ts">
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

	const id = $props.id()

	let item = $state('')
	let show_suggestions = $state(false)

	let suggestions = $derived(
		selected_items.length >= max ? [] : allowed_items.filter(is_suggestion),
	)

	function is_suggestion(allowed_item: string) {
		return (
			!selected_items.includes(allowed_item) &&
			allowed_item.toLowerCase().includes(item.trim().toLowerCase())
		)
	}

	let item_is_valid = $derived(
		allowed_items.includes(item.trim()) &&
			!selected_items.includes(item.trim()) &&
			selected_items.length < max,
	)

	function handle_submit(e: SubmitEvent) {
		e.preventDefault()
		if (!item_is_valid) return
		selected_items.push(item.trim())
		item = ''
	}

	function select(allowed_item: string) {
		selected_items.push(allowed_item)
		item = ''
		show_suggestions = false
	}

	function handle_keydown(e: KeyboardEvent) {
		if (show_suggestions && e.key === 'Escape') {
			show_suggestions = false
		}
	}

	function handle_blur(e: FocusEvent) {
		const is_suggestion_click =
			e.relatedTarget instanceof HTMLButtonElement &&
			e.relatedTarget.getAttribute('data-for') == id
		if (!is_suggestion_click) show_suggestions = false
	}

	function remove_item(item: string) {
		selected_items = selected_items.filter((_item) => _item !== item)
	}
</script>

<svelte:window onkeydown={handle_keydown} />

<section aria-label={section_label}>
	{#if title}
		<p>{@html title}</p>
	{/if}

	<form onsubmit={handle_submit}>
		<div class="input-wrapper">
			<input
				aria-label={item_label}
				aria-invalid={item.trim().length > 0 && !item_is_valid}
				type="text"
				bind:value={item}
				onfocus={() => (show_suggestions = true)}
				onblur={handle_blur}
			/>
		</div>

		{#if show_suggestions && suggestions.length > 0}
			<div class="suggestions">
				{#each suggestions as allowed_item}
					<button onclick={() => select(allowed_item)} data-for={id}>
						{allowed_item}
					</button>
				{/each}
			</div>
		{/if}
	</form>

	<ChipGroup>
		{#each selected_items as selected_item}
			<Chip handle_click={() => remove_item(selected_item)}>
				{selected_item}
			</Chip>
		{/each}
	</ChipGroup>
</section>

<style>
	section {
		margin-block: 1.5rem;
	}

	.input-wrapper {
		margin-bottom: 1rem;

		input {
			width: 100%;
		}

		@media (min-width: 600px) {
			max-width: 28rem;
		}
	}

	form {
		position: relative;
	}

	.suggestions {
		position: absolute;
		z-index: 10;
		max-height: 12rem;
		overflow-y: scroll;
		scrollbar-width: thin;
		top: calc(100% + 0.25rem);
		background-color: var(--bg-color);
		padding: 0.5rem 1rem;
		border: 1px solid var(--outline-color);
		border-radius: 0.4rem;
		box-shadow: 0 0 1rem var(--shadow-color);
		display: grid;
		gap: 0.25rem;

		button {
			font-size: 1rem;
			text-align: left;
		}
	}
</style>
