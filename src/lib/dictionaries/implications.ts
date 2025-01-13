import type { Implication } from '$lib/types'

export const implications: Implication[] = [
	{
		assumption: 'locally small',
		conclusion: 'small',
	},
	{
		assumption: 'small',
		conclusion: 'well-powered',
	},
	{
		assumption: 'locally finitely presentable',
		conclusion: ['well-powered', 'well-copowered', 'complete', 'cocomplete'],
	},
	{
		assumption: 'abelian',
		conclusion: [
			'preadditive',
			'finitely cocomplete',
			'finitely complete',
			'pointed',
		],
	},
	{
		assumption: 'elementary topos',
		conclusion: ['cartesian closed', 'finitely cocomplete', 'finitely complete'],
	},
	{
		assumption: ['elementary topos', 'locally small'],
		conclusion: ['well-powered', 'well-copowered'],
	},
	{
		assumption: 'complete',
		conclusion: 'finitely complete',
	},
	{
		assumption: 'cocomplete',
		conclusion: 'finitely cocomplete',
	},
	{
		assumption: 'preadditive',
		conclusion: 'locally small',
	},
	{
		assumption: ['preadditive', 'initial object'],
		conclusion: 'pointed',
	},
	{
		assumption: ['preadditive', 'terminal object'],
		conclusion: 'pointed',
	},
	{
		assumption: 'Grothendieck topos',
		conclusion: ['elementary topos', 'locally small', 'complete', 'cocomplete'],
	},
	{
		assumption: 'products',
		conclusion: 'finite products',
	},
	{
		assumption: 'finitely complete',
		conclusion: 'finite products',
	},
	{
		assumption: 'finite products',
		conclusion: 'terminal object',
	},
	{
		assumption: 'coproducts',
		conclusion: 'finite coproducts',
	},
	{
		assumption: 'finitely complete',
		conclusion: 'finite coproducts',
	},
	{
		assumption: 'finite coproducts',
		conclusion: 'initial object',
	},
	{
		assumption: 'pointed',
		conclusion: ['terminal object', 'initial object'],
	},
	{
		assumption: 'cartesian closed',
		conclusion: 'finite products',
	},
]
