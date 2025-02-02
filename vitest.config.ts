import { defineConfig } from 'vitest/config'
import { sveltekit } from '@sveltejs/kit/vite'
import path from 'path'

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: path.resolve(__dirname, 'src/lib'),
		},
	},
	test: {
		globals: true,
		coverage: {
			provider: 'v8',
			include: ['src/lib/**/*.ts'],
			reporter: ['text', 'text-summary', 'json-summary'],
			thresholds: {
				statements: 98,
				branches: 98,
				functions: 98,
				lines: 98,
			},
		},
	},
})
