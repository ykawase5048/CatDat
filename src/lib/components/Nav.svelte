<script lang="ts">
	import { page } from '$app/state'
	import {
		faArrowsSplitUpAndLeft,
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
	}

	const links: Link[] = [
		{ href: '/', text: 'Home', icon: faHome },
		{
			href: '/categories',
			text: 'Categories',
			nested: '/category',
			icon: faDatabase,
		},
		{ href: '/properties', text: 'Properties', nested: '/property', icon: faList },
		{ href: '/implications', text: 'Implications', icon: faArrowsSplitUpAndLeft },
		{ href: '/search', text: 'Search', icon: faSearch },
	]
</script>

<nav>
	<ul>
		{#each links as { nested, href, text, icon }}
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
	}

	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.25rem 1.25rem;
	}

	li {
		margin: 0;
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
</style>
