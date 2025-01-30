<script lang="ts">
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
				<td>{property}</td>

				<td class={JSON.stringify(value_1)}>
					<Fa icon={icon_config[JSON.stringify(value_1)]} />
				</td>

				<td class={JSON.stringify(value_2)}>
					<Fa icon={icon_config[JSON.stringify(value_2)]} />
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		border-spacing: 0;
	}

	th {
		text-align: left;
	}

	td {
		padding: 0.125rem 0.4rem;
	}

	th {
		padding: 0.4rem;
	}

	td:nth-child(2),
	td:nth-child(3) {
		width: 15%;
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
