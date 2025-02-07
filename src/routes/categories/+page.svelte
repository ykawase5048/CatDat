<script lang="ts">
	import CategoryList from '$components/CategoryList.svelte'

	let { data } = $props()
</script>

<svelte:head>
	<title>List of categories</title>
</svelte:head>

<h2>List of categories</h2>

<CategoryList
	items={data.categories}
	description="The following {data.categories.length} categories are available."
/>
