INSERT INTO category_property_assignments (
	category_id,
	property_id,
	is_satisfied,
	reason
)
VALUES
(
	'Mon',
	'locally small',
	TRUE,
	'There is a forgetful functor $\mathbf{Mon} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
),
(
	'Mon',
	'pointed',
	TRUE,
	'The trivial monoid is a zero object.'
),
(
	'Mon',
	'finitary algebraic',
	TRUE,
	'Take the algebraic of a monoid.'
),
(
	'Mon',
	'disjoint coproducts',
	TRUE,
	'It follows from the normal form of the elements of coproducts of monoids that the inclusions $G \to G \sqcup H \leftarrow H$ are injective (hence, monomorphisms) and that their intersection is trivial.'
),
(
	'Mon',
	'unital',
	TRUE,
	'If a submonoid of $X \times Y$ contains $X \times \{1\}$ and $\{1\} \times Y$, then for all $x \in X$ and $y \in Y$ it also contains $(x,1) \cdot (1,y) = (x,y)$.'
),
(
	'Mon',
	'balanced',
	FALSE,
	'The inclusion of additive monoids $\mathbb{N} \hookrightarrow \mathbb{Z}$ is a counterexample.'
),
(
	'Mon',
	'cogenerator',
	FALSE,
	'Assume there is a monoid $Q$ that cogenerates. Take an infinite simple group $G$ larger than $Q$ (w.r.t. cardinalities), for example an infinite alternating group. Then every monoid homomorphism $G \to Q$ is trivial: it corestricts to a group homomorphism $G \to Q^{\times}$, so its kernel must be all of $G$. Since $Q$ cogenerates, $G$ is trivial, a contradiction.'
),
(
	'Mon',
	'skeletal',
	FALSE,
	'trivial'
),
(
	'Mon',
	'Malcev',
	FALSE,
	'Consider the submonoid $\{(a,b) : a \leq b \}$ of $\mathbb{N}^2$.'
),
(
	'Mon',
	'biproducts',
	FALSE,
	'If $\sqcup$ denotes the coproduct, the canonical homomorphism $\mathbb{N} \sqcup \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ is not an isomorphism, since $\mathbb{N} \sqcup \mathbb{N}$ is the free monoid on two generators and therefore not commutative.'
),
(
	'Mon',
	'counital',
	FALSE,
	'The canonical morphism $\mathbb{N} \sqcup \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ is not a monomorphism since $\mathbb{N} \sqcup \mathbb{N}$ is not commutative.'
);
