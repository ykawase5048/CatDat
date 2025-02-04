<script lang="ts">
	import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

	import Fa from 'svelte-fa'

	type Props = {
		add: () => void
		remove: () => void
		add_disabled?: boolean
		remove_disabled?: boolean
	}

	let { add, remove, add_disabled = false, remove_disabled = false }: Props = $props()
</script>

<div class="controls">
	<button
		type="button"
		class="button"
		onclick={add}
		aria-label="add"
		disabled={add_disabled}
	>
		<Fa icon={faPlus} />
	</button>
	<button
		type="button"
		class="button"
		onclick={remove}
		aria-label="remove"
		disabled={remove_disabled}
	>
		<Fa icon={faMinus} />
	</button>
</div>

<style>
	.controls {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	@media (min-width: 600px) {
		.controls {
			display: flex;
			gap: 0.5rem;
		}
	}
</style>
