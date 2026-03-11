<script lang="ts">
	import { goto } from '$app/navigation'

	import MetaData from '$components/MetaData.svelte'
	import PropertyList from '$components/PropertyList.svelte'
	import ChipGroup from '$components/ChipGroup.svelte'
	import Chip from '$components/Chip.svelte'
	import LabelWithReason from '$components/LabelWithReason.svelte'
	import { category_detail_level } from '$lib/states/detail_level.svelte'

	let { data } = $props()

	function filter_by_tag(tag: string) {
		goto(`/categories?tag=${tag}`)
	}

	let category = $derived(data.category)
</script>

<MetaData
	title={category.name}
	description="Discover the properties and non-properties of this category"
/>

<h2>{category.name}</h2>

<ChipGroup>
	{#each data.tags as tag}
		<Chip size="small" handle_click={() => filter_by_tag(tag)}>{tag}</Chip>
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
		{#if data.related_categories.length}
			<li>
				Related categories: {#each data.related_categories as { id, name, notation }, i}
					<a href={`/category/${id}`} aria-label={name}>
						{@html notation}
					</a>{#if i < data.related_categories.length - 1}
						,&nbsp;
					{/if}
				{/each}
			</li>
		{/if}
	</ul>

	{#if category.description}
		<p>{@html category.description}</p>
	{/if}
</section>

<!-- The key fixes a weird rerendering bug when category page is changed -->
{#key category.id}
	<div class="two-columns">
		<section>
			<h3>Properties</h3>

			{#if category_detail_level.value === 'all'}
				<PropertyList
					properties={data.direct_properties}
					description="Properties from the database"
				/>

				<!-- TODO: bring back deduced properties -->

				<!--
				<PropertyList
					properties={category.deduced_properties}
					description="Deduced properties"
				/> -->
			{:else if category_detail_level.value === 'merged'}
				<!-- <PropertyList
					properties={[...category.properties, ...category.deduced_properties]}
				/> -->
			{:else if category_detail_level.value === 'basic'}
				<PropertyList
					properties={data.direct_properties}
					description="Properties from the database. Further properties can be deduced."
				/>
			{/if}
		</section>

		<section>
			<h3>Non-Properties</h3>

			{#if category_detail_level.value === 'all'}
				<PropertyList
					properties={data.direct_non_properties}
					description="Non-Properties from the database"
				/>

				<!-- TODO: bring back deduced non-properties -->

				<!-- <PropertyList
					properties={category.deduced_non_properties}
					description="Deduced Non-Properties*"
					negated={true}
				/> -->
				<p class="hint">*This also uses the deduced properties.</p>
			{:else if category_detail_level.value === 'merged'}
				<!-- <PropertyList
					properties={[
						...category.non_properties,
						...category.deduced_non_properties,
					]}
					negated={true}
				/> -->
			{:else if category_detail_level.value === 'basic'}
				<PropertyList
					properties={data.direct_non_properties}
					description="Non-Properties from the database. Further non-properties can be deduced."
				/>
			{/if}
		</section>
	</div>

	<!-- <section>
		<h3>Unknown properties</h3>

		<PropertyList
			properties={category.unknown_properties}
			description={category.unknown_properties.length
				? "For these properties the database currently doesn't have an answer if they are satisfied or not. Please help to complete the data!"
				: undefined}
		/>
	</section> -->
{/key}

<section>
	<h3>Special morphisms</h3>
	<ul>
		{#if data.isomorphisms}
			<li>
				<LabelWithReason reason={data.isomorphisms.reason}>
					Isomorphisms: {@html data.isomorphisms.description}
				</LabelWithReason>
			</li>
		{/if}
		{#if data.monomorphisms}
			<li>
				<LabelWithReason reason={data.monomorphisms.reason}>
					Monomorphisms: {@html data.monomorphisms.description}
				</LabelWithReason>
			</li>
		{/if}
		{#if data.epimorphisms}
			<li>
				<LabelWithReason reason={data.epimorphisms.reason}>
					Epimorphisms: {@html data.epimorphisms.description}
				</LabelWithReason>
			</li>
		{/if}
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
