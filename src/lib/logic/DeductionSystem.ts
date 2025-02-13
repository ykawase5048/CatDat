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

/**
 * A deduction system uses a set of rules to deduce new properties from
 * a set of assumptions, likewise for negations of properties.
 * Reasons are given in natural language.
 */
export class DeductionSystem<PrefixType extends string, T extends string> {
	public readonly rules: Rule<T>[]
	public readonly normalized_rules: NormalizedRule<T>[] = []
	public readonly property_ids: Set<T> // all available properties
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

	/**
	 * Checks if every rule has registered assumptions and conclusions.
	 * Throws an error if a rule is invalid.
	 */
	private validate_rules(): void {
		for (const rule of this.rules) {
			const is_valid =
				new Set(rule.assumptions).isSubsetOf(this.property_ids) &&
				new Set(rule.conclusions).isSubsetOf(this.property_ids)
			if (!is_valid) throw new Error(`Invalid rule: ${JSON.stringify(rule)}`)
		}
	}

	/**
	 * Initializes the deduction system by computing the normalized rules.
	 */
	public init(): void {
		this.compute_normalized_rules()
	}

	/**
	 * Creates the list of all normalized rules from the original rules.
	 * A rule like "A + B => C + D" is normalized by splitting it into
	 * two rules: "A + B => C" and "A + B => D". Also, the assumptions
	 * are converted to sets for faster lookups in other methods.
	 * Equivalences are also handled by adding the inverse rules.
	 */
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

	/**
	 * Returns the list of all deductions that can be recursively made
	 * from a list of assumptions, using the rules of the deduction system.
	 * The reasons are given in natural language.
	 */
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

	/**
	 * Returns the list of new deductions that can be made from a set
	 * of property IDs by looping *once* over all rules.
	 *
	 * Caution: This method is not pure.
	 * For performance reasons, we change the IDs in place.
	 */
	private get_new_deductions(ids: Set<T>) {
		const new_deductions: DetailedProperty<PrefixType, T>[] = []

		for (const rule of this.normalized_rules) {
			if (!this.is_rule_applicable(rule, ids)) continue

			const new_deduction = {
				id: rule.conclusion,
				prefix: this.get_prefix(rule.conclusion),
				reason: this.get_rule_as_string(rule),
			}

			new_deductions.push(new_deduction)
			ids.add(rule.conclusion)
		}

		return new_deductions
	}

	/**
	 * Checks if a rule has a new conclusion and that all assumptions are met.
	 */
	private is_rule_applicable(rule: NormalizedRule<T>, ids: Set<T>): boolean {
		return !ids.has(rule.conclusion) && rule.assumptions.isSubsetOf(ids)
	}

	/**
	 * Returns a string representation of a rule in natural language.
	 */
	private get_rule_as_string(rule: NormalizedRule<T>) {
		const assumption_string = Array.from(rule.assumptions)
			.map((id) => `${this.get_prefix(id)} ${id}`)
			.join(' and ')

		const conclusion_string = `${this.get_prefix(rule.conclusion)} ${rule.conclusion}`

		return `Since it ${assumption_string}, we deduce that it ${conclusion_string}.`
	}

	/**
	 * Returns the list of all negations that can be recursively deduced
	 * from a list of assumptions and negations, using the rules of the deduction system.
	 * The reasons are given in natural language.
	 */
	public get_detailed_deduced_negations(
		assumptions: DetailedProperty<PrefixType, T>[],
		negations: DetailedProperty<PrefixType, T>[],
	) {
		const deduced_negations = Array.from(negations)
		const deduced_negation_ids = new Set(negations.map((entry) => entry.id))

		while (true) {
			const new_negations = this.get_new_negations(
				assumptions.map((assumption) => assumption.id),
				deduced_negation_ids,
			)
			if (new_negations.length === 0) break

			deduced_negations.push(...new_negations)
			new_negations.forEach((negation) => deduced_negation_ids.add(negation.id))
		}

		return deduced_negations
	}

	/**
	 * Returns the list of new negations that can be deduced from a set of
	 * assumptions and negations by looping *once* over properties.
	 * The idea is to assume a property and check if it leads to a contradiction.
	 * If yes, we register this property as a new negation.
	 */
	private get_new_negations(
		assumed_ids: T[],
		deduced_negation_ids: Set<T>,
	): DetailedProperty<PrefixType, T>[] {
		const new_negations: DetailedProperty<PrefixType, T>[] = []

		for (const id of this.property_ids) {
			const not_new = deduced_negation_ids.has(id)
			if (not_new) continue

			const prefix = this.get_prefix(id)

			const contradiction = this.get_contradiction(
				[...assumed_ids, id],
				deduced_negation_ids,
			)
			if (!contradiction) continue

			const { proof } = contradiction
			const prelude = `Assume for a contradiction that it ${prefix} ${id}.`
			const reason = `${prelude} ${proof}`

			const new_negation = {
				id,
				prefix: this.get_prefix(id),
				reason,
			}

			new_negations.push(new_negation)
		}

		return new_negations
	}

	/**
	 * Returns a contradiction proof if a contradiction can be deduced
	 * from a set of assumptions and negations. It loops over all rules
	 * and stops when no new conclusions can be made or a contradiction is found.
	 * The proof is given in natural language.
	 *
	 * TODO: refactor this method
	 * TODO: find a shorter proof that removes unnecessary paths
	 */
	private get_contradiction(assumed_ids: T[], negated_ids: Set<T>) {
		const deduced_ids = new Set(assumed_ids)
		const used_rules: NormalizedRule<T>[] = []

		let done = false
		let contradictory_id: null | T = null

		while (!done && !contradictory_id) {
			done = true

			for (const rule of this.normalized_rules) {
				if (!this.is_rule_applicable(rule, deduced_ids)) continue

				done = false
				used_rules.push(rule)

				if (negated_ids.has(rule.conclusion)) {
					contradictory_id = rule.conclusion
					break
				} else {
					deduced_ids.add(rule.conclusion)
				}
			}
		}

		return contradictory_id
			? this.build_contradiction_proof(contradictory_id, used_rules)
			: null
	}

	/**
	 * Builds a contradiction proof in natural language.
	 */
	private build_contradiction_proof(
		contradictory_id: T,
		used_rules: NormalizedRule<T>[],
	) {
		const negated_prefix = this.negate_prefix(this.get_prefix(contradictory_id))
		const main_proof = used_rules
			.map((rule) => this.get_rule_as_string(rule))
			.join(' ')
		const finale = `This is a contradiction since we already know that it ${negated_prefix} ${contradictory_id}.`
		const proof = `${main_proof} ${finale}`
		return { proof }
	}

	/**
	 * Returns the ID of a redundant assumption within a list of assumptions,
	 * or null if no redundancy is found.
	 *
	 * This method is only used for testing purposes. It is not called in the app.
	 */
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

	/**
	 * Returns the ID of a redundant negation within a list of assumptions and negations,
	 * or null if no redundancy is found.
	 *
	 * This method is only used for testing purposes. It is not called in the app.
	 */
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

	/**
	 * Returns true if a contradiction can be deduced from a list of assumptions
	 * and negations, using the rules of the deduction system.
	 */
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

	/**
	 * Returns the list of all consistent combinations of the form "P, but not Q",
	 * where P and Q are properties from the deduction system.
	 * Here, "consistent" means that the deduction system does not deduce Q from P.
	 */
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

	/**
	 * Returns the list of all properties in the system, sorted by ID.
	 */
	public get_sorted_property_ids(): T[] {
		return Array.from(this.property_ids).toSorted((a, b) =>
			a.toLowerCase().localeCompare(b.toLowerCase()),
		)
	}

	/**
	 * Returns the list of all rules of the system whose assumptions or conclusions
	 * have a given property.
	 */
	public get_relevant_rules(id: T): Rule<T>[] {
		return this.rules.filter(
			(rule) => rule.conclusions.includes(id) || rule.assumptions.includes(id),
		)
	}
}
