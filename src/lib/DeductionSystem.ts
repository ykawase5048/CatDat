type Rule<T> = {
	equivalent?: boolean
	assumptions: T[]
	conclusions: T[]
}

type NormalizedRule<T> = {
	assumptions: Set<T>
	conclusion: T
}

export class DeductionSystem<T> {
	private rules: Rule<T>[]
	private normalized_rules: NormalizedRule<T>[] = []
	private properties: Set<T> = new Set([])

	constructor(rules: Rule<T>[]) {
		this.rules = rules
		this.compute_properties()
		this.compute_normalized_rules()
	}

	private compute_properties() {
		for (const rule of this.rules) {
			for (const assumption of rule.assumptions) {
				this.properties.add(assumption)
			}
			for (const conclusion of rule.conclusions) {
				this.properties.add(conclusion)
			}
		}
	}

	private compute_normalized_rules() {
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
				const found =
					rule.assumptions.isSubsetOf(deductions) &&
					!deductions.has(rule.conclusion)
				if (found) {
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

	has_contradiction(assumptions: Set<T>, negations: Set<T>): boolean {
		const deductions = this.get_deductions(assumptions)
		const deduced_negations = this.get_deduced_negations(assumptions, negations)
		return deductions.intersection(deduced_negations).size > 0
	}
}
