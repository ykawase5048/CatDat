<script lang="ts">
	import {
		faArrowRight,
		faArrowsLeftRight,
		faPlus,
	} from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'

	import type { PropertyID } from '$lib/database/categories/properties.data'
	import type { Implication } from '$lib/database/categories/implications.data'
	import { get_property_url } from '$lib/commons/property.url'
	import LabelWithReason from './LabelWithReason.svelte'

	type Props = { implication: Implication; highlighted_property?: PropertyID }

	let { implication, highlighted_property }: Props = $props()
</script>

<LabelWithReason reason={implication.reason}>
	{#each implication.assumptions as assumption, i}
		<a
			href={get_property_url(assumption)}
			class:highlighted={assumption === highlighted_property}>{assumption}</a
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
			class:highlighted={conclusion === highlighted_property}>{conclusion}</a
		>
		{#if i < implication.conclusions.length - 1}
			<Fa icon={faPlus} class="operator" />
			<span class="visually-hidden">and &nbsp;</span>
		{/if}
	{/each}
</LabelWithReason>

<style>
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
