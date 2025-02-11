import type { DeductionSystem, DetailedProperty } from './DeductionSystem'
import { Entity } from './Entity'

export class EntitySystem<PrefixType extends string, S extends string, T extends string> {
	public readonly entities: Entity<PrefixType, S, T>[] = []
	protected deduction_system: DeductionSystem<PrefixType, T>

	constructor(deduction_system: DeductionSystem<PrefixType, T>) {
		this.deduction_system = deduction_system
	}

	public add(
		id: S,
		properties: DetailedProperty<PrefixType, T>[],
		non_properties: DetailedProperty<PrefixType, T>[],
	): Entity<PrefixType, S, T> {
		const new_entity = new Entity(id, properties, non_properties)
		new_entity.deduce_properties(this.deduction_system)
		this.entities.push(new_entity)
		return new_entity
	}

	public search(
		properties: T[],
		non_properties: T[],
		unknown_properties: T[],
	): Entity<PrefixType, S, T>[] {
		const is_empty_search =
			properties.length === 0 &&
			non_properties.length === 0 &&
			unknown_properties.length === 0

		if (is_empty_search) return []

		return this.entities.filter((entity) =>
			entity.satisfies(properties, non_properties, unknown_properties),
		)
	}

	public get_missing_basic_combinations(): { assumption: T; negation: T }[] {
		const basic_combinations =
			this.deduction_system.get_basic_consistent_combinations()

		return basic_combinations.filter(
			({ assumption, negation }) =>
				this.search([assumption], [negation], []).length === 0,
		)
	}

	public get_entities_with_unknown_properties(): Entity<PrefixType, S, T>[] {
		return this.entities.filter((entity) => entity.unknown_properties.length > 0)
	}

	public get_comparison_table(
		entities: Entity<PrefixType, S, T>[],
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
