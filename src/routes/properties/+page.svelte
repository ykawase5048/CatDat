<script lang="ts">
	import PropertyReasonList from '$components/PropertyReasonList.svelte'

	let { data } = $props()
</script>

<svelte:head>
	<title>List of Properties</title>
</svelte:head>

<h2>List of Properties</h2>

<PropertyReasonList
	items={data.properties}
	description="The following {data.properties.length} properties are available."
/>
