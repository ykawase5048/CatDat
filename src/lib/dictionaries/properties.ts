import type { Property } from '$lib/types'

export const properties = [
	{
		name: 'small',
		prefix: 'is',
		description:
			'A category is <i>small</i> when the collection of objects and the collection of morphisms is a set, i.e. small.',
		dual: 'small',
		related: ['essentially small'],
	},
	{
		name: 'locally small',
		prefix: 'is',
		description:
			'A category is <i>locally small</i> when for every pair of objects $A,B$ the collection of morphisms $A \\to B$ is a set, i.e. small.',
		dual: 'locally small',
	},
	{
		name: 'complete',
		prefix: 'is',
		description:
			'A category is <i>complete</i> when every small diagram in the category has a limit.',
		dual: 'cocomplete',
	},
	{
		name: 'cocomplete',
		prefix: 'is',
		description:
			'A category is <i>cocomplete</i> when every small diagram in the category has a colimit.',
		dual: 'complete',
	},
	{
		name: 'cartesian closed',
		prefix: 'is',
		description:
			'A category is <i>cartesian closed</i> if all finite products and exponentials exist.',
		related: ['finite products'],
	},
	{
		name: 'preadditive',
		prefix: 'is',
		description:
			"A category is <i>preadditive</i> when it is locally small and each hom-set carries the structure of an abelian group such that the composition is bilinear. Notice that 'preadditive' is an extra structure. The property here just says that some preadditive structure exists.",
		dual: 'preadditive',
		related: ['additive'],
	},
	{
		name: 'additive',
		prefix: 'is',
		description:
			'A category is <i>additive</i> if it is preadditive and has finite products (equivalently, finite coproducts).',
		dual: 'additive',
		related: ['preadditive', 'finite products'],
	},
	{
		name: 'abelian',
		prefix: 'is',
		description:
			'A category is <i>abelian</i> if it is additive, every morphism has a kernel and a cokernel, and every monomorphism and epimorphism is normal. As opposed to many other concepts of categories, being abelian turns out to be a mere property. For example, monoidal not just a property.',
		dual: 'abelian',
		related: ['additive'],
	},
	{
		name: 'finitely complete',
		prefix: 'is',
		description:
			'A category is <i>finitely complete</i> when every finite diagram has a limit.',
		dual: 'finitely cocomplete',
		related: ['complete'],
	},
	{
		name: 'finitely cocomplete',
		prefix: 'is',
		description:
			'A category is <i>finitely cocomplete</i> when every finite diagram has a colimit.',
		dual: 'finitely complete',
		related: ['cocomplete'],
	},
	{
		name: 'pointed',
		prefix: 'is',
		description:
			'A category is <i>pointed</i> when it has a zero object, i.e. an object which is both initial and terminal.',
		dual: 'pointed',
		related: ['initial object', 'terminal object'],
	},
	{
		name: 'locally finitely presentable',
		prefix: 'is',
		description:
			'A category is <i>locally finitely presentable</i> if it is locally small, cocomplete and every object is a filtered colimit of finitely presentable objects.',
	},
	{
		name: 'elementary topos',
		prefix: 'is an',
		description:
			'An <i>elementary topos</i> is a cartesian closed category with finite limits and a subobject classifier.',
	},
	{
		name: 'Grothendieck topos',
		prefix: 'is a',
		description:
			'A <i>Grothendieck topos</i> is a category that is equivalent to the category of sheaves on a site.',
		related: ['elementary topos'],
	},
	{
		name: 'well-powered',
		prefix: 'is',
		description:
			'A category is <i>well-powered</i> if the collection of subobjects of any object is a set.',
		dual: 'well-copowered',
	},
	{
		name: 'well-copowered',
		prefix: 'is',
		description:
			'A category is <i>well-copowered</i> if the collection of quotients of any object is a set.',
		dual: 'well-powered',
	},
	{
		name: 'initial object',
		prefix: 'has an',
		description:
			'An <i>initial object</i> is an object that has a unique morphism to every object in the category. This property refers to the existence of an initial object.',
		dual: 'terminal object',
	},
	{
		name: 'terminal object',
		prefix: 'has a',
		description:
			'A <i>terminal object</i> (or <i>final object</i>) is an object that has a unique morphism from every object in the category. This property refers to the existence of a terminal object.',
		dual: 'initial object',
	},
	{
		name: 'products',
		prefix: 'has',
		description:
			'Given a family of objects $(A_i)_{i \\in I}$, a <i>product</i> $\\prod_{i \\in I} A_i$ is defined as an object with morphisms $p_i : \\prod_{i \\in I} A_i \\to A_i$ satisfying the following universal property: For every object $T$ and every family of morphisms $(f_i : T \\to A_i)_{i \\in I}$ there is a unique morphism $f : T \\to \\prod_{i \\in I} A_i$ such that $p_i \\circ f = f_i$ for all $i \\in I$. This property refers to the existence of products.',
		dual: 'coproducts',
	},
	{
		name: 'coproducts',
		prefix: 'has',
		description:
			'Given a family of objects $(A_i)_{i \\in I}$, a <i>coproduct</i> $\\coprod_{i \\in I} A_i$ is defined as an object with morphisms $i_i : A_i \\to \\coprod_{i \\in I} A_i$ satisfying the following universal property: For every object $T$ and every family of morphisms $(f_i : A_i \\to T)_{i \\in I}$ there is a unique morphism $f : \\coprod_{i \\in I} A_i \\to T$ such that $f \\circ i_i = f_i$ for all $i \\in I$. This property refers to the existence of coproducts.',
		dual: 'products',
	},
	{
		name: 'finite products',
		prefix: 'has',
		description:
			'A category has <i>finite products</i> if it has products for finite families of objects. Equivalently, it has a terminal object and binary products.',
		dual: 'finite coproducts',
		related: ['products'],
	},
	{
		name: 'finite coproducts',
		prefix: 'has',
		description:
			'A category has <i>finite coproducts</i> if it has coproducts for finite families of objects. Equivalently, it has an initial object and binary coproducts.',
		dual: 'finite products',
		related: ['coproducts'],
	},
	{
		name: 'equalizers',
		prefix: 'has',
		description:
			'An <i>equalizer</i> of a pair of morphisms $f,g : A \\to B$ is an object $E$ with a morphism $e : E \\to A$ such that $f \\circ e = g \\circ e$ and which is universal with respect to this property. This property refers to the existence of equalizers.',
		dual: 'coequalizers',
	},
	{
		name: 'coequalizers',
		prefix: 'has',
		description:
			'A <i>coequalizer</i> of a pair of morphisms $f,g : A \\to B$ is an object $C$ with a morphism $c : B \\to C$ such that $c \\circ f = c \\circ g$ and which is universal with respect to this property. This property refers to the existence of coequalizers.',
		dual: 'equalizers',
	},
	{
		name: 'filtered limits',
		prefix: 'has',
		description:
			'A category has <i>filtered limits</i> if it has limits of diagrams indexed by filtered categories.',
		dual: 'filtered colimits',
		related: ['complete'],
	},
	{
		name: 'filtered colimits',
		prefix: 'has',
		description:
			'A category has <i>filtered colimits</i> if it has colimits of diagrams indexed by filtered categories.',
		dual: 'filtered limits',
		related: ['cocomplete'],
	},
	{
		name: 'self-dual',
		prefix: 'is',
		description:
			'A category is <i>self-dual</i> if it is equivalent to its opposite (or dual) category.',
		dual: 'self-dual',
	},
	{
		name: 'groupoid',
		prefix: 'is a',
		description:
			'A <i>groupoid</i> is a category in which every morphism is an isomorphism.',
		dual: 'groupoid',
	},
	{
		name: 'essentially small',
		prefix: 'is',
		description:
			'A category is <i>essentially small</i> when it is equivalent to a small category. In particular, there is a set of objects such that every object is isomorphic to an object in this set. In contrast to the property of being small, being essentially small is invariant under equivalences of categories.',
		dual: 'essentially small',
		related: ['small'],
	},
	{
		name: 'thin',
		prefix: 'is',
		description:
			'A category is <i>thin</i> when between any pair of objects there is at most one morphism. Such categories correspond to preordered collections of objects.',
		dual: 'thin',
	},
	{
		name: 'discrete',
		prefix: 'is',
		description:
			'A category is <i>discrete</i> when every morphism is an identity morphism. Thus, a discrete category is merely a collection of objects.',
		dual: 'discrete',
	},
] as const satisfies Property[]

export type PropertyName = (typeof properties)[number]['name']

export const properties_dictionary = properties.reduce(
	(acc, property) => ({ ...acc, [property.name]: property }),
	{},
) as Record<PropertyName, Property>
