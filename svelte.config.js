import adapter from '@sveltejs/adapter-netlify'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

// TODO: sync list with db
const tags = [
	'basic',
	'intermediate',
	'advanced',
	'artificial',
	'well-behaved',
	'badly-behaved',
	'algebra',
	'algebraic geometry',
	'topology',
	'analysis',
	'order theory',
	'measure theory',
	'geometry',
	'set theory',
	'representation theory',
	'combinatorics',
	'category theory',
	'number theory',
]

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		alias: {
			$components: './src/components',
		},
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		prerender: {
			entries: ['/', ...tags.map((tag) => `/categories/${tag}`)],
		},
	},
}

export default config
