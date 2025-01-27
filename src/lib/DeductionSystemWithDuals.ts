import { DeductionSystem, type Rule } from './DeductionSystem'

export class DeductionSystemWithDuals<T extends string> extends DeductionSystem<T> {
	private get_dual_property: (property: T) => T | null

	constructor(
		properties: Set<T>,
		rules: Rule<T>[],
		dual_property_accessor: (p: T) => T | null,
	) {
		super(properties, rules)
		this.get_dual_property = dual_property_accessor
	}

	public init_with_duals() {
		if (this.initialized) return
		this.add_dualized_rules()
		this.add_self_dual_rules()
		this.compute_normalized_rules()
		this.initialized = true
	}

	public get all_rules() {
		return this.rules
	}

	private get_dual_properties(properties: T[]): null | T[] {
		const dual_properties = properties.map((property) =>
			this.get_dual_property(property),
		)
		if (dual_properties.includes(null)) return null
		return dual_properties as T[]
	}

	private add_dualized_rules(): void {
		const dual_rules: Rule<T>[] = []

		for (const rule of this.rules) {
			const dual_assumptions = this.get_dual_properties(rule.assumptions)
			const dual_conclusions = this.get_dual_properties(rule.conclusions)

			if (!dual_assumptions || !dual_conclusions) continue

			const not_new =
				JSON.stringify(dual_assumptions) === JSON.stringify(rule.assumptions) &&
				JSON.stringify(dual_conclusions) === JSON.stringify(rule.conclusions)
			if (not_new) continue

			const dualized_rule: Rule<T> = {
				assumptions: dual_assumptions,
				conclusions: dual_conclusions,
			}

			if (rule.equivalent) {
				dualized_rule.equivalent = true
			}

			dual_rules.push(dualized_rule)
		}

		this.rules.push(...dual_rules)
	}

	private add_self_dual_rules(): void {
		for (const property of this.properties) {
			const dual_property = this.get_dual_property(property)
			if (!dual_property) continue
			if (dual_property === property) continue

			const new_rule: Rule<T> = {
				assumptions: ['self-dual' as T, property],
				conclusions: [dual_property],
			}
			this.rules.push(new_rule)
		}
	}
}
