import { DeductionSystemWithDuals } from './DeductionSystemWithDuals'

describe('init', () => {
	it('only runs once', () => {
		const deductionSystem = new DeductionSystemWithDuals<string>(
			new Set(['a']),
			[],
			() => null,
		)
		// @ts-expect-error this accesses a private method
		const spy = vi.spyOn(deductionSystem, 'compute_normalized_rules')
		deductionSystem.init_with_duals()
		deductionSystem.init_with_duals()
		expect(spy).toHaveBeenCalledTimes(1)
	})
})

describe('all rules', () => {
	const dual_config: Record<string, string> = {
		'c': 'c^op',
		'd': 'd^op',
		'e': 'e^op',
		'x': 'x',
		'y': 'y',
		'self-dual': 'self-dual',
	}

	const deductionSystem = new DeductionSystemWithDuals<string>(
		// prettier-ignore
		new Set(['a','b','c','d','e','f','x','y','self-dual','c^op','d^op','e^op']),
		[
			{ assumptions: ['a'], conclusions: ['c'], reason: 'trivial' },
			{ assumptions: ['c', 'd'], conclusions: ['e'], reason: 'trivial' },
			{
				equivalent: true,
				assumptions: ['x'],
				conclusions: ['y'],
				reason: 'trivial',
			},
		],
		(property) => dual_config[property] ?? null,
	)

	deductionSystem.init_with_duals()

	it('should have all given and all dualized rules', () => {
		expect(deductionSystem.rules).toContainEqual({
			assumptions: ['a'],
			conclusions: ['c'],
			reason: 'trivial',
		})

		expect(deductionSystem.rules).toContainEqual({
			assumptions: ['c', 'd'],
			conclusions: ['e'],
			reason: 'trivial',
		})

		expect(deductionSystem.rules).toContainEqual({
			equivalent: true,
			assumptions: ['x'],
			conclusions: ['y'],
			reason: 'trivial',
		})

		expect(deductionSystem.rules).toContainEqual({
			assumptions: ['c^op', 'd^op'],
			conclusions: ['e^op'],
			reason: 'trivial',
		})
	})

	it('should not contain rules that cannot be dualized', () => {
		expect(deductionSystem.rules).not.toContainEqual({
			assumptions: ['a^op'],
			conclusions: ['c^op'],
			reason: 'trivial',
		})
	})

	it('should contain all self-dual rules', () => {
		expect(deductionSystem.rules).toContainEqual({
			assumptions: ['self-dual', 'c'],
			conclusions: ['c^op'],
			reason: 'trivial by self-duality',
		})

		expect(deductionSystem.rules).not.toContainEqual({
			assumptions: ['self-dual', 'x'],
			conclusions: ['x'],
			reason: 'trivial',
		})
	})
})
