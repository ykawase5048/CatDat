INSERT INTO special_morphisms (
	category_id,
	type,
	description,
	reason
)
VALUES
(
	'0',
	'isomorphisms',
	'none',
	'trivial'
),
(
	'1',
	'isomorphisms',
	'every morphism',
	'trivial'
),
(
	'2',
	'isomorphisms',
	'every morphism',
	'trivial'
),
(
	'Set',
	'isomorphisms',
	'bijective maps',
	'easy'
),
(
	'Top',
	'isomorphisms',
	'homeomorphisms',
	'easy'
),
-- code duplication ahead 🚨
(
	'Ab',
	'isomorphisms',
	'bijective homomorphisms',
	'This characterization holds in every algebraic category.'
),
(
	'Grp',
	'isomorphisms',
	'bijective homomorphisms',
	'This characterization holds in every algebraic category.'
),
(
	'Vect',
	'isomorphisms',
	'bijective linear maps',
	'This characterization holds in every algebraic category.'
),
(
	'Ring',
	'isomorphisms',
	'bijective ring homomorphisms',
	'This characterization holds in every algebraic category.'
),
(
	'Alg(R)',
	'isomorphisms',
	'bijective ring homomorphisms',
	'This characterization holds in every algebraic category.'
),
(
	'CRing',
	'isomorphisms',
	'bijective ring homomorphisms',
	'This characterization holds in every algebraic category.'
),
(
	'Rng',
	'isomorphisms',
	'bijective rng homomorphisms',
	'This characterization holds in every algebraic category.'
),
(
	'FinSet',
	'isomorphisms',
	'bijective maps',
	'follows exactly as for sets'
),
(
	'FinAb',
	'isomorphisms',
	'bijective homomorphisms',
	'follows exactly as for abelian groups'
),
(
	'Abfg',
	'isomorphisms',
	'bijective homomorphisms',
	'follows exactly as for abelian groups'
),
(
	'Set*',
	'isomorphisms',
	'bijective pointed maps',
	'This characterization holds in every algebraic category.'
),
(
	'sSet',
	'isomorphisms',
	'natural isomorphisms',
	'This is true for all functor categories.'
),
(
	'Mon',
	'isomorphisms',
	'bijective homomorphisms',
	'This characterization holds in every algebraic category.'
),
(
	'CMon',
	'isomorphisms',
	'bijective homomorphisms',
	'This characterization holds in every algebraic category.'
),
(
	'Pos',
	'isomorphisms',
	'bijective order-preserving and order-reflecting functions',
	'easy'
),
(
	'walking_morphism',
	'isomorphisms',
	'the two identities',
	'trivial'
),
(
	'walking_composable_pair',
	'isomorphisms',
	'the three identities',
	'trivial'
),
(
	'M-Set',
	'isomorphisms',
	'bijective $M$-maps',
	'This characterization holds in every algebraic category.'
),
(
	'R-Mod',
	'isomorphisms',
	'bijective $R$-linear maps',
	'This characterization holds in every algebraic category.'
),
(
	'Met',
	'isomorphisms',
	'bijective isometries',
	'easy'
),
(
	'Met_oo',
	'isomorphisms',
	'bijective isometries',
	'easy'
),
(
	'Met_c',
	'isomorphisms',
	'homeomorphisms',
	'This works as for topological spaces.'
),
(
	'Ban',
	'isomorphisms',
	'bijective linear isometries',
	'easy'
),
(
	'Man',
	'isomorphisms',
	'diffeomorphisms',
	'by definition'
),
(
	'Meas',
	'isomorphisms',
	'bijective measurable maps that map measurable sets to measurable sets',
	'easy'
),
(
	'N',
	'isomorphisms',
	'only the identity morphisms',
	'This is true for every poset (regarded as a category).'
),
(
	'Cat',
	'isomorphisms',
	'functors that are bijective on objects and morphisms',
	'easy'
),
(
	'On',
	'isomorphisms',
	'only the identities',
	'This is true for every poset (regarded as a category).'
),
(
	'Sh(X)',
	'isomorphisms',
	'morphisms of sheaves that are bijective on every open set',
	'easy'
),
(
	'Sh(X,Ab)',
	'isomorphisms',
	'morphisms of abelian sheaves that are bijective on every open set',
	'easy'
),
(
	'LRS',
	'isomorphisms',
	'pairs $(f,f^{\sharp})$ consisting of a homeomorphism $f$ and an isomorphism of sheaves $f^{\sharp}$',
	'easy'
),
(
	'Sch',
	'isomorphisms',
	'pairs $(f,f^{\sharp})$ consisting of a homeomorphism $f$ and an isomorphism of sheaves $f^{\sharp}$',
	'easy'
),
(
	'Fld',
	'isomorphisms',
	'bijective field homomorphisms',
	'easy'
),
(
	'FreeAb',
	'isomorphisms',
	'bijective homomorphisms',
	'follows exactly as for abelian groups'
),
(
	'Z',
	'isomorphisms',
	'natural isomorphisms',
	'This is true for all functor categories.'
),
(
	'BG',
	'isomorphisms',
	'every morphism',
	'It is a groupoid.'
),
(
	'BGf',
	'isomorphisms',
	'every morphism',
	'It is a groupoid.'
),
(
	'BN',
	'isomorphisms',
	'only the number $0$',
	'The $0$ is the only natural number which has an additive inverse, since for $n > 0$ we have $n + m > 0$ for all $m$.'
),
(
	'walking_pair',
	'isomorphisms',
	'the two identities',
	'trivial'
),
(
	'walking_isomorphism',
	'isomorphisms',
	'every morphism',
	'trivial'
),
(
	'Setne',
	'isomorphisms',
	'bijective maps',
	'follows exactly as for sets'
),
(
	'B',
	'isomorphisms',
	'every morphism',
	'It is a groupoid by construction.'
),
(
	'FI',
	'isomorphisms',
	'bijective maps',
	'follows exactly as for sets'
),
(
	'FS',
	'isomorphisms',
	'bijective maps',
	'follows exactly as for sets'
),
(
	'BOn',
	'isomorphisms',
	'only the ordinal $0$',
	'The $0$ is the only ordinal which has an additive inverse, since for $\alpha > 0$ we have $\alpha + \beta > 0$ for all $\beta$.'
),
(
	'FinOrd',
	'isomorphisms',
	'bijective order-preserving maps',
	'This works as for posets, using that injective order-preserving maps must be order-reflecting.'
),
(
	'Rel',
	'isomorphisms',
	'bijective functions',
	'For the non-trivial direction, assume that $R : A \to B$ is a relation which has an inverse relation $S : B \to A$. For every $a \in A$ we have $(a,a) \in \mathrm{id}_A = S \circ R$, so there is some $b \in B$ with $(a,b) \in R$ (and $(b,a) \in S$). This shows that $R$ is left-total, and for right-total the argument is similar. By symmetry, this also holds for $S$. To show that $R$ is a function, assume $(a,b_1), (a,b_2) \in R$. Choose some $b_3 \in B$ with $(b_3,a) \in S$. It follows $(b_3,b_1) \in S \circ R = \mathrm{id}_A$, so $b_3 = b_1$. Similarly, $(b_3,b_2) \in S \circ R = \mathrm{id}_A$, so $b_3 = b_2$. This shows that $R$ is a function, i.e. left-unique. That $R$ is injective, i.e. right-unique, follows by symmetry. Finally, $R$ is surjective since it is right-total.'
),
(
	'Sp',
	'isomorphisms',
	'natural isomorphisms',
	'This is the for every functor category.'
),
(
	'real_interval',
	'isomorphisms',
	'only the identity morphisms',
	'This is true for every poset (regarded as a category).'
),
(
	'Zdiv',
	'isomorphisms',
	'the identities $(a,a) : a \to a$ and the isomorphisms $(a,-a) : a \to -a$ for $a \in \mathbb{Z}$',
	'trivial'
),
(
	'Noo',
	'isomorphisms',
	'only the identity morphisms',
	'This is true for every poset (regarded as a category).'
);