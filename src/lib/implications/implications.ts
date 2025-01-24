import type { Implication } from '$lib/types'

export const implications: Implication[] = [
	{
		assumptions: ['small'],
		conclusions: ['locally small', 'essentially small'],
	},
	{
		assumptions: ['locally presentable'],
		conclusions: [
			'locally small',
			'well-powered',
			'well-copowered',
			'complete',
			'cocomplete',
			'generator',
		],
	},
	{
		assumptions: ['locally finitely presentable'],
		conclusions: [
			'locally presentable',
			'filtered colimits that commute with finite limits',
		],
	},
	{
		assumptions: ['locally presentable', 'self-dual'],
		conclusions: ['thin'],
	},
	{
		equivalent: true,
		assumptions: ['elementary topos'],
		conclusions: ['cartesian closed', 'finitely complete', 'subobject classifier'],
	},
	{
		assumptions: ['elementary topos'],
		conclusions: ['finitely cocomplete'],
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
		assumptions: ['filtered colimits that commute with finite limits'],
		conclusions: ['filtered colimits', 'finitely complete'],
	},
	{
		assumptions: ['preadditive'],
		conclusions: ['locally small', 'zero morphisms'],
	},
	{
		assumptions: ['preadditive', 'finite coproducts'],
		conclusions: ['finite products'],
	},
	{
		assumptions: ['abelian'],
		conclusions: ['additive', 'finitely cocomplete', 'finitely complete', 'balanced'],
	},
	{
		equivalent: true,
		assumptions: ['additive'],
		conclusions: ['preadditive', 'finite products'],
	},
	{
		assumptions: ['Grothendieck topos'],
		conclusions: [
			'elementary topos',
			'locally presentable',
			'cogenerator',
			'filtered colimits that commute with finite limits',
		],
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
		assumptions: ['terminal object'],
		conclusions: ['inhabited'],
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
		conclusions: [
			'thin',
			'groupoid',
			'locally small',
			'well-powered',
			'connected limits',
		],
	},
	{
		assumptions: ['discrete', 'connected'],
		conclusions: ['trivial'],
	},
	{
		assumptions: ['discrete', 'preadditive', 'inhabited'],
		conclusions: ['trivial'],
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
		assumptions: ['initial object'],
		conclusions: ['connected'],
	},
	{
		assumptions: ['binary products', 'inhabited'],
		conclusions: ['connected'],
	},
	{
		assumptions: ['connected'],
		conclusions: ['inhabited'],
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
		assumptions: ['pointed'],
		conclusions: ['zero morphisms', 'initial object'],
	},
	{
		equivalent: true,
		assumptions: ['pointed', 'cartesian closed'],
		conclusions: ['trivial'],
	},
	{
		assumptions: ['subobject classifier'],
		conclusions: ['finitely complete'],
	},
	{
		assumptions: ['strict initial object'],
		conclusions: ['initial object'],
	},
	{
		equivalent: true,
		assumptions: ['strict initial object', 'pointed'],
		conclusions: ['trivial'],
	},
	{
		assumptions: ['cartesian closed', 'initial object'],
		conclusions: ['strict initial object'],
	},
	{
		assumptions: ['thin', 'initial object'],
		conclusions: ['strict initial object'],
	},
	{
		assumptions: ['subobject classifier'],
		conclusions: ['balanced'],
	},
	{
		assumptions: ['thin', 'balanced'],
		conclusions: ['groupoid'],
	},
	{
		assumptions: ['groupoid'],
		conclusions: ['self-dual', 'balanced', 'pullbacks', 'filtered limits'],
	},
	{
		assumptions: ['groupoid', 'equalizers'],
		conclusions: ['thin'],
	},
	{
		assumptions: ['groupoid', 'binary products', 'inhabited'],
		conclusions: ['trivial'],
	},
	{
		assumptions: ['groupoid', 'initial object'],
		conclusions: ['trivial'],
	},
	{
		assumptions: ['infinitary distributive'],
		conclusions: ['finite products', 'coproducts', 'distributive'],
	},
	{
		assumptions: ['distributive'],
		conclusions: ['finite products', 'finite coproducts', 'strict initial object'],
	},
	{
		assumptions: ['cartesian closed', 'finite coproducts'],
		conclusions: ['distributive'],
	},
	{
		assumptions: ['cartesian closed', 'coproducts'],
		conclusions: ['infinitary distributive'],
	},
	{
		assumptions: ['complete'],
		conclusions: ['connected limits'],
	},
	{
		assumptions: ['connected limits'],
		conclusions: ['filtered limits', 'pullbacks', 'equalizers'],
	},
	{
		assumptions: ['generator'],
		conclusions: ['inhabited'],
	},
	{
		assumptions: ['thin', 'inhabited'],
		conclusions: ['generator'],
	},
	{
		assumptions: ['zero morphisms', 'inhabited'],
		conclusions: ['connected'],
	},
]
