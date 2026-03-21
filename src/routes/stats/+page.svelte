<script lang="ts">
	import { Doughnut, Line } from 'svelte-chartjs'
	import {
		Chart as ChartJS,
		Tooltip,
		ArcElement,
		LineElement,
		LinearScale,
		PointElement,
		Title,
		CategoryScale,
	} from 'chart.js'
	import { string_to_color } from '$lib/client/utils'
	import { theme } from '$lib/states/theme.svelte'
	import MetaData from '$components/MetaData.svelte'

	ChartJS.register(
		Title,
		Tooltip,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale,
		ArcElement,
	)

	let { data } = $props()

	let doughnut_outline_color = $derived(theme.value === 'dark' ? 'white' : 'black')

	let country_data = $derived({
		labels: data.country_stats.map((s) => s.country),
		datasets: [
			{
				data: data.country_stats.map((s) => s.count),
				backgroundColor: data.country_stats.map((s) =>
					string_to_color(s.country),
				),
				borderColor: doughnut_outline_color,
				borderWidth: 1,
			},
		],
	})

	let theme_data = $derived({
		labels: data.theme_stats.map((s) => s.theme),
		datasets: [
			{
				data: data.theme_stats.map((s) => s.count),
				backgroundColor: ['black', 'white'],
				borderColor: doughnut_outline_color,
				borderWidth: 1,
			},
		],
	})

	let device_data = $derived({
		labels: data.device_stats.map((s) => s.device_type),
		datasets: [
			{
				data: data.device_stats.map((s) => s.count),
				backgroundColor: data.device_stats.map((s) =>
					string_to_color(s.device_type),
				),
				borderColor: doughnut_outline_color,
				borderWidth: 1,
			},
		],
	})

	let line_color = $derived(theme.value === 'dark' ? 'yellow' : '#222')
	let axis_color = $derived(theme.value === 'dark' ? '#aaa' : '#555')
	let grid_color = $derived(theme.value === 'dark' ? '#333' : '#ddd')

	const daily_data = $derived({
		labels: data.daily_visits.map((s) => s.day),
		datasets: [
			{
				borderColor: line_color,
				pointBackgroundColor: line_color,
				data: data.daily_visits.map((s) => s.count),
			},
		],
	})
</script>

<MetaData
	title="CatDat Stats"
	description="How many times and from where CatDat has been visited"
/>

<h2>Stats</h2>

<i>CatDat</i> has been visited <strong>{data.total}</strong> times since its launch on
{data.start.substring(0, 10)}. There has been <strong>{data.total_last_day}</strong>
visits in the last day, <strong>{data.total_last_week}</strong>
visits in the last week, and <strong>{data.total_last_month}</strong> visits in the last
month.

<h3>Daily Visits</h3>

<div class="line-container">
	<Line
		data={daily_data}
		options={{
			responsive: true,
			scales: {
				x: {
					ticks: { color: axis_color },
					border: { color: axis_color },
					grid: { color: grid_color },
				},
				y: {
					ticks: { color: axis_color },
					border: { color: axis_color },
					grid: { color: grid_color },
				},
			},
		}}
	/>
</div>

<h3>Visits by Countries</h3>

<div class="doughnut-container">
	<Doughnut
		data={country_data}
		options={{
			responsive: true,
			plugins: {
				legend: { display: false },
			},
		}}
	/>
</div>

<h3>Visits by Themes</h3>

<div class="doughnut-container">
	<Doughnut
		data={theme_data}
		options={{
			responsive: true,
			plugins: {
				legend: { display: false },
			},
		}}
	/>
</div>

<h3>Visits by Device Type</h3>

<div class="doughnut-container">
	<Doughnut
		data={device_data}
		options={{
			responsive: true,
			plugins: {
				legend: { display: false },
			},
		}}
	/>
</div>

<style>
	h3 {
		text-align: center;
	}

	.doughnut-container {
		margin-block: 2rem 3rem;
		width: min(95vw, 400px);
		margin-inline: auto;
	}

	.line-container {
		margin-block: 2rem 3rem;
	}
</style>
