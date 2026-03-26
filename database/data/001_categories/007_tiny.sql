INSERT INTO categories (
	id,
	name,
	notation,
	objects,
	morphisms,
	description,
	nlab_link,
	dual_category_id
)
VALUES
(
	'0',
	'empty category',
	'$0$',
	'no objects',
	'no morphisms',
	'This is the category with no objects and no morphisms. It is the initial object in the category of (small) categories.',
	'https://ncatlab.org/nlab/show/empty+category',
	NULL
),
(
	'1',
	'trivial category',
	'$\mathbf{1}$',
	'a single object $0$',
	'only the identity morphism',
	'This is the simplest category, consisting of a single object $0$ and its identity morphism $0 \to 0$. It is the terminal object in the category of small categories.',
	'https://ncatlab.org/nlab/show/terminal+category',
	NULL
),
(
	'2',
	'discrete category on two objects',
	'$\mathbf{2}$',
	'two objects',
	'only the two identity morphisms',
	'For a more concrete representation, this is the subcategory of $\mathbf{CRing}$ of the two fields $\mathbb{F}_2$ and $\mathbb{F}_3$.',
	NULL,
	NULL
),
(
	'walking_morphism',
	'walking morphism',
	'$\{0 \to 1\}$',
	'$0$, $1$',
	'the two identities and a single morphism from $0$ to $1$',
	'This is also known as the interval category. It has the property that functors $\{0 \to 1\} \to \mathcal{C}$ are the same as morphisms in $\mathcal{C}$.',
	'https://ncatlab.org/nlab/show/interval+category',
	NULL
),
(
	'walking_pair',
	'walking parallel pair of morphisms',
	'$\{0 \rightrightarrows 1 \}$',
	'two objects $0$ and $1$',
	'the two identities and two parallel morphisms from $0$ to $1$',
	'The name of this category comes from the fact that it consists of two parallel morphisms, and a functor out of this category is the same as a parallel pair of morphisms in the target category.',
	'https://ncatlab.org/nlab/show/walking+structure',
	NULL
),
(
	'walking_isomorphism',
	'walking isomorphism',
	'$\{0 \rightleftarrows 1\}$',
	'two objects $0$ and $1$',
	'identities, and two morphisms $0 \to 1$ and $1 \to 0$ that are mutually inverse',
	'The name of this category comes from the fact that it consists of two objects and an isomorphism between them, and a functor out of this category is the same as an isomorphism in the target category. The walking isomorphism is actually equivalent to the trivial category.',
	'https://ncatlab.org/nlab/show/walking+isomorphism',
	NULL
),
(
	'walking_composable_pair',
	'walking composable pair',
	'$\{ 0 \to 1 \to 2 \}$',
	'three objects $0,1,2$',
	'a single morphism from each natural number to one greater than or equal to it',
	'The name of this category comes from the fact that a functor out of it is the same as a composable pair of morphisms.',
	'https://ncatlab.org/nlab/show/composable+pair',
	NULL
);