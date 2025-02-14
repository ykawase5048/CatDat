import type { DeductionSystem } from './DeductionSystem'
import type { PropertyWithReason, ReasonHandler } from './ReasonHandler'

export class Entity<P extends string, S extends string, T extends string> {
	public deduced_properties: PropertyWithReason<P, T>[] = []
	public deduced_non_properties: PropertyWithReason<P, T>[] = []
	public unknown_properties: PropertyWithReason<P, T>[] = []

	constructor(
		public readonly id: S,
		public readonly properties: PropertyWithReason<P, T>[],
		public readonly non_properties: PropertyWithReason<P, T>[],
	) {}

	public get all_properties() {
		return [...this.properties, ...this.deduced_properties]
	}

	public get all_non_properties() {
		return [...this.non_properties, ...this.deduced_non_properties]
	}

	public deduce_properties(
		deduction_system: DeductionSystem<P, T>,
		reason_handler: ReasonHandler<P, T>,
	) {
		this.deduced_properties = deduction_system.get_deductions_with_reasons(
			new Set(this.properties.map((p) => p.id)),
			reason_handler,
		)

		const all_properties = [...this.properties, ...this.deduced_properties]

		this.deduced_non_properties = deduction_system.get_deduced_negations_with_reasons(
			new Set(all_properties.map((p) => p.id)),
			new Set(this.non_properties.map((p) => p.id)),
			reason_handler,
		)

		const all_non_properties = [
			...this.non_properties,
			...this.deduced_non_properties,
		]

		this.unknown_properties = Array.from(deduction_system.all_property_ids)
			.filter(
				(id) =>
					all_properties.every((property) => property.id !== id) &&
					all_non_properties.every((property) => property.id !== id),
			)
			.map((id) => ({
				id,
				prefix: reason_handler.get_prefix(id),
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
