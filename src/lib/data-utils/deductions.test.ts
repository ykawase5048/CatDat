import { CATEGORIES, type CategoryID } from '$lib/database/categories.data'
import { type PropertyID } from '$lib/database/properties.data'
import { get_non_properties, get_properties, propertyIDs } from './data.helpers'
import {
	categories_with_deduced_properties,
	categories_with_deduced_properties_dictionary,
	implications_with_duals,
	property_deduction_system,
	reason_handler,
} from './deductions'

describe('property_deduction_system', () => {
	// keep these properties because their reasons are illustrative
	const redundancy_exceptions: [CategoryID, PropertyID][] = [
		['FreeAb', 'equalizers'],
		['Zdiv', 'products'],
		['Noo', 'coproducts'],
	]

	for (const category of CATEGORIES) {
		const properties = get_properties(category.id)
		const non_properties = get_non_properties(category.id)

		it(`should have no redundancy for the properties of: ${category.name}`, () => {
			const redundancy = property_deduction_system.get_redundancy(
				new Set<PropertyID>(properties.map((p) => p.id)),
			)
			const is_exception = redundancy_exceptions.some(
				(entry) => entry[0] === category.id && entry[1] === redundancy,
			)
			if (!is_exception) {
				expect(redundancy).toBe(null)
			}
		})

		it(`should have no redundancy for the non-properties of: ${category.name}`, () => {
			const redundancy = property_deduction_system.get_redundancy_of_negations(
				new Set<PropertyID>(properties.map((p) => p.id)),
				new Set<PropertyID>(non_properties.map((p) => p.id)),
				reason_handler,
			)
			expect(redundancy).toBe(null)
		})
	}
})

describe('implications_with_duals', () => {
	it('should contain the existing implications', () => {
		const implication = {
			id: expect.any(String),
			assumptions: ['small'],
			conclusions: ['locally small', 'essentially small'],
			reason: expect.any(String),
		}
		expect(implications_with_duals).toContainEqual(implication)
	})

	it('should contain dual implications', () => {
		const implication = {
			id: expect.any(String),
			equivalent: true,
			assumptions: ['complete'],
			conclusions: ['products', 'equalizers'],
			reason: expect.any(String),
		}
		expect(implications_with_duals).toContainEqual(implication)

		const dual_implication = {
			id: expect.any(String),
			equivalent: true,
			assumptions: ['cocomplete'],
			conclusions: ['coproducts', 'coequalizers'],
			reason: expect.any(String),
		}
		expect(implications_with_duals).toContainEqual(dual_implication)
	})

	it('should contain basic self-dual implications (1)', () => {
		const implication = {
			id: expect.any(String),
			assumptions: ['self-dual', 'binary products'],
			conclusions: ['binary coproducts'],
			reason: 'trivial by self-duality',
		}
		expect(implications_with_duals).toContainEqual(implication)
	})

	it('should contain basic self-dual implications (2)', () => {
		const implication = {
			id: expect.any(String),
			assumptions: ['self-dual', 'equalizers'],
			conclusions: ['coequalizers'],
			reason: 'trivial by self-duality',
		}
		expect(implications_with_duals).toContainEqual(implication)
	})

	it('should not contain trivial self-dual implications', () => {
		const implication = {
			id: expect.any(String),
			assumptions: ['self-dual', 'thin'],
			conclusions: ['thin'],
			reason: expect.any(String),
		}
		expect(implications_with_duals).not.toContainEqual(implication)
	})
})

describe('categories with deduced properties', () => {
	for (const category of categories_with_deduced_properties) {
		it(`should not have any contradictory properties for: ${category.id}`, () => {
			const property_ids = new Set(category.all_properties.map((prop) => prop.id))
			const non_property_ids = new Set(
				category.all_non_properties.map((prop) => prop.id),
			)
			expect(property_ids.intersection(non_property_ids)).toHaveLength(0)
		})
	}

	for (const id of propertyIDs) {
		it(`should have at least one counterexample for: ${id}`, () => {
			const counterexample = categories_with_deduced_properties.find((category) =>
				category.all_non_properties.some((property) => property.id === id),
			)
			expect(counterexample).toBeDefined()
		})
	}
})

/**
 * This test is useful during refactorings to make sure that the
 * deduced properties and negations are still correct.
 * It has to be adjusted whenever new properties are added to the database.
 */
describe('deduced categorical properties and negations', () => {
	it('are correct for the category of abelian groups', () => {
		const Ab = categories_with_deduced_properties_dictionary.Ab

		const deduced_ids = new Set(Ab.deduced_properties.map((p) => p.id))
		const negated_ids = new Set(Ab.deduced_non_properties.map((p) => p.id))

		const expected_deduced_ids = new Set<PropertyID>([
			'locally essentially small',
			'locally finitely presentable',
			'additive',
			'equalizers',
			'coequalizers',
			'mono-regular',
			'epi-regular',
			'Malcev',
			'balanced',
			'finitely complete',
			'Cauchy complete',
			'preadditive',
			'finite coproducts',
			'finite products',
			'terminal object',
			'binary products',
			'pullbacks',
			'connected',
			'locally presentable',
			'exact filtered colimits',
			'locally ℵ₁-presentable',
			'zero morphisms',
			'disjoint finite coproducts',
			'inhabited',
			'finitely cocomplete',
			'initial object',
			'binary coproducts',
			'pushouts',
			'pointed',
			'filtered colimits',
			'well-powered',
			'well-copowered',
			'complete',
			'cocomplete',
			'generator',
			'wide pushouts',
			'connected colimits',
			'coproducts',
			'countable coproducts',
			'sequential colimits',
			'filtered limits',
			'wide pullbacks',
			'connected limits',
			'products',
			'countable products',
			'disjoint coproducts',
			'sequential limits',
			'Grothendieck abelian',
			'cogenerator',
		])

		const expected_negated_ids = new Set<PropertyID>([
			'small',
			'cartesian closed',
			'elementary topos',
			'Grothendieck topos',
			'strict initial object',
			'strict terminal object',
			'self-dual',
			'groupoid',
			'essentially small',
			'thin',
			'discrete',
			'essentially discrete',
			'finite',
			'essentially finite',
			'trivial',
			'subobject classifier',
			'infinitary distributive',
			'distributive',
			'left cancellative',
			'right cancellative',
		])

		expect(deduced_ids).toEqual(expected_deduced_ids)
		expect(negated_ids).toEqual(expected_negated_ids)
	})

	it('are correct for the category of topological spaces', () => {
		const Top = categories_with_deduced_properties_dictionary.Top

		const deduced_ids = new Set(Top.deduced_properties.map((p) => p.id))
		const negated_ids = new Set(Top.deduced_non_properties.map((p) => p.id))

		const expected_deduced_ids = new Set<PropertyID>([
			'locally essentially small',
			'finitely complete',
			'filtered limits',
			'wide pullbacks',
			'connected limits',
			'products',
			'equalizers',
			'finite products',
			'countable products',
			'terminal object',
			'binary products',
			'pullbacks',
			'connected',
			'coproducts',
			'disjoint finite coproducts',
			'finite coproducts',
			'Cauchy complete',
			'sequential limits',
			'distributive',
			'strict initial object',
			'inhabited',
			'finitely cocomplete',
			'filtered colimits',
			'wide pushouts',
			'connected colimits',
			'coequalizers',
			'countable coproducts',
			'initial object',
			'binary coproducts',
			'pushouts',
			'sequential colimits',
		])

		const expected_negated_ids = new Set<PropertyID>([
			'discrete',
			'locally finitely presentable',
			'locally ℵ₁-presentable',
			'finitary algebraic',
			'elementary topos',
			'Grothendieck topos',
			'Grothendieck abelian',
			'abelian',
			'mono-regular',
			'thin',
			'essentially small',
			'essentially finite',
			'right cancellative',
			'left cancellative',
			'groupoid',
			'epi-regular',
			'self-dual',
			'small',
			'finite',
			'essentially discrete',
			'trivial',
			'pointed',
			'subobject classifier',
			'split abelian',
			'zero morphisms',
			'preadditive',
			'additive',
		])

		expect(deduced_ids).toEqual(expected_deduced_ids)
		expect(negated_ids).toEqual(expected_negated_ids)
	})
})
