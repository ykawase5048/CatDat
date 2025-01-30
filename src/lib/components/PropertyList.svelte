<script lang="ts">
	import {
		get_property_url,
		negate_prefix,
		properties_dictionary,
	} from '$lib/properties/properties.utils'
	import type { PropertyID } from '$lib/properties/propertyIDs'

	type Props = {
		items: PropertyID[] | Set<PropertyID>
		description?: string
		with_prefix?: boolean
		negated?: boolean
	}

	let { items, description, with_prefix = true, negated = false }: Props = $props()

	let item_list = items instanceof Set ? Array.from(items) : items

	let sorted_properties = $derived(
		item_list.toSorted((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())),
	)
</script>

{#if description}
	<p class="hint">
		{description}
	</p>
{/if}

{#if item_list.length}
	<ul>
		{#each sorted_properties as property}
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
