<script lang="ts">
	import { faPlus } from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'

	type Props = {
		title?: string
		category_names: string[]
		selected_category_names: string[]
		aria_label: string
	}

	let {
		title,
		category_names,
		selected_category_names = $bindable(),
		aria_label,
	}: Props = $props()

	let value: string = $state('')
	let is_valid_value = $derived(
		value.length === 0 ||
			(category_names.includes(value) && !selected_category_names.includes(value)),
	)

	function handle_submit(e: SubmitEvent) {
		e.preventDefault()
		if (!value || !is_valid_value) return
		selected_category_names.push(value)
		value = ''
	}

	function remove_category(name: string) {
		selected_category_names = selected_category_names.filter((p) => p !== name)
	}
</script>

<section aria-label={aria_label}>
	{#if title}
		<p>{@html title}</p>
	{/if}

	<form onsubmit={handle_submit}>
		<input
			aria-label="category"
			aria-invalid={!is_valid_value}
			type="text"
			bind:value
			list="category-list"
		/>
		<button type="submit" class="button">
			<Fa icon={faPlus} />
		</button>
	</form>

	<div class="chips">
		{#each selected_category_names as category}
			<button class="chip" onclick={() => remove_category(category)}>
				{category}
			</button>
		{/each}
	</div>
</section>

<datalist id="category-list">
	{#each category_names as name}
		<option value={name}>{name}</option>
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
