<script lang="ts">
	import type { Property } from '$lib/types'
	import { get_property_url } from '$lib/properties/properties.utils'
	import { negate_prefix } from '$lib/properties/prefix'

	type Props = {
		items: Property[]
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
					{negated ? negate_prefix(property.prefix) : property.prefix}
				{/if}
				<a href={get_property_url(property.id)}>
					{property.id}
				</a>
			</li>
		{/each}
	</ul>
{:else}
	<p>&mdash;</p>
{/if}
