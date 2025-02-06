import type { Property } from '$lib/commons/types'

/**
 * @deprecated
 * Each property must have the following properties:
 * - id (must be defined in propertyIDs.ts)
 * - prefix (is, has, etc.)
 * - nlab_link (optional)
 * - description (includes a definition in particular)
 * - dual (optional, the ID of the dual property if available)
 * - related (optional list of related properties, referred to by their IDs)
 * - invariant_under_equivalences (optional boolean, set to false if applicable)
 */
export const properties: readonly Readonly<Property>[] = [
	{
		id: 'small',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/small+category',
		description:
			'A category is <i>small</i> when the collection of objects and the collection of morphisms is a set, i.e. small.',
		dual: 'small',
		related: ['essentially small'],
		invariant_under_equivalences: false,
	},
	{
		id: 'locally small',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/locally+small+category',
		description:
			'A category is <i>locally small</i> when for every pair of objects $A,B$ the collection of morphisms $A \\to B$ is a set. (Here, we work with a set-theoretic foundation in which there are sets and collections. Categories are based on collections of objects and morphisms.)',
		dual: 'locally small',
		related: ['locally essentially small'],
		invariant_under_equivalences: false,
	},
	{
		id: 'locally essentially small',
		prefix: 'is',
		description:
			'A category is <i>locally essentially small</i> when for every pair of objects $A,B$ the collection of morphisms $A \\to B$ is isomorphic to a set. (Here, we work with a set-theoretic foundation in which there are sets and collections. Categories are based on collections of objects and morphisms.) Equivalently, the category is equivalent to a locally small category. In contrast to being locally small, this condition is invariant under equivalences of categories. This is why we have added it to the database. For instance, every algebraic category is locally essentially small, but not necessarily locally small. This indicates that this is the "right" notion to work with.',
		dual: 'locally essentially small',
		related: ['locally small'],
	},
	{
		id: 'complete',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/complete+category',
		description:
			'A category is <i>complete</i> when every small diagram in the category has a limit.',
		dual: 'cocomplete',
	},
	{
		id: 'cocomplete',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/cocomplete+category',
		description:
			'A category is <i>cocomplete</i> when every small diagram in the category has a colimit.',
		dual: 'complete',
	},
	{
		id: 'cartesian closed',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/cartesian+closed+category',
		description:
			'A category is <i>cartesian closed</i> if all finite products and exponentials exist.',
		related: ['finite products'],
	},
	{
		id: 'zero morphisms',
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/zero+morphism',
		description:
			'A category has <i>zero morphisms</i> if for every pair of objects $A,B$ there is a distinugished morphism $0_{A,B} : A \\to B$, called the zero morphism, such that we have $f \\circ 0_{A,B} = 0_{A,C}$ and $0_{B,C} \\circ g = 0_{A,C}$ for all morphisms $f : B \\to C$ and $g : A \\to B$. The zero morphisms are unique if they exist, hence this is actually a property of the category.',
		dual: 'zero morphisms',
		related: ['preadditive', 'pointed'],
	},
	{
		id: 'preadditive',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/Ab-enriched+category',
		description:
			'A category is <i>preadditive</i> when it is locally essentially small* and each hom-set carries the structure of an abelian group such that the composition is bilinear. Notice that "preadditive" is an extra structure. The property here just says that some preadditive structure exists.<br>*We demand this instead of the more common "locall small" to ensure that preadditive categories are invariant under equivalences of categories.',
		dual: 'preadditive',
		related: ['additive'],
	},
	{
		id: 'additive',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/additive+category',
		description:
			'A category is <i>additive</i> if it is preadditive and has finite products (equivalently, finite coproducts).',
		dual: 'additive',
		related: ['preadditive', 'finite products'],
	},
	{
		id: 'abelian',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/abelian+category',
		description:
			'A category is <i>abelian</i> if it is additive, every morphism has a kernel and a cokernel, and every monomorphism and epimorphism is normal. Equivalently, it is additive, has equalizers and coequalizers, and it is mono-regular and epi-regular. As opposed to many other concepts of categories, being abelian turns out to be a mere property. For example, monoidal not just a property.',
		dual: 'abelian',
		related: ['additive'],
	},
	{
		id: 'finitely complete',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/finitely+complete+category',
		description:
			'A category is <i>finitely complete</i> when every finite diagram has a limit.',
		dual: 'finitely cocomplete',
		related: ['complete'],
	},
	{
		id: 'finitely cocomplete',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/finitely+cocomplete+category',
		description:
			'A category is <i>finitely cocomplete</i> when every finite diagram has a colimit.',
		dual: 'finitely complete',
		related: ['cocomplete'],
	},
	{
		id: 'pointed',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/pointed+category',
		description:
			'A category is <i>pointed</i> when it has a zero object, i.e. an object which is both initial and terminal.',
		dual: 'pointed',
		related: ['initial object', 'terminal object'],
	},
	{
		id: 'locally finitely presentable',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/locally+finitely+presentable+category',
		description:
			'A category is <i>locally finitely presentable</i> if it is locally essentially small*, cocomplete, and there is a set $S$ of finitely presentable objects such that every object is a filtered colimit of objects in $S$. This is the same as being locally $\\aleph_0$-presentable.<br>*Many authors assume the category to be locally small, but this is inconvenient since then locally finitely presentable categories would not be invariant under equivalences of categories.',
		related: ['locally presentable', 'locally ℵ₁-presentable'],
	},
	{
		id: 'locally presentable',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/locally+presentable+category',
		description:
			'Let $\\kappa$ be a regular cardinal. A category is <i>locally $\\kappa$-presentable</i> if it is locally essentially small*, cocomplete, and there is a set of $\\kappa$-presentable objects $S$ such that every object is a $\\kappa$-filtered colimit of objects in $S$. A category is <i>locally presentable</i> if it is locally $\\kappa$-presentable for some regular cardinal $\\kappa$.<br>*Many authors assume the category to be locally small, but this is inconvenient since then locally presentable categories would not be invariant under equivalences of categories.',
		related: ['locally finitely presentable', 'locally ℵ₁-presentable'],
	},
	{
		id: 'locally ℵ₁-presentable',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/locally+presentable+category',
		description:
			'This is the special case of the notion of a locally $\\kappa$-presentable, where $\\kappa = \\aleph_1$ is the first uncountable cardinal.',
		related: ['locally finitely presentable', 'locally presentable'],
	},
	{
		id: 'elementary topos',
		prefix: 'is an',
		nlab_link: 'https://ncatlab.org/nlab/show/topos',
		description:
			'An <i>elementary topos</i> is a cartesian closed category with finite limits and a subobject classifier.',
	},
	{
		id: 'Grothendieck topos',
		prefix: 'is a',
		nlab_link: 'https://ncatlab.org/nlab/show/Grothendieck+topos',
		description:
			'A <i>Grothendieck topos</i> is a category that is equivalent to the category of sheaves on a site.',
		related: ['elementary topos'],
	},
	{
		id: 'well-powered',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/well-powered+category',
		description:
			'A category is <i>well-powered</i> if the collection of subobjects of any object is isomorphic to a set.',
		dual: 'well-copowered',
	},
	{
		id: 'well-copowered',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/well-powered+category',
		description:
			'A category is <i>well-copowered</i> if the collection of quotients of any object is isomorphic to a set.',
		dual: 'well-powered',
	},
	{
		id: 'initial object',
		prefix: 'has an',
		nlab_link: 'https://ncatlab.org/nlab/show/initial+object',
		description:
			'An <i>initial object</i> is an object that has a unique morphism to every object in the category. This property refers to the existence of an initial object.',
		dual: 'terminal object',
	},
	{
		id: 'terminal object',
		prefix: 'has a',
		nlab_link: 'https://ncatlab.org/nlab/show/terminal+object',
		description:
			'A <i>terminal object</i> (or <i>final object</i>) is an object that has a unique morphism from every object in the category. This property refers to the existence of a terminal object.',
		dual: 'initial object',
	},
	{
		id: 'products',
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/cartesian+product',
		description:
			'Given a family of objects $(A_i)_{i \\in I}$, a <i>product</i> $\\prod_{i \\in I} A_i$ is defined as an object with morphisms $p_i : \\prod_{i \\in I} A_i \\to A_i$ satisfying the following universal property: For every object $T$ and every family of morphisms $(f_i : T \\to A_i)_{i \\in I}$ there is a unique morphism $f : T \\to \\prod_{i \\in I} A_i$ such that $p_i \\circ f = f_i$ for all $i \\in I$. This property refers to the existence of products.',
		dual: 'coproducts',
	},
	{
		id: 'coproducts',
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/coproduct',
		description:
			'Given a family of objects $(A_i)_{i \\in I}$, a <i>coproduct</i> $\\coprod_{i \\in I} A_i$ is defined as an object with morphisms $i_i : A_i \\to \\coprod_{i \\in I} A_i$ satisfying the following universal property: For every object $T$ and every family of morphisms $(f_i : A_i \\to T)_{i \\in I}$ there is a unique morphism $f : \\coprod_{i \\in I} A_i \\to T$ such that $f \\circ i_i = f_i$ for all $i \\in I$. This property refers to the existence of coproducts.',
		dual: 'products',
	},
	{
		id: 'finite products',
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/finite+product',
		description:
			'A category has <i>finite products</i> if it has products for finite families of objects. Equivalently, it has a terminal object and binary products.',
		dual: 'finite coproducts',
		related: ['products'],
	},
	{
		id: 'finite coproducts',
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/finite+coproduct',
		description:
			'A category has <i>finite coproducts</i> if it has coproducts for finite families of objects. Equivalently, it has an initial object and binary coproducts.',
		dual: 'finite products',
		related: ['coproducts'],
	},
	{
		id: 'binary products',
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/binary+product',
		description:
			'A category has <i>binary products</i> if every pair $A,B$ of objects has a product $A \\times B$.',
		dual: 'binary coproducts',
		related: ['finite products'],
	},
	{
		id: 'binary coproducts',
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/coproduct',
		description:
			'A category has <i>binary coproducts</i> if every pair $A,B$ of objects has a coproduct $A \\sqcup B$.',
		dual: 'binary products',
		related: ['finite coproducts'],
	},
	{
		id: 'countable products',
		prefix: 'has',
		description:
			'A category has <i>countable products</i> if it has products for countable families of objects.',
		dual: 'countable coproducts',
		related: ['products', 'finite products'],
	},
	{
		id: 'countable coproducts',
		prefix: 'has',
		description:
			'A category has <i>countable coproducts</i> if it has coproducts for countable families of objects.',
		dual: 'countable products',
		related: ['coproducts', 'finite coproducts'],
	},
	{
		id: 'equalizers',
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/equalizer',
		description:
			'An <i>equalizer</i> of a pair of morphisms $f,g : A \\to B$ is an object $E$ with a morphism $e : E \\to A$ such that $f \\circ e = g \\circ e$ and which is universal with respect to this property. This property refers to the existence of equalizers.',
		dual: 'coequalizers',
	},
	{
		id: 'coequalizers',
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/coequalizer',
		description:
			'A <i>coequalizer</i> of a pair of morphisms $f,g : A \\to B$ is an object $C$ with a morphism $c : B \\to C$ such that $c \\circ f = c \\circ g$ and which is universal with respect to this property. This property refers to the existence of coequalizers.',
		dual: 'equalizers',
	},
	{
		id: 'filtered limits',
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/filtered+limit',
		description:
			'A category has <i>filtered limits</i> if it has limits of diagrams indexed by cofiltered categories.',
		dual: 'filtered colimits',
		related: ['complete'],
	},
	{
		id: 'filtered colimits',
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/filtered+colimit',
		description:
			'A category has <i>filtered colimits</i> if it has colimits of diagrams indexed by filtered categories.',
		dual: 'filtered limits',
		related: ['cocomplete'],
	},
	{
		id: 'sequential limits', // TODO: fill cat data
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/sequential+limit',
		description:
			'A category has <i>sequential limits</i> if it has limits of diagrams of the following form: $\\cdots \\bullet \\to \\bullet \\to \\bullet$',
		dual: 'sequential colimits',
		related: ['filtered limits'],
	},
	{
		id: 'sequential colimits', // TODO: fill cat data
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/sequential+colimit',
		description:
			'A category has <i>sequential colimits</i> if it has colimits of diagrams of the following form: $\\bullet \\to \\bullet \\to \\bullet \\to \\cdots$',
		dual: 'sequential limits',
		related: ['filtered colimits'],
	},
	{
		id: 'connected limits',
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/connected+limit',
		description:
			'A category has <i>connected limits</i> if it has limits of diagrams indexed by connected categories.',
		dual: 'connected colimits',
		related: ['connected', 'complete', 'filtered limits'],
	},
	{
		id: 'connected colimits',
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/connected+colimit',
		description:
			'A category has <i>connected colimits</i> if it has colimits of diagrams indexed by connected categories.',
		dual: 'connected limits',
		related: ['connected', 'cocomplete', 'filtered colimits'],
	},
	{
		id: 'strict initial object',
		prefix: 'has a',
		nlab_link: 'https://ncatlab.org/nlab/show/strict+initial+object',
		description:
			'A <i>strict initial object</i> is an initial object $0$ such that every morphism $A \\to 0$ is an isomorphism. This property refers to the existence of a strict initial object.',
		dual: 'strict terminal object',
		related: ['initial object'],
	},
	{
		id: 'strict terminal object',
		prefix: 'has a',
		nlab_link: 'https://ncatlab.org/nlab/show/strict+terminal+object',
		description:
			'A <i>strict terminal object</i> is a terminal object $1$ such that every morphism $1 \\to A$ is an isomorphism. This property refers to the existence of a strict terminal object.',
		dual: 'strict initial object',
		related: ['terminal object'],
	},
	{
		id: 'self-dual',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/opposite+category',
		description:
			'A category is <i>self-dual</i> if it is equivalent to its opposite (or dual) category.',
		dual: 'self-dual',
	},
	{
		id: 'groupoid',
		prefix: 'is a',
		nlab_link: 'https://ncatlab.org/nlab/show/groupoid',
		description:
			'A <i>groupoid</i> is a category in which every morphism is an isomorphism.',
		dual: 'groupoid',
	},
	{
		id: 'essentially small',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/small+category',
		description:
			'A category is <i>essentially small</i> when it is equivalent to a small category. In particular, there is a set of objects such that every object is isomorphic to an object in this set. In contrast to the property of being small, being essentially small is invariant under equivalences of categories.',
		dual: 'essentially small',
		related: ['small'],
	},
	{
		id: 'thin',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/thin+category',
		description:
			'A category is <i>thin</i> when between any pair of objects there is at most one morphism. Such categories correspond to preordered collections of objects.',
		dual: 'thin',
	},
	{
		id: 'discrete',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/discrete+category',
		description:
			'A category is <i>discrete</i> when every morphism is an identity morphism. Thus, a discrete category is merely a collection of objects.',
		dual: 'discrete',
		related: ['essentially discrete'],
		invariant_under_equivalences: false,
	},
	{
		id: 'essentially discrete',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/discrete+category',
		description:
			'A category is <i>essentially discrete</i> if it is equivalent to a discrete category. Equivalently, it is a thin groupoid. Notice that the nLab calls this property simply "discrete". In contrast to being discrete, clearly this property is invariant under equivalences of categories. An essentially discrete category is the same as a <i>setoid</i> (a set equipped with an equivalence relation).',
		dual: 'essentially discrete',
		related: ['discrete'],
	},
	{
		id: 'finitary algebraic',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/algebraic+category',
		description:
			'A category is <i>finitary algebraic</i> if it is equivalent to the category of models of a finitary algebraic theory. This is also known as a variety of finitary algebras.',
	},
	{
		id: 'finite',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/finite+category',
		description:
			'A category is <i>finite</i> if it has finitely many objects and morphisms.',
		dual: 'finite',
		related: ['essentially finite'],
		invariant_under_equivalences: false,
	},
	{
		id: 'essentially finite',
		prefix: 'is',
		description:
			'A category is <i>essentially finite</i> if it is equivalent to a finite category. Equivalently, there are only finitely many objects up to isomorphism, and the collection of morphisms between any two objects is isomorphic to a finite set. In contrast to being finite, this property is invariant under equivalences of categories.',
		dual: 'essentially finite',
		related: ['finite'],
	},
	{
		id: 'connected',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/connected+category',
		description:
			'A category is <i>connected</i> if it is inhabited and every two objects can be joined via a zig-zag path of morphisms. Equivalently, $\\mathcal{C}$ is connected if $\\mathcal{C} \\simeq \\coprod_{i \\in I} \\mathcal{C}_i$ implies $\\mathcal{C}_i \\simeq 0$ for some $i$.',
		dual: 'connected',
	},
	{
		id: 'pullbacks',
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/pullback',
		description:
			'A category $\\mathcal{C}$ has <i>pullbacks</i> if every cospan of morphisms $A \\rightarrow S \\leftarrow B$ has a pullback $A \\times_S B$. This is also known as a fiber product. Equivalently, the slice category $\\mathcal{C}/S$ has binary products.',
		dual: 'pushouts',
		related: ['wide pullbacks'],
	},
	{
		id: 'pushouts',
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/pushout',
		description:
			'A category $\\mathcal{C}$ has <i>pushouts</i> if every span of morphisms $A \\leftarrow S \\rightarrow B$ has a pushout $A \\sqcup_S B$. This is also known as a fiber coproduct. Equivalently, the coslice category $S/\\mathcal{C}$ has binary coproducts.',
		dual: 'pullbacks',
	},
	{
		id: 'trivial',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/terminal+category',
		description:
			'A category is <i>trivial</i> if it is equivalent to the trivial category (with just one object and just one morphism). Equivalently, there is an initial object $0$ such that for every object $A$ the unique morphism $0 \\to A$ is an isomorphism. Notice that we do not demand that the category is isomorphic to the trivial category. As a consequence, every inhabited indiscrete category is trivial in our sense.',
		dual: 'trivial',
	},
	{
		id: 'inhabited',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/inhabited+set',
		description:
			'A category is <i>inhabited</i> (or <i>non-empty</i>) if it has at least one object.',
		dual: 'inhabited',
	},
	{
		id: 'subobject classifier',
		prefix: 'has a',
		nlab_link: 'https://ncatlab.org/nlab/show/subobject+classifier',
		description:
			'A category $\\mathcal{C}$ has a <i>subobject classifier</i> if it has finite limits and a monomorphism $\\top : 1 \\to \\Omega$ from the terminal object such that for every monomorphism $m : A \\to B$ there is a unique morphism $\\chi_m : B \\to \\Omega$ such that $B \\leftarrow A \\rightarrow 1$ is the pullback of $B \\rightarrow \\Omega \\leftarrow 1$. Equivalently, the functor $\\mathrm{Sub} : \\mathcal{C}^{\\mathrm{op}} \\to \\mathbf{Set}^+$ is representable.',
		related: ['elementary topos'],
	},
	{
		id: 'balanced',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/balanced+category',
		description:
			'A category is <i>balanced</i> if every morphism which is a monomorphism and an epimorphism must be an isomorphism.',
		dual: 'balanced',
	},
	{
		id: 'infinitary distributive',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/distributive+category',
		description:
			'A category is <i>infinitary distributive</i> if it has finite products, all small coproducts, and for every object $A$ the functor $- \\times A$ preserves all small coproducts.',
		related: ['distributive'],
	},
	{
		id: 'distributive',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/distributive+category',
		description:
			'A category is <i>distributive</i> if it has finite products, finite coproducts, and for every object $A$ the functor $- \\times A$ preserves finite coproducts.',
		related: ['infinitary distributive'],
	},
	{
		id: 'generator',
		prefix: 'has a',
		nlab_link: 'https://ncatlab.org/nlab/show/separator',
		description:
			'An object $G$ of a category is called a <i>generator</i> if for every pair of parallel morphisms $f,g : A \\to B$, $f = g$ holds if for every morphism $h : G \\to A$ we have $f \\circ h = g \\circ h$. Equivalently, the functor $\\mathrm{Hom}(G,-) : \\mathcal{C} \\to \\mathbf{Set}^+$ is faithful. This property refers to the existence of a generator.',
		dual: 'cogenerator',
	},
	{
		id: 'cogenerator',
		prefix: 'has a',
		nlab_link: 'https://ncatlab.org/nlab/show/cogenerator',
		description:
			'An object $Q$ of a category is called a <i>cogenerator</i> if for every pair of parallel morphisms $f,g : A \\to B$, $f = g$ holds if for every morphism $h : B \\to Q$ we have $h \\circ f = h \\circ g$. Equivalently, the functor $\\mathrm{Hom}(-,Q) : \\mathcal{C}^{\\mathrm{op}} \\to \\mathbf{Set}^+$ is faithful. This property refers to the existence of a cogenerator.',
		dual: 'generator',
	},
	{
		id: 'exact filtered colimits',
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/commutativity+of+limits+and+colimits',
		description:
			'In a category $\\mathcal{C}$, which we assume to have filtered colimits and finite limits, we say that <i>filtered colimits are exact</i> if for every finite category $\\mathcal{I}$ the functor $\\lim : [\\mathcal{I}, \\mathcal{C}] \\to \\mathcal{C}$ preserves filtered colimits. Equivalently, for every diagram $X : \\mathcal{I} \\times \\mathcal{J} \\to \\mathcal{C}$, where $\\mathcal{I}$ is finite and $\\mathcal{J}$ is filtered, the canonical morphism $\\mathrm{colim}_{j} \\lim_{i} X(i,j) \\to \\lim_{i} \\mathrm{colim}_j X(i,j)$ is an isomorphism.',
		related: ['filtered colimits', 'finitely complete'],
	},
	{
		id: 'Grothendieck abelian',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/Grothendieck+category',
		description:
			'A category is <i>Grothendieck abelian</i> if it is abelian, has coproducts (and is therefore cocomplete), a generator, and filtered colimits commute with finite limits. These categories play an important role in homological algebra.',
		related: ['abelian', 'cocomplete', 'generator', 'exact filtered colimits'],
	},
	{
		id: 'disjoint finite coproducts',
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/disjoint+coproduct',
		description:
			'A category has <i>disjoint finite coproducts</i> if it has finite coproducts, for every pair of objects $A,B$ the coproduct inclusions $A \\rightarrow A+B \\leftarrow B$ are monomorphisms, and the pullback $A \\times_{A + B} B$ exists and is given by the initial object $0$.',
		related: ['finite coproducts', 'disjoint coproducts'],
	},
	{
		id: 'disjoint coproducts',
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/disjoint+coproduct',
		description:
			'A category has <i>disjoint coproducts</i> if it has coproducts, the coproduct inclusions $A_i \\to \\coprod_{i \\in I} A_i$ are monomorphisms, and the pullback of the inclusions $A_i \\to \\coprod_{i \\in I} A_i$ and $A_j \\to \\coprod_{i \\in I} A_i$ for $i \\neq j$ exists and is given by the initial object $0$.',
		related: ['coproducts', 'disjoint finite coproducts'],
	},
	{
		id: 'left cancellative',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/cancellative+category',
		description:
			'A category is <i>left cancellative</i> if for every morphism $f : A \\to B$ and every parallel pair of morphisms $g,h : B \\to C$ with $f \\circ g = f \\circ h$ we have $g = h$. Equivalently, every morphism is a monomorphism.',
		dual: 'right cancellative',
	},
	{
		id: 'right cancellative',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/cancellative+category',
		description:
			'A category is <i>right cancellative</i> if for every morphism $f : A \\to B$ and every parallel pair of morphisms $g,h : C \\to A$ with $g \\circ f = h \\circ f$ we have $g = h$. Equivalently, every morphism is an epimorphism.',
		dual: 'left cancellative',
	},
	{
		id: 'wide pullbacks',
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/wide+pullback',
		description:
			'A category $\\mathcal{C}$ has <i>wide pullbacks</i> if for every object $S$ the slice category $\\mathcal{C}/S$ has arbitrary products.',
		dual: 'wide pushouts',
		related: ['pullbacks'],
	},
	{
		id: 'wide pushouts',
		prefix: 'has',
		nlab_link: 'https://ncatlab.org/nlab/show/wide+pushout',
		description:
			'A category $\\mathcal{C}$ has <i>wide pushouts</i> if for every object $S$ the coslice category $S/\\mathcal{C}$ has arbitrary coproducts.',
		dual: 'wide pullbacks',
		related: ['pushouts'],
	},
	{
		id: 'split abelian',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/split+exact+sequence',
		description:
			'A category is <i>split abelian</i> if it is abelian and every short exact sequence splits. Equivalently, every object is projective. Equivalently, every object is injective.',
		dual: 'split abelian',
		related: ['abelian'],
	},
	{
		id: 'Cauchy complete',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/Cauchy+complete+category',
		description:
			'A category is <i>Cauchy complete</i> if every idempotent splits. That is, every idempotent endomorphism $e : X \\to X$ (that is, $e^2 = e$) may be written as $e = i \\circ p$ for some morphisms $p : X \\to Y$ and $i : Y \\to X$ with $p \\circ i = \\mathrm{id}_Y$. Equivalently, the pair $e,\\mathrm{id}_X : X \\rightrightarrows X$ has an equalizer (or coequalizer).',
		dual: 'Cauchy complete',
		related: ['finitely complete'],
	},
	{
		id: 'mono-regular',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/regular+monomorphism',
		description:
			'A category is <i>mono-regular</i> when every monomorphism is regular, i.e. the equalizer of a pair of morphisms. Notice that this is not standard terminology, apparently the literature has no name for this yet. A <i>preadditive</i> category is mono-regular iff every monomorphism is a kernel, and this type of category is commonly known as a <i>normal category</i>. We avoid this terminology here since it only applies to a certain type of categories, but mono-regular applies to all categories.', // https://math.stackexchange.com/questions/5031588
		dual: 'epi-regular',
	},
	{
		id: 'epi-regular',
		prefix: 'is',
		nlab_link: 'https://ncatlab.org/nlab/show/regular+epimorphism',
		description:
			'A category is <i>epi-regular</i> when every epimorphism is regular, i.e. the coequalizer of a pair of morphisms. Notice that this is not standard terminology, apparently the literature has no name for this yet. A <i>preadditive</i> category is epi-regular iff every epimorphism is a cokernel, and this type of category is commonly known as a <i>conormal category</i>. We avoid this terminology here since it only applies to a certain type of categories, but epi-regular applies to all categories.', // https://math.stackexchange.com/questions/5031588
		dual: 'mono-regular',
	},
]
