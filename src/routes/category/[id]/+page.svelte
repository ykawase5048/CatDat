<script lang="ts">
	import { categories_dictionary } from '$lib/categories/categories.dict'
	import { get_category_detail_level } from '../../settings/+page.svelte'
	import PropertyList from '$lib/components/PropertyList.svelte'

	let { data } = $props()
	let category = $derived(data.category)

	const category_detail_level = get_category_detail_level()
</script>

<svelte:head>
	<title>{category.name}</title>
</svelte:head>

<h2>{category.name}</h2>

<ul class="dashed-list">
	<li>
		notation: {@html category.notation}
	</li>
	<li>
		objects: {@html category.objects}
	</li>
	<li>
		morphisms: {@html category.morphisms}
	</li>
	{#if category.nlab_link}
		<li>
			<a href={category.nlab_link} target="_blank">nLab Link</a>
		</li>
	{/if}
</ul>

{#if category.description}
	<p>{@html category.description}</p>
{/if}

{#if category.related}
	<p>
		Related categories: {#each category.related as related_category, i}
			<a href={`/category/${related_category}`}>
				{categories_dictionary[related_category].name}
			</a>{#if i < category.related.length - 1}
				,&nbsp;
			{/if}
		{/each}
	</p>
{/if}

<h3>Properties</h3>

{#if category_detail_level === 'all'}
	<PropertyList
		items={category.properties.filter((p) => !p.deduced)}
		description="Properties from the database"
	/>

	<PropertyList
		items={category.properties.filter((p) => p.deduced)}
		description="Deduced properties"
	/>
{:else if category_detail_level === 'merged'}
	<PropertyList items={category.properties} />
{:else if category_detail_level === 'basic'}
	<PropertyList
		items={category.properties.filter((p) => !p.deduced)}
		description="Properties from the database. Further properties can be deduced."
	/>
{/if}

<h3>Non-Properties</h3>

{#if category_detail_level === 'all'}
	<PropertyList
		items={category.non_properties.filter((p) => !p.deduced)}
		description="Non-Properties from the database"
		negated={true}
	/>
	<PropertyList
		items={category.non_properties.filter((p) => p.deduced)}
		description="Deduced Non-Properties*"
		negated={true}
	/>
	<p class="hint">*This also uses the deduced properties.</p>
{:else if category_detail_level === 'merged'}
	<PropertyList items={category.non_properties} negated={true} />
{:else if category_detail_level === 'basic'}
	<PropertyList
		items={category.non_properties.filter((p) => !p.deduced)}
		description="Non-Properties from the database. Further non-properties can be deduced."
		negated={true}
	/>
{/if}

<h3>Unknown properties</h3>

<PropertyList
	items={category.unknown_properties}
	negated={false}
	description={category.unknown_properties.length
		? "For these properties the database currently doesn't have an answer if they are satisfied or not. Please help to complete the data!"
		: undefined}
/>
