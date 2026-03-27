INSERT INTO category_property_assignments (
	category_id,
	property_id,
	is_satisfied,
	reason
)
VALUES
(
	'M-Set',
	'locally small',
	TRUE,
	'There is a forgetful functor $M{-}\mathbf{Set} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
),
(
	'M-Set',
	'Grothendieck topos',
	TRUE,
	'It is the category of sheaves on the opposite of the one-object category associated to $M$.'
),
(
	'M-Set',
	'finitary algebraic',
	TRUE,
	'Take the algebraic theory of an $M$-sets (having a unary operation for each $m \in M$).'
),
(
	'M-Set',
	'strict terminal object',
	FALSE,
	'Take any set $X$ with an element $x \in X$, endow $X$ with the trivial $M$-action. Then the morphism $x : 1 \to X$ is only an isomorphism when $X = \{x\}$.'
),
(
	'M-Set',
	'skeletal',
	FALSE,
	'This is trivial.'
),
(
	'M-Set',
	'Malcev',
	FALSE,
	'Endow the set $\mathbb{N}$ with the trivial $M$-action, and consider the subset $\{(a,b) : a \leq b \}$ of $\mathbb{N}^2$.'
);
