INSERT INTO category_properties (
	category_id,
	property_id,
	reason
)
VALUES
	(
		'FinSet',
		'locally small',
		'There is a forgetful functor $\mathbf{FinSet} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'FinSet',
		'essentially small',
		'Every finite set is isomorphic to some $[n] = \{1,\dotsc,n\}$ for some $n \in \mathbb{N}$.'
	),
	(
		'FinSet',
		'elementary topos',
		'This follows easily from the fact that sets form an elementary topos.'
	),
	(
		'FinSet',
		'generator',
		'The one-point set is a generator since it represents the forgetful functor $\mathbf{FinSet} \to \mathbf{Set}$.'
	),
	(
		'FinSet',
		'cogenerator',
		'The two-element set is a cogenerator.'
	),
	(
		'FinAb',
		'locally small',
		'There is a forgetful functor $\mathbf{FinAb} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'FinAb',
		'essentially small',
		'The underlying set of a finite structure can be chosen to be a subset of $\mathbb{N}$.'
	),
	(
		'FinAb',
		'abelian',
		'follows from the fact for abelian groups'
	),
	(
		'FinAb',
		'self-dual',
		'Pontrjagin duality'
	),
	(
		'Abfg',
		'locally small',
		'There is a forgetful functor $\mathbf{FinAb} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Abfg',
		'essentially small',
		'Every finitely generated abelian group is isomorphic to a group of the form $\mathbb{Z}^n / U$, where $n \in \mathbb{N}$ and $U$ is a subgroup of $\mathbb{Z}^n$. And these constitute a set.'
	),
	(
		'Abfg',
		'abelian',
		'This follows from the fact for abelian groups and the fact that subgroups of finitely generated abelian groups are also finitely generated.'
	),
	(
		'Abfg',
		'generator',
		'The group $\mathbb{Z}$ is a generator since it represents the forgetful functor $\mathbf{Abfg} \to \mathbf{Set}$.'
	),

	(
		'B',
		'locally small',
		'There is a forgetful functor $\mathbb{B} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'B',
		'essentially small',
		'Every finite set is isomorphic to some $[n] = \{1,\dotsc,n\}$ for some $n \in \mathbb{N}$.'
	),
	(
		'B',
		'groupoid',
		'trivial'
	),
	(
		'B',
		'inhabited',
		'trivial'
	),
	(
		'FI',
		'locally small',
		'There is a forgetful functor $\mathbf{FI} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'FI',
		'initial object',
		'Take the empty set.'
	),
	(
		'FI',
		'left cancellative',
		'trivial'
	),
	(
		'FI',
		'essentially small',
		'Every finite set is isomorphic to some $[n] = \{1,\dotsc,n\}$ for some $n \in \mathbb{N}$.'
	),
	(
		'FI',
		'generator',
		'The one-point set is a generator since it represents the forgetful functor $\mathbf{FI} \to \mathbf{Set}$.'
	),
	(
		'FI',
		'connected limits',
		NULL
	),
	(
		'FI',
		'mono-regular',
		NULL
	),
	(
		'FI',
		'epi-regular',
		NULL
	),
	(
		'FS',
		'locally small',
		'There is a forgetful functor $\mathbf{FS} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'FS',
		'essentially small',
		'Every finite set is isomorphic to some $[n] = \{1,\dotsc,n\}$ for some $n \in \mathbb{N}$.'
	),
	(
		'FS',
		'right cancellative',
		'trivial'
	),
	(
		'FS',
		'cogenerator',
		NULL
	),
	(
		'FS',
		'wide pushouts',
		NULL
	),
	(
		'FS',
		'coequalizers',
		NULL
	),
	(
		'FS',
		'mono-regular',
		NULL
	),
	(
		'FS',
		'epi-regular',
		NULL
	);