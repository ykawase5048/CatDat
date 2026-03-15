INSERT INTO category_non_properties (
	category_id,
	non_property_id,
	reason
)
VALUES
	(
		'FinSet',
		'small',
		'Even the collection of all singletons is not a set.'
	),
	(
		'FinSet',
		'strict terminal object',
		'trivial'
	),
	(
		'FinSet',
		'sequential limits',
		NULL
	),
	(
		'FinSet',
		'sequential colimits',
		NULL
	),
	(
		'FinSet',
		'skeletal',
		'trivial'
	),
	(
		'FinSet',
		'Malcev',
		'There are lots of non-symmetric reflexive relations.'
	),
	(
		'FinAb',
		'small',
		'Even the collection of trivial groups is not small.'
	),
	(
		'FinAb',
		'generator',
		NULL
	),
	(
		'FinAb',
		'split abelian',
		'The sequence $0 \to \mathbb{Z}/2 \to \mathbb{Z}/4 \to \mathbb{Z}/2 \to 0$ does not split.'
	),
	(
		'FinAb',
		'sequential limits',
		NULL
	),
	(
		'FinAb',
		'skeletal',
		'There are many trivial and hence isomorphic groups, which are not equal.'
	),
	(
		'Abfg',
		'small',
		NULL
	),
	(
		'Abfg',
		'cogenerator',
		NULL
	),
	(
		'Abfg',
		'split abelian',
		NULL
	),
	(
		'Abfg',
		'countable products',
		NULL
	),
	(
		'Abfg',
		'countable coproducts',
		NULL
	),
	(
		'Abfg',
		'skeletal',
		'trivial'
	),
	(
		'B',
		'small',
		NULL
	),
	(
		'B',
		'connected',
		NULL
	),
	(
		'B',
		'generator',
		NULL
	),
	(
		'B',
		'essentially finite',
		NULL
	),
	(
		'B',
		'skeletal',
		'trivial'
	),
	(
		'FI',
		'binary coproducts',
		NULL
	),
	(
		'FI',
		'small',
		NULL
	),
	(
		'FI',
		'cogenerator',
		NULL
	),
	(
		'FI',
		'binary products',
		NULL
	),
	(
		'FI',
		'sequential colimits',
		NULL
	),
	(
		'FI',
		'essentially finite',
		NULL
	),
	(
		'FI',
		'skeletal',
		'trivial'
	),
	(
		'FS',
		'small',
		NULL
	),
	(
		'FS',
		'connected',
		NULL
	),
	(
		'FS',
		'generator',
		NULL
	),
	(
		'FS',
		'sequential limits',
		NULL
	),
	(
		'FS',
		'pullbacks',
		NULL
	),
	(
		'FS',
		'essentially finite',
		NULL
	),
	(
		'FS',
		'skeletal',
		'trivial'
	),

	(
		'FinOrd',
		'small',
		NULL
	),
	(
		'FinOrd',
		'binary coproducts',
		NULL
	),
	(
		'FinOrd',
		'strict terminal object',
		'trivial'
	),
	(
		'FinOrd',
		'subobject classifier',
		NULL
	),
	(
		'FinOrd',
		'cartesian closed',
		NULL
	),
	(
		'FinOrd',
		'sequential colimits',
		NULL
	),
	(
		'FinOrd',
		'countable products',
		NULL
	),
	(
		'FinOrd',
		'skeletal',
		'trivial'
	),
	(
		'FinOrd',
		'Malcev',
		NULL
	);