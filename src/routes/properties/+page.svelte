<script lang="ts">
	import { properties } from '$lib/properties/properties'
	import { get_property_url } from '$lib/properties/properties.utils'
</script>

<svelte:head>
	<title>List of Properties</title>
</svelte:head>

<h2>List of Properties</h2>

<p>The following properties of categories are available.</p>

<ul>
	{#each properties as property}
		<li>
			{property.prefix}
			<a href={get_property_url(property.id)}>
				{property.id}
			</a>
		</li>
	{/each}
</ul>
