<script lang="ts">
	import { categories } from '$lib/categories/categories'
</script>

<svelte:head>
	<title>List of categories</title>
</svelte:head>

<h2>List of categories</h2>

<p>The following categories are available.</p>

<ul>
	{#each categories as category (category.id)}
		<li>
			<a href="/category/{category.id}">{category.name}</a>
		</li>
	{/each}
</ul>
