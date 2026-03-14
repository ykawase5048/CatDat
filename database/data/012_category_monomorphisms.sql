DELETE FROM category_monomorphisms;

INSERT INTO category_monomorphisms (
	category_id, -- ID of the category
	description, -- description of its monomorphisms
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
		'injective maps',
		'For the non-trivial direction, if $f : X \to Y$ is a monomorphism of sets and $a,b \in X$ satisfy $f(a) = f(b)$, then $f \circ a = f \circ b$ when we regard $a,b$ as morphisms $a,b : 1 \to X$. Hence, $a = b$. More generally, if $\mathcal{C}$ is a category that admits a faithful and representable functor $U : \mathcal{C} \to \mathbf{Set}$, then the monomorphisms in $\mathcal{C}$ are precisely the morphisms whose $U$-image is injective.'
	),
	(
		'Ab',
		'injective homomorphisms',
		'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
	),
	(
		'Top',
		'injective continuous maps',
		'The same proof as for $\mathbf{Set}$ can be used.'
	),
	(
		'Grp',
		'injective homomorphisms',
		'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
	),
	(
		'Vect',
		'injective linear maps',
		'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
	),
	(
		'Ring',
		'injective ring homomorphisms',
		'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
	),
	(
		'CRing',
		'injective ring homomorphisms',
		'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
	),
	(
		'Rng',
		'injective rng homomorphisms',
		'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
	),
	(
		'FinSet',
		'injective maps',
		'The same proof as for $\mathbf{Set}$ can be used.'
	),
	(
		'FinAb',
		'injective homomorphisms',
		'Let $f : A \to B$ be a monomorphism of finite abelian groups. Let $a \in A$ be in the kernel of $a$, say of order $n$. Then we may view $a$ as a morphism $a : \mathbb{Z}/n \to A$ with $f \circ a = 0$, and $\mathbb{Z}/n$ is finite. Hence, $a = 0$.'
	),
	(
		'Abfg',
		'injective homomorphisms',
		'Let $f : A \to B$ be a monomorphism of finitely generated abelian groups. Let $a \in A$ be in the kernel of $a$. Then we may view $a$ as a morphism $a : \mathbb{Z} \to A$ with $f \circ a = 0$, and $\mathbb{Z}$ is finitely generated. Hence, $a = 0$.'
	),
	(
		'Set*',
		'injective pointed maps',
		'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
	),
	(
		'sSet',
		'pointwise injective transformations',
		'If $a : F \to G$ is a monomorphism of simplicial sets, then the diagonal morphism $F \to F \times_G F$ is an isomorphism, so that for every $n$ the diagonal morphism $F(n) \to F(n) \times_{G(n)} F(n)$ is an isomorphism, i.e., $a(n) : F(n) \to G(n)$ is a monomorphism. This argument works for every functor category where the target has fiber products.'
	),
	(
		'Mon',
		'injective homomorphisms',
		'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
	),
	(
		'Pos',
		'injective order-preserving functions',
		'The same proof as for $\mathbf{Set}$ can be used.'
	),
	(
		'walking_morphism',
		'every morphism',
		'trivial'
	),
	(
		'M-Set',
		'injective $M$-maps',
		'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
	),
	(
		'R-Mod',
		'injective $R$-linear maps',
		'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
	),
	(
		'Met',
		'injective non-expansive maps',
		'The same proof as for $\mathbf{Set}$ can be used.'
	),
	(
		'Met_oo',
		'injective non-expansive maps',
		'The same proof as for $\mathbf{Set}$ can be used.'
	),
	(
		'Met_c',
		'injective continuous maps',
		'The same proof as for $\mathbf{Set}$ can be used.'
	),
	(
		'Ban',
		'injective linear contractions',
		'The unit ball functor $U : \mathbf{Ban} \to \mathbf{Set}$ is faithful and representable (by $\mathbb{C}$), hence reflects and preserves monomorphisms.'
	),
	(
		'Man',
		'injective smooth maps',
		'The same proof as for $\mathbf{Set}$ can be used.'
	),
	(
		'Meas',
		'injective measurable maps',
		'The same proof as for $\mathbf{Set}$ can be used.'
	),
	(
		'N',
		'every morphism',
		'It is a thin category.'
	),
	(
		'Cat',
		'faithful functors that are injective on objects',
		'Faithful functors that are injective on objects are clearly monomorphisms. For the converse, assume that $F : \mathcal{C} \to \mathcal{D}$ is a monomorphic functor. Two objects $A,B \in \mathcal{C}$ with $F(A) = F(B)$ can be regarded as functors $A,B : 1 \to \mathcal{C}$ from the trivial category satisfying $F \circ A = F \circ B$, so that $A = B$. Now assume that $f,g : A \to B$ are morphisms in $\mathcal{C}$ with $F(f) = F(g)$. These can be regarded as functors $f,g : \{ 0 \to 1 \} \to \mathcal{C}$ from the walking morphism category satisfying $F \circ f = F \circ g$, so that $f = g$.'
	),
	(
		'On',
		'every morphism',
		'It is a thin category.'
	),
	(
		'Sch',
		'Morphisms that are radicial and formally unramified.',
		'EGA IV, 17.2.6'
	),
	(
		'Fld',
		'every morphism',
		'It is well-known that field homomorphisms are injective.'
	),
	(
		'FreeAb',
		'injective homomorphisms',
		'Let $f : A \to B$ be a monomorphism of free abelian groups. Let $a \in A$ be in the kernel of $a$. Then we may view $a$ as a morphism $a : \mathbb{Z} \to A$ with $f \circ a = 0$, and $\mathbb{Z}$ is free. Hence, $a = 0$.'
	),
	(
		'Z',
		'pointwise injective natural transformations',
		'If $a : F \to G$ is a monomorphism of Z-functors, then the diagonal morphism $F \to F \times_G F$ is an isomorphism, so that for every $R$ the diagonal morphism $F(R) \to F(R) \times_{G(R)} F(R)$ is an isomorphism, i.e., $a(R) : F(R) \to G(R)$ is a monomorphism. This argument works for every functor category where the target has fiber products.'
	),
	(
		'BG',
		'every morphism',
		'trivial'
	),
	(
		'BGf',
		'every morphism',
		'trivial'
	),
	(
		'BN',
		'every morphism',
		'This is because addition of natural numbers is cancellative.'
	),
	(
		'walking_pair',
		'every morphism',
		'trivial'
	),
	(
		'walking_isomorphism',
		'every morphism',
		'trivial'
	),
	(
		'Setne',
		'injective maps',
		'The same proof as for $\mathbf{Set}$ can be used.'
	),
	(
		'B',
		'every morphism',
		'trivial'
	),
	(
		'FI',
		'every morphism',
		'trivial'
	),
	(
		'FS',
		'bijective maps',
		'Assume that $f : X \to Y$ is a monomorphism in this category. If $a,b \in X$ are such that $a \neq b$ but $f(a) = f(b)$, let $h : X \to X$ be the transposition that swaps $a$, $b$. Then $f \circ \mathrm{id}_X = f = f \circ h$, so by assumption $\mathrm{id}_X = h$, a contradiction. This shows that $f$ is bijective.'
	),
	(
		'BOn',
		'every ordinal number',
		'This is because ordinal addition is left-cancellative.'
	),
	(
		'FinOrd',
		'injective order-preserving maps',
		'The same proof as for $\mathbf{Set}$ can be used.'
	),
	(
		'Rel',
		'A relation $R : A \to B$ is a monomorphism iff the map $R_* : P(A) \to P(B)$ defined by $T \mapsto \{b \in B : \exists \, a \in T: (a,b) \in R \}$ is injective.',
		'See <a href="https://math.stackexchange.com/questions/350716/" target="_blank">MSE/350716</a>.'
	),
	(
		'Sp',
		'pointwise injective natural transformations',
		'If $a : F \to G$ is a monomorphism of species, then the diagonal morphism $F \to F \times_G F$ is an isomorphism, so that for every $x$ the diagonal morphism $F(x) \to F(x) \times_{G(x)} F(x)$ is an isomorphism, i.e., $a(x) : F(x) \to G(x)$ is a monomorphism. This argument works for every functor category where the target has fiber products.'
	),
	(
		'real_interval',
		'every morphism',
		'It is a thin category.'
	),
	(
		'Zdiv',
		'every morphism',
		'It is a thin category.'
	),
	(
		'Noo',
		'every morphism',
		'It is a thin category.'
	);