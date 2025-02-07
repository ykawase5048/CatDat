import type { CategoryID } from './categories.data'

export const category_epimorphisms: Readonly<
	Partial<Record<CategoryID, { description: string; reason: string }>>
> = {
	'0': {
		description: "there aren't any",
		reason: '',
	},
	'1': {
		description: 'every morphism',
		reason: '',
	},
	'2': {
		description: 'every morphism',
		reason: '',
	},
	'Set': {
		description: 'surjective maps',
		reason: '',
	},
	'Ab': {
		description: 'surjective homomorphisms',
		reason: '',
	},
	'Top': {
		description: 'surjective continuous maps',
		reason: '',
	},
	'Grp': {
		description: 'surjective homomorphisms',
		reason: '',
	},
	'Vect': {
		description: 'surjective linear maps',
		reason: '',
	},
	'Ring': {
		description: 'are not necessarily surjective',
		reason: '',
	},
	'CRing': {
		description: 'are not necessarily surjective',
		reason: '',
	},
	'Rng': {
		description: 'are not necessarily surjective',
		reason: '',
	},
	'FinSet': {
		description: 'surjective maps',
		reason: '',
	},
	'FinAb': {
		description: 'surjective homomorphisms',
		reason: '',
	},
	'Abfg': {
		description: 'surjective homomorphisms',
		reason: '',
	},
	'Set*': {
		description: 'surjective pointed maps',
		reason: '',
	},
	'sSet': {
		description: 'pointwise surjective transformations',
		reason: '',
	},
	'Mon': {
		description: 'are not necessarily surjective',
		reason: '',
	},
	'Pos': {
		description: 'surjective order-preserving functions',
		reason: '',
	},
	'I': {
		description: 'every morphism',
		reason: '',
	},
	'M-Set': {
		description: 'surjective $M$-maps',
		reason: '',
	},
	'R-Mod': {
		description: 'surjective $R$-linear maps',
		reason: '',
	},
	'Met': {
		description: 'are not necessarily surjective. TODO: make this more precise',
		reason: '',
	},
	'Met_oo': {
		description: 'are not necessarily surjective. TODO: make this more precise',
		reason: '',
	},
	'Met_c': {
		description: 'are not necessarily surjective. TODO: make this more precise',
		reason: '',
	},
	'Ban': {
		description: 'linear contractions with dense image',
		reason: '',
	},
	'Man': {
		description: 'are not necessarily surjective. TODO: make this more precise',
		reason: '',
	},
	'Meas': {
		description: 'surjective measurable maps',
		reason: '',
	},
	'N': {
		description: 'every morphism',
		reason: '',
	},
	'Cat': {
		description:
			"are surjective on objects, but not necessarily on morphisms. Isbell's zigzag theorem gives a precise characterization.",
		reason: '',
	},
	'On': {
		description: 'every morphism',
		reason: '',
	},
	'Fld': {
		description: 'purely inseparable homomorphisms',
		reason: '',
	},
	'FreeAb': {
		description:
			'homomorphisms $f : A \\to B$ with the property that $f(A)$ is not contained in a proper direct summand of $B$.',
		reason: '',
	},
	'Z': {
		description: 'objectwise surjective natural transformations',
		reason: '',
	},
	'BG': {
		description: 'every morphism',
		reason: '',
	},
	'BGf': {
		description: 'every morphism',
		reason: '',
	},
	'BN': {
		description: 'every morphism',
		reason: '',
	},
	'walking_pair': {
		description: 'every morphism',
		reason: '',
	},
	'walking_isomorphism': {
		description: 'every morphism',
		reason: '',
	},
	'Setne': {
		description: 'surjective maps',
		reason: '',
	},
	'B': {
		description: 'every morphism',
		reason: '',
	},
	'FI': {
		description: 'bijective maps',
		reason: '',
	},
	'FS': {
		description: 'every morphism',
		reason: '',
	},
	'On+': {
		description: 'finite ordinal numbers',
		reason: '',
	},
	'FinOrd': {
		description: 'surjective order-preserving maps',
		reason: '',
	},
	'Rel': {
		description:
			'A relation $R : A \\to B$ is an epimorphism iff the map $R^* : P(B) \\to P(A)$ defined by $S \\mapsto \\{a \\in A : \\exists \\, b \\in S: (a,b) \\in R \\}$ is injective.',
		reason: '',
	},
	'Sp': {
		description: 'pointwise surjective natural transformations',
		reason: '',
	},
	'real_interval': {
		description: 'every morphism',
		reason: '',
	},
}
