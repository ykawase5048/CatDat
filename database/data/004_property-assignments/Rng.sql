INSERT INTO category_property_assignments (
	category_id,
	property_id,
	is_satisfied,
	reason
)
VALUES
(
	'Rng',
	'locally small',
	TRUE,
	'There is a forgetful functor $\mathbf{Rng} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
),
(
	'Rng',
	'finitary algebraic',
	TRUE,
	'Take the algebraic theory of a rng.'
),
(
	'Rng',
	'pointed',
	TRUE,
	'The zero ring is a zero object.'
),
(
	'Rng',
	'disjoint coproducts',
	TRUE,
	'The coproduct of two rngs $R,S$ has as underlying additive group $R \oplus S \oplus (R \otimes S) \oplus (S \otimes R) \oplus \cdots$ from which the claim easily follows.'
),
(
	'Rng',
	'Malcev',
	TRUE,
	'This follows in the same way as for groups, see also Example 2.2.5 in <a href="https://ncatlab.org/nlab/show/Malcev,+protomodular,+homological+and+semi-abelian+categories" target="_blank">Malcev, protomodular, homological and semi-abelian categories</a>.'
),
(
	'Rng',
	'balanced',
	FALSE,
	'The inclusion $\mathbb{Z} \hookrightarrow \mathbb{Q}$ is a counterexample. (The proof can be reduced to the unital case.)'
),
(
	'Rng',
	'cogenerator',
	FALSE,
	'Assume that there is a rng $Q$ that cogenerates. Clearly, $Q$ is non-zero. Take an infinite field $F$ which is larger than $Q$ and admits a non-trivial automorphism (for example, a field of rational functions). Then every rng homomorphism $f : F \to Q$ is zero: If $e := f(1)$, then $e$ is idempotent and $f$ corestricts to a ring homomorphism $f : F \to eQ$. Since $F$ is a field but $f$ cannot be injective, we must have $eQ = 0$, so that $e = 0$ and $f = 0$. Since $Q$ cogenerates, this implies that all homomorphisms $F \to F$ are equal, a contradiction.'
),
(
	'Rng',
	'skeletal',
	FALSE,
	'This is trivial.'
),
(
	'Rng',
	'biproducts',
	FALSE,
	'If $\sqcup$ denotes the coproduct and $(X)$ the free rng on one generator (integer polynomials without constant term), the canonical homomorphism $(X) \sqcup (Y) \to (X) \times (Y)$ is not an isomorphism, since $(X) \sqcup (Y)$ is the free rng on two generators and therefore not commutative.'
),
(
	'Rng',
	'counital',
	FALSE,
	'If $\mathbb{Z}\langle X_1,\dotsc,X_n \rangle_0$ denotes the free rng on $n$ generators (non-commutative polynomials without constant term), then the canonical homomorphism $\mathbb{Z}\langle X,Y \rangle_0 = \mathbb{Z}\langle X \rangle_0 \sqcup \mathbb{Z}\langle Y \rangle_0 \to \mathbb{Z}\langle X \rangle_0 \times \mathbb{Z}\langle Y \rangle_0$ is not a monomorphism since $\mathbb{Z}\langle X,Y \rangle_0$ is not commutative.'
),
(
	'Ring',
	'co-Malcev',
	FALSE,
	'See <a href="https://mathoverflow.net/questions/509552">MO/509552</a>: Consider the forgetful functor $U : \mathbf{Ring} \to \mathbf{Set}$ and the relation $R \subseteq U^2$ defined by $R(A) := \{(a,b) \in U(A)^2 : ab = a^2\}$. Both are representable: $U$ by $\mathbb{Z}[X]$ and $S$ by $\mathbb{Z} \langle X,Y \rangle / \langle XY-X^2 \rangle$. It is clear that $R$ is reflexive, but not symmetric.'
);