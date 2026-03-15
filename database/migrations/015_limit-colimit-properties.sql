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
		'complete',
		'is',
		'A category is <i>complete</i> when every small diagram in the category has a limit.',
		'https://ncatlab.org/nlab/show/complete+category',
		'cocomplete',
		TRUE
	),
	(
		'cocomplete',
		'is',
		'A category is <i>cocomplete</i> when every small diagram in the category has a colimit.',
		'https://ncatlab.org/nlab/show/cocomplete+category',
		'complete',
		TRUE
	),
	(
		'cartesian closed',
		'is',
		'A category is <i>cartesian closed</i> if all finite products and exponentials exist.',
		'https://ncatlab.org/nlab/show/cartesian+closed+category',
		NULL,
		TRUE
	),
	(
		'pullbacks',
		'has',
		'A category $\mathcal{C}$ has <i>pullbacks</i> if every cospan of morphisms $A \rightarrow S \leftarrow B$ has a pullback $A \times_S B$. This is also known as a fiber product. Equivalently, the slice category $\mathcal{C}/S$ has binary products.',
		'https://ncatlab.org/nlab/show/pullback',
		'pushouts',
		TRUE
	),
	(
		'pushouts',
		'has',
		'A category $\mathcal{C}$ has <i>pushouts</i> if every span of morphisms $A \leftarrow S \rightarrow B$ has a pushout $A \sqcup_S B$. This is also known as a fiber coproduct. Equivalently, the coslice category $S/\mathcal{C}$ has binary coproducts.',
		'https://ncatlab.org/nlab/show/pushout',
		'pullbacks',
		TRUE
	),
	(
		'finitely complete',
		'is',
		'A category is <i>finitely complete</i> when every finite diagram has a limit.',
		'https://ncatlab.org/nlab/show/finitely+complete+category',
		'finitely cocomplete',
		TRUE
	),
	(
		'finitely cocomplete',
		'is',
		'A category is <i>finitely cocomplete</i> when every finite diagram has a colimit.',
		'https://ncatlab.org/nlab/show/finitely+cocomplete+category',
		'finitely complete',
		TRUE
	),
	(
		'initial object',
		'has an',
		'An <i>initial object</i> is an object that has a unique morphism to every object in the category. This property refers to the existence of an initial object.',
		'https://ncatlab.org/nlab/show/initial+object',
		'terminal object',
		TRUE
	),
	(
		'terminal object',
		'has a',
		'A <i>terminal object</i> (or <i>final object</i>) is an object that has a unique morphism from every object in the category. This property refers to the existence of a terminal object.',
		'https://ncatlab.org/nlab/show/terminal+object',
		'initial object',
		TRUE
	),
	(
		'products',
		'has',
		'Given a family of objects $(A_i)_{i \in I}$, a <i>product</i> $\prod_{i \in I} A_i$ is defined as an object with morphisms $p_i : \prod_{i \in I} A_i \to A_i$ satisfying the following universal property: For every object $T$ and every family of morphisms $(f_i : T \to A_i)_{i \in I}$ there is a unique morphism $f : T \to \prod_{i \in I} A_i$ such that $p_i \circ f = f_i$ for all $i \in I$. This property refers to the existence of products.',
		'https://ncatlab.org/nlab/show/cartesian+product',
		'coproducts',
		TRUE
	),
	(
		'coproducts',
		'has',
		'Given a family of objects $(A_i)_{i \in I}$, a <i>coproduct</i> $\coprod_{i \in I} A_i$ is defined as an object with morphisms $i_i : A_i \to \coprod_{i \in I} A_i$ satisfying the following universal property: For every object $T$ and every family of morphisms $(f_i : A_i \to T)_{i \in I}$ there is a unique morphism $f : \coprod_{i \in I} A_i \to T$ such that $f \circ i_i = f_i$ for all $i \in I$. This property refers to the existence of coproducts.',
		'https://ncatlab.org/nlab/show/coproduct',
		'products',
		TRUE
	),
	(
		'finite products',
		'has',
		'A category has <i>finite products</i> if it has products for finite families of objects. Equivalently, it has a terminal object and binary products.',
		'https://ncatlab.org/nlab/show/finite+product',
		'finite coproducts',
		TRUE
	),
	(
		'finite coproducts',
		'has',
		'A category has <i>finite coproducts</i> if it has coproducts for finite families of objects. Equivalently, it has an initial object and binary coproducts.',
		'https://ncatlab.org/nlab/show/finite+coproduct',
		'finite products',
		TRUE
	),
	(
		'binary products',
		'has',
		'A category has <i>binary products</i> if every pair $A,B$ of objects has a product $A \times B$.',
		'https://ncatlab.org/nlab/show/binary+product',
		'binary coproducts',
		TRUE
	),
	(
		'binary coproducts',
		'has',
		'A category has <i>binary coproducts</i> if every pair $A,B$ of objects has a coproduct $A \sqcup B$.',
		'https://ncatlab.org/nlab/show/coproduct',
		'binary products',
		TRUE
	),
	(
		'countable products',
		'has',
		'A category has <i>countable products</i> if it has products for countable families of objects.',
		NULL,
		'countable coproducts',
		TRUE
	),
	(
		'countable coproducts',
		'has',
		'A category has <i>countable coproducts</i> if it has coproducts for countable families of objects.',
		NULL,
		'countable products',
		TRUE
	),
	(
		'equalizers',
		'has',
		'An <i>equalizer</i> of a pair of morphisms $f,g : A \to B$ is an object $E$ with a morphism $e : E \to A$ such that $f \circ e = g \circ e$ and which is universal with respect to this property. This property refers to the existence of equalizers.',
		'https://ncatlab.org/nlab/show/equalizer',
		'coequalizers',
		TRUE
	),
	(
		'coequalizers',
		'has',
		'A <i>coequalizer</i> of a pair of morphisms $f,g : A \to B$ is an object $C$ with a morphism $c : B \to C$ such that $c \circ f = c \circ g$ and which is universal with respect to this property. This property refers to the existence of coequalizers.',
		'https://ncatlab.org/nlab/show/coequalizer',
		'equalizers',
		TRUE
	),
	(
		'filtered limits',
		'has',
		'A category has <i>filtered limits</i> if it has limits of diagrams indexed by cofiltered categories.',
		'https://ncatlab.org/nlab/show/filtered+limit',
		'filtered colimits',
		TRUE
	),
	(
		'filtered colimits',
		'has',
		'A category has <i>filtered colimits</i> if it has colimits of diagrams indexed by filtered categories.',
		'https://ncatlab.org/nlab/show/filtered+colimit',
		'filtered limits',
		TRUE
	),
	(
		'sequential limits',
		'has',
		'A category has <i>sequential limits</i> if it has limits of diagrams of the following form: $\cdots \bullet \to \bullet \to \bullet$',
		'https://ncatlab.org/nlab/show/sequential+limit',
		'sequential colimits',
		TRUE
	),
	(
		'sequential colimits',
		'has',
		'A category has <i>sequential colimits</i> if it has colimits of diagrams of the following form: $\bullet \to \bullet \to \bullet \to \cdots$',
		'https://ncatlab.org/nlab/show/sequential+colimit',
		'sequential limits',
		TRUE
	),
	(
		'connected limits',
		'has',
		'A category has <i>connected limits</i> if it has limits of diagrams indexed by connected categories.',
		'https://ncatlab.org/nlab/show/connected+limit',
		'connected colimits',
		TRUE
	),
	(
		'connected colimits',
		'has',
		'A category has <i>connected colimits</i> if it has colimits of diagrams indexed by connected categories.',
		'https://ncatlab.org/nlab/show/connected+colimit',
		'connected limits',
		TRUE
	),
	(
		'pointed',
		'is',
		'A category is <i>pointed</i> when it has a zero object, i.e. an object which is both initial and terminal.',
		'https://ncatlab.org/nlab/show/pointed+category',
		'pointed',
		TRUE
	),
	(
		'strict initial object',
		'has a',
		'A <i>strict initial object</i> is an initial object $0$ such that every morphism $A \to 0$ is an isomorphism. This property refers to the existence of a strict initial object.',
		'https://ncatlab.org/nlab/show/strict+initial+object',
		'strict terminal object',
		TRUE
	),
	(
		'strict terminal object',
		'has a',
		'A <i>strict terminal object</i> is a terminal object $1$ such that every morphism $1 \to A$ is an isomorphism. This property refers to the existence of a strict terminal object.',
		'https://ncatlab.org/nlab/show/strict+terminal+object',
		'strict initial object',
		TRUE
	),
	(
		'infinitary distributive',
		'is',
		'A category is <i>infinitary distributive</i> if it has finite products, all small coproducts, and for every object $A$ the functor $- \times A$ preserves all small coproducts.',
		'https://ncatlab.org/nlab/show/distributive+category',
		NULL,
		TRUE
	),
	(
		'distributive',
		'is',
		'A category is <i>distributive</i> if it has finite products, finite coproducts, and for every object $A$ the functor $- \times A$ preserves finite coproducts.',
		'https://ncatlab.org/nlab/show/distributive+category',
		NULL,
		TRUE
	),
	(
		'exact filtered colimits',
		'has',
		'In a category $\mathcal{C}$, which we assume to have filtered colimits and finite limits, we say that <i>filtered colimits are exact</i> if for every finite category $\mathcal{I}$ the functor $\lim : [\mathcal{I}, \mathcal{C}] \to \mathcal{C}$ preserves filtered colimits. Equivalently, for every diagram $X : \mathcal{I} \times \mathcal{J} \to \mathcal{C}$, where $\mathcal{I}$ is finite and $\mathcal{J}$ is filtered, the canonical morphism $\mathrm{colim}_{j} \lim_{i} X(i,j) \to \lim_{i} \mathrm{colim}_j X(i,j)$ is an isomorphism.',
		'https://ncatlab.org/nlab/show/commutativity+of+limits+and+colimits',
		NULL,
		TRUE
	),
	(
		'disjoint finite coproducts',
		'has',
		'A category has <i>disjoint finite coproducts</i> if it has finite coproducts, for every pair of objects $A,B$ the coproduct inclusions $A \rightarrow A+B \leftarrow B$ are monomorphisms, and the pullback $A \times_{A + B} B$ exists and is given by the initial object $0$.',
		'https://ncatlab.org/nlab/show/disjoint+coproduct',
		NULL,
		TRUE
	),
	(
		'disjoint coproducts',
		'has',
		'A category has <i>disjoint coproducts</i> if it has coproducts, the coproduct inclusions $A_i \to \coprod_{i \in I} A_i$ are monomorphisms, and the pullback of the inclusions $A_i \to \coprod_{i \in I} A_i$ and $A_j \to \coprod_{i \in I} A_i$ for $i \neq j$ exists and is given by the initial object $0$.',
		'https://ncatlab.org/nlab/show/disjoint+coproduct',
		NULL,
		TRUE
	),
	(
		'wide pullbacks',
		'has',
		'A category $\mathcal{C}$ has <i>wide pullbacks</i> if for every object $S$ the slice category $\mathcal{C}/S$ has arbitrary products.',
		'https://ncatlab.org/nlab/show/wide+pullback',
		'wide pushouts',
		TRUE
	),
	(
		'wide pushouts',
		'has',
		'A category $\mathcal{C}$ has <i>wide pushouts</i> if for every object $S$ the coslice category $S/\mathcal{C}$ has arbitrary coproducts.',
		'https://ncatlab.org/nlab/show/wide+pushout',
		'wide pullbacks',
		TRUE
	),
	(
		'mono-regular',
		'is',
		'A category is <i>mono-regular</i> when every monomorphism is regular, i.e. the equalizer of a pair of morphisms. Notice that this is not standard terminology, <a href="https://math.stackexchange.com/questions/5031588" target="_blank">apparently</a> the literature has no name for this yet. A <i>preadditive</i> category is mono-regular iff every monomorphism is a kernel, and this type of category is commonly known as a <i>normal category</i>. We avoid this terminology here since it only applies to a certain type of categories, but mono-regular applies to all categories.',
		'https://ncatlab.org/nlab/show/regular+monomorphism',
		'epi-regular',
		TRUE
	),
	(
		'epi-regular',
		'is',
		'A category is <i>epi-regular</i> when every epimorphism is regular, i.e. the coequalizer of a pair of morphisms. Notice that this is not standard terminology, <a href="https://math.stackexchange.com/questions/5031588" target="_blank">apparently</a> the literature has no name for this yet. A <i>preadditive</i> category is epi-regular iff every epimorphism is a cokernel, and this type of category is commonly known as a <i>conormal category</i>. We avoid this terminology here since it only applies to a certain type of categories, but epi-regular applies to all categories.',
		'https://ncatlab.org/nlab/show/regular+epimorphism',
		'mono-regular',
		TRUE
	);