<script lang="ts">
	import PropertyList from '$lib/components/PropertyList.svelte'
	import { properties } from '$lib/properties/properties'

	const sorted_properties = properties.toSorted((a, b) => a.id.localeCompare(b.id))
</script>

<svelte:head>
	<title>List of Properties</title>
</svelte:head>

<h2>List of Properties</h2>

<PropertyList
	items={sorted_properties}
	description="The following {properties.length} properties are available."
/>
