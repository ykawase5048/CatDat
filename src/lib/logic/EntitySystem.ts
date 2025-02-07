import type { DeductionSystem } from './DeductionSystem'

export type EntityDetailed<S, T extends string> = S & {
	properties: Set<T>
	non_properties: Set<T>
	deduced_properties: Set<T>
	deduced_non_properties: Set<T>
	unknown_properties: Set<T>
	all_properties: Set<T>
	all_non_properties: Set<T>
}

export class EntitySystem<S, T extends string> {
	public readonly entities: EntityDetailed<S, T>[] = []
	protected deduction_system: DeductionSystem<T>

	constructor(deduction_system: DeductionSystem<T>) {
		this.deduction_system = deduction_system
	}

	public add(
		entity: S,
		properties: Set<T>,
		non_properties: Set<T>,
	): EntityDetailed<S, T> {
		const all_properties = this.deduction_system.get_deductions(properties)
		const all_non_properties = this.deduction_system.get_deduced_negations(
			all_properties,
			non_properties,
		)
		const deduced_properties = all_properties.difference(properties)
		const deduced_non_properties = all_non_properties.difference(non_properties)
		const unknown_properties = this.deduction_system.properties
			.difference(all_properties)
			.difference(all_non_properties)

		const entity_detailed = {
			...entity,
			properties,
			non_properties,
			deduced_properties,
			deduced_non_properties,
			unknown_properties,
			all_properties,
			all_non_properties,
		}

		this.entities.push(entity_detailed)

		return entity_detailed
	}

	public search(
		properties: T[],
		non_properties: T[],
		unknown_properties: T[] = [],
	): EntityDetailed<S, T>[] {
		if (
			properties.length === 0 &&
			non_properties.length === 0 &&
			unknown_properties.length === 0
		) {
			return []
		}

		return this.entities.filter((entity) => {
			const has_all_properties = new Set(properties).isSubsetOf(
				entity.all_properties,
			)

			const has_all_non_properties = new Set(non_properties).isSubsetOf(
				entity.all_non_properties,
			)

			const has_all_unknown_properties = new Set(unknown_properties).isSubsetOf(
				entity.unknown_properties,
			)

			return (
				has_all_properties && has_all_non_properties && has_all_unknown_properties
			)
		})
	}

	public get missing_basic_combinations(): { assumption: T; negation: T }[] {
		const missing_combinations: { assumption: T; negation: T }[] = []
		const combinations = this.deduction_system.basic_consistent_combinations

		for (const { assumption, negation } of combinations) {
			const entities = this.search([assumption], [negation])

			if (entities.length === 0) {
				missing_combinations.push({ assumption, negation })
			}
		}

		return missing_combinations
	}

	public get entities_with_unknown_properties(): EntityDetailed<S, T>[] {
		return this.entities.filter((entity) => entity.unknown_properties.size > 0)
	}

	private get_comparison_value(
		entity: EntityDetailed<S, T>,
		property: T,
	): boolean | null {
		if (entity.unknown_properties.has(property)) return null
		return entity.all_properties.has(property)
	}

	public get_comparison_table(
		entities: EntityDetailed<S, T>[],
	): null | [T, ...(boolean | null)[]][] {
		const is_valid = entities.every((entity) => this.entities.includes(entity))
		if (!is_valid) return null

		return this.deduction_system.sorted_properties.map((property) => [
			property,
			...entities.map((entity) => this.get_comparison_value(entity, property)),
		])
	}
}
