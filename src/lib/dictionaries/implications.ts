import type { Implication } from '$lib/types'

import { get_new_dual_implication, get_self_dual_implication } from '$lib/dualization'
import { properties, type PropertyName } from './properties'

export const implications: Implication[] = [
	{
		assumptions: ['small'],
		conclusions: ['locally small'],
	},
	{
		assumptions: ['locally finitely presentable'],
		conclusions: [
			'well-powered',
			'well-copowered',
			'complete',
			'cocomplete',
			'locally small',
		],
	},
	{
		assumptions: ['elementary topos'],
		conclusions: ['cartesian closed', 'finitely cocomplete', 'finitely complete'],
	},
	{
		assumptions: ['elementary topos', 'locally small'],
		conclusions: ['well-powered', 'well-copowered'],
	},
	{
		equivalent: true,
		assumptions: ['complete'],
		conclusions: ['finitely complete', 'filtered limits'],
	},
	{
		assumptions: ['preadditive'],
		conclusions: ['locally small'],
	},
	{
		assumptions: ['preadditive', 'initial object'],
		conclusions: ['pointed'],
	},
	{
		assumptions: ['preadditive', 'finite coproducts'],
		conclusions: ['finite products'],
	},
	{
		assumptions: ['abelian'],
		conclusions: ['additive', 'finitely cocomplete', 'finitely complete'],
	},
	{
		equivalent: true,
		assumptions: ['additive'],
		conclusions: ['preadditive', 'finite products'],
	},
	{
		assumptions: ['Grothendieck topos'],
		conclusions: ['elementary topos', 'locally small', 'complete', 'cocomplete'],
	},
	{
		assumptions: ['products'],
		conclusions: ['finite products'],
	},
	{
		assumptions: ['finite products', 'filtered limits'],
		conclusions: ['products'],
	},
	{
		equivalent: true,
		assumptions: ['finite products'],
		conclusions: ['terminal object', 'binary products'],
	},
	{
		assumptions: ['pointed'],
		conclusions: ['terminal object', 'initial object'],
	},
	{
		assumptions: ['cartesian closed'],
		conclusions: ['finite products'],
	},
	{
		equivalent: true,
		assumptions: ['finite products', 'equalizers'],
		conclusions: ['finitely complete'],
	},
	{
		equivalent: true,
		assumptions: ['products', 'equalizers'],
		conclusions: ['complete'],
	},
	{
		assumptions: ['groupoid'],
		conclusions: ['self-dual'],
	},
	{
		assumptions: ['small'],
		conclusions: ['essentially small'],
	},
	{
		assumptions: ['essentially small'],
		conclusions: ['well-powered', 'well-copowered'],
	},
	{
		assumptions: ['essentially small', 'complete'],
		conclusions: ['thin'],
	},
	{
		assumptions: ['thin'],
		conclusions: ['equalizers', 'coequalizers'],
	},
	{
		assumptions: ['discrete'],
		conclusions: ['thin', 'groupoid'],
	},
	{
		assumptions: ['algebraic'],
		conclusions: ['locally finitely presentable'],
	},
	{
		assumptions: ['finite'],
		conclusions: ['small'],
	},
	{
		assumptions: ['binary products', 'equalizers'],
		conclusions: ['pullbacks'],
	},
	{
		assumptions: ['binary products', 'pullbacks'],
		conclusions: ['equalizers'],
	},
	{
		assumptions: ['pointed'],
		conclusions: ['connected'],
	},
	{
		assumptions: ['binary products'],
		conclusions: ['connected'],
	},
	{
		assumptions: ['trivial'],
		conclusions: [
			'essentially small',
			'algebraic',
			'Grothendieck topos',
			'abelian',
			'self-dual',
		],
	},
	{
		equivalent: true,
		assumptions: ['additive', 'cartesian closed'],
		conclusions: ['trivial'],
	},
]

export const implications_with_duals: Implication[] = [
	...implications,
	...implications.map(get_new_dual_implication),
	...properties.map((property) =>
		get_self_dual_implication(property.name as PropertyName),
	),
].filter((implication) => implication != null)
