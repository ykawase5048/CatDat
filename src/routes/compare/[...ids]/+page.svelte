<script lang="ts">
	import { get_property_url } from '$lib/properties/properties.utils.js'
	import {
		faCheck,
		faQuestion,
		faXmark,
		type IconDefinition,
	} from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'

	let { data } = $props()
	let { compared_categories, comparison_result } = data

	const icon_config: Record<string, IconDefinition> = {
		true: faCheck,
		false: faXmark,
		null: faQuestion,
	}

	let paragraph_element = $state<HTMLElement | null>(null)
	let show_header_outline = $state(false)

	$effect(() => {
		if (!paragraph_element) return

		const observer = new IntersectionObserver(
			([entry]) => {
				show_header_outline = entry.intersectionRatio == 0
			},
			{ threshold: [0] },
		)

		observer.observe(paragraph_element)
	})
</script>

<svelte:head>
	<title>Comparison of categories</title>
</svelte:head>

<h2>Comparison of categories</h2>

<p class="hint" bind:this={paragraph_element}>
	Comparison of {compared_categories.length} categories:
	{compared_categories.map((c) => c.name).join(', ')}.
</p>

<table>
	<thead class:outlined={show_header_outline}>
		<tr>
			<th>Property</th>
			{#each compared_categories as category}
				<th>
					<a href="/category/{category.id}">
						{category.id}
					</a>
				</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each comparison_result as [property, ...values]}
			{@const is_different = new Set(values).size > 1}
			<tr class:highlight={is_different}>
				<td>
					<a href={get_property_url(property)}>{property}</a>
				</td>

				{#each compared_categories as _, i}
					{@const value = values[i]}
					<td
						class={JSON.stringify(value)}
						aria-label={value === null ? 'Unknown' : value ? 'Yes' : 'No'}
					>
						<Fa icon={icon_config[JSON.stringify(value)]} />
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		border-spacing: 0;
		margin-inline: auto;
	}

	thead {
		top: 1px;
		position: sticky;
		background-color: var(--bg-color);
		outline: 1px solid transparent;
		transition: outline-color 200ms;
	}

	thead.outlined {
		outline: 1px solid var(--outline-color);
		box-shadow: 0px 10px 30px var(--shadow-color);
	}

	th:first-child {
		text-align: left;
	}

	th:not(:first-child) {
		text-align: center;
	}

	td,
	th {
		padding-inline: 0.5rem;
	}

	td {
		padding-block: 0.125rem;
	}

	th {
		padding-block: 0.5rem;
	}

	td:first-child a {
		text-decoration: none;
	}

	td:not(:first-child) {
		text-align: center;
	}

	td.true {
		color: var(--success-color);
	}

	td.false {
		color: var(--error-color);
	}

	td.null {
		color: var(--secondary-text-color);
	}

	tr.highlight {
		background-color: var(--secondary-bg-color);
	}
</style>
