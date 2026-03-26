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
	'Pos',
	'category of posets',
	'$\mathbf{Pos}$',
	'posets (i.e., partial orders)',
	'order-preserving functions',
	NULL,
	'https://ncatlab.org/nlab/show/Pos',
	NULL
),
(
	'FinOrd',
	'category of finite orders',
	'$\mathbf{FinOrd}$',
	'finite totally ordered sets',
	'order-preserving maps',
	'This is also known as the augmented simplex category. The finite orders of the form $\{0 < 1 < \cdots < n-1\}$ for $n \in \mathbb{N}$ provide a skeleton (for $n = 0$ this includes the empty set).',
	'https://ncatlab.org/nlab/show/augmented+simplex+category',
	NULL
);