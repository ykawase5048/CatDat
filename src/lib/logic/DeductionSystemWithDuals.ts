import { equal_up_to_order, type NonEmptyArray } from '$lib/commons/utils'
import { DeductionSystem, type Rule } from './DeductionSystem'

export class DeductionSystemWithDuals<
	PrefixType extends string,
	T extends string,
> extends DeductionSystem<PrefixType, T> {
	public readonly get_dual_property: (id: T) => T | null

	constructor(
		property_ids: Set<T>,
		rules: Rule<T>[],
		dual_property_accessor: (id: T) => T | null,
		get_prefix: (id: T) => PrefixType,
		negate_prefix: (prefix: PrefixType) => string,
		initialize = true,
	) {
		super(property_ids, rules, get_prefix, negate_prefix, false)
		this.get_dual_property = dual_property_accessor
		if (initialize) this.init_with_duals()
	}

	public init_with_duals(): void {
		this.add_dualized_rules()
		this.add_self_dual_rules()
		this.compute_normalized_rules()
	}

	private get_dual_properties(ids: NonEmptyArray<T>): NonEmptyArray<T> | null {
		const dual_properties = ids.map((property) => this.get_dual_property(property))
		if (dual_properties.includes(null)) return null
		return dual_properties as NonEmptyArray<T>
	}

	private add_dualized_rules(): void {
		const dual_rules: Rule<T>[] = []

		for (const rule of this.rules) {
			const dual_assumptions = this.get_dual_properties(rule.assumptions)
			const dual_conclusions = this.get_dual_properties(rule.conclusions)

			if (!dual_assumptions || !dual_conclusions) continue

			const is_same =
				equal_up_to_order(dual_assumptions, rule.assumptions) &&
				equal_up_to_order(dual_conclusions, rule.conclusions)

			if (is_same) continue

			const dualized_rule: Rule<T> = rule.equivalent
				? {
						id: `${rule.id}_dual`,
						equivalent: true,
						assumptions: dual_assumptions,
						conclusions: dual_conclusions,
						reason: `[dualized] ${rule.reason}`,
					}
				: {
						id: `${rule.id}_dual`,
						assumptions: dual_assumptions,
						conclusions: dual_conclusions,
						reason: `[dualized] ${rule.reason}`,
					}

			dual_rules.push(dualized_rule)
		}

		this.rules.push(...dual_rules)
	}

	private add_self_dual_rules(): void {
		for (const id of this.property_ids) {
			const dual_id = this.get_dual_property(id)

			if (!dual_id || dual_id === id) continue

			this.rules.push({
				id: `${id}_selfdual`,
				assumptions: ['self-dual' as T, id],
				conclusions: [dual_id],
				reason: 'trivial by self-duality',
			})
		}
	}
}
