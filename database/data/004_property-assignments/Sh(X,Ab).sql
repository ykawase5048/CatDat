INSERT INTO category_property_assignments (
	category_id,
	property_id,
	is_satisfied,
	reason
)
VALUES
(
	'Sh(X,Ab)',
	'locally small',
	TRUE,
	'This is easy.'
),
(
	'Sh(X,Ab)',
	'Grothendieck abelian',
	TRUE,
	'This is standard, see for example Theorem 18.1.6. in <a href="https://ncatlab.org/nlab/show/Categories+and+Sheaves" target="_blank">Kashiwara-Schapira</a>.'
),
(
	'Sh(X,Ab)',
	'trivial',
	FALSE,
	'Consider constant sheaves for non-isomorphic abelian groups.'
),
(
	'Sh(X,Ab)',
	'skeletal',
	FALSE,
	'Consider constant sheaves for isomorphic but non-equal abelian groups.'
);
