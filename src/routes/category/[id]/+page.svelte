<script lang="ts">
	import { negate_prefix } from '$lib/properties/prefix'
	import { get_property_url } from '$lib/properties/properties.utils'

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

<h3>Properties</h3>

<p class="hint">Properties from the database</p>

<ul>
	{#each category.properties.filter((prop) => !prop.deduced) as property}
		<li>
			{property.prefix}
			<a href={get_property_url(property.id)}>
				{property.id}
			</a>
		</li>
	{/each}
</ul>

<p class="hint">Deduced properties</p>

<ul>
	{#each category.properties.filter((prop) => prop.deduced) as property}
		<li>
			{property.prefix}
			<a href={get_property_url(property.id)}>
				{property.id}
			</a>
		</li>
	{/each}
</ul>

<h3>Non-Properties</h3>

{#if category.non_properties.length}
	<p class="hint">Non-Properties from the database</p>

	<ul>
		{#each category.non_properties.filter((prop) => !prop.deduced) as property}
			<li>
				{negate_prefix(property.prefix)}
				<a href={get_property_url(property.id)}>
					{property.id}
				</a>
			</li>
		{/each}
	</ul>

	<p class="hint">Deduced Non-Properties*</p>

	<ul>
		{#each category.non_properties.filter((prop) => prop.deduced) as property}
			<li>
				{negate_prefix(property.prefix)}
				<a href={get_property_url(property.id)}>
					{property.id}
				</a>
			</li>
		{/each}
	</ul>

	<p class="hint">*This also uses the deduced properties.</p>
{:else}
	<p class="hint">&mdash;</p>
{/if}

<h3>Unknown properties</h3>

{#if category.unknown_properties.length}
	<p class="hint">
		For these properties the database currently doesn't have an answer if they are
		satisfied or not. Please help to complete the data!
	</p>

	<ul>
		{#each category.unknown_properties as property}
			<li>
				{property.prefix}
				<a href={get_property_url(property.id)}>
					{property.id}
				</a>?
			</li>
		{/each}
	</ul>
{:else}
	<p class="hint">&mdash;</p>
{/if}

<style>
	.keypoints {
		list-style-type: '- ';
	}
</style>
