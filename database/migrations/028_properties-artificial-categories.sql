INSERT INTO category_properties (
	category_id,
	property_id,
	reason
)
VALUES
	(
		'FreeAb',
		'locally small',
		'There is a forgetful functor $\mathbf{FreeAb} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'FreeAb',
		'additive',
		'This follows easily from the fact for abelian groups.'
	),
	(
		'FreeAb',
		'coproducts',
		'free abelian groups are closed under direct sums of abelian groups'
	),
	(
		'FreeAb',
		'well-powered',
		'This is clear since the monomorphisms are injective.'
	),
	(
		'FreeAb',
		'well-copowered',
		'See <a href="https://math.stackexchange.com/questions/5025660" target="_blank">MSE/5025660</a>.'
	),
	(
		'FreeAb',
		'equalizers',
		'Subgroups of free abelian groups are free abelian.'
	),
	(
		'FreeAb',
		'generator',
		'As for $\mathbf{Ab}$, the group $\mathbb{Z}$ is a generator.'
	),
	(
		'FreeAb',
		'cogenerator',
		'It is easy to check that $\mathbb{Z}$ is a cogenerator for free abelian groups.'
	),
	(
		'FreeAb',
		'Malcev',
		'follows in the same way as for abelian groups'
	),

	(
		'Setne',
		'locally small',
		'There is a forgetful functor $\mathbf{Set}_{\neq \emptyset} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Setne',
		'generator',
		'The one-point set is clearly a generator.'
	),
	(
		'Setne',
		'cogenerator',
		'The two-point set is a cogenerator, this follows as for $\mathbf{Set}$.'
	),
	(
		'Setne',
		'well-powered',
		'This follows from the description of monomorphisms as injective functions.'
	),
	(
		'Setne',
		'well-copowered',
		'This follows from the description of epimorphisms as surjective functions.'
	),
	(
		'Setne',
		'products',
		'Take the product of non-empty sets inside of $\mathbf{Set}$ and observe that it is non-empty by the axiom of choice.'
	),
	(
		'Setne',
		'wide pushouts',
		'The wide pushout taken in $\mathbf{Set}$ is clearly non-empty, and it still satisfies the universal property.'
	),
	(
		'Setne',
		'coequalizers',
		'The coequalizer taken in $\mathbf{Set}$ is clearly non-empty, and it still satisfies the universal property.'
	),
	(
		'Setne',
		'cartesian closed',
		'This follows as for $\mathbf{Set}$, since for non-empty sets $X,Y$ there is at least one function $X \to Y$.'
	),
	(
		'Setne',
		'mono-regular',
		'This follows as for $\mathbf{Set}$.'
	),
	(
		'Setne',
		'epi-regular',
		'This follows as for $\mathbf{Set}$.'
	);