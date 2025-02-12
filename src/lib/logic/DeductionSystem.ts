import type { NonEmptyArray } from '$lib/commons/utils'

export type DetailedProperty<PrefixType extends string, T extends string> = {
	id: T
	prefix: PrefixType
	reason: string
}

export type Rule<T> = {
	readonly id: string
	readonly equivalent?: true
	readonly assumptions: NonEmptyArray<T>
	readonly conclusions: NonEmptyArray<T>
	readonly reason: string
}

type NormalizedRule<T> = {
	readonly id: string
	readonly assumptions: Set<T>
	readonly conclusion: T
}

export class DeductionSystem<PrefixType extends string, T extends string> {
	public readonly rules: Rule<T>[]
	public readonly normalized_rules: NormalizedRule<T>[] = []
	public readonly property_ids: Set<T>
	public readonly get_prefix: (id: T) => PrefixType
	public readonly negate_prefix: (prefix: PrefixType) => string

	constructor(
		property_ids: Set<T>,
		rules: Rule<T>[],
		get_prefix: (id: T) => PrefixType,
		negate_prefix: (prefix: PrefixType) => string,
		initialize = true,
	) {
		this.property_ids = property_ids
		this.rules = rules
		this.validate_rules()
		this.get_prefix = get_prefix
		this.negate_prefix = negate_prefix
		if (initialize) this.init()
	}

	private validate_rules(): void {
		for (const rule of this.rules) {
			const is_valid =
				new Set(rule.assumptions).isSubsetOf(this.property_ids) &&
				new Set(rule.conclusions).isSubsetOf(this.property_ids)
			if (!is_valid) throw new Error(`Invalid rule: ${JSON.stringify(rule)}`)
		}
	}

	public init(): void {
		this.compute_normalized_rules()
	}

	protected compute_normalized_rules(): void {
		for (const rule of this.rules) {
			const { conclusions, assumptions, equivalent } = rule

			for (let i = 0; i < conclusions.length; i++) {
				const conclusion = conclusions[i]
				this.normalized_rules.push({
					id: `${rule.id}_${i}`,
					assumptions: new Set(assumptions),
					conclusion,
				})
			}

			if (equivalent) {
				for (let j = 0; j < assumptions.length; j++) {
					const assumption = assumptions[j]
					this.normalized_rules.push({
						id: `${rule.id}_inv_${j}`,
						assumptions: new Set(conclusions),
						conclusion: assumption,
					})
				}
			}
		}
	}

	private reason_rule(rule: NormalizedRule<T>) {
		const assumption_string = Array.from(rule.assumptions)
			.map((id) => `${this.get_prefix(id)} ${id}`)
			.join(' and ')

		const conclusion_string = `${this.get_prefix(rule.conclusion)} ${rule.conclusion}`

		return `Since it ${assumption_string}, we deduce that it ${conclusion_string}.`
	}

	// caution: the following function is not pure.
	// for performance reasons, we change the ids in place
	private get_new_deductions(ids: Set<T>) {
		const new_deductions: DetailedProperty<PrefixType, T>[] = []

		for (const rule of this.normalized_rules) {
			const not_new = ids.has(rule.conclusion)
			if (not_new) continue

			const rule_applies = rule.assumptions.isSubsetOf(ids)
			if (!rule_applies) continue

			const new_deduction = {
				id: rule.conclusion,
				prefix: this.get_prefix(rule.conclusion),
				reason: this.reason_rule(rule),
			}

			new_deductions.push(new_deduction)
			ids.add(rule.conclusion)
		}

		return new_deductions
	}

	public get_detailed_deductions(
		assumptions: DetailedProperty<PrefixType, T>[],
	): DetailedProperty<PrefixType, T>[] {
		const deductions = [...assumptions]
		const deduced_ids = new Set(deductions.map((entry) => entry.id))

		while (true) {
			const new_deductions = this.get_new_deductions(deduced_ids)
			if (new_deductions.length === 0) break
			deductions.push(...new_deductions)
		}

		return deductions
	}

	public get_detailed_deduced_negations(
		assumptions: DetailedProperty<PrefixType, T>[],
		negations: DetailedProperty<PrefixType, T>[],
	) {
		let done = false

		const deduced_negations = Array.from(negations)
		const deduced_negation_ids = new Set(negations.map((entry) => entry.id))

		while (!done) {
			done = true
			for (const id of this.property_ids) {
				const not_new = deduced_negation_ids.has(id)
				if (not_new) continue

				const prefix = this.get_prefix(id)

				const new_assumptions = [
					...assumptions,
					{
						id,
						prefix,
						reason: '-',
					},
				]

				const new_deductions = this.get_detailed_deductions(new_assumptions)

				let reason = `Assume for a contradiction that it ${prefix} ${id}. `

				let has_contradiction = false

				for (const deduction of new_deductions) {
					const is_irrelevant = new_assumptions.some(
						(assumption) => assumption.id === deduction.id,
					)
					if (is_irrelevant) continue

					reason += `${deduction.reason} `

					if (deduced_negation_ids.has(deduction.id)) {
						has_contradiction = true
						done = false
						const negated_prefix = this.negate_prefix(deduction.prefix)
						reason += `This is a contradiction since we already know that it ${negated_prefix} ${deduction.id}.`
						break
					}
				}

				if (has_contradiction) {
					deduced_negation_ids.add(id)
					deduced_negations.push({
						id,
						prefix: this.get_prefix(id),
						reason,
					})
				}
			}
		}

		return deduced_negations
	}

	public get_redundancy(assumptions: DetailedProperty<PrefixType, T>[]): T | null {
		const deductions = this.get_detailed_deductions(assumptions)

		for (const assumption of assumptions) {
			const reduced_assumptions = assumptions.filter(
				(_assumption) => _assumption.id !== assumption.id,
			)
			const reduced_deductions = this.get_detailed_deductions(reduced_assumptions)

			if (reduced_deductions.length === deductions.length) {
				return assumption.id
			}
		}

		return null
	}

	public get_redundancy_of_negations(
		assumptions: DetailedProperty<PrefixType, T>[],
		negations: DetailedProperty<PrefixType, T>[],
	): T | null {
		const deduced_assumptions = this.get_detailed_deductions(assumptions)
		const deduced_negations = this.get_detailed_deduced_negations(
			deduced_assumptions,
			negations,
		)

		for (const negation of negations) {
			const reduced_negations = negations.filter(
				(_negation) => _negation.id !== negation.id,
			)

			const reduced_deduced_negations = this.get_detailed_deduced_negations(
				deduced_assumptions,
				reduced_negations,
			)
			if (reduced_deduced_negations.length === deduced_negations.length) {
				return negation.id
			}
		}
		return null
	}

	public has_contradiction(assumptions: T[], negations: T[]): boolean {
		const assumptions_detailed: DetailedProperty<PrefixType, T>[] = assumptions.map(
			(id) => ({
				id,
				prefix: 'is' as PrefixType,
				reason: 'by assumption',
			}),
		)

		const negations_detailed: DetailedProperty<PrefixType, T>[] = negations.map(
			(id) => ({
				id,
				prefix: 'is' as PrefixType,
				reason: 'by assumption',
			}),
		)

		const deductions = this.get_detailed_deductions(assumptions_detailed)
		const deduced_negations = this.get_detailed_deduced_negations(
			assumptions_detailed,
			negations_detailed,
		)

		const deduction_ids = new Set(deductions.map((entry) => entry.id))
		const deduced_negation_ids = new Set(deduced_negations.map((entry) => entry.id))

		return deduction_ids.intersection(deduced_negation_ids).size > 0
	}

	public get_basic_consistent_combinations(): { assumption: T; negation: T }[] {
		const combinations: { assumption: T; negation: T }[] = []
		for (const assumption of this.property_ids) {
			const deductions = this.get_detailed_deductions([
				{ id: assumption, prefix: 'is' as PrefixType, reason: '-' },
			])
			for (const negation of this.property_ids) {
				if (deductions.every((deduction) => deduction.id !== negation)) {
					combinations.push({ assumption, negation })
				}
			}
		}
		return combinations
	}

	public get_sorted_property_ids(): T[] {
		return Array.from(this.property_ids).toSorted((a, b) =>
			a.toLowerCase().localeCompare(b.toLowerCase()),
		)
	}

	public get_relevant_rules(id: T): Rule<T>[] {
		return this.rules.filter(
			(rule) => rule.conclusions.includes(id) || rule.assumptions.includes(id),
		)
	}
}
