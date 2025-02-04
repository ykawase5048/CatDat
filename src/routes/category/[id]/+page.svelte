<script lang="ts">
	import type { CategoryDetailed, CategoryShort } from '$lib/commons/types'
	import { category_detail_level } from '$lib/settings/detail_level.svelte'
	import PropertyList from '$lib/components/PropertyList.svelte'
	import Tags from '$lib/components/Tags.svelte'

	let { data } = $props()

	let category: CategoryDetailed = $derived(data.category)

	let related_categories: CategoryShort[] | undefined = $derived(
		data.related_categories,
	)
</script>

<svelte:head>
	<title>{category.name}</title>
</svelte:head>

<h2>{category.name}</h2>

<Tags tags={category.tags} />

<section aria-label="main info">
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

	{#if related_categories}
		<p>
			Related categories: {#each related_categories as { id, name }, i}
				<a href={`/category/${id}`}>
					{name}
				</a>{#if i < related_categories.length - 1}
					,&nbsp;
				{/if}
			{/each}
		</p>
	{/if}
</section>

<!-- The key fixes a weird rerendering bug when category page is changed -->
{#key category.id}
	<div class="two-columns">
		<section>
			<h3>Properties</h3>

			{#if category_detail_level.value === 'all'}
				<PropertyList
					items={category.properties}
					description="Properties from the database"
				/>

				<PropertyList
					items={category.deduced_properties}
					description="Deduced properties"
				/>
			{:else if category_detail_level.value === 'merged'}
				<PropertyList items={category.all_properties} />
			{:else if category_detail_level.value === 'basic'}
				<PropertyList
					items={category.properties}
					description="Properties from the database. Further properties can be deduced."
				/>
			{/if}
		</section>

		<section>
			<h3>Non-Properties</h3>

			{#if category_detail_level.value === 'all'}
				<PropertyList
					items={category.non_properties}
					description="Non-Properties from the database"
					negated={true}
				/>
				<PropertyList
					items={category.deduced_non_properties}
					description="Deduced Non-Properties*"
					negated={true}
				/>
				<p class="hint">*This also uses the deduced properties.</p>
			{:else if category_detail_level.value === 'merged'}
				<PropertyList items={category.all_non_properties} negated={true} />
			{:else if category_detail_level.value === 'basic'}
				<PropertyList
					items={category.non_properties}
					description="Non-Properties from the database. Further non-properties can be deduced."
					negated={true}
				/>
			{/if}
		</section>
	</div>

	<section>
		<h3>Unknown properties</h3>

		<PropertyList
			items={category.unknown_properties}
			negated={false}
			description={category.unknown_properties.size
				? "For these properties the database currently doesn't have an answer if they are satisfied or not. Please help to complete the data!"
				: undefined}
		/>
	</section>
{/key}

<section>
	<h3>Special morphisms</h3>

	<ul>
		<li>
			Isomorphisms: {@html category.special_morphisms.isomorphisms ?? '?'}
		</li>
		<li>
			Monomorphisms: {@html category.special_morphisms.monomorphisms ?? '?'}
		</li>
		<li>
			Epimorphisms: {@html category.special_morphisms.epimorphisms ?? '?'}
		</li>
	</ul>
</section>

<style>
	@media (min-width: 720px) {
		.two-columns {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 0.5rem;
		}
	}
</style>
