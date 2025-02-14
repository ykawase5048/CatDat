import { equal_up_to_order, type NonEmptyArray } from '$lib/commons/utils'
import type { PropertyWithReason, ReasonHandler } from './ReasonHandler'

export type Rule<T> = {
	readonly id: string
	readonly equivalent?: true
	readonly assumptions: NonEmptyArray<T>
	readonly conclusions: NonEmptyArray<T>
	readonly reason: string
}

export type NormalizedRule<T> = {
	readonly id: string
	readonly assumptions: Set<T>
	readonly conclusion: T
}

/**
 * A deduction system uses a set of rules to deduce new properties from
 * a set of assumptions, likewise for negations of properties.
 * Reasons are given in natural language.
 */
export class DeductionSystem<P extends string, T extends string> {
	public readonly rules: Rule<T>[]
	public readonly normalized_rules: NormalizedRule<T>[] = []
	public readonly all_property_ids: Set<T>
	public readonly get_dual_property?: (id: T) => T | null

	constructor(
		all_property_ids: Set<T>,
		rules: Rule<T>[],
		get_dual_property?: (id: T) => T | null,
	) {
		this.all_property_ids = all_property_ids
		this.rules = rules
		this.get_dual_property = get_dual_property
		this.validate_rules()
		this.init()
	}

	/**
	 * Checks if every rule has registered assumptions and conclusions.
	 * Throws an error if a rule is invalid.
	 */
	private validate_rules(): void {
		for (const rule of this.rules) {
			const is_valid =
				new Set(rule.assumptions).isSubsetOf(this.all_property_ids) &&
				new Set(rule.conclusions).isSubsetOf(this.all_property_ids)
			if (!is_valid) throw new Error(`Invalid rule: ${JSON.stringify(rule)}`)
		}
	}

	/**
	 * Initializes the deduction system by computing the normalized rules.
	 * If the system has dual properties, it also adds dualized rules
	 * and self-dual rules.
	 */
	public init(): void {
		if (this.get_dual_property) {
			this.add_dualized_rules()
			this.add_self_dual_rules()
		}
		this.compute_normalized_rules()
	}

	/**
	 * Returns the dual properties of a list of properties, if they all have duals.
	 * If any property does not have a dual, null is returned.
	 */
	private get_dual_properties(ids: NonEmptyArray<T>): NonEmptyArray<T> | null {
		if (!this.get_dual_property) return null
		const dual_properties = ids.map((id) => this.get_dual_property!(id))
		if (dual_properties.includes(null)) return null
		return dual_properties as NonEmptyArray<T>
	}

	/**
	 * Adds dualized rules to the list of rules.
	 */
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

	/**
	 * Adds self-dual rules to the list of rules.
	 */
	private add_self_dual_rules(): void {
		if (!this.get_dual_property) return
		for (const id of this.all_property_ids) {
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
	 * Returns the list of all properties that can be deduced from a set of assumptions.
	 * The reasons are given in natural language.
	 */
	public get_deductions_with_reasons(
		ids: Set<T>,
		reason_handler: ReasonHandler<P, T>,
	): PropertyWithReason<P, T>[] {
		const rules = this.get_rules_for_deductions(ids)
		return rules.map((rule) =>
			reason_handler.create_property_with_reason_from_rule(rule),
		)
	}

	/**
	 * Returns the list of all rules that can be applied to deduce new properties
	 * from a set of assumptions.
	 */
	private get_rules_for_deductions(ids: Set<T>): NormalizedRule<T>[] {
		const deduced_ids = new Set(ids)

		const rules_for_deductions = []

		while (true) {
			const new_rules = this.get_new_rules(deduced_ids)
			if (new_rules.length === 0) break
			rules_for_deductions.push(...new_rules)
		}

		return rules_for_deductions
	}

	/**
	 * Returns the list of all properties that can be deduced from a set of assumptions,
	 * by running *once* through the list of normalized rules.
	 */
	private get_new_rules(ids: Set<T>): NormalizedRule<T>[] {
		const new_rules: NormalizedRule<T>[] = []

		for (const rule of this.normalized_rules) {
			if (!this.is_rule_applicable(rule, ids)) continue

			new_rules.push(rule)
			ids.add(rule.conclusion)
		}

		return new_rules
	}

	/**
	 * Checks if a rule has a new conclusion and that all assumptions are met.
	 */
	private is_rule_applicable(rule: NormalizedRule<T>, ids: Set<T>): boolean {
		return !ids.has(rule.conclusion) && rule.assumptions.isSubsetOf(ids)
	}

	/**
	 * Returns the set of all properties that can be deduced from a set of assumptions.
	 * The reasons are *not* included in this method.
	 */
	private get_deductions(ids: Set<T>): Set<T> {
		return new Set(this.get_rules_for_deductions(ids).map((rule) => rule.conclusion))
	}

	/**
	 * Returns the list of all negations that can be deduced from a set of properties
	 * and negated properties. The reasons are given in natural language.
	 */
	public get_deduced_negations_with_reasons(
		assumed_ids: Set<T>,
		negated_ids: Set<T>,
		reason_handler: ReasonHandler<P, T>,
	): PropertyWithReason<P, T>[] {
		const deduced_negations = []
		const deduced_negation_ids = new Set(negated_ids)

		while (true) {
			const new_negations = this.get_new_negations_with_reasons(
				assumed_ids,
				deduced_negation_ids,
				reason_handler,
			)
			if (new_negations.length === 0) break

			deduced_negations.push(...new_negations)
			new_negations.forEach((negation) => deduced_negation_ids.add(negation.id))
		}

		return deduced_negations
	}

	/**
	 * Returns the list of all negations that can be deduced from a set of properties
	 * and negated properties, by running *once* through the list of all properties.
	 * The reasons are given in natural language.
	 */
	private get_new_negations_with_reasons(
		assumed_ids: Set<T>,
		negated_ids: Set<T>,
		reason_handler: ReasonHandler<P, T>,
	): PropertyWithReason<P, T>[] {
		const new_negations: PropertyWithReason<P, T>[] = []

		for (const id of this.all_property_ids) {
			const not_new = negated_ids.has(id)
			if (not_new) continue

			const contradiction = this.get_optimal_contradiction_rules(
				assumed_ids.union(new Set([id])),
				negated_ids,
			)

			if (!contradiction) continue

			const reason = reason_handler.build_contradiction_proof(
				id,
				contradiction.contradictory_id,
				contradiction.used_rules,
			)

			const new_negation = reason_handler.create_property_with_given_reason(
				id,
				reason,
			)

			new_negations.push(new_negation)
			negated_ids.add(id)
		}

		return new_negations
	}

	/**
	 * Returns the ID of a property that contradicts a set of properties and negated
	 * properties, in case a contradiction can be deduced, along with the list of
	 * optimal rules that lead to the contradiction. If no contradiction is found,
	 * null is returned.
	 */
	private get_optimal_contradiction_rules(
		assumed_ids: Set<T>,
		negated_ids: Set<T>,
	): null | {
		contradictory_id: T
		used_rules: NormalizedRule<T>[]
	} {
		const contradiction = this.get_lengthy_contradiction_rules(
			assumed_ids,
			negated_ids,
		)

		if (!contradiction) return null

		const { contradictory_id, used_rules } = contradiction

		return this.shorten_contradiction_rules(assumed_ids, contradictory_id, used_rules)
	}

	/**
	 * Returns the ID of a property that contradicts a set of properties and negated
	 * properties, in case a contradiction can be deduced, along with the list of
	 * rules that lead to the contradiction. In this method, some rules may not
	 * be necessary for the proof. If no contradiction is found, null is returned.
	 */
	private get_lengthy_contradiction_rules(
		assumed_ids: Set<T>,
		negated_ids: Set<T>,
	): null | {
		contradictory_id: T
		used_rules: NormalizedRule<T>[]
	} {
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

		return contradictory_id ? { contradictory_id, used_rules: used_rules } : null
	}

	/**
	 * Makes a proof of a contradiction more concise by removing rules that
	 * are not necessary for the proof.
	 */
	private shorten_contradiction_rules(
		assumed_ids: Set<T>,
		contradictory_id: T,
		used_rules: NormalizedRule<T>[],
	): {
		contradictory_id: T
		used_rules: NormalizedRule<T>[]
	} | null {
		const open_conclusions = new Set<T>([contradictory_id])

		const n = used_rules.length
		const relevant_rules = []

		for (let index = n - 1; index >= 0; index--) {
			const rule = used_rules[index]
			const is_relevant = open_conclusions.has(rule.conclusion)
			if (!is_relevant) continue

			open_conclusions.delete(rule.conclusion)
			relevant_rules.unshift(rule)

			for (const assumption of rule.assumptions) {
				if (!assumed_ids.has(assumption)) {
					open_conclusions.add(assumption)
				}
			}

			if (open_conclusions.size === 0) break
		}

		return { contradictory_id, used_rules: relevant_rules }
	}

	/**
	 * Returns the set of all negations that can be deduced from a set of properties
	 * and negated properties. The reasons are *not* included in this method.
	 */
	private get_deduced_negations(assumed_ids: Set<T>, negated_ids: Set<T>): Set<T> {
		const deduced_negated_ids = new Set(negated_ids)

		while (true) {
			const added = this.add_new_negations(assumed_ids, deduced_negated_ids)
			if (!added) break
		}

		return deduced_negated_ids
	}

	/**
	 * Adds new negations to a set of negated properties, without giving reasons.
	 * Returns the number of new negations that were added.
	 * Warning: This method is not pure. It mutates the set of negated properties.
	 */
	private add_new_negations(assumed_ids: Set<T>, negated_ids: Set<T>): number {
		let added = 0

		for (const id of this.all_property_ids) {
			const not_new = negated_ids.has(id)
			if (not_new) continue

			const contradiction = this.get_lengthy_contradiction_rules(
				assumed_ids.union(new Set([id])),
				negated_ids,
			)

			if (!contradiction) continue

			negated_ids.add(id)
			added++
		}

		return added
	}

	/**
	 * Returns the ID of a redundant assumption within a list of assumptions,
	 * or null if no redundancy is found.
	 *
	 * This method is only used for testing purposes. It is not called in the app.
	 */
	public get_redundancy(assumed_ids: Set<T>): T | null {
		const deductions = this.get_deductions(assumed_ids).union(assumed_ids)

		for (const id of assumed_ids) {
			const reduced_ids = assumed_ids.difference(new Set([id]))
			const reduced_deductions = this.get_deductions(reduced_ids).union(reduced_ids)

			if (reduced_deductions.size === deductions.size) {
				return id
			}
		}

		return null
	}

	/**
	 * Returns the ID of a redundant negation within a set of assumptions and negations,
	 * or null if no redundancy is found.
	 *
	 * This method is only used for testing purposes. It is not called in the app.
	 */
	public get_redundancy_of_negations(
		assumed_ids: Set<T>,
		negated_ids: Set<T>,
	): T | null {
		const deduced_ids = this.get_deductions(assumed_ids).union(assumed_ids)
		const deduced_negations = this.get_deduced_negations(assumed_ids, negated_ids)

		for (const id of negated_ids) {
			const reduced_negated_ids = negated_ids.difference(new Set([id]))
			const reduced_negations = this.get_deduced_negations(
				deduced_ids,
				reduced_negated_ids,
			)

			if (reduced_negations.size === deduced_negations.size) {
				return id
			}
		}

		return null
	}

	/**
	 * Returns true if a contradiction can be deduced from a set of assumptions
	 * and negations, using the rules of the deduction system.
	 */
	public has_contradiction(assumed_ids: Set<T>, negated_ids: Set<T>): boolean {
		const deduced_ids = this.get_deductions(assumed_ids).union(assumed_ids)
		const deduced_negated_ids = this.get_deduced_negations(assumed_ids, negated_ids)
		return deduced_ids.intersection(deduced_negated_ids).size > 0
	}

	/**
	 * Returns the list of all consistent combinations of the form "P, but not Q",
	 * where P and Q are properties from the deduction system.
	 * Here, "consistent" means that the deduction system does not deduce Q from P.
	 */
	public get_basic_consistent_combinations(): { assumption: T; negation: T }[] {
		const combinations: { assumption: T; negation: T }[] = []
		for (const assumption of this.all_property_ids) {
			const deduced_ids = this.get_deductions(new Set([assumption])).union(
				new Set([assumption]),
			)
			for (const negation of this.all_property_ids) {
				if (!deduced_ids.has(negation)) {
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
		return Array.from(this.all_property_ids).toSorted((a, b) =>
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
