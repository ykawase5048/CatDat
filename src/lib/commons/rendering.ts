import katex from 'katex'

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

export function render_formulas_in_object<T extends Record<string, unknown>>(
	obj: T,
	keys: string[],
): T {
	return Object.fromEntries(
		Object.entries(obj).map(([key, value]) => [
			key,
			keys.includes(key) && typeof value === 'string'
				? render_formulas(value)
				: value,
		]),
	) as T
}
