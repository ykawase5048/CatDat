<script lang="ts">
	import { page } from '$app/state'
	import { APP, type APP_MODE_TYPE } from '$lib/states/app.mode.svelte'
	import {
		faArrowsSplitUpAndLeft,
		faChartBar,
		faDatabase,
		faHome,
		faList,
		faSearch,
		type IconDefinition,
	} from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'

	type Link = {
		href: string
		text: string
		nested?: string
		icon: IconDefinition
		mode?: APP_MODE_TYPE
	}

	const links: Link[] = [
		{ href: '/', text: 'Home', icon: faHome },
		{
			href: '/categories',
			text: 'Categories',
			nested: '/category/',
			icon: faDatabase,
			mode: 'categories',
		},
		{
			href: '/category-properties',
			text: 'Properties',
			nested: '/category-property',
			icon: faList,
			mode: 'categories',
		},
		{
			href: '/category-implications',
			text: 'Implications',
			nested: '/category-implication',
			icon: faArrowsSplitUpAndLeft,
			mode: 'categories',
		},
		{
			href: '/category-comparison',
			text: 'Compare',
			icon: faChartBar,
			nested: '/category-comparison',
			mode: 'categories',
		},
		{
			href: '/category-search',
			text: 'Search',
			icon: faSearch,
			mode: 'categories',
		},
		{
			href: '/functors',
			text: 'Functors',
			nested: '/functor',
			icon: faDatabase,
			mode: 'functors',
		},
		{
			href: '/functor-properties',
			text: 'Properties',
			nested: '/functor-property',
			icon: faList,
			mode: 'functors',
		},
		{
			href: '/functor-implications',
			text: 'Implications',
			nested: '/functor-implication',
			icon: faArrowsSplitUpAndLeft,
			mode: 'functors',
		},
	]

	let displayed_links = $derived(
		links.filter((link) => !link.mode || link.mode === APP.MODE),
	)
</script>

<nav>
	<ul>
		{#each displayed_links as { nested, href, text, icon }}
			<li
				class:current={page.url.pathname === href ||
					(nested && page.url.pathname.startsWith(nested))}
			>
				<a {href}><Fa {icon} scale={0.85} /> {text}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		padding-bottom: 1.5rem;

		@media (width <= 600px) {
			display: none;
		}
	}

	ul {
		padding: 0;
		list-style-type: none;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.25rem 1.25rem;
	}

	a {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	li.current a {
		color: var(--accent-color);
		text-decoration-color: var(--accent-color);
	}

	li:not(.current) :global(svg) {
		color: var(--heading-color);
	}
</style>
