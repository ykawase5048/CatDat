<script lang="ts">
	import CategoryList from '$components/CategoryList.svelte'
	import MetaData from '$components/MetaData.svelte'

	let { data } = $props()

	let title = $derived(
		data.tag ? `List of categories tagged as "${data.tag}"` : `List of categories`,
	)

	let description = $derived(
		data.tag
			? `The following ${data.categories.length} categories are tagged as "${data.tag}".`
			: `The following ${data.categories.length} categories are available.`,
	)

	let meta_description = $derived(
		data.tag ? `Categories tagged as "${data.tag}"` : 'All available categories',
	)
</script>

<MetaData {title} description={meta_description} />

<h2>{title}</h2>

<CategoryList categories={data.categories} {description} />
