<script lang="ts">
	import type { Property } from '$lib/types'

	import { categories_dictionary } from '$lib/categories/categories.dict'
	import { negate_prefix } from '$lib/properties/prefix'
	import { get_property_url } from '$lib/properties/properties.utils'
	import { get_category_detail_level } from '../../settings/+page.svelte'

	let { data } = $props()
	let category = $derived(data.category)

	const category_detail_level = get_category_detail_level()
</script>

<svelte:head>
	<title>{category.name}</title>
</svelte:head>

<h2>{category.name}</h2>

<ul class="dashed-list">
	<li>
		notation: {@html category.notation}
	</li>
	<li>
		objects: {@html category.objects}
	</li>
	<li>
		morphisms: {@html category.morphisms}
	</li>
	{#if category.nlab_link}
		<li>
			<a href={category.nlab_link} target="_blank">nLab Link</a>
		</li>
	{/if}
</ul>

{#if category.description}
	<p>{@html category.description}</p>
{/if}

{#if category.related}
	<p>
		Related categories: {#each category.related as related_category, i}
			<a href={`/category/${related_category}`}>
				{categories_dictionary[related_category].name}
			</a>{#if i < category.related.length - 1}
				,&nbsp;
			{/if}
		{/each}
	</p>
{/if}

{#snippet property_list(
	properties: (Property & { deduced?: boolean })[],
	negate: boolean,
	description?: string,
)}
	{#if description}
		<p class="hint">{description}</p>
	{/if}

	{#if properties.length}
		<ul>
			{#each properties as property}
				<li>
					{negate ? negate_prefix(property.prefix) : property.prefix}
					<a href={get_property_url(property.id)}>
						{property.id}
					</a>
				</li>
			{/each}
		</ul>
	{:else}
		<p class="hint">&mdash;</p>
	{/if}
{/snippet}

<h3>Properties</h3>

{#if category_detail_level === 'all'}
	{@render property_list(
		category.properties.filter((p) => !p.deduced),
		false,
		'Properties from the database',
	)}

	{@render property_list(
		category.properties.filter((p) => p.deduced),
		false,
		'Deduced properties',
	)}
{:else if category_detail_level === 'merged'}
	{@render property_list(category.properties, false)}
{:else if category_detail_level === 'basic'}
	{@render property_list(
		category.properties.filter((p) => !p.deduced),
		false,
		'Properties from the database. Further properties can be deduced.',
	)}
{/if}

<h3>Non-Properties</h3>

{#if category_detail_level === 'all'}
	{@render property_list(
		category.non_properties.filter((p) => !p.deduced),
		true,
		'Non-Properties from the database',
	)}

	{@render property_list(
		category.non_properties.filter((p) => p.deduced),
		true,
		'Deduced Non-Properties*',
	)}

	<p class="hint">*This also uses the deduced properties.</p>
{:else if category_detail_level === 'merged'}
	{@render property_list(category.non_properties, true)}
{:else if category_detail_level === 'basic'}
	{@render property_list(
		category.non_properties.filter((p) => !p.deduced),
		true,
		'Non-Properties from the database. Further non-properties can be deduced.',
	)}
{/if}

<h3>Unknown properties</h3>

{@render property_list(
	category.unknown_properties,
	false,
	category.unknown_properties.length
		? "For these properties the database currently doesn't have an answer if they are satisfied or not. Please help to complete the data!"
		: undefined,
)}

<style>
	ul {
		padding-left: 1.5rem;
	}
</style>
