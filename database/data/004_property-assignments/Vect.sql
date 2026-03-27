INSERT INTO category_property_assignments (
	category_id,
	property_id,
	is_satisfied,
	reason
)
VALUES
(
	'Vect',
	'locally small',
	TRUE,
	'There is a forgetful functor $\mathbf{Vect} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
),
(
	'Vect',
	'split abelian',
	TRUE,
	'It is a fact from linear algebra that every subspace has a complement.'
),
(
	'Vect',
	'finitary algebraic',
	TRUE,
	'Take the algebraic theory of a vector space.'
),
(
	'Vect',
	'trivial',
	FALSE,
	'This is trivial.'
),
(
	'Vect',
	'skeletal',
	FALSE,
	'This is trivial.'
);
