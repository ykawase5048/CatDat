<script lang="ts">
	import { get_property_url } from '$lib/commons/property.url'
	import TextWithReason from './TextWithReason.svelte'

	type Props = {
		properties: {
			id: string
			prefix: string
			reason?: string | null
		}[]
		description?: string
		type?: 'category' | 'functor'
	}

	let { properties, description, type = 'category' }: Props = $props()
</script>

{#if description}
	<p class="hint">{description}</p>
{/if}

{#if properties.length}
	<ul>
		{#each properties as { id, prefix, reason }}
			<li>
				<TextWithReason {reason}>
					{prefix}
					<a href={get_property_url(id, type)}>{id}</a>
				</TextWithReason>
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
