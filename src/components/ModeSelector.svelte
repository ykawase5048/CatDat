<script lang="ts">
	import { APP, APP_MODE_TYPES } from '$lib/states/app.mode.svelte'
</script>

<label for="mode_selector">Mode</label>

<select bind:value={APP.MODE} id="mode_selector">
	{#each APP_MODE_TYPES as mode}
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
