import { render_formulas, render_nested_formulas } from './rendering'

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

	it('throws an error for invalid formulas', () => {
		expect(() =>
			render_formulas('This is an invalid formula $x = \\frac{y}{z$'),
		).toThrow()
	})
})

describe('render_nested_formulas', () => {
	it('should not change nullish values', () => {
		expect(render_nested_formulas(null)).toBe(null)
		expect(render_nested_formulas(undefined)).toBe(undefined)
	})

	it('should not change numbers', () => {
		expect(render_nested_formulas(34)).toBe(34)
	})

	it('should render formulas in strings', () => {
		const rendered_formula = render_nested_formulas('This is just $x = y$.')
		expect(rendered_formula).toMatch(/This is just <span class="katex">.*<\/span>\./)
	})

	it('should render formulas in direct fields of objects', () => {
		const obj = {
			id: '123',
			notation: '$\\sqcup$',
			description: 'The coproduct $X \\sqcup Y$ of two objects always exists.',
		} as const

		const rendered_object = render_nested_formulas(obj)
		expect(rendered_object.id).toBe('123')
		expect(rendered_object.notation).toMatch(/<span class="katex">.*<\/span>/)
		expect(rendered_object.description).toMatch(
			/The coproduct <span class="katex">.*<\/span> of two objects always exists\./,
		)
	})

	it('should render formulas in nested fields of objects', () => {
		const obj = {
			id: 'Grph',
			notation: `$\\mathbf{Grph}$`,
			special_morphisms: {
				isomorphisms: 'pairs $(f,g)$ with $f$ and $g$ isomorphisms',
			},
			properties: new Set(['x', 'y', 'z']),
		} as const

		const rendered_object = render_nested_formulas(obj)

		expect(rendered_object.id).toBe('Grph')
		expect(rendered_object.notation).toMatch(/<span class="katex">.*<\/span>/)
		expect(rendered_object.special_morphisms.isomorphisms).toMatch(
			/pairs <span class="katex">.*<\/span> with <span class="katex">.*<\/span> and <span class="katex">.*<\/span> isomorphisms/,
		)
		expect(rendered_object.properties).toEqual(new Set(['x', 'y', 'z']))
	})

	it('should render formulas in an array', () => {
		const arr = ['$a$', '$b$', '$c$'] as const
		const rendered_arr = render_nested_formulas(arr)

		expect(rendered_arr).toHaveLength(3)
		expect(rendered_arr[0]).toMatch(/<span class="katex">.*<\/span>/)
		expect(rendered_arr[1]).toMatch(/<span class="katex">.*<\/span>/)
		expect(rendered_arr[2]).toMatch(/<span class="katex">.*<\/span>/)
	})

	it('should recursively render formulas in nested objects and arrays', () => {
		const obj = {
			a: 'a',
			b: `$x=y$`,
			c: ['This is $z$', { d: '$w$' }],
		} as const

		const rendered_obj = render_nested_formulas(obj)

		expect(rendered_obj.a).toBe('a')
		expect(rendered_obj.b).toMatch(/<span class="katex">.*<\/span>/)
		expect(rendered_obj.c).toHaveLength(2)
		expect(rendered_obj.c[0]).toMatch(/This is <span class="katex">.*<\/span>/)
		expect(rendered_obj.c[1].d).toMatch(/<span class="katex">.*<\/span>/)
	})
})
