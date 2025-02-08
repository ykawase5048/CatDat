<script lang="ts">
	import { category_detail_level } from '$lib/settings/detail_level.svelte'
	import PropertyList from '$components/PropertyList.svelte'
	import ChipGroup from '$components/ChipGroup.svelte'
	import Chip from '$components/Chip.svelte'

	let { data } = $props()

	let category = $derived(data.category)
	let tags = $derived(data.tags)
	let related_categories = $derived(data.related_categories)

	// TODO: also render the reasons for the properties and non-properties
	let properties = $derived(data.properties)
	let non_properties = $derived(data.non_properties)
	let deduced_properties = $derived(data.deduced_properties)
	let deduced_non_properties = $derived(data.deduced_non_properties)
	let all_properties = $derived(data.all_properties)
	let all_non_properties = $derived(data.all_non_properties)
	let unknown_properties = $derived(data.unknown_properties)

	// TOOD: also render the reasons for the classifications of the morphisms
	let isomorphisms = $derived(data.isomorphisms)
	let monomorphisms = $derived(data.monomorphisms)
	let epimorphisms = $derived(data.epimorphisms)
</script>

<svelte:head>
	<title>{category.name}</title>
</svelte:head>

<h2>{category.name}</h2>

<ChipGroup>
	{#each tags as tag}
		<Chip size="small">{tag}</Chip>
	{/each}
</ChipGroup>

<section aria-label="main info" class="main">
	<ul>
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

	{#if related_categories.length}
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
					items={properties}
					description="Properties from the database"
				/>

				<PropertyList
					items={deduced_properties}
					description="Deduced properties"
				/>
			{:else if category_detail_level.value === 'merged'}
				<PropertyList items={all_properties} />
			{:else if category_detail_level.value === 'basic'}
				<PropertyList
					items={properties}
					description="Properties from the database. Further properties can be deduced."
				/>
			{/if}
		</section>

		<section>
			<h3>Non-Properties</h3>

			{#if category_detail_level.value === 'all'}
				<PropertyList
					items={non_properties}
					description="Non-Properties from the database"
					negated={true}
				/>
				<PropertyList
					items={deduced_non_properties}
					description="Deduced Non-Properties*"
					negated={true}
				/>
				<p class="hint">*This also uses the deduced properties.</p>
			{:else if category_detail_level.value === 'merged'}
				<PropertyList items={all_non_properties} negated={true} />
			{:else if category_detail_level.value === 'basic'}
				<PropertyList
					items={non_properties}
					description="Non-Properties from the database. Further non-properties can be deduced."
					negated={true}
				/>
			{/if}
		</section>
	</div>

	<section>
		<h3>Unknown properties</h3>

		<PropertyList
			items={unknown_properties}
			negated={false}
			description={unknown_properties.length
				? "For these properties the database currently doesn't have an answer if they are satisfied or not. Please help to complete the data!"
				: undefined}
		/>
	</section>
{/key}

<section>
	<h3>Special morphisms</h3>
	<ul>
		<li>
			Isomorphisms: {@html isomorphisms?.description || '?'}
		</li>
		<li>
			Monomorphisms: {@html monomorphisms?.description || '?'}
		</li>
		<li>
			Epimorphisms: {@html epimorphisms?.description || '?'}
		</li>
	</ul>
</section>

<style>
	.main {
		margin-top: 1.5rem;
	}

	@media (min-width: 720px) {
		.two-columns {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 0.5rem;
		}
	}
</style>
