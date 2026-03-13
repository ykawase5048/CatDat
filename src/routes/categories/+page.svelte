<script lang="ts">
	import CategoryList from '$components/CategoryList.svelte'
	import MetaData from '$components/MetaData.svelte'

	let { data } = $props()
</script>

<MetaData title="List of categories" description="All available categories" />

<h2>List of categories</h2>

<CategoryList
	categories={data.categories}
	description="The following {data.categories.length} categories are available."
/>
