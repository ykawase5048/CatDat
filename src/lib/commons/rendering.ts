import katex from 'katex'
import { is_object } from './utils'

function render_formula(formula: string): string {
	return katex.renderToString(formula, {
		throwOnError: false,
	})
}

const math_regex = /\$(.*?)\$/g

export function render_formulas(txt: string): string {
	return txt.replace(math_regex, (_, formula) => {
		return render_formula(formula)
	})
}

export function render_formulas_in_object<T extends Record<string, unknown>>(obj: T): T {
	const result: Record<string, unknown> = {}
	for (const key in obj) {
		const value = obj[key]
		if (typeof value === 'string') {
			const has_math = math_regex.test(value)
			result[key] = has_math ? render_formulas(value) : value
		} else if (is_object(value)) {
			result[key] = render_formulas_in_object(value)
		} else {
			result[key] = value
		}
	}
	return result as T
}

// currently not used
export function render_formulas_in_array(arr: string[]): string[] {
	return arr.map(render_formulas)
}
