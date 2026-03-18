<script lang="ts">
	import CategoryList from '$components/CategoryList.svelte'
	import MetaData from '$components/MetaData.svelte'

	let { data } = $props()
</script>

<MetaData
	title="List of categories tagged with '{data.tag}'"
	description="Categories tagged with '{data.tag}'"
/>

<h2>List of categories tagged with '{data.tag}'</h2>

<CategoryList
	categories={data.categories}
	description="Found {data.categories.length} categories"
/>
