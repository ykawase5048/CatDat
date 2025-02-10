import type { DeductionSystem, DetailedProperty } from './DeductionSystem'

export class Entity<S extends string, T extends string> {
	public readonly id: S
	public properties: DetailedProperty<T>[]
	public non_properties: DetailedProperty<T>[]
	public deduced_properties: DetailedProperty<T>[] = []
	public deduced_non_properties: DetailedProperty<T>[] = []
	public unknown_properties: DetailedProperty<T>[] = []

	constructor(
		id: S,
		properties: DetailedProperty<T>[],
		non_properties: DetailedProperty<T>[],
	) {
		this.id = id
		this.properties = properties
		this.non_properties = non_properties
	}

	public get all_properties() {
		return [...this.properties, ...this.deduced_properties]
	}

	public get all_non_properties() {
		return [...this.non_properties, ...this.deduced_non_properties]
	}

	public deduce_properties(deduction_system: DeductionSystem<T>) {
		const all_properties = deduction_system.get_detailed_deductions(this.properties)

		const all_non_properties = deduction_system.get_detailed_deduced_negations(
			all_properties,
			this.non_properties,
		)

		this.deduced_properties = all_properties.filter((property) =>
			this.properties.every((p) => p.id !== property.id),
		)

		this.deduced_non_properties = all_non_properties.filter((property) =>
			this.non_properties.every((p) => p.id !== property.id),
		)

		this.unknown_properties = Array.from(deduction_system.property_ids)
			.filter(
				(id) =>
					all_properties.every((property) => property.id !== id) &&
					all_non_properties.every((property) => property.id !== id),
			)
			.map((id) => ({
				id,
				prefix: deduction_system.get_prefix(id),
				reason: '',
			}))
	}

	public satisfies(
		property_ids: T[],
		non_property_ids: T[],
		unknown_property_ids: T[],
	): boolean {
		return (
			property_ids.every((id) =>
				this.all_properties.some((property) => property.id === id),
			) &&
			non_property_ids.every((id) =>
				this.all_non_properties.some((property) => property.id === id),
			) &&
			unknown_property_ids.every((id) =>
				this.unknown_properties.some((property) => property.id === id),
			)
		)
	}

	public get_comparison_value(id: T): boolean | null {
		if (this.unknown_properties.some((property) => property.id === id)) {
			return null
		}
		return this.all_properties.some((property) => property.id === id)
	}
}
