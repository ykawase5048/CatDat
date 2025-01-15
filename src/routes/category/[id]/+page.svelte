<script lang="ts">
	import { get_property_url } from '$lib/transforms.js'

	const { data } = $props()
	const { category, formula } = data
</script>

<svelte:head>
	<title>{category.name}</title>
</svelte:head>

<a href="/">Home</a>

<h2>{category.name}</h2>

<p><strong>notation:</strong> {@html formula}</p>

<p>
	<strong>objects:</strong>
	{category.objects}
</p>

<p>
	<strong>morphisms:</strong>
	{category.morphisms}
</p>

{#if category.nlab_link}
	<p>
		<a href={category.nlab_link}>nLab Link</a>
	</p>
{/if}

{#if category.description}
	<p>{category.description}</p>
{/if}

<h3>Satisfied Properties</h3>

Properties from the database:

<ul>
	{#each category.properties.filter((prop) => !prop.deduced) as property}
		<li>
			{property.prefix}
			<a href={get_property_url(property)}>
				{property.name}
			</a>
		</li>
	{/each}
</ul>

Deduced properties:

<ul>
	{#each category.properties.filter((prop) => prop.deduced) as property}
		<li>
			{property.prefix}
			<a href={get_property_url(property)}>
				{property.name}
			</a>
		</li>
	{/each}
</ul>

<h3>Missing Properties</h3>

<ul>
	{#each category.non_properties as property}
		<li>
			{property.prefix}
			<a href={get_property_url(property)}>
				{property.name}
			</a>
		</li>
	{/each}
</ul>
