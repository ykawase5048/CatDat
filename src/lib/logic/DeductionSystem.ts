export type Rule<T> = {
	equivalent?: true
	assumptions: T[]
	conclusions: T[]
	reason?: string
}

type NormalizedRule<T> = {
	assumptions: Set<T>
	conclusion: T
}

export class DeductionSystem<T extends string> {
	public readonly rules: Rule<T>[]
	private normalized_rules: NormalizedRule<T>[] = []
	public readonly properties: Set<T>
	protected initialized = false

	constructor(properties: Set<T>, rules: Rule<T>[]) {
		this.properties = properties
		this.rules = rules
		this.validate_rules()
	}

	private validate_rules(): void {
		for (const rule of this.rules) {
			const is_valid =
				new Set(rule.assumptions).isSubsetOf(this.properties) &&
				new Set(rule.conclusions).isSubsetOf(this.properties)
			if (!is_valid) throw new Error(`Invalid rule: ${JSON.stringify(rule)}`)
		}
	}

	public init(): void {
		if (this.initialized) return
		this.compute_normalized_rules()
		this.initialized = true
	}

	protected compute_normalized_rules(): void {
		this.normalized_rules = []

		for (const rule of this.rules) {
			const { conclusions, assumptions, equivalent } = rule

			for (const conclusion of conclusions) {
				this.normalized_rules.push({
					assumptions: new Set(assumptions),
					conclusion,
				})
			}

			if (equivalent) {
				for (const assumption of assumptions) {
					this.normalized_rules.push({
						assumptions: new Set(conclusions),
						conclusion: assumption,
					})
				}
			}
		}
	}

	public get_deductions(assumptions: Set<T>): Set<T> {
		let done = false
		const deductions = new Set(assumptions)

		while (!done) {
			done = true
			for (const rule of this.normalized_rules) {
				const rule_applies = rule.assumptions.isSubsetOf(deductions)
				const is_new = !deductions.has(rule.conclusion)

				if (rule_applies && is_new) {
					done = false
					deductions.add(rule.conclusion)
				}
			}
		}

		return deductions
	}

	public get_deduced_negations(assumptions: Set<T>, negations: Set<T>): Set<T> {
		let done = false
		const deduced_negations = new Set(negations)

		while (!done) {
			done = true
			for (const property of this.properties) {
				const new_assumptions = assumptions.union(new Set([property]))
				const deductions = this.get_deductions(new_assumptions)
				const has_contradiction =
					deductions.intersection(deduced_negations).size > 0
				const is_new = !deduced_negations.has(property)

				if (has_contradiction && is_new) {
					done = false
					deduced_negations.add(property)
				}
			}
		}

		return deduced_negations
	}

	public check_redundancy(assumptions: Set<T>): boolean {
		const deductions = this.get_deductions(assumptions)

		for (const assumption of assumptions) {
			const reduced_assumptions = new Set(assumptions)
			reduced_assumptions.delete(assumption)
			const reduced_deductions = this.get_deductions(reduced_assumptions)

			if (reduced_deductions.size === deductions.size) {
				console.warn(`${assumption} is redundant`)
				return true
			}
		}

		return false
	}

	public check_redundancy_of_negations(
		assumptions: Set<T>,
		negations: Set<T>,
	): boolean {
		const deduced_assumptions = this.get_deductions(assumptions)
		const deduced_negations = this.get_deduced_negations(
			deduced_assumptions,
			negations,
		)

		for (const negation of negations) {
			const reduced_negations = new Set(negations)
			reduced_negations.delete(negation)
			const reduced_deduced_negations = this.get_deduced_negations(
				deduced_assumptions,
				reduced_negations,
			)
			if (reduced_deduced_negations.size === deduced_negations.size) {
				console.warn(`${negation} is redundant`)
				return true
			}
		}
		return false
	}

	public has_contradiction(assumptions: Set<T>, negations: Set<T>): boolean {
		const deductions = this.get_deductions(assumptions)
		const deduced_negations = this.get_deduced_negations(assumptions, negations)
		return deductions.intersection(deduced_negations).size > 0
	}

	public get basic_consistent_combinations(): { assumption: T; negation: T }[] {
		const combinations: { assumption: T; negation: T }[] = []
		for (const assumption of this.properties) {
			const deductions = this.get_deductions(new Set([assumption]))
			for (const negation of this.properties) {
				if (!deductions.has(negation)) {
					combinations.push({ assumption, negation })
				}
			}
		}
		return combinations
	}

	public get sorted_properties(): T[] {
		return Array.from(this.properties).toSorted((a, b) =>
			a.toLowerCase().localeCompare(b.toLowerCase()),
		)
	}

	public get_relevant_rules(property: T): Rule<T>[] {
		return this.rules.filter(
			(rule) =>
				rule.conclusions.includes(property) ||
				rule.assumptions.includes(property),
		)
	}
}
