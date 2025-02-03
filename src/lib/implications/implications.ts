import type { Implication } from '$lib/commons/types'

/**
 * Each implication must have the following properties:
 * - equivalent (optional, set to "true" for equivalences)
 * - assumptions: a list of registered properties
 * - conclusions: a list of registered properties
 */
export const implications: readonly Readonly<Implication>[] = [
	// size constraints
	{
		assumptions: ['small'],
		conclusions: ['locally small', 'essentially small'],
		reason: 'trivial',
	},
	{
		assumptions: ['essentially small'],
		conclusions: ['well-powered', 'well-copowered', 'locally essentially small'],
		reason: 'trivial',
	},
	{
		assumptions: ['essentially small', 'products'],
		conclusions: ['thin'],
		reason: '',
	},
	{
		assumptions: ['essentially finite', 'finite products'],
		conclusions: ['thin'],
		reason: '',
	},
	{
		assumptions: ['finite'],
		conclusions: ['small', 'essentially finite'],
		reason: 'trivial',
	},
	{
		assumptions: ['essentially finite'],
		conclusions: ['essentially small'],
		reason: 'trivial',
	},
	{
		assumptions: ['locally small'],
		conclusions: ['locally essentially small'],
		reason: 'trivial',
	},
	// trivialish categories
	{
		assumptions: ['discrete'],
		conclusions: ['essentially discrete', 'locally small'],
		reason: 'trivial',
	},
	{
		equivalent: true,
		assumptions: ['essentially discrete'],
		conclusions: ['thin', 'groupoid'],
		reason: 'trivial',
	},
	{
		assumptions: ['essentially discrete'],
		conclusions: ['locally essentially small', 'connected limits'],
		reason: 'trivial',
	},
	{
		assumptions: ['essentially discrete', 'connected'],
		conclusions: ['trivial'],
		reason: 'trivial',
	},
	{
		assumptions: ['trivial'],
		conclusions: [
			'finitary algebraic',
			'Grothendieck topos',
			'split abelian',
			'self-dual',
			'essentially discrete',
			'essentially finite',
		],
		reason: 'trivial',
	},
	{
		assumptions: ['thin'],
		conclusions: ['equalizers', 'left cancellative'],
		reason: 'Any two parallel morphisms are equal, so their equalizer is the identity, and every morphism is a monomorphism as well.',
	},
	{
		assumptions: ['thin', 'inhabited'],
		conclusions: ['generator'],
		reason: 'Any object will be a generator for trivial reasons.',
	},
	{
		assumptions: ['left cancellative', 'coequalizers'],
		conclusions: ['thin'],
		reason: 'If $f,g : A \\rightrightarrows B$ are two parallel morphisms, then their coequalizer is a regular epimorphism, but also a monmorphism by assumption, so it must be an isomorphism. But this means that $f = g$.',
	},
	// limits and colimits
	{
		equivalent: true,
		assumptions: ['complete'],
		conclusions: ['products', 'equalizers'],
		reason: '',
	},
	{
		equivalent: true,
		assumptions: ['finitely complete'],
		conclusions: ['finite products', 'equalizers'],
		reason: '',
	},
	{
		equivalent: true,
		assumptions: ['complete'],
		conclusions: ['finitely complete', 'filtered limits'],
		reason: '',
	},
	{
		assumptions: ['products'],
		conclusions: ['finite products'],
		reason: 'trivial',
	},
	{
		equivalent: true,
		assumptions: ['finite products'],
		conclusions: ['terminal object', 'binary products'],
		reason: 'trivial',
	},
	{
		assumptions: ['finite products', 'filtered limits'],
		conclusions: ['products'],
		reason: '',
	},
	{
		assumptions: ['binary products', 'equalizers'],
		conclusions: ['pullbacks'],
		reason: '',
	},
	{
		assumptions: ['binary products', 'pullbacks'],
		conclusions: ['equalizers'],
		reason: 'The equalizer of $f,g : A \\rightrightarrows B$ is the pullback of $(f,g) : A \\to B \\times B$ with the diagonal $B \\to B \\times B$.',
	},
	{
		assumptions: ['pullbacks', 'terminal object'],
		conclusions: ['binary products'],
		reason: 'This is because $X \\times_1 Y = X \\times Y$.',
	},
	{
		assumptions: ['terminal object'],
		conclusions: ['connected'],
		reason: 'trivial',
	},
	{
		equivalent: true,
		assumptions: ['pointed'],
		conclusions: ['zero morphisms', 'initial object'],
		reason: 'trivial',
	},
	{
		assumptions: ['pointed', 'cartesian closed'],
		conclusions: ['trivial'],
		reason: '',
	},
	{
		equivalent: true,
		assumptions: ['disjoint coproducts'],
		conclusions: ['coproducts', 'disjoint finite coproducts'],
		reason: 'trivial',
	},
	{
		assumptions: ['disjoint finite coproducts'],
		conclusions: ['finite coproducts'],
		reason: 'by definition',
	},
	{
		assumptions: ['disjoint finite coproducts', 'thin'],
		conclusions: ['trivial'],
		reason: '',
	},
	{
		equivalent: true,
		assumptions: ['connected limits'],
		conclusions: ['wide pullbacks', 'equalizers'],
		reason: '',
	},
	{
		equivalent: true,
		assumptions: ['wide pullbacks', 'terminal object'],
		conclusions: ['complete'],
		reason: '',
	},
	{
		equivalent: true,
		assumptions: ['wide pullbacks'],
		conclusions: ['pullbacks', 'filtered limits'],
		reason: '',
	},

	{
		assumptions: ['binary products', 'inhabited'],
		conclusions: ['connected'],
		reason: 'For any two objects $A,B$ we have the zig-zag $A \\to A \\times B \\to B$.',
	},
	{
		assumptions: ['strict initial object'],
		conclusions: ['initial object'],
		reason: 'by definition',
	},
	{
		assumptions: ['strict initial object', 'pointed'],
		conclusions: ['trivial'],
		reason: 'If $0$ is the zero object, then for every object $A$ the unique morphism $A \\to 0$ is an isomorphism by assumption.',
	},
	{
		assumptions: ['left cancellative', 'initial object'],
		conclusions: ['strict initial object'],
		reason: '',
	},
	{
		assumptions: ['right cancellative', 'initial object'],
		conclusions: ['strict initial object'],
		reason: '',
	},
	{
		assumptions: ['equalizers'],
		conclusions: ['Cauchy complete'],
		reason: 'If $e : X \\to X$ is an idempotent, then the equalizer of $e, \\mathrm{id}_X : X \\rightrightarrows X$ provides a splitting of $e$.',
	},
	{
		assumptions: ['left cancellative'],
		conclusions: ['Cauchy complete'],
		reason: 'Any idempotent monomorphism must be the identity and therefore splits.',
	},
	{
		assumptions: ['products'],
		conclusions: ['countable products'],
		reason: 'trivial',
	},
	{
		assumptions: ['countable products'],
		conclusions: ['finite products'],
		reason: 'trivial',
	},
	{
		assumptions: ['equalizers', 'countable products'],
		conclusions: ['sequential limits'],
		reason: '', // same as the other one
	},
	{
		assumptions: ['finite products', 'sequential limits'],
		conclusions: ['countable products'],
		reason: 'If $X_1,X_2,\\dotsc$ is a sequence of objects, then their product is the limit of the sequence $\\cdots \\to X_2 \\times X_1 \\to X_1$.',
	},
	{
		assumptions: ['filtered limits'],
		conclusions: ['sequential limits'],
		reason: 'trivial',
	},
	// interchanging limits with colimits
	{
		assumptions: ['exact filtered colimits'],
		conclusions: ['filtered colimits', 'finitely complete'],
		reason: 'by definition',
	},
	{
		assumptions: ['infinitary distributive'],
		conclusions: ['finite products', 'coproducts', 'distributive'],
		reason: 'trivial',
	},
	{
		assumptions: ['distributive'],
		conclusions: ['finite products', 'finite coproducts'],
		reason: 'trivial',
	},
	{
		assumptions: ['distributive'],
		conclusions: ['strict initial object'],
		reason: '',
	},
	{
		assumptions: ['cartesian closed', 'finite coproducts'],
		conclusions: ['distributive'],
		reason: '',
	},
	{
		assumptions: ['cartesian closed', 'coproducts'],
		conclusions: ['infinitary distributive'],
		reason: 'Each functor $A \\times -$ is left adjoint and hence preserves coproducts (in fact, all colimits).',
	},
	{
		assumptions: ['zero morphisms', 'inhabited'],
		conclusions: ['connected'],
		reason: 'trivial',
	},
	// locally presentable categories
	{
		assumptions: ['locally presentable'],
		conclusions: [
			'locally essentially small',
			'well-powered',
			'well-copowered',
			'complete',
			'cocomplete',
			'generator',
		],
		reason: '',
	},
	{
		assumptions: ['locally finitely presentable'],
		conclusions: ['locally presentable'],
		reason: 'trivial',
	},
	{
		assumptions: ['locally finitely presentable'],
		conclusions: ['exact filtered colimits'],
		reason: '',
	},
	{
		assumptions: ['locally presentable', 'self-dual'],
		conclusions: ['thin'],
		reason: '',
	},
	{
		assumptions: ['finitary algebraic'],
		conclusions: ['locally finitely presentable'],
		reason: '',
	},
	// topos theory
	{
		equivalent: true,
		assumptions: ['elementary topos'],
		conclusions: ['cartesian closed', 'finitely complete', 'subobject classifier'],
		reason: 'by definition',
	},
	{
		assumptions: ['elementary topos'],
		conclusions: ['finitely cocomplete', 'disjoint finite coproducts'],
		reason: '',
	},
	{
		assumptions: ['elementary topos', 'locally essentially small'],
		conclusions: ['well-powered', 'well-copowered'],
		reason: '',
	},
	{
		assumptions: ['cartesian closed'],
		conclusions: ['finite products'],
		reason: 'by definition',
	},
	{
		assumptions: ['cartesian closed', 'initial object'],
		conclusions: ['strict initial object'],
		reason: '',
	},
	{
		assumptions: ['Grothendieck topos'],
		conclusions: [
			'elementary topos',
			'locally presentable',
			'cogenerator',
			'exact filtered colimits',
			'disjoint coproducts',
		],
		reason: '',
	},
	{
		assumptions: ['subobject classifier'],
		conclusions: ['finitely complete', 'balanced'],
		reason: 'The first part holds by convention, and balanced follows since every monomorphism is regular.',
	},
	// additive categories
	{
		assumptions: ['preadditive'],
		conclusions: ['locally essentially small', 'zero morphisms'],
		reason: 'trivial',
	},
	{
		assumptions: ['preadditive', 'finite coproducts'],
		conclusions: ['finite products'],
		reason: '',
	},
	{
		equivalent: true,
		assumptions: ['additive'],
		conclusions: ['preadditive', 'finite products'],
		reason: 'by definition',
	},
	{
		assumptions: ['additive'],
		conclusions: ['disjoint finite coproducts'],
		reason: '',
	},
	{
		assumptions: ['abelian'],
		conclusions: ['additive', 'equalizers', 'coequalizers'],
		reason: 'by definition',
	},
	{
		assumptions: ['abelian'],
		conclusions: ['balanced'],
		reason: '',
	},
	{
		equivalent: true,
		assumptions: ['Grothendieck abelian'],
		conclusions: ['abelian', 'coproducts', 'generator', 'exact filtered colimits'],
		reason: 'by definition',
	},
	{
		assumptions: ['Grothendieck abelian'],
		conclusions: ['locally presentable', 'cogenerator'],
		reason: '',
	},
	{
		assumptions: ['Grothendieck abelian', 'self-dual'],
		conclusions: ['trivial'],
		reason: '',
	},
	{
		assumptions: ['additive', 'pullbacks', 'subobject classifier'],
		conclusions: ['trivial'],
		reason: 'see <a href="https://math.stackexchange.com/questions/4086192" target="_blank">MSE/4086192</a>',
	},
	{
		assumptions: ['split abelian'],
		conclusions: ['abelian'],
		reason: 'by definition',
	},
	// groupoids
	{
		assumptions: ['groupoid'],
		conclusions: [
			'self-dual',
			'balanced',
			'pullbacks',
			'filtered limits',
			'left cancellative',
			'well-powered',
		],
		reason: 'easy',
	},
	{
		assumptions: ['left cancellative', 'right cancellative', 'balanced'],
		conclusions: ['groupoid'],
		reason: 'trivial',
	},
	{
		assumptions: ['groupoid', 'equalizers'],
		conclusions: ['thin'],
		reason: 'The equalizer of any parallel pair $f,g$ must be an isomorphism, so $f=g$.',
	},
	{
		assumptions: ['groupoid', 'binary products', 'inhabited'],
		conclusions: ['trivial'],
		reason: '',
	},
	{
		assumptions: ['groupoid', 'initial object'],
		conclusions: ['trivial'],
		reason: 'easy',
	},
	// MISC
	{
		assumptions: ['connected'],
		conclusions: ['inhabited'],
		reason: 'by definition',
	},
	{
		assumptions: ['generator'],
		conclusions: ['inhabited'],
		reason: 'trivial',
	},
]
