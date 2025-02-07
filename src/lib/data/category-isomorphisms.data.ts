import type { CategoryID } from './categories.data'

export const category_isomorphisms: Readonly<
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
		description: 'bijective maps',
		reason: '',
	},
	'Ab': {
		description: 'bijective homomorphisms',
		reason: '',
	},
	'Top': {
		description: 'homeomorphisms',
		reason: '',
	},
	'Grp': {
		description: 'bijective homomorphisms',
		reason: '',
	},
	'Vect': {
		description: 'bijective linear maps',
		reason: '',
	},
	'Ring': {
		description: 'bijective ring homomorphisms',
		reason: '',
	},
	'CRing': {
		description: 'bijective ring homomorphisms',
		reason: '',
	},
	'Rng': {
		description: 'bijective rng homomorphisms',
		reason: '',
	},
	'FinSet': {
		description: 'bijective maps',
		reason: '',
	},
	'FinAb': {
		description: 'bijective homomorphisms',
		reason: '',
	},
	'Abfg': {
		description: 'bijective homomorphisms',
		reason: '',
	},
	'Set*': {
		description: 'bijective pointed maps',
		reason: '',
	},
	'sSet': {
		description: 'natural isomorphisms',
		reason: '',
	},
	'Mon': {
		description: 'bijective homomorphisms',
		reason: '',
	},
	'Pos': {
		description: 'bijective order-preserving and order-reflecting functions',
		reason: '',
	},
	'I': {
		description: 'the two identities',
		reason: '',
	},
	'M-Set': {
		description: 'bijective $M$-maps',
		reason: '',
	},
	'R-Mod': {
		description: 'bijective $R$-linear maps',
		reason: '',
	},
	'Met': {
		description: 'bijective isometries',
		reason: '',
	},
	'Met_oo': {
		description: 'bijective isometries',
		reason: '',
	},
	'Met_c': {
		description: 'homeomorphisms',
		reason: '',
	},
	'Ban': {
		description: 'bijective linear isometries',
		reason: '',
	},
	'Man': {
		description: 'diffeomorphisms',
		reason: '',
	},
	'Meas': {
		description:
			'bijective measurable maps that map measurable sets to measurable sets',
		reason: '',
	},
	'N': {
		description: 'only the identity morphisms',
		reason: '',
	},
	'Cat': {
		description: 'functors that are bijective on objects and morphisms',
		reason: '',
	},
	'On': {
		description: 'only the identities',
		reason: '',
	},
	'LRS': {
		description:
			'pairs $(f,f^{\\sharp})$ consisting of a homeomorphism $f$ and an isomorphism of sheaves $f^{\\sharp}$',
		reason: '',
	},
	'Sch': {
		description:
			'pairs $(f,f^{\\sharp})$ consisting of a homeomorphism $f$ and an isomorphism of sheaves $f^{\\sharp}$',
		reason: '',
	},
	'Fld': {
		description: 'bijective field homomorphisms',
		reason: '',
	},
	'FreeAb': {
		description: 'bijective homomorphisms',
		reason: '',
	},
	'Z': {
		description: 'natural isomorphisms',
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
		description: 'only the number $0$',
		reason: '',
	},
	'walking_pair': {
		description: 'the two identities',
		reason: '',
	},
	'walking_isomorphism': {
		description: 'every morphism',
		reason: '',
	},
	'Setne': {
		description: 'bijective maps',
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
		description: 'bijective maps',
		reason: '',
	},
	'On+': {
		description: 'only the ordinal $0$',
		reason: '',
	},
	'FinOrd': {
		description: 'bijective order-preserving maps',
		reason: '',
	},
	'Rel': {
		description: 'bijective functions',
		reason: '',
	},
	'Sp': {
		description: 'natural isomorphisms',
		reason: '',
	},
	'real_interval': {
		description: 'only the identity morphisms',
		reason: '',
	},
}
