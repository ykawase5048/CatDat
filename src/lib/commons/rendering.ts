import katex from 'katex'
import { is_object } from './utils'

function render_formula(formula: string): string {
	return katex.renderToString(formula, {
		throwOnError: true,
	})
}

const math_regex = /\$(.*?)\$/g

export function render_formulas(txt: string): string {
	return txt.replace(math_regex, (_, formula) => {
		return render_formula(formula)
	})
}

export function render_nested_formulas<T>(obj: T): T {
	if (!obj) return obj

	if (typeof obj === 'string') {
		return render_formulas(obj) as T
	}

	if (Array.isArray(obj)) {
		return obj.map(render_nested_formulas) as T
	}

	if (is_object(obj)) {
		const result: Record<string, unknown> = {}
		for (const key in obj) {
			result[key] = render_nested_formulas(obj[key])
		}
		return result as T
	}

	return obj
}
