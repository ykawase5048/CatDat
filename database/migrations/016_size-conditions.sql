INSERT INTO properties (
	id,
	prefix,
	description,
	nlab_link,
	dual_property_id,
	invariant_under_equivalences
)
VALUES
	(
		'small',
		'is',
		'A category is <i>small</i> when the collection of objects and the collection of morphisms is a set, i.e. small.',
		'https://ncatlab.org/nlab/show/small+category',
		'small',
		FALSE
	),
	(
		'essentially small',
		'is',
		'A category is <i>essentially small</i> when it is equivalent to a small category. In particular, there is a set of objects such that every object is isomorphic to an object in this set. In contrast to the property of being small, being essentially small is invariant under equivalences of categories.',
		'https://ncatlab.org/nlab/show/small+category',
		'essentially small',
		TRUE
	),
	(
		'locally small',
		'is',
		'A category is <i>locally small</i> when for every pair of objects $A,B$ the collection of morphisms $A \to B$ is a set. (Here, we work with a set-theoretic foundation in which there are sets and collections. Categories are based on collections of objects and morphisms.)',
		'https://ncatlab.org/nlab/show/locally+small+category',
		'locally small',
		FALSE
	),
	(
		'locally essentially small',
		'is',
		'A category is <i>locally essentially small</i> when for every pair of objects $A,B$ the collection of morphisms $A \to B$ is isomorphic to a set. (Here, we work with a set-theoretic foundation in which there are sets and collections. Categories are based on collections of objects and morphisms.) Equivalently, the category is equivalent to a locally small category. In contrast to being locally small, this condition is invariant under equivalences of categories. This is why we have added it to the database. For instance, every algebraic category is locally essentially small, but not necessarily locally small. This indicates that this is the "right" notion to work with.',
		NULL,
		'locally essentially small',
		TRUE
	),
	(
		'finite',
		'is',
		'A category is <i>finite</i> if it has finitely many objects and morphisms.',
		'https://ncatlab.org/nlab/show/finite+category',
		'finite',
		FALSE
	),
	(
		'essentially finite',
		'is',
		'A category is <i>essentially finite</i> if it is equivalent to a finite category. Equivalently, there are only finitely many objects up to isomorphism, and the collection of morphisms between any two objects is isomorphic to a finite set. In contrast to being finite, this property is invariant under equivalences of categories.',
		NULL,
		'essentially finite',
		TRUE
	),
	(
		'well-powered',
		'is',
		'A category is <i>well-powered</i> if the collection of subobjects of any object is isomorphic to a set.',
		'https://ncatlab.org/nlab/show/well-powered+category',
		'well-copowered',
		TRUE
	),
	(
		'well-copowered',
		'is',
		'A category is <i>well-copowered</i> if the collection of quotients of any object is isomorphic to a set.',
		'https://ncatlab.org/nlab/show/well-powered+category',
		'well-powered',
		TRUE
	);