<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/state'

	function handle_change() {
		goto(`/${selection}`)
	}

	let selection = $derived(page.data.mode)
</script>

<label for="mode_selector">Mode</label>

<select id="mode_selector" bind:value={selection} onchange={handle_change}>
	{#each ['categories', 'functors'] as mode}
		<option value={mode}>{mode}</option>
	{/each}
</select>

<style>
	label {
		color: var(--secondary-text-color);
		font-size: 1rem;
	}

	select {
		font-size: 1rem;
	}
</style>
