import type { Implication } from '$lib/types'

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
		assumptions: ['abelian'],
		conclusions: [
			'preadditive',
			'finitely cocomplete',
			'finitely complete',
			'pointed',
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
		equivalent: true,
		assumptions: ['cocomplete'],
		conclusions: ['finitely cocomplete', 'filtered colimits'],
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
		assumptions: ['preadditive', 'terminal object'],
		conclusions: ['pointed'],
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
		assumptions: ['coproducts'],
		conclusions: ['finite coproducts'],
	},
	{
		assumptions: ['finite products', 'filtered limits'],
		conclusions: ['products'],
	},
	{
		assumptions: ['finite coproducts', 'filtered colimits'],
		conclusions: ['coproducts'],
	},
	{
		assumptions: ['finite products'],
		conclusions: ['terminal object'],
	},
	{
		assumptions: ['finite coproducts'],
		conclusions: ['initial object'],
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
		assumptions: ['finite coproducts', 'coequalizers'],
		conclusions: ['finitely cocomplete'],
	},
	{
		equivalent: true,
		assumptions: ['products', 'equalizers'],
		conclusions: ['complete'],
	},
	{
		equivalent: true,
		assumptions: ['coproducts', 'coequalizers'],
		conclusions: ['cocomplete'],
	},
	{
		assumptions: ['self-dual', 'cocomplete'],
		conclusions: ['complete'], // same with all other dual properties ...
	},
	{
		assumptions: ['self-dual', 'complete'],
		conclusions: ['cocomplete'], // same with all other dual properties ...
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
]
