<script lang="ts">
	import MetaData from '$components/MetaData.svelte'
	import { get_property_url } from '$lib/commons/property.url.js'

	let { data } = $props()

	let property = $derived(data.property)
</script>

<MetaData title={property.id} description="Discover this property of functors" />

<h2>{property.id}</h2>

<p>
	{@html property.description}

	{#if property.invariant_under_equivalences === false}
		Warning: This property is not invariant under equivalences.
	{/if}
</p>

{#if property.dual_property_id || property.nlab_link}
	<ul>
		{#if property.dual_property_id}
			<li>
				<strong>Dual property:</strong>
				<a href={get_property_url(property.dual_property_id, 'functor')}
					>{property.dual_property_id}</a
				>
				{#if property.dual_property_id === property.id}
					(self-dual)
				{/if}
			</li>
		{/if}

		{#if property.nlab_link}
			<li>
				<a href={property.nlab_link} target="_blank">nLab Link</a>
			</li>
		{/if}
	</ul>
{/if}

<p>
	<button class="button" onclick={() => window.history.back()}>Go back</button>
</p>
