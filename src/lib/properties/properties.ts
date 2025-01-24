import type { Property } from '$lib/types'

export const properties: Property[] = [
	{
		id: 'small',
		prefix: 'is',
		description:
			'A category is <i>small</i> when the collection of objects and the collection of morphisms is a set, i.e. small.',
		dual: 'small',
		related: ['essentially small'],
	},
	{
		id: 'locally small',
		prefix: 'is',
		description:
			'A category is <i>locally small</i> when for every pair of objects $A,B$ the collection of morphisms $A \\to B$ is a set, i.e. small.',
		dual: 'locally small',
	},
	{
		id: 'complete',
		prefix: 'is',
		description:
			'A category is <i>complete</i> when every small diagram in the category has a limit.',
		dual: 'cocomplete',
	},
	{
		id: 'cocomplete',
		prefix: 'is',
		description:
			'A category is <i>cocomplete</i> when every small diagram in the category has a colimit.',
		dual: 'complete',
	},
	{
		id: 'cartesian closed',
		prefix: 'is',
		description:
			'A category is <i>cartesian closed</i> if all finite products and exponentials exist.',
		related: ['finite products'],
	},
	{
		id: 'preadditive',
		prefix: 'is',
		description:
			"A category is <i>preadditive</i> when it is locally small and each hom-set carries the structure of an abelian group such that the composition is bilinear. Notice that 'preadditive' is an extra structure. The property here just says that some preadditive structure exists.",
		dual: 'preadditive',
		related: ['additive'],
	},
	{
		id: 'additive',
		prefix: 'is',
		description:
			'A category is <i>additive</i> if it is preadditive and has finite products (equivalently, finite coproducts).',
		dual: 'additive',
		related: ['preadditive', 'finite products'],
	},
	{
		id: 'abelian',
		prefix: 'is',
		description:
			'A category is <i>abelian</i> if it is additive, every morphism has a kernel and a cokernel, and every monomorphism and epimorphism is normal. As opposed to many other concepts of categories, being abelian turns out to be a mere property. For example, monoidal not just a property.',
		dual: 'abelian',
		related: ['additive'],
	},
	{
		id: 'finitely complete',
		prefix: 'is',
		description:
			'A category is <i>finitely complete</i> when every finite diagram has a limit.',
		dual: 'finitely cocomplete',
		related: ['complete'],
	},
	{
		id: 'finitely cocomplete',
		prefix: 'is',
		description:
			'A category is <i>finitely cocomplete</i> when every finite diagram has a colimit.',
		dual: 'finitely complete',
		related: ['cocomplete'],
	},
	{
		id: 'pointed',
		prefix: 'is',
		description:
			'A category is <i>pointed</i> when it has a zero object, i.e. an object which is both initial and terminal.',
		dual: 'pointed',
		related: ['initial object', 'terminal object'],
	},
	{
		id: 'locally finitely presentable',
		prefix: 'is',
		description:
			'A category is <i>locally finitely presentable</i> if it is locally small, cocomplete, and there is a set $S$ of finitely presentable objects such that every object is a filtered colimit of objects in $S$. This is the same as being locally $\\aleph_0$-presentable.',
		related: ['locally presentable'],
	},
	{
		id: 'locally presentable',
		prefix: 'is',
		description:
			'Let $\\kappa$ be a regular cardinal. A category is <i>locally $\\kappa$-presentable</i> if it is locally small, cocomplete, and there is a set of $\\kappa$-presentable objects $S$ such that every object is a $\\kappa$-filtered colimit of objects in $S$. A category is <i>locally presentable</i> if it is locally $\\kappa$-presentable for some regular cardinal $\\kappa$.',
		related: ['locally finitely presentable'],
	},
	{
		id: 'elementary topos',
		prefix: 'is an',
		description:
			'An <i>elementary topos</i> is a cartesian closed category with finite limits and a subobject classifier.',
	},
	{
		id: 'Grothendieck topos',
		prefix: 'is a',
		description:
			'A <i>Grothendieck topos</i> is a category that is equivalent to the category of sheaves on a site.',
		related: ['elementary topos'],
	},
	{
		id: 'well-powered',
		prefix: 'is',
		description:
			'A category is <i>well-powered</i> if the collection of subobjects of any object is a set.',
		dual: 'well-copowered',
	},
	{
		id: 'well-copowered',
		prefix: 'is',
		description:
			'A category is <i>well-copowered</i> if the collection of quotients of any object is a set.',
		dual: 'well-powered',
	},
	{
		id: 'initial object',
		prefix: 'has an',
		description:
			'An <i>initial object</i> is an object that has a unique morphism to every object in the category. This property refers to the existence of an initial object.',
		dual: 'terminal object',
	},
	{
		id: 'terminal object',
		prefix: 'has a',
		description:
			'A <i>terminal object</i> (or <i>final object</i>) is an object that has a unique morphism from every object in the category. This property refers to the existence of a terminal object.',
		dual: 'initial object',
	},
	{
		id: 'products',
		prefix: 'has',
		description:
			'Given a family of objects $(A_i)_{i \\in I}$, a <i>product</i> $\\prod_{i \\in I} A_i$ is defined as an object with morphisms $p_i : \\prod_{i \\in I} A_i \\to A_i$ satisfying the following universal property: For every object $T$ and every family of morphisms $(f_i : T \\to A_i)_{i \\in I}$ there is a unique morphism $f : T \\to \\prod_{i \\in I} A_i$ such that $p_i \\circ f = f_i$ for all $i \\in I$. This property refers to the existence of products.',
		dual: 'coproducts',
	},
	{
		id: 'coproducts',
		prefix: 'has',
		description:
			'Given a family of objects $(A_i)_{i \\in I}$, a <i>coproduct</i> $\\coprod_{i \\in I} A_i$ is defined as an object with morphisms $i_i : A_i \\to \\coprod_{i \\in I} A_i$ satisfying the following universal property: For every object $T$ and every family of morphisms $(f_i : A_i \\to T)_{i \\in I}$ there is a unique morphism $f : \\coprod_{i \\in I} A_i \\to T$ such that $f \\circ i_i = f_i$ for all $i \\in I$. This property refers to the existence of coproducts.',
		dual: 'products',
	},
	{
		id: 'finite products',
		prefix: 'has',
		description:
			'A category has <i>finite products</i> if it has products for finite families of objects. Equivalently, it has a terminal object and binary products.',
		dual: 'finite coproducts',
		related: ['products'],
	},
	{
		id: 'finite coproducts',
		prefix: 'has',
		description:
			'A category has <i>finite coproducts</i> if it has coproducts for finite families of objects. Equivalently, it has an initial object and binary coproducts.',
		dual: 'finite products',
		related: ['coproducts'],
	},
	{
		id: 'binary products',
		prefix: 'has',
		description:
			'A category has <i>binary products</i> if every pair $A,B$ of objects has a product $A \\times B$.',
		dual: 'binary coproducts',
		related: ['finite products'],
	},
	{
		id: 'binary coproducts',
		prefix: 'has',
		description:
			'A category has <i>binary coproducts</i> if every pair $A,B$ of objects has a coproduct $A \\sqcup B$.',
		dual: 'binary products',
		related: ['finite coproducts'],
	},
	{
		id: 'equalizers',
		prefix: 'has',
		description:
			'An <i>equalizer</i> of a pair of morphisms $f,g : A \\to B$ is an object $E$ with a morphism $e : E \\to A$ such that $f \\circ e = g \\circ e$ and which is universal with respect to this property. This property refers to the existence of equalizers.',
		dual: 'coequalizers',
	},
	{
		id: 'coequalizers',
		prefix: 'has',
		description:
			'A <i>coequalizer</i> of a pair of morphisms $f,g : A \\to B$ is an object $C$ with a morphism $c : B \\to C$ such that $c \\circ f = c \\circ g$ and which is universal with respect to this property. This property refers to the existence of coequalizers.',
		dual: 'equalizers',
	},
	{
		id: 'filtered limits',
		prefix: 'has',
		description:
			'A category has <i>filtered limits</i> if it has limits of diagrams indexed by filtered categories.',
		dual: 'filtered colimits',
		related: ['complete'],
	},
	{
		id: 'filtered colimits',
		prefix: 'has',
		description:
			'A category has <i>filtered colimits</i> if it has colimits of diagrams indexed by filtered categories.',
		dual: 'filtered limits',
		related: ['cocomplete'],
	},
	{
		id: 'connected limits',
		prefix: 'has',
		description:
			'A category has <i>connected limits</i> if it has limits of diagrams indexed by connected categories.',
		related: ['connected', 'complete', 'filtered limits'],
		dual: 'connected colimits',
	},
	{
		id: 'connected colimits',
		prefix: 'has',
		description:
			'A category has <i>connected colimits</i> if it has colimits of diagrams indexed by connected categories.',
		related: ['connected', 'cocomplete', 'filtered colimits'],
		dual: 'connected limits',
	},
	{
		id: 'strict initial object',
		prefix: 'has a',
		description:
			'A <i>strict initial object</i> is an initial object $0$ such that every morphism $A \\to 0$ is an isomorphism. This property refers to the existence of a strict initial object.',
		related: ['initial object'],
		dual: 'strict terminal object',
	},
	{
		id: 'strict terminal object',
		prefix: 'has a',
		description:
			'A <i>strict terminal object</i> is a terminal object $1$ such that every morphism $1 \\to A$ is an isomorphism. This property refers to the existence of a strict terminal object.',
		related: ['terminal object'],
		dual: 'strict initial object',
	},
	{
		id: 'self-dual',
		prefix: 'is',
		description:
			'A category is <i>self-dual</i> if it is equivalent to its opposite (or dual) category.',
		dual: 'self-dual',
	},
	{
		id: 'groupoid',
		prefix: 'is a',
		description:
			'A <i>groupoid</i> is a category in which every morphism is an isomorphism.',
		dual: 'groupoid',
	},
	{
		id: 'essentially small',
		prefix: 'is',
		description:
			'A category is <i>essentially small</i> when it is equivalent to a small category. In particular, there is a set of objects such that every object is isomorphic to an object in this set. In contrast to the property of being small, being essentially small is invariant under equivalences of categories.',
		dual: 'essentially small',
		related: ['small'],
	},
	{
		id: 'thin',
		prefix: 'is',
		description:
			'A category is <i>thin</i> when between any pair of objects there is at most one morphism. Such categories correspond to preordered collections of objects.',
		dual: 'thin',
	},
	{
		id: 'discrete',
		prefix: 'is',
		description:
			'A category is <i>discrete</i> when every morphism is an identity morphism. Thus, a discrete category is merely a collection of objects.',
		dual: 'discrete',
	},
	{
		id: 'algebraic',
		prefix: 'is',
		description:
			'A category is <i>algebraic</i> if it is equivalent to the category of models of a finitary algebraic theory.',
	},
	{
		id: 'finite',
		prefix: 'is',
		description:
			'A category is <i>finite</i> if it has finitely many objects and morphisms.',
		dual: 'finite',
	},
	{
		id: 'connected',
		prefix: 'is',
		description:
			'A category is <i>connected</i> if it is inhabited and every two objects can be joined via a zig-zag path of morphisms. Equivalently, $\\mathcal{C}$ is connected if $\\mathcal{C} \\simeq \\coprod_{i \\in I} \\mathcal{C}_i$ implies $\\mathcal{C}_i \\simeq 0$ for some $i$.',
		dual: 'connected',
	},
	{
		id: 'pullbacks',
		prefix: 'has',
		description:
			'A category has <i>pullbacks</i> if every cospan of morphisms $A \\rightarrow C \\leftarrow B has a pullback $A \\times_C B$. This is also known as a fiber product.',
		dual: 'pushouts',
	},
	{
		id: 'pushouts',
		prefix: 'has',
		description:
			'A category has <i>pushouts</i> if every span of morphisms $A \\leftarrow C \\rightarrow B$ has a pushout $A \\sqcup_C B$. This is also known as a fiber coproduct.',
		dual: 'pullbacks',
	},
	{
		id: 'trivial',
		prefix: 'is',
		description:
			'A category is <i>trivial</i> if it is equivalent to the trivial category (with just one object and just one morphism). Equivalently, there is an initial object $0$ such that for every object $A$ the unique morphism $0 \\to A$ is an isomorphism. Notice that we do not demand that the category is isomorphic to the trivial category. As a consequence, every inhabited indiscrete category is trivial in our sense.',
		dual: 'trivial',
	},
	{
		id: 'inhabited',
		prefix: 'is',
		description:
			'A category is <i>inhabited</i> (or <i>non-empty</i>) if it has at least one object.',
		dual: 'inhabited',
	},
	{
		id: 'subobject classifier',
		prefix: 'has a',
		description:
			'A category $\\mathcal{C}$ has a <i>subobject classifier</i> if it has finite limits and a monomorphism $\\top : 1 \\to \\Omega$ from the terminal object such that for every monomorphism $m : A \\to B$ there is a unique morphism $\\chi_m : B \\to \\Omega$ such that $B \\leftarrow A \\rightarrow 1$ is the pullback of $B \\rightarrow \\Omega \\leftarrow 1$. Equivalently, the functor $\\mathrm{Sub} : \\mathcal{C}^{\\mathrm{op}} \\to \\mathbf{Set}^+$ is representable.',
		related: ['elementary topos'],
	},
	{
		id: 'balanced',
		prefix: 'is',
		description:
			'A category is <i>balanced</i> if every morphism which is a monomorphism and an epimorphism must be an isomorphism.',
		dual: 'balanced',
	},
	{
		id: 'infinitary distributive',
		prefix: 'is',
		description:
			'A category is <i>infinitary distributive</i> if it has finite products, all small coproducts, and for every object $A$ the functor $- \\times A$ preserves all small coproducts.',
		related: ['distributive'],
	},
	{
		id: 'distributive',
		prefix: 'is',
		description:
			'A category is <i>distributive</i> if it has finite products, finite coproducts, and for every object $A$ the functor $- \\times A$ preserves finite coproducts.',
		related: ['infinitary distributive'],
	},
	{
		id: 'generator',
		prefix: 'has a',
		description:
			'An object $G$ of a category is called a <i>generator</i> if for every pair of parallel morphisms $f,g : A \\to B$, $f = g$ holds if for every morphism $h : G \\to A$ we have $f \\circ h = g \\circ h$. Equivalently, the functor $\\mathrm{Hom}(G,-) : \\mathcal{C} \\to \\mathbf{Set}^+$ is faithful. This property refers to the existence of a generator.',
		dual: 'cogenerator',
	},
	{
		id: 'cogenerator',
		prefix: 'has a',
		description:
			'An object $Q$ of a category is called a <i>cogenerator</i> if for every pair of parallel morphisms $f,g : A \\to B$, $f = g$ holds if for every morphism $h : B \\to Q$ we have $h \\circ f = h \\circ g$. Equivalently, the functor $\\mathrm{Hom}(-,Q) : \\mathcal{C}^{\\mathrm{op}} \\to \\mathbf{Set}^+$ is faithful. This property refers to the existence of a cogenerator.',
		dual: 'generator',
	},
]
