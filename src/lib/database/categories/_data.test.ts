// This file is testing all the files in the present data folder.

import { render_formulas, render_nested_formulas } from '$lib/commons/rendering'
import { CATEGORIES } from '$lib/database/categories/categories.data'
import { IMPLICATIONS } from '$lib/database/categories/implications.data'
import { PREFIXES } from '$lib/database/categories/prefix.data'
import { PROPERTIES } from '$lib/database/categories/properties.data'
import { PROPERTY_DUALS } from '$lib/database/categories/property-duals.data'
import { TAGS } from '$lib/database/categories/tags.data'
import { CATEGORY_EPIMORPHISMS } from './category-epimorphisms.data'
import { CATEGORY_ISOMORPHISMS } from './category-isomorphisms.data'
import { CATEGORY_MONOMORPHISMS } from './category-monomorphisms.data'
import { CATEGORY_NON_PROPERTIES } from './category-non-properties.data'
import { CATEGORY_PROPERTIES } from './category-properties.data'

describe('list of tags', () => {
	it('are unique', () => {
		expect(TAGS).toEqual([...new Set(TAGS)])
	})
})

describe('list of categories', () => {
	it('should have unique IDs', () => {
		const ids = CATEGORIES.map((category) => category.id)
		expect(ids).toEqual([...new Set(ids)])
	})

	it('should have only IDs without spaces', () => {
		for (const category of CATEGORIES) {
			expect(category.id).not.toContain(' ')
		}
	})

	it('should have unique names', () => {
		const names = CATEGORIES.map((category) => category.name)
		expect(names).toEqual([...new Set(names)])
	})

	it('should have all properties in the same order', () => {
		const category_keys = [
			'id',
			'name',
			'notation',
			'objects',
			'morphisms',
			'nlab_link',
			'description',
		]

		for (const category of CATEGORIES) {
			const keys = Object.keys(category)
			const sorted_keys = category_keys.filter((key) => keys.includes(key))
			expect(keys).toEqual(sorted_keys)
		}
	})

	it('should have no errors in LaTeX', () => {
		for (const category of CATEGORIES) {
			expect(() => {
				render_nested_formulas(category)
			}).not.toThrow()
		}
	})
})

describe('list of properties', () => {
	it('should have unique IDs', () => {
		const ids = PROPERTIES.map((property) => property.id)
		expect(ids).toEqual([...new Set(ids)])
	})

	it('should have IDs without prefixes and underscores', () => {
		const ids = PROPERTIES.map((property) => property.id)
		for (const id of ids) {
			expect(id).not.toContain('_')
			for (const prefix in Object.keys(PREFIXES)) {
				expect(id.startsWith(prefix)).toBe(false)
			}
		}
	})

	it('should have all properties in the same order', () => {
		const property_keys = [
			'id',
			'prefix',
			'nlab_link',
			'description',
			'dual',
			'related',
			'invariant',
		]

		for (const property of PROPERTIES) {
			const keys = Object.keys(property)
			const sorted_keys = property_keys.filter((key) => keys.includes(key))
			const are_same = keys.every((key, index) => key === sorted_keys[index])
			if (!are_same) console.warn(property.id)
			expect(keys).toEqual(sorted_keys)
		}
	})

	it("should have no errors in LaTeX in the 'description' field", () => {
		for (const property of PROPERTIES) {
			expect(() => {
				render_formulas(property.description)
			}).not.toThrow()
		}
	})
})

describe('list of dual properties', () => {
	it('should dualize mutually', () => {
		for (const key in PROPERTY_DUALS) {
			const dual = (PROPERTY_DUALS as any)[key]
			if (!dual) continue
			expect((PROPERTY_DUALS as any)[dual]).toBe(key)
		}
	})
})

describe('list of implications', () => {
	it('should have unique IDs', () => {
		const ids = IMPLICATIONS.map((implication) => implication.id)
		expect(ids).toEqual([...new Set(ids)])
	})

	it('should contain basic implications', () => {
		const implication = {
			id: expect.any(String),
			assumptions: ['cartesian closed'],
			conclusions: ['finite products'],
			reason: expect.any(String),
		}
		expect(IMPLICATIONS).toContainEqual(implication)
	})

	it('should contain not deductions of the implications', () => {
		const implication = {
			id: expect.any(String),
			assumptions: ['cartesian closed'],
			conclusions: ['terminal object'],
			reason: expect.any(String),
		}
		expect(IMPLICATIONS).not.toContainEqual(implication)
	})

	it('should not contain basic self-dual implications', () => {
		const implication = {
			id: expect.any(String),
			assumptions: ['self-dual', 'binary products'],
			conclusions: ['binary coproducts'],
			reason: expect.any(String),
		}
		expect(IMPLICATIONS).not.toContainEqual(implication)
	})

	it('should have all properties in the same order', () => {
		for (const implication of IMPLICATIONS) {
			const keys = Object.keys(implication)
			const expected_keys =
				'equivalent' in implication
					? ['id', 'equivalent', 'assumptions', 'conclusions', 'reason']
					: ['id', 'assumptions', 'conclusions', 'reason']
			expect(keys).toEqual(expected_keys)
		}
	})

	it('for equivalences, the assumptions should be shorter than the conclusions', () => {
		for (const implication of IMPLICATIONS) {
			if ('equivalent' in implication) {
				expect(implication.assumptions.length).toBeLessThanOrEqual(
					implication.conclusions.length,
				)
			}
		}
	})

	it("should have no errors in LaTeX in the 'reason' field", () => {
		for (const implication of IMPLICATIONS) {
			expect(() => {
				render_formulas(implication.reason)
			}).not.toThrow()
		}
	})
})

describe('special morphisms (mono, epi, iso)', () => {
	it('should have no errors in LaTeX', () => {
		const special_morphisms = [
			...Object.values(CATEGORY_EPIMORPHISMS),
			...Object.values(CATEGORY_ISOMORPHISMS),
			...Object.values(CATEGORY_MONOMORPHISMS),
		]

		for (const entry of special_morphisms) {
			expect(() => {
				render_nested_formulas(entry)
			}).not.toThrow()
		}
	})
})

describe('properties and non-properties satisfied by categories', () => {
	const property_data = [
		...Object.values(CATEGORY_PROPERTIES),
		...Object.values(CATEGORY_NON_PROPERTIES),
	]
	it('should not contain any errors in LaTeX', () => {
		for (const entry of property_data) {
			expect(() => {
				render_nested_formulas(entry)
			}).not.toThrow()
		}
	})
})
