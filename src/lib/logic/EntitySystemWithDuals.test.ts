import { DeductionSystemWithDuals } from './DeductionSystemWithDuals'
import { EntitySystemWithDuals } from './EntitySystemWithDuals'

describe('Entity system with duals', () => {
	type S = {
		id: string
	}

	type T = string

	const dual_map: Record<T, T | null> = {
		'a': 'a*',
		'b': 'b*',
		'a*': 'a',
		'b*': 'b',
		'c': null,
	}

	const deduction_system = new DeductionSystemWithDuals<T>(
		new Set(['a', 'b', 'a*', 'b*', 'c']),
		[{ assumptions: ['a'], conclusions: ['c'], reason: 'trivial' }],
		(p: string) => dual_map[p],
	)

	const entity_system = new EntitySystemWithDuals<S, T>(deduction_system)

	entity_system.add(
		{
			id: '1',
		},
		new Set(['a']),
		new Set(['b']),
	)

	describe('missing combinations', () => {
		const missing_basic_combinations = entity_system.get_missing_basic_combinations()
		it('should list a, not b*', () => {
			expect(missing_basic_combinations).toContainEqual({
				assumption: 'a',
				negation: 'b*',
			})
		})

		it('should not list a, not b', () => {
			expect(missing_basic_combinations).not.toContainEqual({
				assumption: 'a',
				negation: 'b',
			})
		})

		it('should not list a*, not b* (since this is covered by duality)', () => {
			expect(missing_basic_combinations).not.toContainEqual({
				assumption: 'a*',
				negation: 'b*',
			})
		})
	})
})
