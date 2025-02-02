import { render_formulas, render_formulas_in_object } from './rendering'

describe('render_formulas', () => {
	it('renders formulas in a text', () => {
		const rendered_formula = render_formulas(
			'The objects are pairs $(X,U)$ consisting of a set $X$ and a subset $U$ of $X$.',
		)
		const expected_regex =
			/The objects are pairs <span class="katex">.*<\/span> consisting of a set <span class="katex">.*<\/span> and a subset <span class="katex">.*<\/span> of <span class="katex">.*<\/span>\./
		expect(rendered_formula).toMatch(expected_regex)
	})

	it('does not change text without formulas', () => {
		const text = 'This is a text without formulas.'
		expect(render_formulas(text)).toBe(text)
	})
})

describe('render_formulas_in_object', () => {
	it('should render formulas in direct fields', () => {
		const obj = {
			id: '123',
			notation: '$\\sqcup$',
			description: 'The coproduct $X \\sqcup Y$ of two objects always exists.',
			related: ['a', 'b'],
		}

		const rendered_object = render_formulas_in_object(obj)
		expect(rendered_object.id).toBe('123')
		expect(rendered_object.notation).toMatch(/<span class="katex">.*<\/span>/)
		expect(rendered_object.description).toMatch(
			/The coproduct <span class="katex">.*<\/span> of two objects always exists\./,
		)
		expect(rendered_object.related).toEqual(['a', 'b'])
	})

	it('should render formulas in nested fields', () => {
		const obj = {
			id: 'Grph',
			notation: `$\\mathbf{Grph}$`,
			special_morphisms: {
				isomorphisms: 'pairs $(f,g)$ with $f$ and $g$ isomorphisms',
			},
			properties: new Set(['x', 'y', 'z']),
		}
		const rendered_object = render_formulas_in_object(obj)
		expect(rendered_object.id).toBe('Grph')
		expect(rendered_object.notation).toMatch(/<span class="katex">.*<\/span>/)
		expect(rendered_object.special_morphisms.isomorphisms).toMatch(
			/pairs <span class="katex">.*<\/span> with <span class="katex">.*<\/span> and <span class="katex">.*<\/span> isomorphisms/,
		)
		expect(rendered_object.properties).toEqual(new Set(['x', 'y', 'z']))
	})
})
