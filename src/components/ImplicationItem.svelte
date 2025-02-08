<script lang="ts">
	import {
		faArrowRight,
		faArrowsLeftRight,
		faPlus,
	} from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'

	import type { PropertyID } from '$lib/database/properties.data'
	import type { Implication } from '$lib/database/implications.data'
	import Tooltip from './Tooltip.svelte'
	import { get_property_url } from '$lib/commons/property.url'

	type Props = { implication: Implication; highlighted?: PropertyID }

	let { implication, highlighted }: Props = $props()
</script>

<div class="implication">
	{#each implication.assumptions as assumption, i}
		<a
			href={get_property_url(assumption)}
			class:highlighted={assumption === highlighted}>{assumption}</a
		>
		{#if i < implication.assumptions.length - 1}
			<Fa icon={faPlus} class="operator" />
			<span class="visually-hidden">and &nbsp;</span>
		{/if}
	{/each}

	<span aria-hidden="true">
		{#if implication.equivalent}
			<Fa icon={faArrowsLeftRight} class="operator" />
		{:else}
			<Fa icon={faArrowRight} class="operator" />
		{/if}
	</span>

	<span class="visually-hidden">
		{#if implication.equivalent}
			is equivalent to &nbsp;
		{:else}
			implies &nbsp;
		{/if}
	</span>

	{#each implication.conclusions as conclusion, i}
		<a
			href={get_property_url(conclusion)}
			class:highlighted={conclusion === highlighted}>{conclusion}</a
		>
		{#if i < implication.conclusions.length - 1}
			<Fa icon={faPlus} class="operator" />
			<span class="visually-hidden">and &nbsp;</span>
		{/if}
	{/each}

	{#if implication.reason}
		<Tooltip>{@html implication.reason}</Tooltip>
	{/if}
</div>

<style>
	.implication {
		position: relative; /* for tooltip positioning */
	}

	a:not(.highlighted) {
		text-decoration: none;
	}

	a.highlighted {
		text-decoration-style: dashed;
		text-underline-offset: 4px;
	}

	:global(.operator) {
		margin-inline: 0.25rem;
		color: var(--secondary-text-color);
	}
</style>
