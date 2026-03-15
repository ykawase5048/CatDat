INSERT INTO category_properties (
	category_id,
	property_id,
	reason
)
VALUES
	(
		'0',
		'preadditive',
		'This is vacuously true.'
	),
	(
		'0',
		'discrete',
		'trivial'
	),
	(
		'0',
		'binary products',
		'This is vacuously true.'
	),
	(
		'0',
		'finite',
		'trivial'
	),
	(
		'1',
		'trivial',
		'trivial'
	),
	(
		'1',
		'finite',
		'trivial'
	),
	(
		'1',
		'discrete',
		'trivial'
	),
	(
		'2',
		'discrete',
		'trivial'
	),
	(
		'2',
		'finite',
		'trivial'
	),
	(
		'2',
		'inhabited',
		'trivial'
	),
	(
		'walking_morphism',
		'finitary algebraic',
		'Take the algebraic theory with no operations but with the equation $x=y$ that is supposed to hold for all elements $x,y$. The algebras for this theory are the empty set and the singleton set, hence we get the equivalence to $\{0 \to 1\}$.'
	),
	(
		'walking_morphism',
		'self-dual',
		'trivial'
	),
	(
		'walking_morphism',
		'finite',
		'trivial'
	),
	(
		'walking_morphism',
		'infinitary distributive',
		'Clearly, this category is (co)complete. Also, the functors $X \mapsto X \times 1 = X$ and $X \mapsto X \times 0 = 0$ are clearly cocontinuous.'
	),
	(
		'walking_morphism',
		'skeletal',
		'The two objects are not isomorphic'
	),

	(
		'walking_pair',
		'finite',
		'trivial'
	),
	(
		'walking_pair',
		'self-dual',
		'trivial'
	),
	(
		'walking_pair',
		'connected',
		'trivial'
	),
	(
		'walking_pair',
		'generator',
		'It is easy to check that $0$ is a generator.'
	),
	(
		'walking_pair',
		'filtered colimits',
		'Every filtered diagram can be reduced to one of the three trivial diagrams $0 \to 0$, $0 \to 1$, $1 \to 1$, which have colimits $0$, $1$, resp. $1$.'
	),
	(
		'walking_pair',
		'left cancellative',
		'The two morphisms $0 \to 1$ are clearly monomorphisms.'
	),
	(
		'walking_pair',
		'skeletal',
		'The two objects are not isomorphic.'
	),
	(
		'walking_isomorphism',
		'trivial',
		'The inclusion $\{0\} \hookrightarrow \{0 \to 1\}$ is clearly an equivalence.'
	),
	(
		'walking_isomorphism',
		'finite',
		'trivial'
	);