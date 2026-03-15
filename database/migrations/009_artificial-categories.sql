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
		'FreeAb',
		'category of free abelian groups',
		'$\mathbf{FreeAb}$',
		'free abelian groups',
		'group homomorphisms',
		NULL,
		NULL
	),
	(
		'Setne',
		'category of non-empty sets',
		'$\mathbf{Set}_{\neq \emptyset}$',
		'non-empty sets',
		'maps',
		'This entry demonstrates that removing an object (the empty set) can drastically change the properties of a category. In particular, this category is neither complete nor cocomplete.',
		'https://ncatlab.org/nlab/show/inhabited+set'
	);