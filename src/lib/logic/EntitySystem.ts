import type { DeductionSystem } from './DeductionSystem'
import type { PropertyWithReason, ReasonHandler } from './ReasonHandler'
import { Entity } from './Entity'

export class EntitySystem<P extends string, S extends string, T extends string> {
	public readonly entities: Entity<P, S, T>[] = []

	constructor(protected readonly deduction_system: DeductionSystem<P, T>) {}

	public add(
		id: S,
		properties: PropertyWithReason<P, T>[],
		non_properties: PropertyWithReason<P, T>[],
		reason_handler: ReasonHandler<P, T>,
	): Entity<P, S, T> {
		const new_entity = new Entity<P, S, T>(id, properties, non_properties)
		new_entity.deduce_properties(this.deduction_system, reason_handler)
		this.entities.push(new_entity)
		return new_entity
	}

	public search(
		properties: T[],
		non_properties: T[],
		unknown_properties: T[],
	): Entity<P, S, T>[] {
		const is_empty_search =
			properties.length === 0 &&
			non_properties.length === 0 &&
			unknown_properties.length === 0

		if (is_empty_search) return []

		return this.entities.filter((entity) =>
			entity.satisfies(properties, non_properties, unknown_properties),
		)
	}

	public get_missing_basic_combinations(): {
		assumption: T
		negation: T
	}[] {
		const missing_combinations: { assumption: T; negation: T }[] = []
		const basic_combinations =
			this.deduction_system.get_basic_consistent_combinations()

		for (const { assumption, negation } of basic_combinations) {
			const entities = this.search([assumption], [negation], [])

			const dual_assumption = this.deduction_system.get_dual_property?.(assumption)
			const dual_negation = this.deduction_system.get_dual_property?.(negation)

			const dual_entities =
				dual_assumption && dual_negation
					? this.search([dual_assumption], [dual_negation], [])
					: []

			if (entities.length === 0 && dual_entities.length === 0) {
				missing_combinations.push({ assumption, negation })
			}
		}

		return missing_combinations
	}

	public get_entities_with_unknown_properties(): Entity<P, S, T>[] {
		return this.entities.filter((entity) => entity.unknown_properties.length > 0)
	}

	public get_comparison_table(
		entities: Entity<P, S, T>[],
	): null | [T, ...(boolean | null)[]][] {
		const is_valid = entities.every((entity) => this.entities.includes(entity))
		if (!is_valid) return null

		return this.deduction_system
			.get_sorted_property_ids()
			.map((property) => [
				property,
				...entities.map((entity) => entity.get_comparison_value(property)),
			])
	}
}
