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
		'Fld',
		'category of fields',
		'$\mathbf{Fld}$',
		'fields',
		'field homomorphisms (i.e., ring homomorphisms)',
		'This is a typical example of a bad category of good objects.',
		'https://ncatlab.org/nlab/show/Field'
	),
	(
		'Ban',
		'category of Banach spaces with linear contractions',
		'$\mathbf{Ban}$',
		'Banach spaces over $\mathbb{C}$',
		'linear contractions, i.e. linear maps of norm $\leq 1$',
		'The choice of morphisms is similar to that of $\mathbf{Met}$ which yields the best categorical properties.',
		'https://ncatlab.org/nlab/show/Banach+space'
	),
	(
		'Meas',
		'category of measurable spaces',
		'$\mathbf{Meas}$',
		'measurable spaces',
		'measurable maps',
		'Limits and colimits can be constructed in the same way as for topological spaces.',
		'https://ncatlab.org/nlab/show/Meas'
	),

	(
		'Cat',
		'category of small categories',
		'$\mathbf{Cat}$',
		'small categories',
		'functors',
		'This is the category of small categories and functors between them. It is the prototype of a 2-category, but here we only treat it as a 1-category.',
		'https://ncatlab.org/nlab/show/Cat'
	),
	(
		'FinOrd',
		'category of finite orders',
		'$\mathbf{FinOrd}$',
		'finite totally ordered sets',
		'order-preserving maps',
		'This is also known as the augmented simplex category. The finite orders of the form $\{0,1,\dotsc,n-1\}$ for $n \in \mathbb{N}$ provide a skeleton (for $n = 0$ this includes the empty set), and the category is often presented in this way.',
		'https://ncatlab.org/nlab/show/augmented+simplex+category'
	),
	(
		'Sp',
		'category of combinatorial species',
		'$\mathbf{Sp}$',
		'combinatorial species, defined as functors $\mathbb{B} \to \mathbf{FinSet}$, where $\mathbb{B}$ is the category of finite sets and bijections',
		'natural transformations',
		'Most categorical properties are immediately inferred from $\mathbf{FinSet}$. Notice that this category is not locally small; it is just equivalent to a locally small category.',
		'https://ncatlab.org/nlab/show/species'
	);