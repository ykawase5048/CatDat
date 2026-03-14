DELETE FROM category_isomorphisms;

INSERT INTO category_isomorphisms (
	category_id, -- ID of the category
	description, -- description of its isomorphisms
	reason		 -- proof or reference for this description (required)
)
VALUES
	(
		'0',
		'none',
		'trivial'
	),
	(
		'1',
		'every morphism',
		'trivial'
	),
	(
		'2',
		'every morphism',
		'trivial'
	),
	(
		'Set',
		'bijective maps',
		'easy'
	),
	(
		'Ab',
		'bijective homomorphisms',
		'This characterization holds in every algebraic category.'
	),
	(
		'Top',
		'homeomorphisms',
		'easy'
	),
	(
		'Grp',
		'bijective homomorphisms',
		'This characterization holds in every algebraic category.'
	),
	(
		'Vect',
		'bijective linear maps',
		'This characterization holds in every algebraic category.'
	),
	(
		'Ring',
		'bijective ring homomorphisms',
		'This characterization holds in every algebraic category.'
	),
	(
		'CRing',
		'bijective ring homomorphisms',
		'This characterization holds in every algebraic category.'
	),
	(
		'Rng',
		'bijective rng homomorphisms',
		'This characterization holds in every algebraic category.'
	),
	(
		'FinSet',
		'bijective maps',
		'follows exactly as for sets'
	),
	(
		'FinAb',
		'bijective homomorphisms',
		'follows exactly as for abelian groups'
	),
	(
		'Abfg',
		'bijective homomorphisms',
		'follows exactly as for abelian groups'
	),
	(
		'Set*',
		'bijective pointed maps',
		'This characterization holds in every algebraic category.'
	),
	(
		'sSet',
		'natural isomorphisms',
		'This is true for all functor categories.'
	),
	(
		'Mon',
		'bijective homomorphisms',
		'This characterization holds in every algebraic category.'
	),
	(
		'Pos',
		'bijective order-preserving and order-reflecting functions',
		'easy'
	),
	(
		'walking_morphism',
		'the two identities',
		'trivial'
	),
	(
		'M-Set',
		'bijective $M$-maps',
		'This characterization holds in every algebraic category.'
	),
	(
		'R-Mod',
		'bijective $R$-linear maps',
		'This characterization holds in every algebraic category.'
	),
	(
		'Met',
		'bijective isometries',
		'easy'
	),
	(
		'Met_oo',
		'bijective isometries',
		'easy'
	),
	(
		'Met_c',
		'homeomorphisms',
		'This works as for topological spaces.'
	),
	(
		'Ban',
		'bijective linear isometries',
		'easy'
	),
	(
		'Man',
		'diffeomorphisms',
		'by definition'
	),
	(
		'Meas',
		'bijective measurable maps that map measurable sets to measurable sets',
		'easy'
	),
	(
		'N',
		'only the identity morphisms',
		'This is true for every poset (regarded as a category).'
	),
	(
		'Cat',
		'functors that are bijective on objects and morphisms',
		'easy'
	),
	(
		'On',
		'only the identities',
		'This is true for every poset (regarded as a category).'
	),
	(
		'LRS',
		'pairs $(f,f^{\sharp})$ consisting of a homeomorphism $f$ and an isomorphism of sheaves $f^{\sharp}$',
		'easy'
	),
	(
		'Sch',
		'pairs $(f,f^{\sharp})$ consisting of a homeomorphism $f$ and an isomorphism of sheaves $f^{\sharp}$',
		'easy'
	),
	(
		'Fld',
		'bijective field homomorphisms',
		'easy'
	),
	(
		'FreeAb',
		'bijective homomorphisms',
		'follows exactly as for abelian groups'
	),
	(
		'Z',
		'natural isomorphisms',
		'This is true for all functor categories.'
	),
	(
		'BG',
		'every morphism',
		'It is a groupoid.'
	),
	(
		'BGf',
		'every morphism',
		'It is a groupoid.'
	),
	(
		'BN',
		'only the number $0$',
		'The $0$ is the only natural number which has an additive inverse, since for $n > 0$ we have $n + m > 0$ for all $m$.'
	),
	(
		'walking_pair',
		'the two identities',
		'trivial'
	),
	(
		'walking_isomorphism',
		'every morphism',
		'trivial'
	),
	(
		'Setne',
		'bijective maps',
		'follows exactly as for sets'
	),
	(
		'B',
		'every morphism',
		'It is a groupoid by construction.'
	),
	(
		'FI',
		'bijective maps',
		'follows exactly as for sets'
	),
	(
		'FS',
		'bijective maps',
		'follows exactly as for sets'
	),
	(
		'BOn',
		'only the ordinal $0$',
		'The $0$ is the only ordinal which has an additive inverse, since for $\alpha > 0$ we have $\alpha + \beta > 0$ for all $\beta$.'
	),
	(
		'FinOrd',
		'bijective order-preserving maps',
		'This works as for posets, using that injective order-preserving maps must be order-reflecting.'
	),
	(
		'Rel',
		'bijective functions',
		'For the non-trivial direction, assume that $R : A \to B$ is a relation which has an inverse relation $S : B \to A$. For every $a \in A$ we have $(a,a) \in \mathrm{id}_A = S \circ R$, so there is some $b \in B$ with $(a,b) \in R$ (and $(b,a) \in S$). This shows that $R$ is left-total, and for right-total the argument is similar. By symmetry, this also holds for $S$. To show that $R$ is a function, assume $(a,b_1), (a,b_2) \in R$. Choose some $b_3 \in B$ with $(b_3,a) \in S$. It follows $(b_3,b_1) \in S \circ R = \mathrm{id}_A$, so $b_3 = b_1$. Similarly, $(b_3,b_2) \in S \circ R = \mathrm{id}_A$, so $b_3 = b_2$. This shows that $R$ is a function, i.e. left-unique. That $R$ is injective, i.e. right-unique, follows by symmetry. Finally, $R$ is surjective since it is right-total.'
	),
	(
		'Sp',
		'natural isomorphisms',
		'This is the for every functor category.'
	),
	(
		'real_interval',
		'only the identity morphisms',
		'This is true for every poset (regarded as a category).'
	),
	(
		'Zdiv',
		'the identities $(a,a) : a \to a$ and the isomorphisms $(a,-a) : a \to -a$ for $a \in \mathbb{Z}$',
		'trivial'
	),
	(
		'Noo',
		'only the identity morphisms',
		'This is true for every poset (regarded as a category).'
	);