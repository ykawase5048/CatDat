import type { DeductionSystemWithDuals } from './DeductionSystemWithDuals'
import { EntitySystem } from './EntitySystem'

export class EntitySystemWithDuals<S, T extends string> extends EntitySystem<S, T> {
	constructor(deduction_system: DeductionSystemWithDuals<T>) {
		super(deduction_system)
	}

	public get_missing_basic_combinations(): { assumption: T; negation: T }[] {
		const missing_combinations: { assumption: T; negation: T }[] = []
		const combinations = this.deduction_system.get_basic_consistent_combinations()

		for (const { assumption, negation } of combinations) {
			const entities = this.search([assumption], [negation])

			const dual_assumption = (
				this.deduction_system as DeductionSystemWithDuals<T>
			).get_dual_property(assumption)
			const dual_negation = (
				this.deduction_system as DeductionSystemWithDuals<T>
			).get_dual_property(negation)

			const dual_entities =
				dual_assumption && dual_negation
					? this.search([dual_assumption], [dual_negation])
					: []

			if (entities.length === 0 && dual_entities.length === 0) {
				missing_combinations.push({ assumption, negation })
			}
		}

		return missing_combinations
	}
}
