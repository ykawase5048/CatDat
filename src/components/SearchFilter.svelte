<script lang="ts">
	import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'

	let { search = $bindable() }: { search: string } = $props()

	let search_actual = $state('')

	$effect(() => {
		search = search_actual.trim()
	})
</script>

<div class="search-container">
	<div class="input-container">
		<input
			type="search"
			id="search"
			aria-label="search filter"
			bind:value={search_actual}
			placeholder="Search..."
		/>

		{#if search}
			<button class="clear" onclick={() => (search = '')}>
				<Fa icon={faXmark} color="var(--secondary-text-color)" scale={0.875} />
			</button>
		{/if}
	</div>

	<Fa icon={faSearch} />
</div>

<style>
	.search-container {
		display: inline-grid;
		width: min(32ch, 100%);
		grid-template-columns: 1fr auto;
		gap: 1rem;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.input-container {
		position: relative;

		input {
			width: 100%;
		}

		.clear {
			position: absolute;
			right: 0.5rem;
			top: 50%;
			transform: translateY(-50%);
		}
	}
</style>
