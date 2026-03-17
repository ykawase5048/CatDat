<script lang="ts">
	import MetaData from '$components/MetaData.svelte'
	import PropertyList from '$components/PropertyList.svelte'
	import SearchFilter from '$components/SearchFilter.svelte'

	let { data } = $props()

	let search = $state('')

	let searched_properties = $derived(
		search
			? data.properties.filter((property) =>
					property.id.toLowerCase().includes(search.toLowerCase()),
				)
			: data.properties,
	)
</script>

<MetaData title="List of Properties" description="All categorical properties" />

<h2>List of Properties</h2>

<SearchFilter bind:search />

<PropertyList
	properties={searched_properties}
	description={search
		? `Found ${searched_properties.length} properties`
		: `The following ${searched_properties.length} properties are available.`}
/>
