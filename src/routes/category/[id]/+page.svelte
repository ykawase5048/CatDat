<script lang="ts">
	import { category_detail_level } from '$lib/settings/detail_level.svelte'
	import PropertyReasonList from '$components/PropertyReasonList.svelte'
	import ChipGroup from '$components/ChipGroup.svelte'
	import Chip from '$components/Chip.svelte'
	import MorphismInfo from '$components/MorphismInfo.svelte'

	let { data } = $props()

	let category = $derived(data.category)
</script>

<svelte:head>
	<title>{category.name}</title>
</svelte:head>

<h2>{category.name}</h2>

<ChipGroup>
	{#each category.tags as tag}
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
		{#if category.related_categories.length}
			<li>
				Related categories: {#each category.related_categories as { id, notation }, i}
					<a href={`/category/${id}`}>
						{@html notation}
					</a>{#if i < category.related_categories.length - 1}
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
				<PropertyReasonList
					items={category.properties}
					description="Properties from the database"
				/>

				<PropertyReasonList
					items={category.deduced_properties}
					description="Deduced properties"
				/>
			{:else if category_detail_level.value === 'merged'}
				<PropertyReasonList
					items={[...category.properties, ...category.deduced_properties]}
				/>
			{:else if category_detail_level.value === 'basic'}
				<PropertyReasonList
					items={category.properties}
					description="Properties from the database. Further properties can be deduced."
				/>
			{/if}
		</section>

		<section>
			<h3>Non-Properties</h3>

			{#if category_detail_level.value === 'all'}
				<PropertyReasonList
					items={category.non_properties}
					description="Non-Properties from the database"
					negated={true}
				/>
				<PropertyReasonList
					items={category.deduced_non_properties}
					description="Deduced Non-Properties*"
					negated={true}
				/>
				<p class="hint">*This also uses the deduced properties.</p>
			{:else if category_detail_level.value === 'merged'}
				<PropertyReasonList
					items={[
						...category.non_properties,
						...category.deduced_non_properties,
					]}
					negated={true}
				/>
			{:else if category_detail_level.value === 'basic'}
				<PropertyReasonList
					items={category.non_properties}
					description="Non-Properties from the database. Further non-properties can be deduced."
					negated={true}
				/>
			{/if}
		</section>
	</div>

	<section>
		<h3>Unknown properties</h3>

		<PropertyReasonList
			items={category.unknown_properties}
			negated={false}
			description={category.unknown_properties.length
				? "For these properties the database currently doesn't have an answer if they are satisfied or not. Please help to complete the data!"
				: undefined}
		/>
	</section>
{/key}

<section>
	<h3>Special morphisms</h3>
	<ul>
		<li>
			<MorphismInfo name="Isomorphisms" {...category.isomorphisms} />
		</li>
		<li>
			<MorphismInfo name="Monomorphisms" {...category.monomorphisms} />
		</li>
		<li>
			<MorphismInfo name="Epimorphisms" {...category.epimorphisms} />
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
