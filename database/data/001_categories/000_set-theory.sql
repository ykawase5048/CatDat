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
	'Set',
	'category of sets',
	'$\mathbf{Set}$',
	'sets',
	'maps',
	'The category of sets plays a fundamental role in category theory. Due to the Yoneda embedding, many results about general categories can be reduced to the category of sets. It is also usually the first example of a category that one encounters.',
	'https://ncatlab.org/nlab/show/Set',
	'Set_op'
),
(
	'Set_op',
	'dual of the category of sets',
	'$\mathbf{Set}^{\mathrm{op}}$',
	'sets',
	'A morphism $f : X \to Y$ is a map of sets $Y \to X$.',
	'By definition, this category is the dual (or opposite) of <a href="/category/Set">the category of sets</a>.',
	'https://ncatlab.org/nlab/show/opposite+category',
	'Set'
),
(
	'Set*',
	'category of pointed sets',
	'$\mathbf{Set}_*$',
	'pointed sets',
	'pointed maps',
	'This is the category of sets with a distinguished element, often called the base point. A map is called pointed when it preserves the base point.',
	'https://ncatlab.org/nlab/show/pointed+set',
	NULL
),
(
	'Setne',
	'category of non-empty sets',
	'$\mathbf{Set}_{\neq \emptyset}$',
	'non-empty sets',
	'maps',
	'This entry demonstrates that removing an object (the empty set) can drastically change the properties of a category. In particular, this category is neither complete nor cocomplete.',
	'https://ncatlab.org/nlab/show/inhabited+set',
	NULL
),
(
	'Rel',
	'category of sets and relations',
	'$\mathbf{Rel}$',
	'sets',
	'A morphism from $A$ to $B$ is a relation, i.e. a subset of $A \times B$.',
	'This category is self-dual as it can be: There is an isomorphism $\mathbf{Rel} \cong \mathbf{Rel}^{\mathrm{op}}$ that is the identity on objects and maps a relation to its opposite relation. It is the prototype of a dagger-category.',
	'https://ncatlab.org/nlab/show/Rel',
	NULL
);