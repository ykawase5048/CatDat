// @ts-ignore
import mathjax from 'mathjax'

const MathJax = await mathjax.init({
	loader: { load: ['input/tex', 'output/svg'] },
})

export function render_formula(formula: string): string {
	const svg = MathJax.tex2svg(formula, {
		display: false,
	})
	return MathJax.startup.adaptor.innerHTML(svg)
}

const math_regex = /\$(.*?)\$/g

export function render_formulas(txt: string) {
	return txt.replace(math_regex, (_, formula) => {
		return render_formula(formula)
	})
}

export function render_formulas_in_object<T extends Record<string, any>>(
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
