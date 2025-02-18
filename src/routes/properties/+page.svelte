<script lang="ts">
	import MetaData from '$components/MetaData.svelte'
	import PropertyList from '$components/PropertyList.svelte'

	let { data } = $props()
</script>

<MetaData title="List of Properties" description="All categorical properties" />

<h2>List of Properties</h2>

<PropertyList
	properties={data.properties}
	description="The following {data.properties.length} properties are available."
/>
