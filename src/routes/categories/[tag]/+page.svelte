<script lang="ts">
	import CategoryList from '$components/CategoryList.svelte'
	import MetaData from '$components/MetaData.svelte'

	let { data } = $props()
</script>

<MetaData
	title="List of categories tagged as '{data.tag}'"
	description="Categories tagged as '{data.tag}'"
/>

<h2>List of categories tagged as '{data.tag}'</h2>

<CategoryList
	categories={data.categories}
	description="The following {data.categories
		.length} categories are tagged as '{data.tag}'"
/>
