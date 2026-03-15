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
		'Set',
		'category of sets',
		'$\mathbf{Set}$',
		'sets',
		'maps',
		'The category of sets plays a fundamental role in category theory. Due to the Yoneda embedding, many results about general categories can be reduced to the category of sets. It is also usually the first example of a category that one encounters.',
		'https://ncatlab.org/nlab/show/Set'
	),
	(
		'Ab',
		'category of abelian groups',
		'$\mathbf{Ab}$',
		'abelian groups',
		'group homomorphisms',
		'This is the prototype of an abelian category.',
		'https://ncatlab.org/nlab/show/Ab'
	),
	(
		'Top',
		'category of topological spaces',
		'$\mathbf{Top}$',
		'topological spaces',
		'continuous functions',
		'This is the most basic category of geometric objects.',
		'https://ncatlab.org/nlab/show/Top'
	),
	(
		'Grp',
		'category of groups',
		'$\mathbf{Grp}$',
		'groups',
		'group homomorphisms',
		NULL,
		'https://ncatlab.org/nlab/show/Grp'
	),
	(
		'Vect',
		'category of vector spaces',
		'$\mathbf{Vect}_K$',
		'vector spaces over a field $K$',
		'linear maps',
		'This is a special case of the category of modules over a ring, where the ring is a field. It is the prototype of a split abelian category.',
		'https://ncatlab.org/nlab/show/Vect'
	),
	(
		'Ring',
		'category of rings',
		'$\mathbf{Ring}$',
		'rings',
		'ring homomorphisms',
		'Here, rings always have a unit, and homomorphisms preserve them.',
		'https://ncatlab.org/nlab/show/Ring'
	),
	(
		'CRing',
		'category of commutative rings',
		'$\mathbf{CRing}$',
		'commutative rings',
		'ring homomorphisms',
		NULL,
		'https://ncatlab.org/nlab/show/CRing'
	),
	(
		'Rng',
		'category of rngs',
		'$\mathbf{Rng}$',
		'rngs, that is, non-unital rings',
		'maps that preserve addition and multiplication',
		NULL,
		'https://ncatlab.org/nlab/show/Rng'
	),
    (
		'Set*',
		'category of pointed sets',
		'$\mathbf{Set}_*$',
		'pointed sets',
		'pointed maps',
		'This is the category of sets with a distinguished element, often called the base point. A map is called pointed when it preserves the base point.',
		'https://ncatlab.org/nlab/show/pointed+set'
	),
    (
		'Mon',
		'category of monoids',
		'$\mathbf{Mon}$',
		'monoids',
		'monoid homomorphisms',
		NULL,
		'https://ncatlab.org/nlab/show/category+of+monoids'
	),
	(
		'Pos',
		'category of posets',
		'$\mathbf{Pos}$',
		'posets (i.e., partial orders)',
		'order-preserving functions',
		NULL,
		'https://ncatlab.org/nlab/show/Pos'
	),
    (
		'M-Set',
		'category of M-sets',
		'$M{-}\mathbf{Set}$',
		'sets with a left action of a monoid $M$',
		'maps that are compatible with the $M$-action, meaning $f(m \cdot x)=m \cdot f(x)$, also called $M$-maps',
		'Here, $M$ can be any monoid. But the most important special case is that of a group.',
		'https://ncatlab.org/nlab/show/MSet'
	),
	(
		'R-Mod',
		'category of left R-modules',
		'$R{-}\mathbf{Mod}$',
		'left $R$-modules',
		'$R$-linear maps',
		'This is the category of left modules over a ring $R$. It is the prototype of an abelian category. The category of right modules is the same with the opposite ring $R^{\mathrm{op}}$, hence not listed here. The non-properties refer to the case that the ring is non-trivial, since for the trivial ring we get a trivial category which has all properties anyway. The category $R{-}\mathbf{Mod}$ is split abelian iff $R$ is a semisimple ring, so usually it is not the case, which is why we have negated this property here.',
		'https://ncatlab.org/nlab/show/module'
	),
    (
		'Rel',
		'category of sets and relations',
		'$\mathbf{Rel}$',
		'sets',
		'A morphism from $A$ to $B$ is a relation, i.e. a subset of $A \times B$.',
		'This category is self-dual as it can be: There is an isomorphism $\mathbf{Rel} \cong \mathbf{Rel}^{\mathrm{op}}$ that is the identity on objects and maps a relation to its opposite relation. It is the prototype of a dagger-category.',
		'https://ncatlab.org/nlab/show/Rel'
	);