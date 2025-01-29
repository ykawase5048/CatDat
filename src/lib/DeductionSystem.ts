export type Rule<T> = {
	equivalent?: boolean
	assumptions: T[]
	conclusions: T[]
}

type NormalizedRule<T> = {
	assumptions: Set<T>
	conclusion: T
}

export class DeductionSystem<T extends string> {
	protected rules: Rule<T>[]
	private normalized_rules: NormalizedRule<T>[] = []
	public readonly properties: Set<T>
	protected initialized = false

	constructor(properties: Set<T>, rules: Rule<T>[]) {
		this.properties = properties
		this.rules = rules
		this.check_rules()
	}

	public init() {
		if (this.initialized) return
		this.compute_normalized_rules()
		this.initialized = true
	}

	private check_rules() {
		for (const rule of this.rules) {
			const is_ok =
				rule.assumptions.every((assumption) => this.properties.has(assumption)) &&
				rule.conclusions.every((conclusion) => this.properties.has(conclusion))
			if (!is_ok) throw new Error(`Invalid rule: ${JSON.stringify(rule)}`)
		}
	}

	protected compute_normalized_rules() {
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

	get_deductions(assumptions: Set<T>): Set<T> {
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

	get_deduced_negations(assumptions: Set<T>, negations: Set<T>): Set<T> {
		let done = false
		const deduced_negations = new Set(negations)

		while (!done) {
			done = true
			for (const property of this.properties) {
				const new_assumptions = new Set([...assumptions, property])
				const new_deductions = this.get_deductions(new_assumptions)
				const has_contradiction =
					new_deductions.intersection(deduced_negations).size > 0
				const is_new = !deduced_negations.has(property)
				if (has_contradiction && is_new) {
					done = false
					deduced_negations.add(property)
				}
			}
		}

		return deduced_negations
	}

	check_redundancy(assumptions: Set<T>): boolean {
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

	check_redundancy_of_negations(assumptions: Set<T>, negations: Set<T>): boolean {
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

	has_contradiction(assumptions: Set<T>, negations: Set<T>): boolean {
		const deductions = this.get_deductions(assumptions)
		const deduced_negations = this.get_deduced_negations(assumptions, negations)
		return deductions.intersection(deduced_negations).size > 0
	}

	get basic_consistent_combinations(): { assumption: T; negation: T }[] {
		const combinations: { assumption: T; negation: T }[] = []
		for (const assumption of this.properties) {
			const deductions = this.get_deductions(new Set([assumption]))
			for (const negation of this.properties) {
				if (deductions.has(negation)) continue
				combinations.push({ assumption, negation })
			}
		}
		return combinations
	}
}
