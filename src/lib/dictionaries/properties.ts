import type { CategoryProperty } from '$lib/types'

export const properties_dictionary = {
	'small': {
		id: 1,
		prefix: 'is',
		description:
			'The collection of objects and the collection of morphisms is a set, i.e. small.',
	},
	'locally small': {
		id: 2,
		prefix: 'is',
		description:
			'For every pair of objects $A,B$, the collection of morphisms $A \\to B$ is a set, i.e. small.',
	},
	'complete': {
		id: 3,
		prefix: 'is',
		description: 'Every small diagram in the category has a limit.',
	},
	'cocomplete': {
		id: 4,
		prefix: 'is',
		description: 'Every small diagram in the category has a colimit.',
	},
	'cartesian closed': {
		id: 5,
		prefix: 'is',
		description: 'All finite products and exponentials exist.',
	},
	'preadditive': {
		id: 6,
		prefix: 'is',
		description:
			"Each hom-set carries the structure of an abelian group and composition is bilinear. Notice that 'preadditive' is an extra structure. The property here just says that some preadditive structure exists.",
	},
	'abelian': {
		id: 7,
		prefix: 'is',
		description:
			'A category is abelian if it is additive, every morphism has a kernel and a cokernel, and every monomorphism and epimorphism is normal. As opposed to many other concepts of categories, being abelian turns out to be a mere property. For example, monoidal not just a property.',
	},
	'finitely complete': {
		id: 8,
		prefix: 'is',
		description:
			'A category is finitely complete when every finite diagram has a limit.',
	},
	'finitely cocomplete': {
		id: 9,
		prefix: 'is',
		description:
			'A category is finitely cocomplete when every finite diagram has a colimit.',
	},
	'pointed': {
		id: 10,
		prefix: 'is',
		description:
			'A category is called pointed when it has a zero object, i.e. an object which is both initial and terminal.',
	},
	'locally finitely presentable': {
		id: 11,
		prefix: 'is',
		description:
			'A category is locally finitely presentable if it is cocomplete and every object is a filtered colimit of finitely presentable objects.',
	},
	'elementary topos': {
		id: 12,
		prefix: 'is an',
		description:
			'An elementary topos is a cartesian closed category with finite limits and a subobject classifier.',
	},
	'Grothendieck topos': {
		id: 13,
		prefix: 'is a',
		description:
			'A Grothendieck topos is a category that is equivalent to the category of sheaves on a site.',
	},
	'well-powered': {
		id: 14,
		prefix: 'is',
		description:
			'A category is well-powered if the collection of subobjects of each object is a set.',
	},
	'well-copowered': {
		id: 15,
		prefix: 'is',
		description:
			'A category is well-copowered if the collection of quotients of each object is a set.',
	},
} as const satisfies Record<string, Omit<CategoryProperty, 'name'>>

export const properties_list: CategoryProperty[] = Object.entries(
	properties_dictionary,
).map(([name, property]) => ({
	name,
	...property,
}))
