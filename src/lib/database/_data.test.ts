// This file is testing all the files in the present data folder.

import { CATEGORIES } from '$lib/database/categories.data'
import { CATEGORY_NON_PROPERTIES } from '$lib/database/category-non-properties.data'
import { CATEGORY_PROPERTIES } from '$lib/database/category-properties.data'
import { IMPLICATIONS } from '$lib/database/implications.data'
import { PREFIXES } from '$lib/database/prefix.data'
import { PROPERTIES } from '$lib/database/properties.data'
import { PROPERTY_DUALS } from '$lib/database/property-duals.data'
import { TAGS } from '$lib/database/tags.data'

describe('tags', () => {
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
})

describe('list of satisfied properties per category', () => {
	it('should have at most one entry per category-property pair', () => {
		const seen = new Set<string>()

		for (const [category, property] of CATEGORY_PROPERTIES) {
			const pair = `${category}-${property}`
			expect(seen.has(pair)).toBe(false)
			seen.add(pair)
		}
	})

	it('should have categories grouped together', () => {
		const categories = CATEGORY_PROPERTIES.map((item) => item[0])
		const seen = new Set<string>()
		let current = categories[0]

		for (const category of categories) {
			if (category == current) continue
			if (seen.has(category)) {
				throw new Error(`Category ${category} is not grouped together`)
			}
			seen.add(current)
			current = category
		}
	})
})

describe('list of non-satisfied properties per category', () => {
	it('should have at most one entry per category-property pair', () => {
		const seen = new Set<string>()

		for (const [category, property] of CATEGORY_NON_PROPERTIES) {
			const pair = `${category}-${property}`
			expect(seen.has(pair)).toBe(false)
			seen.add(pair)
		}
	})

	it('should have categories grouped together', () => {
		const categories = CATEGORY_NON_PROPERTIES.map((item) => item[0])
		const seen = new Set<string>()
		let current = categories[0]

		for (const category of categories) {
			if (category == current) continue
			if (seen.has(category)) {
				throw new Error(`Category ${category} is not grouped together`)
			}
			seen.add(current)
			current = category
		}
	})
})

describe('implications', () => {
	it('should contain basic implications', () => {
		const implication = {
			assumptions: ['cartesian closed'],
			conclusions: ['finite products'],
			reason: expect.any(String),
		}
		expect(IMPLICATIONS).toContainEqual(implication)
	})

	it('should contain not deductions of the implications', () => {
		const implication = {
			assumptions: ['cartesian closed'],
			conclusions: ['terminal object'],
			reason: expect.any(String),
		}
		expect(IMPLICATIONS).not.toContainEqual(implication)
	})

	it('should not contain basic self-dual implications', () => {
		const implication = {
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
					? ['equivalent', 'assumptions', 'conclusions', 'reason']
					: ['assumptions', 'conclusions', 'reason']
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
})

describe('properties of categories', () => {
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
})

describe('dual properties', () => {
	it('should dualize mutually', () => {
		for (const key in PROPERTY_DUALS) {
			const dual = (PROPERTY_DUALS as any)[key]
			expect((PROPERTY_DUALS as any)[dual]).toBe(key)
		}
	})
})
