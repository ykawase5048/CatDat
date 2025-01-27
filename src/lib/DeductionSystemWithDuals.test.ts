import { DeductionSystemWithDuals } from './DeductionSystemWithDuals'

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
			{ assumptions: ['a'], conclusions: ['c'] },
			{ assumptions: ['c', 'd'], conclusions: ['e'] },
			{ equivalent: true, assumptions: ['x'], conclusions: ['y'] },
		],
		(property) => dual_config[property] ?? null,
	)

	deductionSystem.init_with_duals()

	it('should have all given and all dualized rules', () => {
		expect(deductionSystem.all_rules).toContainEqual({
			assumptions: ['a'],
			conclusions: ['c'],
		})

		expect(deductionSystem.all_rules).toContainEqual({
			assumptions: ['c', 'd'],
			conclusions: ['e'],
		})

		expect(deductionSystem.all_rules).toContainEqual({
			equivalent: true,
			assumptions: ['x'],
			conclusions: ['y'],
		})

		expect(deductionSystem.all_rules).toContainEqual({
			assumptions: ['c^op', 'd^op'],
			conclusions: ['e^op'],
		})
	})

	it('should not contain rules that cannot be dualized', () => {
		expect(deductionSystem.all_rules).not.toContainEqual({
			assumptions: ['a^op'],
			conclusions: ['c^op'],
		})
	})

	it('should contain all self-dual rules', () => {
		expect(deductionSystem.all_rules).toContainEqual({
			assumptions: ['self-dual', 'c'],
			conclusions: ['c^op'],
		})

		expect(deductionSystem.all_rules).not.toContainEqual({
			assumptions: ['self-dual', 'x'],
			conclusions: ['x'],
		})
	})
})
