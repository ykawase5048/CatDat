import type { DeductionSystem, DetailedProperty } from './DeductionSystem'

export class Entity<S extends string, T extends string> {
	public readonly id: S
	public properties: DetailedProperty<T>[]
	public non_properties: DetailedProperty<T>[]
	public deduced_properties: DetailedProperty<T>[] = []
	public deduced_non_properties: DetailedProperty<T>[] = []
	public unknown_properties: DetailedProperty<T>[] = []
	public all_properties: DetailedProperty<T>[] = []
	public all_non_properties: DetailedProperty<T>[] = []

	constructor(
		id: S,
		properties: DetailedProperty<T>[],
		non_properties: DetailedProperty<T>[],
	) {
		this.id = id
		this.properties = properties
		this.non_properties = non_properties
	}

	deduce_properties(deduction_system: DeductionSystem<T>) {
		this.all_properties = deduction_system.get_detailed_deductions(this.properties)

		this.all_non_properties = deduction_system.get_detailed_deduced_negations(
			this.all_properties,
			this.non_properties,
		)

		this.deduced_properties = this.all_properties.filter((property) =>
			this.properties.every((_property) => _property.id !== property.id),
		)

		this.deduced_non_properties = this.all_non_properties.filter((property) =>
			this.non_properties.every((_property) => _property.id !== property.id),
		)

		this.unknown_properties = Array.from(deduction_system.properties)
			.filter(
				(id) =>
					this.all_properties.every((property) => property.id !== id) &&
					this.all_non_properties.every((_property) => _property.id !== id),
			)
			.map((id) => ({
				id,
				prefix: deduction_system.get_prefix(id),
				reason: '',
			}))
	}

	public satisfies(
		properties: T[],
		non_properties: T[],
		unknown_properties: T[],
	): boolean {
		return (
			properties.every((id) =>
				this.all_properties.some((property) => property.id === id),
			) &&
			non_properties.every((id) =>
				this.all_non_properties.some((property) => property.id === id),
			) &&
			unknown_properties.every((id) =>
				this.unknown_properties.some((property) => property.id === id),
			)
		)
	}

	public get_comparison_value(property_id: T): boolean | null {
		if (this.unknown_properties.some((property) => property.id === property_id)) {
			return null
		}
		return this.all_properties.some((property) => property.id === property_id)
	}
}
