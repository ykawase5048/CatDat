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
	let { category_1, category_2, comparison_result } = data

	const icon_config: Record<string, IconDefinition> = {
		true: faCheck,
		false: faXmark,
		null: faQuestion,
	}
</script>

<svelte:head>
	<title>Comparison of two categories</title>
</svelte:head>

<h2>Comparison: {category_1.name} vs. {category_2.name}</h2>

{#snippet ValueCell(value: null | boolean)}
	<td
		class={JSON.stringify(value)}
		aria-label={value === null ? 'Unknown' : value ? 'Yes' : 'No'}
	>
		<Fa icon={icon_config[JSON.stringify(value)]} />
	</td>
{/snippet}

<table>
	<thead>
		<tr>
			<th>Property</th>
			<th>
				<a href="/category/{category_1.id}">
					{category_1.id}
				</a>
			</th>
			<th>
				<a href="/category/{category_2.id}">
					{category_2.id}
				</a>
			</th>
		</tr>
	</thead>
	<tbody>
		{#each comparison_result as [property, value_1, value_2]}
			<tr
				class:highlight={value_1 !== null &&
					value_2 !== null &&
					value_1 !== value_2}
			>
				<td>
					<a href={get_property_url(property)}>{property}</a>
				</td>

				{@render ValueCell(value_1)}

				{@render ValueCell(value_2)}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		border-spacing: 0;
		margin-inline: auto;
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
