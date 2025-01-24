import type { Property } from '$lib/types'

export const properties: Property[] = [
	{
		id: 'small',
		prefix: 'is',
		description:
			'A category is <i>small</i> when the collection of objects and the collection of morphisms is a set, i.e. small.',
		dual: 'small',
		related: ['essentially small'],
		invariant_under_equivalences: false,
		nlab_link: 'https://ncatlab.org/nlab/show/small+category',
	},
	{
		id: 'locally small',
		prefix: 'is',
		description:
			'A category is <i>locally small</i> when for every pair of objects $A,B$ the collection of morphisms $A \\to B$ is a set, i.e. small.',
		dual: 'locally small',
		invariant_under_equivalences: false,
		nlab_link: 'https://ncatlab.org/nlab/show/locally+small+category',
	},
	{
		id: 'complete',
		prefix: 'is',
		description:
			'A category is <i>complete</i> when every small diagram in the category has a limit.',
		dual: 'cocomplete',
		nlab_link: 'https://ncatlab.org/nlab/show/complete+category',
	},
	{
		id: 'cocomplete',
		prefix: 'is',
		description:
			'A category is <i>cocomplete</i> when every small diagram in the category has a colimit.',
		dual: 'complete',
		nlab_link: 'https://ncatlab.org/nlab/show/cocomplete+category',
	},
	{
		id: 'cartesian closed',
		prefix: 'is',
		description:
			'A category is <i>cartesian closed</i> if all finite products and exponentials exist.',
		related: ['finite products'],
		nlab_link: 'https://ncatlab.org/nlab/show/cartesian+closed+category',
	},
	{
		id: 'zero morphisms',
		prefix: 'has',
		description:
			'A category has <i>zero morphisms</i> if for every pair of objects $A,B$ there is a distinugished morphism $0_{A,B} : A \\to B$, called the zero morphism, such that we have $f \\circ 0_{A,B} = 0_{A,C}$ and $0_{B,C} \\circ g = 0_{A,C}$ for all morphisms $f : B \\to C$ and $g : A \\to B$. The zero morphisms are unique if they exist, hence this is actually a property of the category.',
		dual: 'zero morphisms',
		related: ['preadditive', 'pointed'],
		nlab_link: 'https://ncatlab.org/nlab/show/zero+morphism',
	},
	{
		id: 'preadditive',
		prefix: 'is',
		description:
			"A category is <i>preadditive</i> when it is locally small and each hom-set carries the structure of an abelian group such that the composition is bilinear. Notice that 'preadditive' is an extra structure. The property here just says that some preadditive structure exists.",
		dual: 'preadditive',
		related: ['additive'],
		nlab_link: 'https://ncatlab.org/nlab/show/Ab-enriched+category',
	},
	{
		id: 'additive',
		prefix: 'is',
		description:
			'A category is <i>additive</i> if it is preadditive and has finite products (equivalently, finite coproducts).',
		dual: 'additive',
		related: ['preadditive', 'finite products'],
		nlab_link: 'https://ncatlab.org/nlab/show/additive+category',
	},
	{
		id: 'abelian',
		prefix: 'is',
		description:
			'A category is <i>abelian</i> if it is additive, every morphism has a kernel and a cokernel, and every monomorphism and epimorphism is normal. As opposed to many other concepts of categories, being abelian turns out to be a mere property. For example, monoidal not just a property.',
		dual: 'abelian',
		related: ['additive'],
		nlab_link: 'https://ncatlab.org/nlab/show/abelian+category',
	},
	{
		id: 'finitely complete',
		prefix: 'is',
		description:
			'A category is <i>finitely complete</i> when every finite diagram has a limit.',
		dual: 'finitely cocomplete',
		related: ['complete'],
		nlab_link: 'https://ncatlab.org/nlab/show/finitely+complete+category',
	},
	{
		id: 'finitely cocomplete',
		prefix: 'is',
		description:
			'A category is <i>finitely cocomplete</i> when every finite diagram has a colimit.',
		dual: 'finitely complete',
		related: ['cocomplete'],
		nlab_link: 'https://ncatlab.org/nlab/show/finitely+cocomplete+category',
	},
	{
		id: 'pointed',
		prefix: 'is',
		description:
			'A category is <i>pointed</i> when it has a zero object, i.e. an object which is both initial and terminal.',
		dual: 'pointed',
		related: ['initial object', 'terminal object'],
		nlab_link: 'https://ncatlab.org/nlab/show/pointed+category',
	},
	{
		id: 'locally finitely presentable',
		prefix: 'is',
		description:
			'A category is <i>locally finitely presentable</i> if it is locally small, cocomplete, and there is a set $S$ of finitely presentable objects such that every object is a filtered colimit of objects in $S$. This is the same as being locally $\\aleph_0$-presentable.',
		related: ['locally presentable'],
		nlab_link: 'https://ncatlab.org/nlab/show/locally+finitely+presentable+category',
	},
	{
		id: 'locally presentable',
		prefix: 'is',
		description:
			'Let $\\kappa$ be a regular cardinal. A category is <i>locally $\\kappa$-presentable</i> if it is locally small, cocomplete, and there is a set of $\\kappa$-presentable objects $S$ such that every object is a $\\kappa$-filtered colimit of objects in $S$. A category is <i>locally presentable</i> if it is locally $\\kappa$-presentable for some regular cardinal $\\kappa$.',
		related: ['locally finitely presentable'],
		nlab_link: 'https://ncatlab.org/nlab/show/locally+presentable+category',
	},
	{
		id: 'elementary topos',
		prefix: 'is an',
		description:
			'An <i>elementary topos</i> is a cartesian closed category with finite limits and a subobject classifier.',
		nlab_link: 'https://ncatlab.org/nlab/show/topos',
	},
	{
		id: 'Grothendieck topos',
		prefix: 'is a',
		description:
			'A <i>Grothendieck topos</i> is a category that is equivalent to the category of sheaves on a site.',
		related: ['elementary topos'],
		nlab_link: 'https://ncatlab.org/nlab/show/Grothendieck+topos',
	},
	{
		id: 'well-powered',
		prefix: 'is',
		description:
			'A category is <i>well-powered</i> if the collection of subobjects of any object is isomorphic to a set.',
		dual: 'well-copowered',
		nlab_link: 'https://ncatlab.org/nlab/show/well-powered+category',
	},
	{
		id: 'well-copowered',
		prefix: 'is',
		description:
			'A category is <i>well-copowered</i> if the collection of quotients of any object is isomorphic to a set.',
		dual: 'well-powered',
		nlab_link: 'https://ncatlab.org/nlab/show/well-powered+category',
	},
	{
		id: 'initial object',
		prefix: 'has an',
		description:
			'An <i>initial object</i> is an object that has a unique morphism to every object in the category. This property refers to the existence of an initial object.',
		dual: 'terminal object',
		nlab_link: 'https://ncatlab.org/nlab/show/initial+object',
	},
	{
		id: 'terminal object',
		prefix: 'has a',
		description:
			'A <i>terminal object</i> (or <i>final object</i>) is an object that has a unique morphism from every object in the category. This property refers to the existence of a terminal object.',
		dual: 'initial object',
		nlab_link: 'https://ncatlab.org/nlab/show/terminal+object',
	},
	{
		id: 'products',
		prefix: 'has',
		description:
			'Given a family of objects $(A_i)_{i \\in I}$, a <i>product</i> $\\prod_{i \\in I} A_i$ is defined as an object with morphisms $p_i : \\prod_{i \\in I} A_i \\to A_i$ satisfying the following universal property: For every object $T$ and every family of morphisms $(f_i : T \\to A_i)_{i \\in I}$ there is a unique morphism $f : T \\to \\prod_{i \\in I} A_i$ such that $p_i \\circ f = f_i$ for all $i \\in I$. This property refers to the existence of products.',
		dual: 'coproducts',
		nlab_link: 'https://ncatlab.org/nlab/show/cartesian+product',
	},
	{
		id: 'coproducts',
		prefix: 'has',
		description:
			'Given a family of objects $(A_i)_{i \\in I}$, a <i>coproduct</i> $\\coprod_{i \\in I} A_i$ is defined as an object with morphisms $i_i : A_i \\to \\coprod_{i \\in I} A_i$ satisfying the following universal property: For every object $T$ and every family of morphisms $(f_i : A_i \\to T)_{i \\in I}$ there is a unique morphism $f : \\coprod_{i \\in I} A_i \\to T$ such that $f \\circ i_i = f_i$ for all $i \\in I$. This property refers to the existence of coproducts.',
		dual: 'products',
		nlab_link: 'https://ncatlab.org/nlab/show/coproduct',
	},
	{
		id: 'finite products',
		prefix: 'has',
		description:
			'A category has <i>finite products</i> if it has products for finite families of objects. Equivalently, it has a terminal object and binary products.',
		dual: 'finite coproducts',
		related: ['products'],
		nlab_link: 'https://ncatlab.org/nlab/show/finite+product',
	},
	{
		id: 'finite coproducts',
		prefix: 'has',
		description:
			'A category has <i>finite coproducts</i> if it has coproducts for finite families of objects. Equivalently, it has an initial object and binary coproducts.',
		dual: 'finite products',
		related: ['coproducts'],
		nlab_link: 'https://ncatlab.org/nlab/show/finite+coproduct',
	},
	{
		id: 'binary products',
		prefix: 'has',
		description:
			'A category has <i>binary products</i> if every pair $A,B$ of objects has a product $A \\times B$.',
		dual: 'binary coproducts',
		related: ['finite products'],
		nlab_link: 'https://ncatlab.org/nlab/show/binary+product',
	},
	{
		id: 'binary coproducts',
		prefix: 'has',
		description:
			'A category has <i>binary coproducts</i> if every pair $A,B$ of objects has a coproduct $A \\sqcup B$.',
		dual: 'binary products',
		related: ['finite coproducts'],
		nlab_link: 'https://ncatlab.org/nlab/show/coproduct',
	},
	{
		id: 'equalizers',
		prefix: 'has',
		description:
			'An <i>equalizer</i> of a pair of morphisms $f,g : A \\to B$ is an object $E$ with a morphism $e : E \\to A$ such that $f \\circ e = g \\circ e$ and which is universal with respect to this property. This property refers to the existence of equalizers.',
		dual: 'coequalizers',
		nlab_link: 'https://ncatlab.org/nlab/show/equalizer',
	},
	{
		id: 'coequalizers',
		prefix: 'has',
		description:
			'A <i>coequalizer</i> of a pair of morphisms $f,g : A \\to B$ is an object $C$ with a morphism $c : B \\to C$ such that $c \\circ f = c \\circ g$ and which is universal with respect to this property. This property refers to the existence of coequalizers.',
		dual: 'equalizers',
		nlab_link: 'https://ncatlab.org/nlab/show/coequalizer',
	},
	{
		id: 'filtered limits',
		prefix: 'has',
		description:
			'A category has <i>filtered limits</i> if it has limits of diagrams indexed by filtered categories.',
		dual: 'filtered colimits',
		related: ['complete'],
		nlab_link: 'https://ncatlab.org/nlab/show/filtered+limit',
	},
	{
		id: 'filtered colimits',
		prefix: 'has',
		description:
			'A category has <i>filtered colimits</i> if it has colimits of diagrams indexed by filtered categories.',
		dual: 'filtered limits',
		related: ['cocomplete'],
		nlab_link: 'https://ncatlab.org/nlab/show/filtered+colimit',
	},
	{
		id: 'connected limits',
		prefix: 'has',
		description:
			'A category has <i>connected limits</i> if it has limits of diagrams indexed by connected categories.',
		related: ['connected', 'complete', 'filtered limits'],
		dual: 'connected colimits',
		nlab_link: 'https://ncatlab.org/nlab/show/connected+limit',
	},
	{
		id: 'connected colimits',
		prefix: 'has',
		description:
			'A category has <i>connected colimits</i> if it has colimits of diagrams indexed by connected categories.',
		related: ['connected', 'cocomplete', 'filtered colimits'],
		dual: 'connected limits',
		nlab_link: 'https://ncatlab.org/nlab/show/connected+colimit',
	},
	{
		id: 'strict initial object',
		prefix: 'has a',
		description:
			'A <i>strict initial object</i> is an initial object $0$ such that every morphism $A \\to 0$ is an isomorphism. This property refers to the existence of a strict initial object.',
		related: ['initial object'],
		dual: 'strict terminal object',
		nlab_link: 'https://ncatlab.org/nlab/show/strict+initial+object',
	},
	{
		id: 'strict terminal object',
		prefix: 'has a',
		description:
			'A <i>strict terminal object</i> is a terminal object $1$ such that every morphism $1 \\to A$ is an isomorphism. This property refers to the existence of a strict terminal object.',
		related: ['terminal object'],
		dual: 'strict initial object',
		nlab_link: 'https://ncatlab.org/nlab/show/strict+terminal+object',
	},
	{
		id: 'self-dual',
		prefix: 'is',
		description:
			'A category is <i>self-dual</i> if it is equivalent to its opposite (or dual) category.',
		dual: 'self-dual',
		nlab_link: 'https://ncatlab.org/nlab/show/opposite+category',
	},
	{
		id: 'groupoid',
		prefix: 'is a',
		description:
			'A <i>groupoid</i> is a category in which every morphism is an isomorphism.',
		dual: 'groupoid',
		nlab_link: 'https://ncatlab.org/nlab/show/groupoid',
	},
	{
		id: 'essentially small',
		prefix: 'is',
		description:
			'A category is <i>essentially small</i> when it is equivalent to a small category. In particular, there is a set of objects such that every object is isomorphic to an object in this set. In contrast to the property of being small, being essentially small is invariant under equivalences of categories.',
		dual: 'essentially small',
		related: ['small'],
		nlab_link: 'https://ncatlab.org/nlab/show/small+category',
	},
	{
		id: 'thin',
		prefix: 'is',
		description:
			'A category is <i>thin</i> when between any pair of objects there is at most one morphism. Such categories correspond to preordered collections of objects.',
		dual: 'thin',
		nlab_link: 'https://ncatlab.org/nlab/show/thin+category',
	},
	{
		id: 'discrete',
		prefix: 'is',
		description:
			'A category is <i>discrete</i> when every morphism is an identity morphism. Thus, a discrete category is merely a collection of objects.',
		dual: 'discrete',
		invariant_under_equivalences: false,
		nlab_link: 'https://ncatlab.org/nlab/show/discrete+category',
	},
	{
		id: 'algebraic',
		prefix: 'is',
		description:
			'A category is <i>algebraic</i> if it is equivalent to the category of models of a finitary algebraic theory. (Notice that there are other definitions in the literature.)',
		nlab_link: 'https://ncatlab.org/nlab/show/algebraic+category',
	},
	{
		id: 'finite',
		prefix: 'is',
		description:
			'A category is <i>finite</i> if it has finitely many objects and morphisms.',
		dual: 'finite',
		invariant_under_equivalences: false,
		nlab_link: 'https://ncatlab.org/nlab/show/finite+category',
	},
	{
		id: 'connected',
		prefix: 'is',
		description:
			'A category is <i>connected</i> if it is inhabited and every two objects can be joined via a zig-zag path of morphisms. Equivalently, $\\mathcal{C}$ is connected if $\\mathcal{C} \\simeq \\coprod_{i \\in I} \\mathcal{C}_i$ implies $\\mathcal{C}_i \\simeq 0$ for some $i$.',
		dual: 'connected',
		nlab_link: 'https://ncatlab.org/nlab/show/connected+category',
	},
	{
		id: 'pullbacks',
		prefix: 'has',
		description:
			'A category has <i>pullbacks</i> if every cospan of morphisms $A \\rightarrow C \\leftarrow B has a pullback $A \\times_C B$. This is also known as a fiber product.',
		dual: 'pushouts',
		nlab_link: 'https://ncatlab.org/nlab/show/pullback',
	},
	{
		id: 'pushouts',
		prefix: 'has',
		description:
			'A category has <i>pushouts</i> if every span of morphisms $A \\leftarrow C \\rightarrow B$ has a pushout $A \\sqcup_C B$. This is also known as a fiber coproduct.',
		dual: 'pullbacks',
		nlab_link: 'https://ncatlab.org/nlab/show/pushout',
	},
	{
		id: 'trivial',
		prefix: 'is',
		description:
			'A category is <i>trivial</i> if it is equivalent to the trivial category (with just one object and just one morphism). Equivalently, there is an initial object $0$ such that for every object $A$ the unique morphism $0 \\to A$ is an isomorphism. Notice that we do not demand that the category is isomorphic to the trivial category. As a consequence, every inhabited indiscrete category is trivial in our sense.',
		dual: 'trivial',
		nlab_link: 'https://ncatlab.org/nlab/show/terminal+category',
	},
	{
		id: 'inhabited',
		prefix: 'is',
		description:
			'A category is <i>inhabited</i> (or <i>non-empty</i>) if it has at least one object.',
		dual: 'inhabited',
		nlab_link: 'https://ncatlab.org/nlab/show/inhabited+set',
	},
	{
		id: 'subobject classifier',
		prefix: 'has a',
		description:
			'A category $\\mathcal{C}$ has a <i>subobject classifier</i> if it has finite limits and a monomorphism $\\top : 1 \\to \\Omega$ from the terminal object such that for every monomorphism $m : A \\to B$ there is a unique morphism $\\chi_m : B \\to \\Omega$ such that $B \\leftarrow A \\rightarrow 1$ is the pullback of $B \\rightarrow \\Omega \\leftarrow 1$. Equivalently, the functor $\\mathrm{Sub} : \\mathcal{C}^{\\mathrm{op}} \\to \\mathbf{Set}^+$ is representable.',
		related: ['elementary topos'],
		nlab_link: 'https://ncatlab.org/nlab/show/subobject+classifier',
	},
	{
		id: 'balanced',
		prefix: 'is',
		description:
			'A category is <i>balanced</i> if every morphism which is a monomorphism and an epimorphism must be an isomorphism.',
		dual: 'balanced',
		nlab_link: 'https://ncatlab.org/nlab/show/balanced+category',
	},
	{
		id: 'infinitary distributive',
		prefix: 'is',
		description:
			'A category is <i>infinitary distributive</i> if it has finite products, all small coproducts, and for every object $A$ the functor $- \\times A$ preserves all small coproducts.',
		related: ['distributive'],
		nlab_link: 'https://ncatlab.org/nlab/show/distributive+category',
	},
	{
		id: 'distributive',
		prefix: 'is',
		description:
			'A category is <i>distributive</i> if it has finite products, finite coproducts, and for every object $A$ the functor $- \\times A$ preserves finite coproducts.',
		related: ['infinitary distributive'],
		nlab_link: 'https://ncatlab.org/nlab/show/distributive+category',
	},
	{
		id: 'generator',
		prefix: 'has a',
		description:
			'An object $G$ of a category is called a <i>generator</i> if for every pair of parallel morphisms $f,g : A \\to B$, $f = g$ holds if for every morphism $h : G \\to A$ we have $f \\circ h = g \\circ h$. Equivalently, the functor $\\mathrm{Hom}(G,-) : \\mathcal{C} \\to \\mathbf{Set}^+$ is faithful. This property refers to the existence of a generator.',
		dual: 'cogenerator',
		nlab_link: 'https://ncatlab.org/nlab/show/separator',
	},
	{
		id: 'cogenerator',
		prefix: 'has a',
		description:
			'An object $Q$ of a category is called a <i>cogenerator</i> if for every pair of parallel morphisms $f,g : A \\to B$, $f = g$ holds if for every morphism $h : B \\to Q$ we have $h \\circ f = h \\circ g$. Equivalently, the functor $\\mathrm{Hom}(-,Q) : \\mathcal{C}^{\\mathrm{op}} \\to \\mathbf{Set}^+$ is faithful. This property refers to the existence of a cogenerator.',
		dual: 'generator',
		nlab_link: 'https://ncatlab.org/nlab/show/cogenerator',
	},
	{
		id: 'filtered colimits that commute with finite limits',
		prefix: 'has',
		description:
			'In a category $\\mathcal{C}$, which we assume to have filtered colimits and finite limits, we say that <i>filtered colimits commute with finite limits</i> if for every finite category $\\mathcal{I}$ the functor $\\lim : [\\mathcal{I}, \\mathcal{C}] \\to \\mathcal{C}$ preserves filtered colimits. Equivalently, for every diagram $X : \\mathcal{I} \\times \\mathcal{J} \\to \\mathcal{C}$, where $\\mathcal{I}$ is finite and $\\mathcal{J}$ is filtered, the canonical morphism $\\mathrm{colim}_{j} \\lim_{i} X(i,j) \\to \\lim_{i} \\mathrm{colim}_j X(i,j)$ is an isomorphism.',
		related: ['filtered colimits', 'finitely complete'],
		nlab_link: 'https://ncatlab.org/nlab/show/commutativity+of+limits+and+colimits',
	},
	{
		id: 'Grothendieck abelian',
		prefix: 'is',
		description:
			'A category is <i>Grothendieck abelian</i> if it is abelian, has coproducts (and is therefore cocomplete), a generator, and filtered colimits commute with finite limits. These categories play an important role in homological algebra.',
		related: [
			'abelian',
			'cocomplete',
			'generator',
			'filtered colimits that commute with finite limits',
		],
		nlab_link: 'https://ncatlab.org/nlab/show/Grothendieck+category',
	},
]
