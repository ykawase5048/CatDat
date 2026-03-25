INSERT INTO special_morphisms (
	category_id,
	type,
	description,
	reason
)
VALUES
(
	'0',
	'monomorphisms',
	'none',
	'trivial'
),
(
	'1',
	'monomorphisms',
	'every morphism',
	'trivial'
),
(
	'2',
	'monomorphisms',
	'every morphism',
	'trivial'
),
(
	'Set',
	'monomorphisms',
	'injective maps',
	'For the non-trivial direction, if $f : X \to Y$ is a monomorphism of sets and $a,b \in X$ satisfy $f(a) = f(b)$, then $f \circ a = f \circ b$ when we regard $a,b$ as morphisms $a,b : 1 \to X$. Hence, $a = b$. More generally, if $\mathcal{C}$ is a category that admits a faithful and representable functor $U : \mathcal{C} \to \mathbf{Set}$, then the monomorphisms in $\mathcal{C}$ are precisely the morphisms whose $U$-image is injective.'
),
(
	'Top',
	'monomorphisms',
	'injective continuous maps',
	'The same proof as for $\mathbf{Set}$ can be used.'
),
-- code duplication ahead 🚨
(
	'Ab',
	'monomorphisms',
	'injective homomorphisms',
	'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
),
(
	'Grp',
	'monomorphisms',
	'injective homomorphisms',
	'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
),
(
	'Vect',
	'monomorphisms',
	'injective linear maps',
	'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
),
(
	'Ring',
	'monomorphisms',
	'injective ring homomorphisms',
	'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
),
(
	'Alg(R)',
	'monomorphisms',
	'injective ring homomorphisms',
	'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
),
(
	'CRing',
	'monomorphisms',
	'injective ring homomorphisms',
	'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
),
(
	'Rng',
	'monomorphisms',
	'injective rng homomorphisms',
	'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
),
(
	'FinSet',
	'monomorphisms',
	'injective maps',
	'The same proof as for $\mathbf{Set}$ can be used.'
),
(
	'FinAb',
	'monomorphisms',
	'injective homomorphisms',
	'Let $f : A \to B$ be a monomorphism of finite abelian groups. Let $a \in A$ be in the kernel of $a$, say of order $n$. Then we may view $a$ as a morphism $a : \mathbb{Z}/n \to A$ with $f \circ a = 0$, and $\mathbb{Z}/n$ is finite. Hence, $a = 0$.'
),
(
	'Abfg',
	'monomorphisms',
	'injective homomorphisms',
	'Let $f : A \to B$ be a monomorphism of finitely generated abelian groups. Let $a \in A$ be in the kernel of $a$. Then we may view $a$ as a morphism $a : \mathbb{Z} \to A$ with $f \circ a = 0$, and $\mathbb{Z}$ is finitely generated. Hence, $a = 0$.'
),
(
	'Set*',
	'monomorphisms',
	'injective pointed maps',
	'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
),
(
	'sSet',
	'monomorphisms',
	'pointwise injective transformations',
	'If $a : F \to G$ is a monomorphism of simplicial sets, then the diagonal morphism $F \to F \times_G F$ is an isomorphism, so that for every $n$ the diagonal morphism $F(n) \to F(n) \times_{G(n)} F(n)$ is an isomorphism, i.e., $a(n) : F(n) \to G(n)$ is a monomorphism. This argument works for every functor category where the target has fiber products.'
),
(
	'Mon',
	'monomorphisms',
	'injective homomorphisms',
	'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
),
(
	'CMon',
	'monomorphisms',
	'injective homomorphisms',
	'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
),
(
	'Pos',
	'monomorphisms',
	'injective order-preserving functions',
	'The same proof as for $\mathbf{Set}$ can be used.'
),
(
	'walking_morphism',
	'monomorphisms',
	'every morphism',
	'It is a thin category.'
),
(
	'walking_composable_pair',
	'monomorphisms',
	'every morphism',
	'It is a thin category.'
),
(
	'M-Set',
	'monomorphisms',
	'injective $M$-maps',
	'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
),
(
	'R-Mod',
	'monomorphisms',
	'injective $R$-linear maps',
	'This holds in every finitary algebraic category: the forgetful functor to $\mathbf{Set}$ is faithful, hence reflects monomorphisms, and it is continuous (even representable), hence preserves monomorphisms.'
),
(
	'Sh(X)',
	'monomorphisms',
	'morphisms of sheaves that are injective on every open subset',
	'For the non-trivial direction, assume that $f : F \to G$ is a monomorphism of sheaves on $X$. Then the diagonal $F \to F \times_G F$ is an isomorphism. Since pullbacks of sheaves are constructed section-wise, it follows that the diagonal $F(U) \to F(U) \times_{G(U)} F(U)$ is an isomorphism for every open set $U \subseteq X$. But this means that $f(U) : F(U) \to G(U)$ is injective.'
),
(
	'Sh(X,Ab)',
	'monomorphisms',
	'morphisms of abelian sheaves that are injective on every open subset',
	'For the non-trivial direction, assume that $f : F \to G$ is a monomorphism of abelian sheaves on $X$. Then the diagonal $F \to F \times_G F$ is an isomorphism. Since pullbacks of abelian sheaves are constructed section-wise, it follows that the diagonal $F(U) \to F(U) \times_{G(U)} F(U)$ is an isomorphism for every open set $U \subseteq X$. But this means that $f(U) : F(U) \to G(U)$ is injective.'
),
(
	'Met',
	'monomorphisms',
	'injective non-expansive maps',
	'The same proof as for $\mathbf{Set}$ can be used.'
),
(
	'Met_oo',
	'monomorphisms',
	'injective non-expansive maps',
	'The same proof as for $\mathbf{Set}$ can be used.'
),
(
	'Met_c',
	'monomorphisms',
	'injective continuous maps',
	'The same proof as for $\mathbf{Set}$ can be used.'
),
(
	'Ban',
	'monomorphisms',
	'injective linear contractions',
	'The unit ball functor $U : \mathbf{Ban} \to \mathbf{Set}$ is faithful and representable (by $\mathbb{C}$), hence reflects and preserves monomorphisms.'
),
(
	'Man',
	'monomorphisms',
	'injective smooth maps',
	'The same proof as for $\mathbf{Set}$ can be used.'
),
(
	'Meas',
	'monomorphisms',
	'injective measurable maps',
	'The same proof as for $\mathbf{Set}$ can be used.'
),
(
	'N',
	'monomorphisms',
	'every morphism',
	'It is a thin category.'
),
(
	'Cat',
	'monomorphisms',
	'faithful functors that are injective on objects',
	'Faithful functors that are injective on objects are clearly monomorphisms. For the converse, assume that $F : \mathcal{C} \to \mathcal{D}$ is a monomorphic functor. Two objects $A,B \in \mathcal{C}$ with $F(A) = F(B)$ can be regarded as functors $A,B : 1 \to \mathcal{C}$ from the trivial category satisfying $F \circ A = F \circ B$, so that $A = B$. Now assume that $f,g : A \to B$ are morphisms in $\mathcal{C}$ with $F(f) = F(g)$. These can be regarded as functors $f,g : \{ 0 \to 1 \} \to \mathcal{C}$ from the walking morphism category satisfying $F \circ f = F \circ g$, so that $f = g$.'
),
(
	'On',
	'monomorphisms',
	'every morphism',
	'It is a thin category.'
),
(
	'Fld',
	'monomorphisms',
	'every morphism',
	'It is well-known that field homomorphisms are injective.'
),
(
	'FreeAb',
	'monomorphisms',
	'injective homomorphisms',
	'Let $f : A \to B$ be a monomorphism of free abelian groups. Let $a \in A$ be in the kernel of $a$. Then we may view $a$ as a morphism $a : \mathbb{Z} \to A$ with $f \circ a = 0$, and $\mathbb{Z}$ is free. Hence, $a = 0$.'
),
(
	'Z',
	'monomorphisms',
	'pointwise injective natural transformations',
	'If $a : F \to G$ is a monomorphism of Z-functors, then the diagonal morphism $F \to F \times_G F$ is an isomorphism, so that for every $R$ the diagonal morphism $F(R) \to F(R) \times_{G(R)} F(R)$ is an isomorphism, i.e., $a(R) : F(R) \to G(R)$ is a monomorphism. This argument works for every functor category where the target has fiber products.'
),
(
	'BG',
	'monomorphisms',
	'every morphism',
	'trivial'
),
(
	'BGf',
	'monomorphisms',
	'every morphism',
	'trivial'
),
(
	'BN',
	'monomorphisms',
	'every morphism',
	'This is because addition of natural numbers is cancellative.'
),
(
	'walking_pair',
	'monomorphisms',
	'every morphism',
	'trivial'
),
(
	'walking_isomorphism',
	'monomorphisms',
	'every morphism',
	'trivial'
),
(
	'Setne',
	'monomorphisms',
	'injective maps',
	'The same proof as for $\mathbf{Set}$ can be used.'
),
(
	'B',
	'monomorphisms',
	'every morphism',
	'trivial'
),
(
	'FI',
	'monomorphisms',
	'every morphism',
	'trivial'
),
(
	'FS',
	'monomorphisms',
	'bijective maps',
	'Assume that $f : X \to Y$ is a monomorphism in this category. If $a,b \in X$ are such that $a \neq b$ but $f(a) = f(b)$, let $h : X \to X$ be the transposition that swaps $a$, $b$. Then $f \circ \mathrm{id}_X = f = f \circ h$, so by assumption $\mathrm{id}_X = h$, a contradiction. This shows that $f$ is bijective.'
),
(
	'BOn',
	'monomorphisms',
	'every ordinal number',
	'This is because ordinal addition is left-cancellative.'
),
(
	'FinOrd',
	'monomorphisms',
	'injective order-preserving maps',
	'The same proof as for $\mathbf{Set}$ can be used.'
),
(
	'Rel',
	'monomorphisms',
	'A relation $R : A \to B$ is a monomorphism iff the map $R_* : P(A) \to P(B)$ defined by $T \mapsto \{b \in B : \exists \, a \in T: (a,b) \in R \}$ is injective.',
	'See <a href="https://math.stackexchange.com/questions/350716/" target="_blank">MSE/350716</a>.'
),
(
	'Sp',
	'monomorphisms',
	'pointwise injective natural transformations',
	'If $a : F \to G$ is a monomorphism of species, then the diagonal morphism $F \to F \times_G F$ is an isomorphism, so that for every $x$ the diagonal morphism $F(x) \to F(x) \times_{G(x)} F(x)$ is an isomorphism, i.e., $a(x) : F(x) \to G(x)$ is a monomorphism. This argument works for every functor category where the target has fiber products.'
),
(
	'real_interval',
	'monomorphisms',
	'every morphism',
	'It is a thin category.'
),
(
	'Zdiv',
	'monomorphisms',
	'every morphism',
	'It is a thin category.'
),
(
	'Noo',
	'monomorphisms',
	'every morphism',
	'It is a thin category.'
);