// @ts-expect-error not sure why this is happening
import mathjax from 'mathjax'

const MathJax = await mathjax.init({
	loader: { load: ['input/tex', 'output/svg', '[tex]/amscd'] },
	tex: { packages: { '[+]': ['amscd'] } },
})

export function render_formula(formula: string, inline: boolean): string {
	const svg = MathJax.tex2svg(formula, { display: !inline })
	return MathJax.startup.adaptor.innerHTML(svg)
}

const inline_math_regex = /\$(.*?)\$/g
const block_math_regex = /\$\$(.*?)\$\$/g

export function render_formulas(content: string): string {
	return content
		.replace(block_math_regex, (_, formula) => {
			return render_formula(formula, false)
		})
		.replace(inline_math_regex, (_, formula) => {
			return render_formula(formula, true)
		})
}
