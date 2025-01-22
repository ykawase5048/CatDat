<script lang="ts">
	import { negate_prefix } from '$lib/properties/prefix'
	import { get_property_url } from '$lib/properties/properties.utils'
	import type { Property } from '$lib/types'

	let { data } = $props()
	let category = $derived(data.category)

	$effect(() => {
		window.MathJax?.typeset()
	})
</script>

<svelte:head>
	<title>{category.name}</title>
</svelte:head>

<h2>{category.name}</h2>

<ul class="keypoints">
	<li>
		notation: ${category.notation}$
	</li>
	<li>
		objects: {@html category.objects}
	</li>
	<li>
		morphisms: {@html category.morphisms}
	</li>
	{#if category.nlab_link}
		<li>
			<a href={category.nlab_link}>nLab Link</a>
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
				{related_category}
			</a>{#if i < category.related.length - 1}
				,&nbsp;
			{/if}
		{/each}
	</p>
{/if}

{#snippet property_list(
	description: string,
	properties: (Property & { deduced?: boolean })[],
	negate?: boolean,
)}
	<p class="hint">{description}</p>

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

{@render property_list(
	'Properties from the database',
	category.properties.filter((p) => !p.deduced),
	false,
)}

{@render property_list(
	'Deduced properties',
	category.properties.filter((p) => p.deduced),
	false,
)}

<h3>Non-Properties</h3>

{@render property_list(
	'Non-Properties from the database',
	category.non_properties.filter((p) => !p.deduced),
	true,
)}

{@render property_list(
	'Deduced Non-Properties*',
	category.non_properties.filter((p) => p.deduced),
	true,
)}

<p class="hint">*This also uses the deduced properties.</p>

<h3>Unknown properties</h3>

{@render property_list(
	"For these properties the database currently doesn't have an answer if they are satisfied or not. Please help to complete the data!",
	category.unknown_properties,
)}

<style>
	.keypoints {
		list-style-type: '- ';
	}

	ul {
		padding-left: 1.5rem;
	}
</style>
