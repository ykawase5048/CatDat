// This file is testing all the files in the present data folder.

import { categories } from '$lib/data/categories.data'
import { category_non_properties } from '$lib/data/category-non-properties.data'
import { category_properties } from '$lib/data/category-properties.data'
import { implications } from '$lib/data/implications.data'
import { PREFIXES } from '$lib/data/prefix.data'
import { properties } from '$lib/data/properties.data'
import { property_duals } from '$lib/data/property-duals.data'
import { tags } from '$lib/data/tags.data'

describe('tags', () => {
	it('are unique', () => {
		expect(tags).toEqual([...new Set(tags)])
	})
})

describe('list of categories', () => {
	it('should have unique IDs', () => {
		const ids = categories.map((category) => category.id)
		expect(ids).toEqual([...new Set(ids)])
	})

	it('should have only IDs without spaces', () => {
		for (const category of categories) {
			expect(category.id).not.toContain(' ')
		}
	})

	it('should have unique names', () => {
		const names = categories.map((category) => category.name)
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

		for (const category of categories) {
			const keys = Object.keys(category)
			const sorted_keys = category_keys.filter((key) => keys.includes(key))
			expect(keys).toEqual(sorted_keys)
		}
	})
})

describe('list of satisfied properties per category', () => {
	it('should have at most one entry per category-property pair', () => {
		const seen = new Set<string>()

		for (const { category, property } of category_properties) {
			const pair = `${category}-${property}`
			expect(seen.has(pair)).toBe(false)
			seen.add(pair)
		}
	})

	it('should have categories grouped together', () => {
		const categories = category_properties.map((item) => item.category)
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

		for (const { category, property } of category_non_properties) {
			const pair = `${category}-${property}`
			expect(seen.has(pair)).toBe(false)
			seen.add(pair)
		}
	})

	it('should have categories grouped together', () => {
		const categories = category_non_properties.map((item) => item.category)
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
		expect(implications).toContainEqual(implication)
	})

	it('should contain not deductions of the implications', () => {
		const implication = {
			assumptions: ['cartesian closed'],
			conclusions: ['terminal object'],
			reason: expect.any(String),
		}
		expect(implications).not.toContainEqual(implication)
	})

	it('should not contain basic self-dual implications', () => {
		const implication = {
			assumptions: ['self-dual', 'binary products'],
			conclusions: ['binary coproducts'],
			reason: expect.any(String),
		}
		expect(implications).not.toContainEqual(implication)
	})

	it('should have all properties in the same order', () => {
		for (const implication of implications) {
			const keys = Object.keys(implication)
			const expected_keys =
				'equivalent' in implication
					? ['equivalent', 'assumptions', 'conclusions', 'reason']
					: ['assumptions', 'conclusions', 'reason']
			expect(keys).toEqual(expected_keys)
		}
	})

	it('for equivalences, the assumptions should be shorter than the conclusions', () => {
		for (const implication of implications) {
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
		const ids = properties.map((property) => property.id)
		expect(ids).toEqual([...new Set(ids)])
	})

	it('should have IDs without prefixes and underscores', () => {
		const ids = properties.map((property) => property.id)
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

		for (const property of properties) {
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
		for (const key in property_duals) {
			const dual = (property_duals as any)[key]
			expect((property_duals as any)[dual]).toBe(key)
		}
	})
})
