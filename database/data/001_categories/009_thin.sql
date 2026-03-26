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
	'N',
	'partial order of natural numbers',
	'$(\mathbb{N},\leq)$',
	'natural numbers $0, 1, 2, \dotsc$',
	'a unique morphism $(n,m) : n \to m$ if $n \leq m$',
	'This can also be seen as the path category of the infinite linear graph $\bullet \to \bullet \to \bullet \to \cdots$.',
	NULL,
	NULL
),
(
	'real_interval',
	'partial order [0,1]',
	'$([0,1],\leq)$',
	'real numbers between $0$ and $1$',
	'a unique morphism $(s,t) : s \to t$ when $s \leq t$',
	'Every partial order can be regarded as a thin category. This is a specific example. This category is locally $\aleph_1$-presentable (in fact, <i>every</i> object is $\aleph_1$-presentable), but not locally finitely presentable (in fact, only $0$ is finitely presentable).',
	'https://ncatlab.org/nlab/show/interval',
	NULL
),
(
	'Zdiv',
	'preorder of integers w.r.t. divisibility',
	'$(\mathbb{Z},\mid)$',
	'integers',
	'a unique morphism $(a,b) : a \to b$ if $a$ divides $b$',
	'This is a preorder, not a partial order, because $a$ and $-a$ divide each other, but are not equal for $a \neq 0$. Notice that this category is equivalent (but not isomorphic) to $(\mathbb{N},\mid)$.',
	NULL,
	NULL
),
(
	'Noo',
	'partial order of extended natural numbers',
	'$(\mathbb{N}_\infty, \leq)$',
	'natural numbers and $\infty$',
	'a unique morphism $(n, m) : n \to m$ if $n \leq m$, where of course $n \leq \infty$ for all $n$',
	NULL,
	NULL,
	NULL
),
(
	'On',
	'partial order of ordinal numbers',
	'$(\mathbf{On},\leq)$',
	'ordinal numbers',
	'a unique morphism $(\alpha,\beta): \alpha \to \beta$ if $\alpha \leq \beta$',
	'This is a large variant of the partial order of natural numbers.',
	NULL,
	NULL
);