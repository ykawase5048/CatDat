<script lang="ts">
	import {
		get_property_url,
		negate_prefix,
		properties_dictionary,
	} from '$lib/properties/properties.utils'
	import type { PropertyID } from '$lib/properties/propertyIDs'

	type Props = {
		items: PropertyID[]
		description?: string
		with_prefix?: boolean
		negated?: boolean
	}

	let { items, description, with_prefix = true, negated = false }: Props = $props()
</script>

{#if description}
	<p class="hint">
		{description}
	</p>
{/if}

{#if items.length}
	<ul>
		{#each items as property}
			<li>
				{#if with_prefix}
					{@const property_data = properties_dictionary[property]}
					{negated ? negate_prefix(property_data.prefix) : property_data.prefix}
				{/if}
				<a href={get_property_url(property)}>
					{property}
				</a>
			</li>
		{/each}
	</ul>
{:else}
	<p>&mdash;</p>
{/if}
