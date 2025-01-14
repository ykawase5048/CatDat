import type { Property } from '$lib/types'

export const properties_dictionary = {
	'small': {
		prefix: 'is',
		description:
			'The collection of objects and the collection of morphisms is a set, i.e. small.',
		dual: 'small',
	},
	'locally small': {
		prefix: 'is',
		description:
			'For every pair of objects $A,B$, the collection of morphisms $A \\to B$ is a set, i.e. small.',
		dual: 'locally small',
	},
	'complete': {
		prefix: 'is',
		description: 'Every small diagram in the category has a limit.',
		dual: 'cocomplete',
	},
	'cocomplete': {
		prefix: 'is',
		description: 'Every small diagram in the category has a colimit.',
		dual: 'complete',
	},
	'cartesian closed': {
		prefix: 'is',
		description: 'All finite products and exponentials exist.',
	},
	'preadditive': {
		prefix: 'is',
		description:
			"Each hom-set carries the structure of an abelian group and composition is bilinear. Notice that 'preadditive' is an extra structure. The property here just says that some preadditive structure exists.",
		dual: 'preadditive',
	},
	'abelian': {
		prefix: 'is',
		description:
			'A category is abelian if it is additive, every morphism has a kernel and a cokernel, and every monomorphism and epimorphism is normal. As opposed to many other concepts of categories, being abelian turns out to be a mere property. For example, monoidal not just a property.',
		dual: 'abelian',
	},
	'finitely complete': {
		prefix: 'is',
		description:
			'A category is finitely complete when every finite diagram has a limit.',
		dual: 'finitely cocomplete',
	},
	'finitely cocomplete': {
		prefix: 'is',
		description:
			'A category is finitely cocomplete when every finite diagram has a colimit.',
		dual: 'finitely complete',
	},
	'pointed': {
		prefix: 'is',
		description:
			'A category is called pointed when it has a zero object, i.e. an object which is both initial and terminal.',
		dual: 'pointed',
	},
	'locally finitely presentable': {
		prefix: 'is',
		description:
			'A category is locally finitely presentable if it is cocomplete and every object is a filtered colimit of finitely presentable objects.',
	},
	'elementary topos': {
		prefix: 'is an',
		description:
			'An elementary topos is a cartesian closed category with finite limits and a subobject classifier.',
	},
	'Grothendieck topos': {
		prefix: 'is a',
		description:
			'A Grothendieck topos is a category that is equivalent to the category of sheaves on a site.',
	},
	'well-powered': {
		prefix: 'is',
		description:
			'A category is well-powered if the collection of subobjects of each object is a set.',
		dual: 'well-copowered',
	},
	'well-copowered': {
		prefix: 'is',
		description:
			'A category is well-copowered if the collection of quotients of each object is a set.',
		dual: 'well-powered',
	},
	'initial object': {
		prefix: 'has an',
		description:
			'An initial object is an object that has a unique morphism to every object in the category.',
		dual: 'terminal object',
	},
	'terminal object': {
		prefix: 'has a',
		description:
			'A terminal object is an object that has a unique morphism from every object in the category.',
		dual: 'initial object',
	},
	'products': {
		prefix: 'has',
		description:
			'Given a family of objects $(A_i)_{i \\in I}$, a product $\\prod_{i \\in I} A_i$ is defined as an object with morphisms $p_i : \\prod_{i \\in I} A_i \\to A_i$ satisfying the following universal property: For every object $T$ and every family of morphisms $(f_i : T \\to A_i)_{i \\in I}$ there is a unique morphism $f : T \\to \\prod_{i \\in I} A_i$ such that $p_i \\circ f = f_i$ for all $i \\in I$.',
		dual: 'coproducts',
	},
	'coproducts': {
		prefix: 'has',
		description:
			'Given a family of objects $(A_i)_{i \\in I}$, a coproduct $\\coprod_{i \\in I} A_i$ is defined as an object with morphisms $i_i : A_i \\to \\coprod_{i \\in I} A_i$ satisfying the following universal property: For every object $T$ and every family of morphisms $(f_i : A_i \\to T)_{i \\in I}$ there is a unique morphism $f : \\coprod_{i \\in I} A_i \\to T$ such that $f \\circ i_i = f_i$ for all $i \\in I$.',
		dual: 'products',
	},
	'finite products': {
		prefix: 'has',
		description:
			'A category has finite products if it has products for finite families of objects. Equivalently, it has a terminal object and binary products.',
		dual: 'finite coproducts',
	},
	'finite coproducts': {
		prefix: 'has',
		description:
			'A category has finite coproducts if it has coproducts for finite families of objects. Equivalently, it has an initial object and binary coproducts.',
		dual: 'finite products',
	},
	'equalizers': {
		prefix: 'has',
		description:
			'An equalizer of a pair of morphisms $f,g : A \\to B$ is an object $E$ with a morphism $e : E \\to A$ such that $f \\circ e = g \\circ e$ and which is universal with respect to this property.',
		dual: 'coequalizers',
	},
	'coequalizers': {
		prefix: 'has',
		description:
			'A coequalizer of a pair of morphisms $f,g : A \\to B$ is an object $C$ with a morphism $c : B \\to C$ such that $c \\circ f = c \\circ g$ and which is universal with respect to this property.',
		dual: 'equalizers',
	},
	'filtered limits': {
		prefix: 'has',
		description:
			'A category has filtered limits if it has limits of diagrams indexed by filtered categories.',
		dual: 'filtered colimits',
	},
	'filtered colimits': {
		prefix: 'has',
		description:
			'A category has filtered colimits if it has colimits of diagrams indexed by filtered categories.',
		dual: 'filtered limits',
	},
	'self-dual': {
		prefix: 'is',
		description:
			'A category is self-dual if it is equivalent to its opposite (or dual) category.',
		dual: 'self-dual',
	},
} as const satisfies Record<string, Omit<Property, 'name'>>

export const properties_list: Property[] = Object.entries(properties_dictionary).map(
	([name, property]) => ({
		name,
		...property,
	}),
)
