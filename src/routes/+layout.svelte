<script lang="ts">
	import Footer from '$components/Footer.svelte'
	import Heading from '$components/Heading.svelte'
	import Nav from '$components/Nav.svelte'
	import './app.css'

	import { onNavigate } from '$app/navigation'
	import { selected_tooltip } from '$lib/states/tooltip.svelte'
	import MetaData from '$components/MetaData.svelte'

	onNavigate((navigation) => {
		if (!document.startViewTransition) return

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})

	function handle_keydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			selected_tooltip.id = null
		}
	}
</script>

<MetaData />

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.css"
		integrity="sha384-FkTZUsHjYVyYpU6dse+5AzszY5617FqhnLpcMIIAlLKTbdmeVMO/7K6BrdHWM28V"
		crossorigin="anonymous"
	/>

	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<meta name="apple-mobile-web-app-title" content="CatDat" />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<div class="container">
	<Heading />
	<Nav />

	<main>
		<slot></slot>
	</main>

	<Footer />
</div>

<svelte:window onkeydown={handle_keydown} />

<style>
	main {
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
		margin-block: 0.5rem 1.5rem;
	}

	.container {
		min-height: 100dvh;
		display: grid;
		grid-template-rows: auto auto 1fr auto;
		padding-inline: 0.75rem;
	}
</style>
