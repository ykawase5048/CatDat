<script lang="ts">
	import { get_property_url } from '$lib/commons/property.url'
	import LabelWithReason from './LabelWithReason.svelte'

	type Props = {
		properties: {
			id: string
			prefix: string
			reason?: string
		}[]
		description?: string
	}

	let { properties, description }: Props = $props()
</script>

{#if description}
	<p class="hint">
		{description}
	</p>
{/if}

{#if properties.length}
	<ul>
		{#each properties as { id, prefix, reason }}
			<li>
				<LabelWithReason {reason}>
					{prefix}
					<a href={get_property_url(id)}>
						{id}
					</a>
				</LabelWithReason>
			</li>
		{/each}
	</ul>
{:else}
	<p>&mdash;</p>
{/if}

<style>
	li {
		position: relative;
	}
</style>
