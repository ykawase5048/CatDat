import { DeductionSystemWithDuals } from './DeductionSystemWithDuals'
import { EntitySystemWithDuals } from './EntitySystemWithDuals'

describe('Entity system with duals', () => {
	const dual_map: Record<string, string | null> = {
		'a': 'a*',
		'b': 'b*',
		'a*': 'a',
		'b*': 'b',
		'c': null,
	}

	const deduction_system = new DeductionSystemWithDuals<string, string>(
		new Set(['a', 'b', 'a*', 'b*', 'c']),
		[{ assumptions: ['a'], conclusions: ['c'], reason: 'trivial' }],
		(p: string) => dual_map[p],
	)

	const entity_system = new EntitySystemWithDuals<string, string, string>(
		deduction_system,
	)

	entity_system.add(
		'1',
		[{ id: 'a', prefix: 'is', reason: 'clear' }],
		[{ id: 'b', prefix: 'is', reason: 'clear' }],
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
