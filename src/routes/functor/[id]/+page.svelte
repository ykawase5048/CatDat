<script lang="ts">
	import MetaData from '$components/MetaData.svelte'
	import PropertyList from '$components/PropertyList.svelte'
	import { category_detail_level } from '$lib/states/detail_level.svelte'
	let { data } = $props()

	let functor = $derived(data.functor)
</script>

<MetaData title={functor.name} description="Discover the properties of this functor" />

<h2>{functor.name}</h2>

<section aria-label="main info" class="main">
	<ul class="with-margins">
		<li>
			<strong>Source:</strong>
			<a href="/category/{functor.source}">{functor.source_name}</a>
		</li>

		<li>
			<strong>Target:</strong>
			<a href="/category/{functor.target}">{functor.target_name}</a>
		</li>

		{#if functor.url}
			<li>
				<strong>URL:</strong>
				<a href={functor.url}>Link</a>
			</li>
		{/if}
	</ul>

	<p>{@html functor.description}</p>
</section>

<!-- TODO: remove code duplication with category detail page -->
{#key functor.id}
	<div class="two-columns">
		<section>
			<h3>Satisfied Properties</h3>

			{#if category_detail_level.value === 'all'}
				<PropertyList
					properties={data.satisfied_properties.filter((p) => !p.is_deduced)}
					description="Properties from the database"
					type="functor"
				/>

				<PropertyList
					properties={data.satisfied_properties.filter((p) => p.is_deduced)}
					description="Deduced properties"
					type="functor"
				/>
			{:else if category_detail_level.value === 'merged'}
				<PropertyList properties={data.satisfied_properties} type="functor" />
			{:else if category_detail_level.value === 'basic'}
				<PropertyList
					properties={data.satisfied_properties.filter((p) => !p.is_deduced)}
					description="Properties from the database; further properties can be deduced."
					type="functor"
				/>
			{/if}
		</section>

		<section>
			<h3>Unsatisfied Properties</h3>

			{#if category_detail_level.value === 'all'}
				<PropertyList
					properties={data.unsatisfied_properties.filter((p) => !p.is_deduced)}
					description="Properties from the database"
					type="functor"
				/>

				<PropertyList
					properties={data.unsatisfied_properties.filter((p) => p.is_deduced)}
					description="Deduced properties*"
					type="functor"
				/>

				<p class="hint">*This also uses the deduced satisfied properties.</p>
			{:else if category_detail_level.value === 'merged'}
				<PropertyList properties={data.unsatisfied_properties} type="functor" />
			{:else if category_detail_level.value === 'basic'}
				<PropertyList
					properties={data.unsatisfied_properties.filter((p) => !p.is_deduced)}
					description="Properties from the database; further properties can be deduced."
					type="functor"
				/>
			{/if}
		</section>
	</div>

	<section>
		<h3>Unknown properties</h3>

		<PropertyList
			properties={data.unknown_properties}
			description={data.unknown_properties.length
				? "For these properties the database currently doesn't have an answer if they are satisfied or not. Please help to complete the data!"
				: undefined}
		/>
	</section>
{/key}

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

	ul.with-margins li + li {
		margin-top: 0.25rem;
	}
</style>
