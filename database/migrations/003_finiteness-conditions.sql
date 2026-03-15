INSERT INTO CATEGORIES (
	id,
	name,
	notation,
	objects,
	morphisms,
	description,
	nlab_link
)
VALUES
    (
		'FinSet',
		'category of finite sets',
		'$\mathbf{FinSet}$',
		'finite sets',
		'maps',
		NULL,
		'https://ncatlab.org/nlab/show/FinSet'
	),
	(
		'FinAb',
		'category of finite abelian groups',
		'$\mathbf{FinAb}$',
		'finite abelian groups',
		'group homomorphisms',
		NULL,
		'https://ncatlab.org/nlab/show/finite+abelian+group'
	),
	(
		'Abfg',
		'category of finitely generated abelian groups',
		'$\mathbf{Ab}_{\mathrm{fg}}$',
		'finitely generated abelian groups',
		'group homomorphisms',
		NULL,
		'https://ncatlab.org/nlab/show/finitely+generated+module'
	),
    (
		'B',
		'category of finite sets and bijections',
		'$\mathbb{B}$',
		'finite sets',
		'bijective maps',
		'This category is also known as the permutation groupoid. It appears in the definition of a combinatorial species.',
		'https://ncatlab.org/nlab/show/permutation+groupoid'
	),
	(
		'FI',
		'category of finite sets and injections',
		'$\mathrm{FI}$',
		'finite sets',
		'injective maps',
		'This category is badly-behaved in itself, but plays an important role in representation theory.',
		NULL
	),
	(
		'FS',
		'category of finite sets and surjections',
		'$\mathrm{FS}$',
		'finite sets',
		'surjective maps',
		'This category is badly-behaved in itself, but it appears in representation theory. It has two connected components, consisting of the empty set and the non-empty finite sets.',
		NULL
	);