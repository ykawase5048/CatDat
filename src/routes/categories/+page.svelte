<script lang="ts">
	import { categories } from '$lib/categories/categories'
	import CategoryList from '$lib/components/CategoryList.svelte'
</script>

<svelte:head>
	<title>List of categories</title>
</svelte:head>

<h2>List of categories</h2>

<CategoryList
	items={categories}
	description="The following {categories.length} categories are available."
/>
