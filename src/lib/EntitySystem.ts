import { DeductionSystem } from './DeductionSystem'

export type EntityWithAllProperties<
	S extends { properties: T[]; non_properties: T[] },
	T extends string,
> = S & {
	deduced_properties: T[]
	deduced_non_properties: T[]
	unknown_properties: T[]
	all_properties: T[]
	all_non_properties: T[]
}

export class EntitySystem<
	S extends { properties: T[]; non_properties: T[] },
	T extends string,
> {
	public readonly entities: EntityWithAllProperties<S, T>[] = []
	private deduction_system: DeductionSystem<T>

	constructor(deduction_system: DeductionSystem<T>) {
		this.deduction_system = deduction_system
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
			deduced_properties: Array.from(deduced_properties).toSorted(),
			deduced_non_properties: Array.from(deduced_non_properties).toSorted(),
			unknown_properties: Array.from(unknown_properties).toSorted(),
			all_properties: Array.from(all_properties).toSorted(),
			all_non_properties: Array.from(all_non_properties).toSorted(),
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
		)
			return []

		return this.entities.filter((entity) => {
			const has_all_properties = properties.every((property) =>
				entity.all_properties.includes(property),
			)
			const has_all_non_properties = non_properties.every((property) =>
				entity.all_non_properties.includes(property),
			)
			const has_all_unknown_properties = unknown_properties.every((property) =>
				entity.unknown_properties.includes(property),
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
						entity.all_properties.includes(combination.assumption) &&
						entity.all_non_properties.includes(combination.negation),
				),
		)
	}

	get entities_with_unknown_properties() {
		return this.entities.filter((entity) => entity.unknown_properties.length > 0)
	}
}
