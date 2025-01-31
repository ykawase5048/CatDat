import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
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
				functions: 95,
				lines: 98,
			},
		},
	},
})
