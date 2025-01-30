import { DeductionSystem } from './DeductionSystem'

export type EntityWithAllProperties<
	S extends { properties: Set<T>; non_properties: Set<T> },
	T extends string,
> = S & {
	deduced_properties: Set<T>
	deduced_non_properties: Set<T>
	unknown_properties: Set<T>
	all_properties: Set<T>
	all_non_properties: Set<T>
}

export class EntitySystem<
	S extends { properties: Set<T>; non_properties: Set<T> },
	T extends string,
> {
	public readonly entities: EntityWithAllProperties<S, T>[] = []
	private deduction_system: DeductionSystem<T>

	constructor(deduction_system: DeductionSystem<T>, entities: S[] = []) {
		this.deduction_system = deduction_system

		for (const entity of entities) {
			this.add(entity)
		}
	}

	public add(data: S): EntityWithAllProperties<S, T> {
		const properties = new Set(data.properties)
		const non_properties = new Set(data.non_properties)

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

		const entity = {
			...data,
			deduced_properties,
			deduced_non_properties,
			unknown_properties,
			all_properties,
			all_non_properties,
		}

		this.entities.push(entity)

		return entity
	}

	public search(
		properties: T[],
		non_properties: T[],
		unknown_properties: T[] = [],
	): EntityWithAllProperties<S, T>[] {
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

	get missing_basic_combinations(): { assumption: T; negation: T }[] {
		return this.deduction_system.basic_consistent_combinations.filter(
			(combination) =>
				!this.entities.some(
					(entity) =>
						entity.all_properties.has(combination.assumption) &&
						entity.all_non_properties.has(combination.negation),
				),
		)
	}

	get entities_with_unknown_properties() {
		return this.entities.filter((entity) => entity.unknown_properties.size > 0)
	}

	private get_comparison_value(
		entity: EntityWithAllProperties<S, T>,
		property: T,
	): boolean | null {
		if (entity.unknown_properties.has(property)) return null
		return entity.all_properties.has(property)
	}

	get_comparison(
		entities: EntityWithAllProperties<S, T>[],
	): null | [T, ...(boolean | null)[]][] {
		const is_valid = entities.every((entity) => this.entities.includes(entity))
		if (!is_valid) return null

		return this.deduction_system.sorted_properties.map((property) => [
			property,
			...entities.map((entity) => this.get_comparison_value(entity, property)),
		])
	}
}
