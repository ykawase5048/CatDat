<script lang="ts">
	import Chip from '$components/Chip.svelte'
	import ChipGroup from '$components/ChipGroup.svelte'
	import {
		category_detail_level,
		CATEGORY_DETAIL_LEVELS,
		update_category_detail_level,
	} from '$lib/settings/detail_level.svelte'
	import { theme, THEMES, update_theme } from '$lib/settings/theme.svelte'
	import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'

	$effect(() => update_theme(theme.value))
	$effect(() => update_category_detail_level(category_detail_level.value))
</script>

<h2>Settings</h2>

<section>
	<h3>Theme</h3>

	<ChipGroup>
		{#each THEMES as option}
			{@const selected = theme.value === option}
			<label class:selected>
				<input
					class="visually-hidden"
					type="radio"
					name="color"
					value={option}
					bind:group={theme.value}
				/>
				<Chip>
					{option}
					{#if selected}
						&nbsp;
						<Fa icon={faCheckCircle} />
					{/if}
				</Chip>
			</label>
		{/each}
	</ChipGroup>
</section>

<section>
	<h3>Category detail level</h3>

	<ChipGroup>
		{#each Object.keys(CATEGORY_DETAIL_LEVELS) as level}
			{@const selected = category_detail_level.value === level}
			<label class:selected>
				<input
					class="visually-hidden"
					type="radio"
					name="category-detail-level"
					value={level}
					bind:group={category_detail_level.value}
				/>
				<Chip>
					{level}
					{#if selected}
						&nbsp;
						<Fa icon={faCheckCircle} />
					{/if}
				</Chip>
			</label>
		{/each}
	</ChipGroup>

	<p class="hint" aria-live="polite">
		{CATEGORY_DETAIL_LEVELS[category_detail_level.value]}
	</p>
</section>

<style>
	label {
		cursor: pointer;
	}

	label:has(:focus-visible) {
		outline: 2px solid var(--outline-color);
		outline-offset: 2px;
	}
</style>
