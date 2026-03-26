INSERT INTO category_property_assignments (
	category_id,
	property_id,
	is_satisfied,
	reason
)
VALUES
(
	'Sh(X)',
	'locally small',
	TRUE,
	'easy'
),
(
	'Sh(X)',
	'Grothendieck topos',
	TRUE,
	'by definition of a Grothendieck topos'
),
(
	'Sh(X)',
	'strict terminal object',
	FALSE,
	'Take any set $A$ with $ > 1$ elements. Consider the constant sheaf $\underline{A}$. Morphisms $1 \to \underline{A}$ corresponds to global sections of $\underline{A}$, i.e. locally constant functions $X \to A$. There is such a function since $A$ is non-empty. If $1$ was strict, $1 \to \underline{A}$ would be an isomorphism, so that there is a unique locally constant function $X \to A$, and hence a unique constant function, which is absurd.'
),
(
	'Sh(X)',
	'Malcev',
	FALSE,
	'Consider the subsheaf of $\underline{\mathbb{N}} \times \underline{\mathbb{N}}$ consisting of locally constant functions $(f,g) : X \to \mathbb{N} \times \mathbb{N}$ with $f \leq g$ pointwise. This is reflexive, but not symmetric.'
),
(
	'Sh(X)',
	'skeletal',
	FALSE,
	'Consider constant sheaves for isomorphic but non-equal sets.'
);
