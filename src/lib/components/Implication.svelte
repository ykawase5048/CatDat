<script lang="ts">
	import {
		faArrowRight,
		faArrowsLeftRight,
		faPlus,
	} from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'

	import type { Implication } from '$lib/types'
	import type { PropertyID } from '$lib/properties/propertyIDs'
	import { get_property_url } from '$lib/properties/properties.utils'

	type Props = { implication: Implication; highlighted?: PropertyID }

	let { implication, highlighted }: Props = $props()
</script>

{#each implication.assumptions as assumption, i}
	<a href={get_property_url(assumption)} class:highlighted={assumption === highlighted}
		>{assumption}</a
	>
	{#if i < implication.assumptions.length - 1}
		<Fa icon={faPlus} />
		<span class="visually-hidden">and &nbsp;</span>
	{/if}
{/each}

<span aria-hidden="true">
	{#if implication.equivalent}
		<Fa icon={faArrowsLeftRight} />
	{:else}
		<Fa icon={faArrowRight} />
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
	<a href={get_property_url(conclusion)} class:highlighted={conclusion === highlighted}
		>{conclusion}</a
	>
	{#if i < implication.conclusions.length - 1}
		<Fa icon={faPlus} />
		<span class="visually-hidden">and &nbsp;</span>
	{/if}
{/each}

<style>
	a:not(.highlighted) {
		text-decoration: none;
	}

	a.highlighted {
		text-decoration-style: dashed;
		text-underline-offset: 4px;
	}
</style>
