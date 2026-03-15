INSERT INTO category_non_properties (
	category_id,
	non_property_id,
	reason
)
VALUES
	(
		'0',
		'inhabited',
		'trivial'
	),
	(
		'2',
		'connected',
		'The objects $0$, $1$ have no zig-zag path between them.'
	),
	(
		'walking_morphism',
		'subobject classifier',
		NULL
	),

	(
		'walking_pair',
		'initial object',
		'$0$ is not initial since it has two morphisms to $1$, and $1$ has not initial since it has no morphism to $0$.'
	),
	(
		'walking_pair',
		'zero morphisms',
		'Assume that $a : 0 \to 1$ is the zero morphism from $0$ to $1$, and the other morphism is $b$. The identity of $0$ must be the zero morphism from $0$ to $0$. But then $b = b \circ \mathrm{id}_0 = b \circ 0_{0,0} = 0_{0,1} = a$, a contradiction.'
	),
	(
		'walking_pair',
		'binary products',
		'We cannot have $0 \times 1 = 1$ since there is no morphism $1 \to 0$. So assume $0 \times 1 = 0$, say with projections $\mathrm{id}_0 : 0 \to 0$ and $a : 0 \to 1$. By applying the universal property to  $\mathrm{id}_0 : 0 \to 0$ and the other morphism $b : 0 \to 1$, it immediately follows $a=b$, which is a contradiction.'
	),
	(
		'walking_pair',
		'equalizers',
		'The two morphisms $a,b : 0 \rightrightarrows 1$ have no equalizer, since it would have to be the identity of $0$, but $a \neq b$.'
	),
	(
		'walking_pair',
		'pullbacks',
		'The two morphisms $a,b : 0 \rightrightarrows 1$ have no pullback, since it would to consist of identities $0 \leftarrow 0 \rightarrow 0$, but $a \neq b$.'
	),
	(
		'walking_isomorphism',
		'skeletal',
		'The two objects are isomorphic, but different.'
	);