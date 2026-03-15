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
		'inhabited',
		'is',
		'A category is <i>inhabited</i> (or <i>non-empty</i>) if it has at least one object.',
		'https://ncatlab.org/nlab/show/inhabited+set',
		'inhabited',
		TRUE
	),
	(
		'trivial',
		'is',
		'A category is <i>trivial</i> if it is equivalent to the trivial category (with just one object and just one morphism). Equivalently, there is an initial object $0$ such that for every object $A$ the unique morphism $0 \to A$ is an isomorphism. Notice that we do not demand that the category is isomorphic to the trivial category. As a consequence, every inhabited indiscrete category is trivial in our sense.',
		'https://ncatlab.org/nlab/show/terminal+category',
		'trivial',
		TRUE
	),
	(
		'finitary algebraic',
		'is',
		'A category is <i>finitary algebraic</i> if it is equivalent to the category of models of a finitary algebraic theory. This is also known as a variety of finitary algebras.',
		'https://ncatlab.org/nlab/show/algebraic+category',
		NULL,
		TRUE
	),
	(
		'self-dual',
		'is',
		'A category is <i>self-dual</i> if it is equivalent to its opposite (or dual) category.',
		'https://ncatlab.org/nlab/show/opposite+category',
		'self-dual',
		TRUE
	),
	(
		'groupoid',
		'is a',
		'A <i>groupoid</i> is a category in which every morphism is an isomorphism.',
		'https://ncatlab.org/nlab/show/groupoid',
		'groupoid',
		TRUE
	),
	(
		'thin',
		'is',
		'A category is <i>thin</i> when between any pair of objects there is at most one morphism. Such categories correspond to preordered collections of objects.',
		'https://ncatlab.org/nlab/show/thin+category',
		'thin',
		TRUE
	),
	(
		'discrete',
		'is',
		'A category is <i>discrete</i> when every morphism is an identity morphism. Thus, a discrete category is merely a collection of objects.',
		'https://ncatlab.org/nlab/show/discrete+category',
		'discrete',
		FALSE
	),
	(
		'essentially discrete',
		'is',
		'A category is <i>essentially discrete</i> if it is equivalent to a discrete category. Equivalently, it is a thin groupoid. Notice that the nLab calls this property simply "discrete". In contrast to being discrete, clearly this property is invariant under equivalences of categories. An essentially discrete category is the same as a <i>setoid</i> (a set equipped with an equivalence relation).',
		'https://ncatlab.org/nlab/show/discrete+category',
		'essentially discrete',
		TRUE
	),
	(
		'zero morphisms',
		'has',
		'A category has <i>zero morphisms</i> if for every pair of objects $A,B$ there is a distinugished morphism $0_{A,B} : A \to B$, called the zero morphism, such that we have $f \circ 0_{A,B} = 0_{A,C}$ and $0_{B,C} \circ g = 0_{A,C}$ for all morphisms $f : B \to C$ and $g : A \to B$. The zero morphisms are unique if they exist, hence this is actually a property of the category.',
		'https://ncatlab.org/nlab/show/zero+morphism',
		'zero morphisms',
		TRUE
	),
	(
		'preadditive',
		'is',
		'A category is <i>preadditive</i> when it is locally essentially small* and each hom-set carries the structure of an abelian group such that the composition is bilinear. Notice that "preadditive" is an extra structure. The property here just says that some preadditive structure exists.<br>*We demand this instead of the more common "locall small" to ensure that preadditive categories are invariant under equivalences of categories.',
		'https://ncatlab.org/nlab/show/Ab-enriched+category',
		'preadditive',
		TRUE
	),
	(
		'additive',
		'is',
		'A category is <i>additive</i> if it is preadditive and has finite products (equivalently, finite coproducts).',
		'https://ncatlab.org/nlab/show/additive+category',
		'additive',
		TRUE
	),
	(
		'abelian',
		'is',
		'A category is <i>abelian</i> if it is additive, every morphism has a kernel and a cokernel, and every monomorphism and epimorphism is normal. Equivalently, it is additive, has equalizers and coequalizers, and it is mono-regular and epi-regular. As opposed to many other concepts of categories, being abelian turns out to be a mere property. For example, monoidal not just a property.',
		'https://ncatlab.org/nlab/show/abelian+category',
		'abelian',
		TRUE
	),
	(
		'split abelian',
		'is',
		'A category is <i>split abelian</i> if it is abelian and every short exact sequence splits. Equivalently, every object is projective. Equivalently, every object is injective.',
		'https://ncatlab.org/nlab/show/split+exact+sequence',
		'split abelian',
		TRUE
	),
	(
		'Grothendieck abelian',
		'is',
		'A category is <i>Grothendieck abelian</i> if it is abelian, has coproducts (and is therefore cocomplete), a generator, and filtered colimits commute with finite limits. These categories play an important role in homological algebra.',
		'https://ncatlab.org/nlab/show/Grothendieck+category',
		NULL,
		TRUE
	),	
	(
		'locally finitely presentable',
		'is',
		'A category is <i>locally finitely presentable</i> if it is locally essentially small*, cocomplete, and there is a set $S$ of finitely presentable objects such that every object is a filtered colimit of objects in $S$. This is the same as being locally $\aleph_0$-presentable.<br>*Many authors assume the category to be locally small, but this is inconvenient since then locally finitely presentable categories would not be invariant under equivalences of categories.',
		'https://ncatlab.org/nlab/show/locally+finitely+presentable+category',
		NULL,
		TRUE
	),
	(
		'locally presentable',
		'is',
		'Let $\kappa$ be a regular cardinal. A category is <i>locally $\kappa$-presentable</i> if it is locally essentially small*, cocomplete, and there is a set of $\kappa$-presentable objects $S$ such that every object is a $\kappa$-filtered colimit of objects in $S$. A category is <i>locally presentable</i> if it is locally $\kappa$-presentable for some regular cardinal $\kappa$.<br>*Many authors assume the category to be locally small, but this is inconvenient since then locally presentable categories would not be invariant under equivalences of categories.',
		'https://ncatlab.org/nlab/show/locally+presentable+category',
		NULL,
		TRUE
	),
	(
		'locally ℵ₁-presentable',
		'is',
		'This is the special case of the notion of a locally $\kappa$-presentable, where $\kappa = \aleph_1$ is the first uncountable cardinal.',
		'https://ncatlab.org/nlab/show/locally+presentable+category',
		NULL,
		TRUE
	),
	(
		'subobject classifier',
		'has a',
		'A category $\mathcal{C}$ has a <i>subobject classifier</i> if it has finite limits and a monomorphism $\top : 1 \to \Omega$ from the terminal object such that for every monomorphism $m : A \to B$ there is a unique morphism $\chi_m : B \to \Omega$ such that $B \leftarrow A \rightarrow 1$ is the pullback of $B \rightarrow \Omega \leftarrow 1$. Equivalently, the functor $\mathrm{Sub} : \mathcal{C}^{\mathrm{op}} \to \mathbf{Set}^+$ is representable.',
		'https://ncatlab.org/nlab/show/subobject+classifier',
		NULL,
		TRUE
	),
	(
		'elementary topos',
		'is an',
		'An <i>elementary topos</i> is a cartesian closed category with finite limits and a subobject classifier.',
		'https://ncatlab.org/nlab/show/topos',
		NULL,
		TRUE
	),
	(
		'Grothendieck topos',
		'is a',
		'A <i>Grothendieck topos</i> is a category that is equivalent to the category of sheaves on a site.',
		'https://ncatlab.org/nlab/show/Grothendieck+topos',
		NULL,
		TRUE
	),
	(
		'connected',
		'is',
		'A category is <i>connected</i> if it is inhabited and every two objects can be joined via a zig-zag path of morphisms. Equivalently, $\mathcal{C}$ is connected if $\mathcal{C} \simeq \coprod_{i \in I} \mathcal{C}_i$ implies $\mathcal{C}_i \simeq 0$ for some $i$.',
		'https://ncatlab.org/nlab/show/connected+category',
		'connected',
		TRUE
	),
	(
		'balanced',
		'is',
		'A category is <i>balanced</i> if every morphism which is a monomorphism and an epimorphism must be an isomorphism.',
		'https://ncatlab.org/nlab/show/balanced+category',
		'balanced',
		TRUE
	),
	(
		'generator',
		'has a',
		'An object $G$ of a category is called a <i>generator</i> if for every pair of parallel morphisms $f,g : A \to B$, $f = g$ holds if for every morphism $h : G \to A$ we have $f \circ h = g \circ h$. Equivalently, the functor $\mathrm{Hom}(G,-) : \mathcal{C} \to \mathbf{Set}^+$ is faithful. This property refers to the existence of a generator.',
		'https://ncatlab.org/nlab/show/separator',
		'cogenerator',
		TRUE
	),
	(
		'cogenerator',
		'has a',
		'An object $Q$ of a category is called a <i>cogenerator</i> if for every pair of parallel morphisms $f,g : A \to B$, $f = g$ holds if for every morphism $h : B \to Q$ we have $h \circ f = h \circ g$. Equivalently, the functor $\mathrm{Hom}(-,Q) : \mathcal{C}^{\mathrm{op}} \to \mathbf{Set}^+$ is faithful. This property refers to the existence of a cogenerator.',
		'https://ncatlab.org/nlab/show/cogenerator',
		'generator',
		TRUE
	),
	(
		'left cancellative',
		'is',
		'A category is <i>left cancellative</i> if for every morphism $f : A \to B$ and every parallel pair of morphisms $g,h : B \to C$ with $f \circ g = f \circ h$ we have $g = h$. Equivalently, every morphism is a monomorphism.',
		'https://ncatlab.org/nlab/show/cancellative+category',
		'right cancellative',
		TRUE
	),
	(
		'right cancellative',
		'is',
		'A category is <i>right cancellative</i> if for every morphism $f : A \to B$ and every parallel pair of morphisms $g,h : C \to A$ with $g \circ f = h \circ f$ we have $g = h$. Equivalently, every morphism is an epimorphism.',
		'https://ncatlab.org/nlab/show/cancellative+category',
		'left cancellative',
		TRUE
	),
	(
		'Cauchy complete',
		'is',
		'A category is <i>Cauchy complete</i> if every idempotent splits. That is, every idempotent endomorphism $e : X \to X$ (that is, $e^2 = e$) may be written as $e = i \circ p$ for some morphisms $p : X \to Y$ and $i : Y \to X$ with $p \circ i = \mathrm{id}_Y$. Equivalently, the pair $e,\mathrm{id}_X : X \rightrightarrows X$ has an equalizer (or coequalizer).',
		'https://ncatlab.org/nlab/show/Cauchy+complete+category',
		'Cauchy complete',
		TRUE
	),
	(
		'skeletal',
		'is',
		'A category is <i>skeletal</i> when isomorphic objects are already equal. Every category is equivalent to a skeletal category (using the axiom of choice).',
		'https://ncatlab.org/nlab/show/skeleton',
		'skeletal',
		FALSE
	),
	(
		'Malcev',
		'is',
		'A category is <i>Malcev</i> when it has finite limits and every internal reflexive relation is an internal equivalence relation: That is, if $R \subseteq X^2$ is a subobject with $\Delta_X \subseteq R$, then $R$ is symmetric and transitive. The dual of an elementary topos is Malcev.',
		'https://ncatlab.org/nlab/show/Malcev+category',
		NULL,
		TRUE
	);