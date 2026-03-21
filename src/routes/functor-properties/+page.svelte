<script lang="ts">
	import MetaData from '$components/MetaData.svelte'
	import PropertyList from '$components/PropertyList.svelte'

	let { data } = $props()
</script>

<MetaData
	title="List of properties of functors"
	description="All functorial properties"
/>

<h2>Properties of Functors</h2>

<PropertyList properties={data.properties} type="functor" />
