DELETE FROM category_properties;

INSERT INTO category_properties (
	category_id, -- ID of the category
	property_id, -- ID of the property
	reason		 -- proof or reference why the category satisfies the property (if known)
)
VALUES
	(
		'0',
		'preadditive',
		'This is vacuously true.'
	),
	(
		'0',
		'discrete',
		'trivial'
	),
	(
		'0',
		'binary products',
		'This is vacuously true.'
	),
	(
		'0',
		'finite',
		'trivial'
	),
	(
		'1',
		'trivial',
		'trivial'
	),
	(
		'1',
		'finite',
		'trivial'
	),
	(
		'1',
		'discrete',
		'trivial'
	),
	(
		'2',
		'discrete',
		'trivial'
	),
	(
		'2',
		'finite',
		'trivial'
	),
	(
		'2',
		'inhabited',
		'trivial'
	),
	(
		'Set',
		'locally small',
		'The collection of maps between two sets $X,Y$ is a subset of $X \times Y$ and therefore a set.'
	),
	(
		'Set',
		'Grothendieck topos',
		'It is equivalent to the category of sheaves on a one-point space.'
	),
	(
		'Set',
		'finitary algebraic',
		'Use the empty algebraic theory.'
	),
	(
		'Ab',
		'locally small',
		'There is a forgetful functor $\mathbf{Ab} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Ab',
		'abelian',
		'standard'
	),
	(
		'Ab',
		'finitary algebraic',
		'Take the algebraic theory of a commutative group.'
	),
	(
		'Top',
		'locally small',
		'There is a forgetful functor $\mathbf{Top} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Top',
		'complete',
		'Take the limit of the underlying sets and endow it with the coarsest topology making all projections continuous.'
	),
	(
		'Top',
		'cocomplete',
		'Take the colimit of the underlying sets and endow it with the finest topology making all inclusions continuous.'
	),
	(
		'Top',
		'well-powered',
		'This is clear from the classification of monomorphisms as injective continuous maps.'
	),
	(
		'Top',
		'well-copowered',
		'This is clear from the classification of epimorphisms as surjective continuous maps.'
	),
	(
		'Top',
		'infinitary distributive',
		'The canonical continuous map $\coprod_i (X \times Y_i) \to X \times \coprod_{i \in I} Y_i$ is bijective since $\mathbf{Set}$ is infinitary distributive, and one easily checks with the definitions of product and coproduct topologies that it maps open sets to open sets.'
	),
	(
		'Top',
		'generator',
		'The one-point space is a generator since it represents the forgetful functor $\mathbf{Top} \to \mathbf{Set}$.'
	),
	(
		'Top',
		'disjoint coproducts',
		'This follows easily from the corresponding fact for sets.'
	),
	(
		'Grp',
		'locally small',
		'There is a forgetful functor $\mathbf{Grp} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Grp',
		'pointed',
		'The trivial group is a zero object.'
	),
	(
		'Grp',
		'finitary algebraic',
		'Take the algebraic theory of a group.'
	),
	(
		'Grp',
		'mono-regular',
		'See Prop. 4.2 at the <a href="https://ncatlab.org/nlab/show/regular+monomorphism#Examples" target="_blank">nLab</a>.'
	),
	(
		'Grp',
		'disjoint coproducts',
		'It follows from the normal form of the elements of coproducts of groups that the inclusions $G \to G \sqcup H \leftarrow H$ are injective (hence, monomorphisms) and that their intersection is trivial.'
	),
	(
		'Grp',
		'epi-regular',
		'This holds since every epimorphism is surjective, and surjective homomorphism $A \to B$ is the coequalizer of its kernel pair $A \times_B A \rightrightarrows A$.'
	),
	(
		'Grp',
		'Malcev',
		'See Example 2.2.4 in <a href="https://ncatlab.org/nlab/show/Malcev,+protomodular,+homological+and+semi-abelian+categories" target="_blank">Malcev, protomodular, homological and semi-abelian categories</a>.'
	),
	(
		'Vect',
		'locally small',
		'There is a forgetful functor $\mathbf{Vect} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Vect',
		'split abelian',
		'It is a fact from linear algebra that every subspace has a complement.'
	),
	(
		'Vect',
		'finitary algebraic',
		'Take the algebraic theory of a vector space.'
	),
	(
		'Ring',
		'locally small',
		'There is a forgetful functor $\mathbf{Ring} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Ring',
		'finitary algebraic',
		'Take the algebraic theory of a ring.'
	),
	(
		'Ring',
		'strict terminal object',
		'If $f : 0 \to R$ is a homomorphism, then $R$ satisfies $1=f(1)=f(0)=0$, so that $R=0$.'
	),
	(
		'Ring',
		'Malcev',
		'follows in the same way as for (additive) groups'
	),
	(
		'CRing',
		'locally small',
		'There is a forgetful functor $\mathbf{CRing} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'CRing',
		'finitary algebraic',
		'Take the algebraic theory of a commutative ring.'
	),
	(
		'CRing',
		'strict terminal object',
		'If $f : 0 \to R$ is a homomorphism, then $R$ satisfies $1=f(1)=f(0)=0$, so that $R=0$.'
	),
	(
		'CRing',
		'Malcev',
		'follows in the same way as for (additive) groups'
	),
	(
		'Rng',
		'locally small',
		'There is a forgetful functor $\mathbf{Rng} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Rng',
		'finitary algebraic',
		'Take the algebraic theory of a rng.'
	),
	(
		'Rng',
		'pointed',
		'The zero ring is a zero object.'
	),
	(
		'Rng',
		'disjoint coproducts',
		'The coproduct of two rngs $R,S$ has as underlying additive group $R \oplus S \oplus (R \otimes S) \oplus (S \otimes R) \oplus \cdots$ from which the claim easily follows.'
	),
	(
		'Rng',
		'Malcev',
		'follows in the same way as for (additive) groups'
	),
	(
		'FinSet',
		'locally small',
		'There is a forgetful functor $\mathbf{FinSet} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'FinSet',
		'essentially small',
		'Every finite set is isomorphic to some $[n] = \{1,\dotsc,n\}$ for some $n \in \mathbb{N}$.'
	),
	(
		'FinSet',
		'elementary topos',
		'This follows easily from the fact that sets form an elementary topos.'
	),
	(
		'FinSet',
		'generator',
		'The one-point set is a generator since it represents the forgetful functor $\mathbf{FinSet} \to \mathbf{Set}$.'
	),
	(
		'FinSet',
		'cogenerator',
		'The two-element set is a cogenerator.'
	),
	(
		'FinAb',
		'locally small',
		'There is a forgetful functor $\mathbf{FinAb} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'FinAb',
		'essentially small',
		'The underlying set of a finite structure can be chosen to be a subset of $\mathbb{N}$.'
	),
	(
		'FinAb',
		'abelian',
		'follows from the fact for abelian groups'
	),
	(
		'FinAb',
		'self-dual',
		'Pontrjagin duality'
	),
	(
		'Abfg',
		'locally small',
		'There is a forgetful functor $\mathbf{FinAb} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Abfg',
		'essentially small',
		'Every finitely generated abelian group is isomorphic to a group of the form $\mathbb{Z}^n / U$, where $n \in \mathbb{N}$ and $U$ is a subgroup of $\mathbb{Z}^n$. And these constitute a set.'
	),
	(
		'Abfg',
		'abelian',
		'This follows from the fact for abelian groups and the fact that subgroups of finitely generated abelian groups are also finitely generated.'
	),
	(
		'Abfg',
		'generator',
		'The group $\mathbb{Z}$ is a generator since it represents the forgetful functor $\mathbf{Abfg} \to \mathbf{Set}$.'
	),
	(
		'Set*',
		'locally small',
		'There is a forgetful functor $\mathbf{Set}_* \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Set*',
		'pointed',
		'The singleton set is a zero object.'
	),
	(
		'Set*',
		'finitary algebraic',
		'Take the algebraic theory with just one constant.'
	),
	(
		'Set*',
		'subobject classifier',
		'The pointed set $(\{0,1\},1)$ is a subobject classifier.'
	),
	(
		'Set*',
		'cogenerator',
		'The pointed set $(\{0,1\},1)$ is a cogenerator.'
	),
	(
		'Set*',
		'disjoint coproducts',
		'This follows easily from the description of coproducts as wedge sums.'
	),
	(
		'Set*',
		'epi-regular',
		'Every epimorphism is surjective for this category, and in an algebraic category every surjective homomorphism is a regular epimorphism.'
	),
	(
		'sSet',
		'locally small',
		'This follows from the general fact that $[\mathcal{C},\mathcal{D}]$ is locally small when $\mathcal{C}$ is small and $\mathcal{D}$ is locally small, here applied to $\mathcal{C} = \Delta^{\mathrm{op}}$ and $\mathcal{D} = \mathbf{Set}$.'
	),
	(
		'sSet',
		'Grothendieck topos',
		'obvious'
	),
	(
		'sSet',
		'locally finitely presentable',
		'This follows from the fact that the free cocompletion of a small category is locally finitely presentable.'
	),
	(
		'Mon',
		'locally small',
		'There is a forgetful functor $\mathbf{Mon} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Mon',
		'pointed',
		'The trivial monoid is a zero object.'
	),
	(
		'Mon',
		'finitary algebraic',
		'Take the algebraic of a monoid.'
	),
	(
		'Mon',
		'disjoint coproducts',
		'It follows from the normal form of the elements of coproducts of monoids that the inclusions $G \to G \sqcup H \leftarrow H$ are injective (hence, monomorphisms) and that their intersection is trivial.'
	),
	(
		'Pos',
		'locally small',
		'There is a forgetful functor $\mathbf{Pos} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Pos',
		'locally finitely presentable',
		'See <a href="https://ncatlab.org/nlab/show/Locally+Presentable+and+Accessible+Categories" target="_blank">Adamek-Rosicky</a>, Example 1.10.'
	),
	(
		'Pos',
		'cartesian closed',
		'For partial orders $P,Q$ we endow $\hom(P,Q)$ with the partial order in which $f \leq g$ holds iff $f(p) \leq g(p)$ for all $p \in P$. The universal evaluation map is $\hom(P,Q) \times P \to Q$, $(f,p) \mapsto f(p)$, it is order-preserving, and it satisfies the universal property.'
	),
	(
		'Pos',
		'cogenerator',
		'We prove that the poset $\{0 < 1 \}$ is a cogenerator: Let $P$ be a poset and $a,b \in P$ be two elements such that $f(a) = f(b)$ for all order-preserving maps $f : P \to \{0 < 1 \}$. This means that $a$ and $b$ lie in the same upper sets. In particular, $b$ lies in the upper set generated by $a$, meaning %$a \leq b$, and similarly we deduce $b \leq a$. Thus, $a = b$.'
	),
	(
		'Pos',
		'disjoint coproducts',
		'This follows easily from the corresponding fact for sets, since the coproduct of posets is built using the disjoint union.'
	),
	(
		'walking_morphism',
		'finitary algebraic',
		'Take the algebraic theory with no operations but with the equation $x=y$ that is supposed to hold for all elements $x,y$. The algebras for this theory are the empty set and the singleton set, hence we get the equivalence to $\{0 \to 1\}$.'
	),
	(
		'walking_morphism',
		'self-dual',
		'trivial'
	),
	(
		'walking_morphism',
		'finite',
		'trivial'
	),
	(
		'walking_morphism',
		'infinitary distributive',
		'Clearly, this category is (co)complete. Also, the functors $X \mapsto X \times 1 = X$ and $X \mapsto X \times 0 = 0$ are clearly cocontinuous.'
	),
	(
		'walking_morphism',
		'skeletal',
		'The two objects are not isomorphic'
	),
	(
		'M-Set',
		'locally small',
		'There is a forgetful functor $M{-}\mathbf{Set} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'M-Set',
		'Grothendieck topos',
		'It is the category of sheaves on the opposite of the one-object category associated to $M$.'
	),
	(
		'M-Set',
		'finitary algebraic',
		'Take the algebraic theory of an $M$-sets (having a unary operation for each $m \in M$).'
	),
	(
		'R-Mod',
		'locally small',
		'There is a forgetful functor $R{-}\mathbf{Mod} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'R-Mod',
		'abelian',
		'standard'
	),
	(
		'R-Mod',
		'finitary algebraic',
		'Take the algebraic theory of an $R$-module (given by the algebraic theory of an abelian group and for each $r \in R$ a unary operation).'
	),
	(
		'Met',
		'locally small',
		'There is a forgetful functor $\mathbf{Met} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Met',
		'well-powered',
		'This follows since monomorphisms are injective.'
	),
	(
		'Met',
		'equalizers',
		'Just restrict the metric to the equalizer built from the sets.'
	),
	(
		'Met',
		'binary products',
		'The product of two metric spaces $(X,d)$, $(Y,d)$ is $(X \times Y,d)$ with $d((x_1,y_1),(x_2,x_2)) := \sup(d(x_1,x_2),d(y_1,y_2))$.' 
	),
	(
		'Met',
		'terminal object',
		'The one-point metric space is terminal.'
	),
	(
		'Met',
		'coequalizers',
		NULL
	),
	(
		'Met',
		'filtered colimits',
		'Given a filtered diagram $(X_i)$ of metric spaces, take the filtered colimit $X$ of the underlying sets with the following metric: If $x,y \in X$, let $d(x,y)$ be infimum of all $d(x_i,y_i)$, where $x_i,y_i \in X_i$ are some preimages of $x,y$ in some $X_i$. This is only a pseudo-metric, so finally take the associated metric space (Kolmogorov quotient). The definition ensures that each $X_i \to X$ is non-expansive, and the universal property is easy to check.' 
	),
	(
		'Met',
		'strict initial object',
		'This is because the initial object is the empty metric space.'
	),
	(
		'Met',
		'generator',
		'The one-point metric space is a generator since it represents the forgetful functor $\mathbf{Met} \to \mathbf{Set}$.'
	),
	(
		'Met',
		'cogenerator',
		'We claim that $\mathbb{R}$ with the usual metric is a cogenerator. Let $a,b \in X$ be two points of a metric space such that $f(a)=f(b)$ for all non-expansive maps $f : X \to \mathbb{R}$. This applies in particular to $f(x) := d(a,x)$ and shows that $0=d(a,a)=d(a,b)$, so that $a=b$.' 
	),
	(
		'Met_oo',
		'locally small',
		'There is a forgetful functor $\mathbf{Met}_{\infty} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Met_oo',
		'locally ℵ₁-presentable',
		'Example 4.5 in <a href="https://arxiv.org/abs/1504.02660" target="_blank">this preprint</a>'
	),
	(
		'Met_oo',
		'infinitary distributive',
		'This follows from the corresponding fact for topological spaces. Here, the coproduct metric takes value $\infty$ for points in distinct spaces.'
	),
	(
		'Met_oo',
		'cogenerator',
		'The proof is similar to $\mathbf{Met}$, a cogenerator is given by $\mathbb{R} \cup \{\infty\}$ with the metric in which $d(a,\infty)=\infty$ for $a \in \mathbb{R}$. Then one checks that the maps $d(a,-) : X \to \mathbb{R} \cup \{\infty\}$ are non-expansive and finishes as for $\mathbf{Met}$.'
	),
	(
		'Met_oo',
		'disjoint coproducts',
		'This easily follows from the corresponding fact for sets, since coproducts are built using disjoint unions.'
	),
	(
		'Met_c',
		'locally small',
		'There is a forgetful functor $\mathbf{Met}_c \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Met_c',
		'equalizers',
		'Just restrict the metric to the equalizer built from the sets.'
	),
	(
		'Met_c',
		'disjoint coproducts',
		'This easily follows from the corresponding fact for sets, since coproducts are built using disjoint unions.'
	),
	(
		'Met_c',
		'well-powered',
		'follows easily from the fact that monomorphisms here are injective'
	),
	(
		'Met_c',
		'generator',
		'The one-point metric space is a generator since it represents the forgetful functor $\mathbf{Met}_c \to \mathbf{Set}$.'
	),
	(
		'Met_c',
		'cogenerator',
		'The same proof as for $\mathbf{Met}$ shows that $\mathbb{R}$ with the usual metric is a cogenerator.'
	),
	(
		'Met_c',
		'infinitary distributive',
		'This follows from the corresponding fact for topological spaces.'
	),
	(
		'Met_c',
		'countable products',
		 'For finite products, we take the cartesian product with, say, the sup-metric. The prouct of countably many metric spaces $(X_i,d_i)_{i \geq 0}$ is given by the cartesian product $\prod_{i \geq 0} X_i$ with the metric $d(x,y) := \sum_{i \geq 0} d_i(x_i,y_i)/(1 + d_i(x_i,y_i))$. See Engelking''s book <i>General Topoloy</i>.'
	),
	(
		'Ban',
		'locally small',
		'There is a forgetful functor $\mathbf{Ban} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.' 
	),
	(
		'Ban',
		'pointed',
		'The trivial Banach space $\{0\}$ is a zero object.'
	),
	(
		'Ban',
		'locally ℵ₁-presentable',
		'Example 1.48 in <a href="https://ncatlab.org/nlab/show/Locally+Presentable+and+Accessible+Categories" target="_blank">Adamek-Rosicky</a>.'
	),
	(
		'Ban',
		'disjoint coproducts',
		'This follows from the corresponding fact for vector spaces, since the coproduct is built from the direct sum of vector spaces (using the $1$-norm).'
	),
	(
		'Ban',
		'cogenerator',
		'Hahn-Banach shows that $\mathbb{C}$ is a cogenerator'
	),
	(
		'Man',
		'locally small',
		'There is a forgetful functor $\mathbf{Man} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Man',
		'well-powered',
		'follows from the fact that monomorphisms are injective here'
	),
	(
		'Man',
		'distributive',
		'This follows from the corresponding fact for topological spaces.'
	),
	(
		'Man',
		'generator',
		'The $0$-dimensional one-point manifold is a generator since it represents the forgetful functor $\mathbf{Top} \to \mathbf{Set}$.'
	),
	(
		'Man',
		'disjoint finite coproducts',
		'This follows from the corresponding fact for topological spaces.'
	),
	(
		'Man',
		'countable coproducts',
		'Take the usual disjoint union, which is clearly a smooth manifold, still second-countable. (Without that condition, all coproducts would exist.)'
	),
	(
		'Man',
		'Cauchy complete',
		'See Theorem 2.1 at the <a href="https://ncatlab.org/nlab/show/smooth+manifold" target="_blank">nLab</a>.'
	),
	(
		'Meas',
		'locally small',
		'There is a forgetful functor $\mathbf{Meas} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Meas',
		'well-powered',
		'follows from the fact that monomorphisms are injective here'
	),
	(
		'Meas',
		'well-copowered',
		'follows from the fact that epimorphisms are surjective here'
	),
	(
		'Meas',
		'complete',
		'Take the limit of the underlying sets and take the smallest $\sigma$-algebra making all projections measurable.'
	),
	(
		'Meas',
		'cocomplete',
		'Take the colimit of the underlying sets and take the largest $\sigma$-algebra making all inclusions measurable. That is, a set is measurable iff its preimage under each inclusion is measurable.'
	),
	(
		'Meas',
		'infinitary distributive',
		'We need to check that the canonical bijective measurable map $\coprod_i X \times Y_i \to X \times \coprod_i Y_i$ maps measurable sets onto measurable sets. By the description of measurable sets in a disjoint union, it suffices to prove that each $X \times Y_i \to X \times \coprod_i Y_i$ maps measurable sets onto measurable sets. So it suffices to prove that $f : X \times Y \to X \times (Y + Z)$ does that. Using that $f$ is injective and that $f(X \times Y)$ is measurable, it follows that the subsets of $X \times Y$ that are mapped to a measurable set via $f$ form a $\sigma$-algebra. But the $\sigma$-algebra of $X \times Y$ is generated by sets of the form $U \times V$ for measurable subsets $U,V$, and their $f$-images are clearly measurable.'
	),
	(
		'Meas',
		'generator',
		'The one-point measurable space (with the unique $\sigma$-algebra) is a generator since it represents the forgetful functor $\mathbf{Meas} \to \mathbf{Set}$.'
	),
	(
		'Meas',
		'cogenerator',
		'Take the two-element set $2$ endowed with the trivial $\sigma$-algebra (where only $\emptyset$ and $2$ are measurable), and use that $2$ is a cogenerator for $\mathbf{Set}$.'
	),
	(
		'Meas',
		'disjoint coproducts',
		'This follows easily from the corresponding fact for sets, since coproducts are built using disjoint unions here.'
	),
	(
		'N',
		'small',
		'trivial'
	),
	(
		'N',
		'thin',
		'trivial'
	),
	(
		'N',
		'finitely cocomplete',
		'Finitely many natural numbers have a supremum natural number.'
	),
	(
		'N',
		'binary products',
		'Two natural numbers have a minimum.'
	),
	(
		'N',
		'connected limits',
		'Every non-empty set of natural numbers has a minimum.'
	),
	(
		'N',
		'skeletal',
		'The relation $\leq$ is antisymmetric.'
	),
	(
		'Cat',
		'locally small',
		'There is a forgetful functor $\mathbf{Cat} \to \mathbf{Set} \times \mathbf{Set}$, $\mathcal{C} \mapsto (\mathrm{Ob}(\mathcal{C}),\mathrm{Mor}(\mathcal{C}))$, and $\mathbf{Set} \times \mathbf{Set}$ is locally small.'
	),
	(
		'Cat',
		'cartesian closed',
		'See p. 98 in <a href="https://ncatlab.org/nlab/show/Categories+for+the+Working+Mathematician" target="_blank">Mac Lane</a>.'
	),
	(
		'Cat',
		'locally finitely presentable',
		'See <a href="https://mathoverflow.net/questions/84460" target="_blank">MO/84460</a>.'
	),
	(
		'Cat',
		'disjoint coproducts',
		'This follows easily from the description of a coproduct of categories (based on disjoint unions).'
	),
	(
		'On',
		'thin',
		'trivial'
	),
	(
		'On',
		'locally small',
		'trivial'
	),
	(
		'On',
		'cocomplete',
		'Every set of ordinal numbers has a supremum.'
	),
	(
		'On',
		'binary products',
		'For ordinal numbers $\alpha,\beta$ their minimum exists, it is $\alpha$ when $\alpha \leq \beta$ and $\beta$ otherwise.'
	),
	(
		'On',
		'connected limits',
		'Every non-empty set of ordinal numbers has a minimum.'
	),
	(
		'On',
		'well-powered',
		'This is because for every ordinal $\alpha$ the collection of ordinals $\leq \alpha$ is a set (namely, $\alpha + 1$).'
	),
	(
		'On',
		'skeletal',
		'The relation $\leq$ is antisymmetric'
	),
	(
		'LRS',
		'locally small',
		'For two ringed spaces $(X,O_X)$, (Y,O_Y)$, the collection of morphisms $X \to Y$ of ringed spaces is the collection $\prod_{f \in \hom(X,Y)} \hom(O_Y,f_* O_X)$, which is a set since $\hom(X,Y)$ is a set and each $\hom(O_Y,f_* O_X)$ is a set.'
	),
	(
		'LRS',
		'complete',
		'See <a href="https://arxiv.org/abs/1103.2139" target="_blank">Localization of ringed spaces</a> by W. Gillam. See also <a href="https://math.stackexchange.com/questions/1033675" target="_blank">MSE/1033675</a>.'
	),
	(
		'LRS',
		'cocomplete',
		'Demazure-Gabriel''s "Groupes algébriques", I. §1. 1.6'
	),
	(
		'LRS',
		'well-powered',
		NULL
	),
	(
		'LRS',
		'well-copowered',
		NULL
	),
	(
		'LRS',
		'infinitary distributive',
		'See <a href="https://math.stackexchange.com/questions/5036488/" target="_blank">MSE/5036488</a>.'
	),
	(
		'LRS',
		'disjoint coproducts',
		NULL
	),
	(
		'Sch',
		'locally small',
		'There is a forgetful functor $\mathbf{Sch} \to \mathbf{LRS}$ and $\mathbf{LRS}$ is locally small.'
	),
	(
		'Sch',
		'finitely complete',
		NULL
	),
	(
		'Sch',
		'well-powered',
		NULL
	),
	(
		'Sch',
		'infinitary distributive',
		'This follows from the corresponding fact for locally ringed spaces, see <a href="https://math.stackexchange.com/questions/5036488/" target="_blank">MSE/5036488</a>.'
	),
	(
		'Sch',
		'disjoint coproducts',
		NULL
	),
	(
		'Fld',
		'locally small',
		'There is a forgetful functor $\mathbf{Fld} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Fld',
		'filtered colimits',
		'Consider a filtered diagram $(F_i)$ of fields and take the colimit $F$ in the category of commutative rings. Now one checks that $F$ is a field as well, and the universal property remains true for fields.'
	),
	(
		'Fld',
		'connected limits',
		'Consider a connected diagram $(F_i)$ of fields and take the limit $F$ in the category of commutative rings. Now one checks that $F$ is a field as well, and the universal property remains true for fields. Namely, $1 = 0$ in $F$ would imply that $1 = 0$ in each $F_i$ and hence, since the diagram is connected, in some $F_i$, which is a contradiction. And if $x \in F$ is non-zero, then all components $x_i$ are non-zero and hence invertible: Choose some $j$ such that $x_j$ is non-zero. Since there is a zig zag path of morphisms between $i$ and $j$ in the index category, which get mapped to field homomorphisms which are injective, it follows that $x_i$ is non-zero.'
	),
	(
		'Fld',
		'inhabited',
		'trivial'
	),
	(
		'Fld',
		'left cancellative',
		'It is well-known that every field homomorphism is injective and hence a monomorphism.'
	),
	(
		'Fld',
		'well-powered',
		'The subfields of a given field form a set.'
	),
	(
		'FreeAb',
		'locally small',
		'There is a forgetful functor $\mathbf{FreeAb} \to \mathbf{Set}$ and $\mathbf{Ab}$ is locally small.'
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
		'Z',
		'complete',
		'follows immediately from the fact for $\mathbf{Set}$'
	),
	(
		'Z',
		'cocomplete',
		'follows immediately from the fact for $\mathbf{Set}$'
	),
	(
		'Z',
		'infinitary distributive',
		'follows immediately from the fact for $\mathbf{Set}$'
	),
	(
		'Z',
		'exact filtered colimits',
		'follows immediately from the fact for $\mathbf{Set}$'
	),
	(
		'Z',
		'disjoint coproducts',
		'follows immediately from the fact for $\mathbf{Set}$'
	),
	(
		'Z',
		'mono-regular',
		'follows immediately from the fact for $\mathbf{Set}$'
	),
	(
		'Z',
		'epi-regular',
		'follows immediately from the fact for $\mathbf{Set}$'
	),
	(
		'BG',
		'small',
		'trivial'
	),
	(
		'BG',
		'groupoid',
		'trivial'
	),
	(
		'BG',
		'connected',
		'trivial'
	),
	(
		'BG',
		'generator',
		'The unique object is a generator for trivial reasons.'
	),
	(
		'BG',
		'skeletal',
		'There is just one object'
	),
	(
		'BGf',
		'finite',
		'trivial'
	),
	(
		'BGf',
		'groupoid',
		'trivial'
	),
	(
		'BGf',
		'connected',
		'trivial'
	),
	(
		'BGf',
		'generator',
		'The unique object is a generator for trivial reasons.'
	),
	(
		'BGf',
		'skeletal',
		'There is just one object'
	),
	(
		'BN',
		'small',
		'trivial'
	),
	(
		'BN',
		'connected',
		'trivial'
	),
	(
		'BN',
		'self-dual',
		'The identity is a self-duality since the addition is commutative.'
	),
	(
		'BN',
		'generator',
		'The unique object is a generator for trivial reasons.'
	),
	(
		'BN',
		'pullbacks',
		'For natural numbers $n,m$ we need to find a universal pair $p,q$ of natural numbers satisfying $n + p = m + q$. We may assume w.l.o.g. $n \leq m$. Then take $p = m-n$, $q = 0$.'
	),
	(
		'BN',
		'left cancellative',
		'This is because addition of natural numbers is cancellative.'
	),
	(
		'BN',
		'skeletal',
		'There is just one object.'
	),
	(
		'walking_pair',
		'finite',
		'trivial'
	),
	(
		'walking_pair',
		'self-dual',
		'trivial'
	),
	(
		'walking_pair',
		'connected',
		'trivial'
	),
	(
		'walking_pair',
		'generator',
		'It is easy to check that $0$ is a generator.'
	),
	(
		'walking_pair',
		'filtered colimits',
		'Every filtered diagram can be reduced to one of the three trivial diagrams $0 \to 0$, $0 \to 1$, $1 \to 1$, which have colimits $0$, $1$, resp. $1$.'
	),
	(
		'walking_pair',
		'left cancellative',
		'The two morphisms $0 \to 1$ are clearly monomorphisms.'
	),
	(
		'walking_pair',
		'skeletal',
		'The two objects are not isomorphic.'
	),
	(
		'walking_isomorphism',
		'trivial',
		'The inclusion $\{0\} \hookrightarrow \{0 \to 1\}$ is clearly an equivalence.'
	),
	(
		'walking_isomorphism',
		'finite',
		'trivial'
	),
	(
		'Setne',
		'locally small',
		'There is a forgetful functor $\mathbf{Set}_{\neq \emptyset} \to \mathbf{Set}$ and $\mathbf{Ab}$ is locally small.'
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
	),
	(
		'B',
		'locally small',
		'There is a forgetful functor $\mathbb{B} \to \mathbf{Set}$ and $\mathbf{Ab}$ is locally small.'
	),
	(
		'B',
		'essentially small',
		'Every finite set is isomorphic to some $[n] = \{1,\dotsc,n\}$ for some $n \in \mathbb{N}$.'
	),
	(
		'B',
		'groupoid',
		'trivial'
	),
	(
		'B',
		'inhabited',
		'trivial'
	),
	(
		'FI',
		'locally small',
		'There is a forgetful functor $\mathbf{FI} \to \mathbf{Set}$ and $\mathbf{Ab}$ is locally small.'
	),
	(
		'FI',
		'initial object',
		'Take the empty set.'
	),
	(
		'FI',
		'left cancellative',
		'trivial'
	),
	(
		'FI',
		'essentially small',
		'Every finite set is isomorphic to some $[n] = \{1,\dotsc,n\}$ for some $n \in \mathbb{N}$.'
	),
	(
		'FI',
		'generator',
		'The one-point set is a generator since it represents the forgetful functor $\mathbf{FI} \to \mathbf{Set}$.'
	),
	(
		'FI',
		'connected limits',
		NULL
	),
	(
		'FI',
		'mono-regular',
		NULL
	),
	(
		'FI',
		'epi-regular',
		NULL
	),
	(
		'FS',
		'locally small',
		'There is a forgetful functor $\mathbf{FS} \to \mathbf{Set}$ and $\mathbf{Ab}$ is locally small.'
	),
	(
		'FS',
		'essentially small',
		'Every finite set is isomorphic to some $[n] = \{1,\dotsc,n\}$ for some $n \in \mathbb{N}$.'
	),
	(
		'FS',
		'right cancellative',
		'trivial'
	),
	(
		'FS',
		'cogenerator',
		NULL
	),
	(
		'FS',
		'wide pushouts',
		NULL
	),
	(
		'FS',
		'coequalizers',
		NULL
	),
	(
		'FS',
		'mono-regular',
		NULL
	),
	(
		'FS',
		'epi-regular',
		NULL
	),
	(
		'BOn',
		'connected',
		'trivial'
	),
	(
		'BOn',
		'generator',
		'There is just one object.'
	),
	(
		'BOn',
		'cogenerator',
		'There is just one object.'
	),
	(
		'BOn',
		'left cancellative',
		'It is well-known that ordinal addition satisfies $\alpha + \beta = \alpha + \gamma \implies \beta = \gamma$.'
	),
	(
		'BOn',
		'well-copowered',
		'This follows from the description of epimorphisms as finite ordinals, see <a href="https://math.stackexchange.com/questions/5029605" target="_blank">MO/5029605</a>.'
	),
	(
		'BOn',
		'equalizers',
		'See <a href="https://math.stackexchange.com/questions/5029668/" target="_blank">MSE/5029668</a>.'
	),
	(
		'BOn',
		'skeletal',
		'There is just one object.'
	),
	(
		'FinOrd',
		'essentially small',
		'Every finite order is isomorphic to $\{1 < \cdots < n \}$ for some $n \in \mathbb{N}$.'
	),
	(
		'FinOrd',
		'locally small',
		'There is a forgetful functor $\mathbf{FinOrd} \to \mathbf{Set}$ and $\mathbf{Ab}$ is locally small.'
	),
	(
		'FinOrd',
		'finitely complete',
		NULL
	),
	(
		'FinOrd',
		'generator',
		'The one-point finite order is a generator since it represents the forgetful functor $\mathbf{FinOrd} \to \mathbf{Set}$.'
	),
	(
		'FinOrd',
		'cogenerator',
		NULL
	),
	(
		'FinOrd',
		'strict initial object',
		'The empty order is initial and is clearly strict.'
	),
	(
		'FinOrd',
		'coequalizers',
		NULL
	),
	(
		'FinOrd',
		'mono-regular',
		NULL
	),
	(
		'FinOrd',
		'epi-regular',
		NULL
	),
	(
		'Rel',
		'locally small',
		'The set of morphisms $X \to Y$ is the set $P(X \times Y)$.'
	),
	(
		'Rel',
		'self-dual',
		'There is an isomorphism $\mathbf{Rel} \to \mathbf{Rel}^{\mathrm{op}}$ that is the identity on objects (sets) and maps a relation $R \subseteq X \times Y$ to the opposite relation $R^o \subseteq Y \times X$ defined by $R^o := \{(y,x) : (x,y) \in R \}$.'
	),
	(
		'Rel',
		'pointed',
		'The empty set is clearly both initial and terminal.'
	),
	(
		'Rel',
		'generator',
		'One checks that the the one-point set is a generator.'
	),
	(
		'Rel',
		'disjoint coproducts',
		'It is an easy exercise to deduce this from the corresponding fact for sets and that sets form a distributive category.'
	),
	(
		'Rel',
		'well-powered',
		'Any relation $R : A \to B$ induces an injective map $P(A) \to P(B)$, so that in particular there is an injective map $A \to P(B)$.'
	),
	(
		'Sp',
		'essentially small',
		'This holds because $\mathbf{FinSet}$ and $\mathbb{B}$ are essentially small.'
	),
	(
		'Sp',
		'finitely complete',
		'This follows from the corresponding fact for $\mathbf{FinSet}$.'
	),
	(
		'Sp',
		'finitely cocomplete',
		'This follows from the corresponding fact for $\mathbf{FinSet}$.'
	),
	(
		'Sp',
		'mono-regular',
		'This follows from the corresponding fact for $\mathbf{FinSet}$ since there every monomorphism is even effective.'
	),
	(
		'Sp',
		'epi-regular',
		'This follows from the corresponding fact for $\mathbf{FinSet}$ since there every epiomorphism is even effective.'
	),
	(
		'Sp',
		'distributive',
		'This follows from the corresponding fact for $\mathbf{FinSet}$.'
	),
	(
		'Sp',
		'disjoint finite coproducts',
		'This follows from the corresponding fact for $\mathbf{FinSet}$.'
	),
	(
		'real_interval',
		'small',
		'trivial'
	),
	(
		'real_interval',
		'self-dual',
		'Take $t \mapsto 1-t$.'
	),
	(
		'real_interval',
		'distributive',
		NULL
	),
	(
		'real_interval',
		'locally ℵ₁-presentable',
		'See <a href="https://math.stackexchange.com/questions/4481902/locally-presentable-vs-compactly-presentable-categories#comment9399784_4482185" target="_blank">MSE/4481902</a>.'
	),
	(
		'real_interval',
		'skeletal',
		'The relation $\leq$ is antisymmetric.'
	),
	(
		'Zdiv',
		'small',
		'trivial'
	),
	(
		'Zdiv',
		'products',
		'Take the $\gcd$ of a subset.'
	),
	(
		'Zdiv',
		'distributive',
		'Using prime factorizations, one can prove that $\gcd(a, \mathrm{lcm} \{b_i \}) = \mathrm{lcm} \{ \gcd(a, b_i) \}$ for finitely many $b_i$.'
	),
	(
		'Zdiv',
		'locally ℵ₁-presentable',
		'Every $\aleph_1$-directed diagram is eventually constant.'
	),
	(
		'Noo',
		'small',
		'trivial'
	),
	(
		'Noo',
		'coproducts',
		'Take the supremum.'
	),
	(
		'Noo',
		'skeletal',
		'The relation $\leq$ is antisymmetric'
	),
	(
		'Noo',
		'infinitary distributive',
		'One can show that $\sup_i \min(a,b_i) = \min(a, \sup_i b_i)$.'
	),
	(
		'Noo',
		'locally finitely presentable',
		'Every natural number is finitely presentable, and $\infty$ is the colimit of all $n < \infty$.'
	);