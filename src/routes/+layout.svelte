<script lang="ts">
	import { afterNavigate } from '$app/navigation'
	import Footer from '$components/Footer.svelte'
	import Heading from '$components/Heading.svelte'
	import Nav from '$components/Nav.svelte'
	import NavMobile from '$components/NavMobile.svelte'
	import { track_visit } from '$lib/client/track'
	import './app.css'

	let { children } = $props()

	let show_mobile_nav = $state(false)

	function open_mobile_nav() {
		show_mobile_nav = true
	}

	function close_mobile_nav() {
		show_mobile_nav = false
	}

	afterNavigate(() => {
		close_mobile_nav()
	})

	$effect(() => {
		track_visit()
	})
</script>

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

	<link
		rel="preload"
		href="/fonts/DMMono-Regular.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
</svelte:head>

<div class="container">
	<Heading {open_mobile_nav} />
	<Nav />

	<main>
		{@render children()}
	</main>

	<Footer />
</div>

{#if show_mobile_nav}
	<NavMobile close={close_mobile_nav} />
{/if}

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
