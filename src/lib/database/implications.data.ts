import type { NonEmptyArray } from '$lib/commons/utils'
import type { PropertyID } from './properties.data'

export type Implication = {
	equivalent?: true
	assumptions: NonEmptyArray<PropertyID>
	conclusions: NonEmptyArray<PropertyID>
	reason: string
}

export const IMPLICATIONS: Implication[] = [
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
		reason: '<a href="https://ncatlab.org/nlab/show/Categories+for+the+Working+Mathematician" target="_blank">Mac Lane</a>, V.2, Prop. 3. The proof works for any category with products.',
	},
	{
		assumptions: ['essentially finite', 'finite products'],
		conclusions: ['thin'],
		reason: '<a href="https://ncatlab.org/nlab/show/Categories+for+the+Working+Mathematician" target="_blank">Mac Lane</a>, V.2, Prop. 3. The proof can easily be adapted to this case.',
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
		reason: 'If $f,g$ are two parallel morphisms, then their coequalizer is a regular epimorphism, but also a monomorphism by assumption, so it must be an isomorphism. But this means that $f = g$.',
	},
	// limits and colimits
	{
		assumptions: ['complete'],
		conclusions: [
			'finitely complete',
			'filtered limits',
			'wide pullbacks',
			'connected limits',
		],
		reason: 'trivial',
	},
	{
		equivalent: true,
		assumptions: ['complete'],
		conclusions: ['products', 'equalizers'],
		reason: '<a href="https://ncatlab.org/nlab/show/Categories+for+the+Working+Mathematician" target="_blank">Mac Lane</a>, V.2, Cor. 2',
	},
	{
		equivalent: true,
		assumptions: ['finitely complete'],
		conclusions: ['finite products', 'equalizers'],
		reason: '<a href="https://ncatlab.org/nlab/show/Categories+for+the+Working+Mathematician" target="_blank">Mac Lane</a>, V.2, Cor. 1',
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
		reason: 'The non-trivial direction follows since finite products can be constructed recursively via $X_1 \\times \\cdots \\times X_{n+1} = (X_1 \\times \\cdots \\times X_n) \\times X_{n+1}$.',
	},
	{
		assumptions: ['finite products', 'filtered limits'],
		conclusions: ['products'],
		reason: 'The product $\\prod_{i \\in I} X_i$ is the filtered limit of the finite partial products $\\prod_{i \\in E} X_i$ where $E$ ranges over the finite subsets of $I$.',
	},
	{
		assumptions: ['binary products', 'equalizers'],
		conclusions: ['pullbacks'],
		reason: 'The pullback of $f : X \\to S$ and $g : Y \\to S$ is the equalizer of $p_1 \\circ f, \\, p_2 \\circ g : X \\times Y \\rightrightarrows S$.',
	},
	{
		assumptions: ['binary products', 'pullbacks'],
		conclusions: ['equalizers'],
		reason: 'The equalizer of $f,g : X \\rightrightarrows Y$ is the pullback of $(f,g) : X \\to Y \\times Y$ with the diagonal $Y \\to Y \\times Y$.',
	},
	{
		assumptions: ['pullbacks', 'terminal object'],
		conclusions: ['binary products'],
		reason: 'If $1$ is a terminal object, then $X \\times_1 Y = X \\times Y$.',
	},
	{
		assumptions: ['terminal object'],
		conclusions: ['connected'],
		reason: 'If $1$ denotes the terminal object, then for any two objects $A,B$ we have the zig-zag $A \\to 1 \\leftarrow B$.',
	},
	{
		equivalent: true,
		assumptions: ['pointed'],
		conclusions: ['zero morphisms', 'initial object'],
		reason: 'easy',
	},
	{
		assumptions: ['pointed', 'cartesian closed'],
		conclusions: ['trivial'],
		reason: 'We have $X \\cong X \\times 1 \\cong X \\times 0 \\cong 0$ for every object $X$.',
	},
	{
		equivalent: true,
		assumptions: ['disjoint coproducts'],
		conclusions: ['coproducts', 'disjoint finite coproducts'],
		reason: 'easy',
	},
	{
		assumptions: ['disjoint finite coproducts'],
		conclusions: ['finite coproducts'],
		reason: 'by definition',
	},
	{
		assumptions: ['disjoint finite coproducts', 'thin'],
		conclusions: ['trivial'],
		reason: 'For every object $A$ the two inclusions $A \\rightrightarrows A + A$ must be equal, so their equalizer is $A$, but also $0$ since the coproduct is disjoint. Hence $A = 0$.',
	},
	{
		equivalent: true,
		assumptions: ['connected limits'],
		conclusions: ['wide pullbacks', 'equalizers'],
		reason: 'The direction $\\Rightarrow$ is trivial. The direction $\\Leftarrow$ can be found at the <a href="https://ncatlab.org/nlab/show/connected+limit" target="_blank">nLab</a>.',
	},
	{
		assumptions: ['wide pullbacks', 'terminal object'],
		conclusions: ['complete'],
		reason: 'See the <a href="https://ncatlab.org/nlab/show/wide+pullback" target="_blank">nLab</a>.',
	},
	{
		equivalent: true,
		assumptions: ['wide pullbacks'],
		conclusions: ['pullbacks', 'filtered limits'],
		reason: 'To prove $\\Leftarrow$, a wide pullback can be constructed as a filtered limit of finite pullbacks, and finite pullbacks can be reduced to binary products (the empty-indexed pullback always exists). Conversely, assume that wide pullbacks exist in $\\mathcal{C}$. For every object $A$ then the slice category $\\mathcal{C} / A$ has wide pullbacks and a terminal object, hence is complete. Since a filtered limit can be finally reduced to such a slice, we are done.', // book reference would be nice. the nlab only mentions this without proof
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
		reason: 'It suffices to prove that in general any monomorphism $f : A \\to 0$ into an initial object is an isomorphism. If $g : 0 \\to A$ is the unique morphism, then $f \\circ g = \\mathrm{id}_0$ since $0$ is initial. But then $f$ is a split epimorphism and a monomorphism, hence an isomorphism.',
	},
	{
		assumptions: ['right cancellative', 'initial object'],
		conclusions: ['strict initial object'],
		reason: 'Let $f : A \\to 0$ be a morphism. Let $g : 0 \\to A$ be the unique morphism. It is an epimorphism by assumption. Also, $f \\circ g = \\mathrm{id}_0$ since $0$ is initial. But then $g$ is a split monomorphism and an epimorphism, hence an isomorphism.',
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
		reason: '<a href="https://ncatlab.org/nlab/show/Categories+for+the+Working+Mathematician" target="_blank">Mac Lane</a>, V.2, Prop. 3. The proof can easily be adapted to this case. Namely, the limit of $\\cdots \\to X_2 \\to X_1 \\to X_0$ is the equalizer of two suitable endomorphisms of $\\prod_{n \\geq 0} X_n$.',
	},
	{
		assumptions: ['finite products', 'sequential limits'],
		conclusions: ['countable products'],
		reason: 'If $X_1,X_2,\\dotsc$ is an infinite sequence of objects, then their product is the limit of the sequence $\\cdots \\to X_2 \\times X_1 \\to X_1$.',
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
		conclusions: ['finite products', 'coproducts'],
		reason: 'by definition',
	},
	{
		assumptions: ['infinitary distributive'],
		conclusions: ['distributive'],
		reason: 'trivial',
	},
	{
		assumptions: ['distributive'],
		conclusions: ['finite products', 'finite coproducts'],
		reason: 'by definition',
	},
	{
		assumptions: ['distributive'],
		conclusions: ['strict initial object'],
		reason: 'See the <a href="https://ncatlab.org/nlab/show/distributive+category" target="_blank">nLab</a>.',
	},
	{
		assumptions: ['cartesian closed', 'finite coproducts'],
		conclusions: ['distributive'],
		reason: 'Each functor $A \\times -$ is left adjoint and hence preserves finite coproducts (in fact, all colimits).',
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
	{
		assumptions: ['essentially small', 'thin', 'complete'],
		conclusions: ['cocomplete'],
		reason: 'The supremum of a subset in a (small) partial order is the infimum of the set of upper bounds.',
	},
	{
		assumptions: ['essentially small', 'thin', 'complete', 'distributive'],
		conclusions: ['cartesian closed'],
		reason: 'This is an application of the adjoint functor theorem. Specifically, if $P$ is a complete lattice in which $\\sup_i \\inf(t,x_i) = \\inf(t, \\sup_i y_i)$ always holds, then the functor $\\int(t,-)$ is a left adjoint because it preserves all suprema.',
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
		reason: 'For the non-trivial conclusions see <a href="https://ncatlab.org/nlab/show/Locally+Presentable+and+Accessible+Categories" target="_blank">Adamek-Rosicky</a>, Thm. 1.20, Cor. 1.28, Rem. 1.56, Thm. 1.58.',
	},
	{
		assumptions: ['locally finitely presentable'],
		conclusions: ['locally presentable'],
		reason: 'Locally finitely presentable categories are by definition the locally $\\aleph_0$-presentable categories.',
	},
	{
		assumptions: ['locally finitely presentable'],
		conclusions: ['exact filtered colimits'],
		reason: 'Special case of <a href="https://ncatlab.org/nlab/show/Locally+Presentable+and+Accessible+Categories" target="_blank">Adamek-Rosicky</a>, Prop. 1.59 with $\\lambda = \\aleph_0$.',
	},
	{
		assumptions: ['locally presentable', 'self-dual'],
		conclusions: ['thin'],
		reason: 'This follows from <a href="https://ncatlab.org/nlab/show/Locally+Presentable+and+Accessible+Categories" target="_blank">Adamek-Rosicky</a>, Thm. 1.64.',
	},
	{
		assumptions: ['locally finitely presentable'],
		conclusions: ['locally ℵ₁-presentable'],
		reason: 'trivial',
	},
	{
		assumptions: ['locally ℵ₁-presentable'],
		conclusions: ['locally presentable'],
		reason: 'trivial',
	},
	{
		assumptions: ['finitary algebraic'],
		conclusions: ['locally finitely presentable'],
		reason: '<a href="https://ncatlab.org/nlab/show/Locally+Presentable+and+Accessible+Categories" target="_blank">Adamek-Rosicky</a>, Cor. 3.7',
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
		conclusions: ['finitely cocomplete', 'disjoint finite coproducts', 'epi-regular'],
		reason: '<a href="https://ncatlab.org/nlab/show/Sheaves+in+Geometry+and+Logic" target="_blank">Mac Lane & Moerdijk</a>, Cor. IV.5.4, Cor. IV.10.5, Thm. 4.7.8.',
	},
	{
		assumptions: ['subobject classifier', 'locally essentially small'],
		conclusions: ['well-powered'],
		reason: '<a href="https://ncatlab.org/nlab/show/Sheaves+in+Geometry+and+Logic" target="_blank">Mac Lane & Moerdijk</a>, Prop. I.3.1',
	},
	{
		assumptions: ['elementary topos', 'locally essentially small'],
		conclusions: ['well-copowered'],
		reason: 'This follows from <a href="https://ncatlab.org/nlab/show/Sheaves+in+Geometry+and+Logic" target="_blank">Mac Lane & Moerdijk</a>, Theorem IV.7.8 (and Prop. I.3.1).',
	},
	{
		assumptions: ['cartesian closed'],
		conclusions: ['finite products'],
		reason: 'by definition',
	},
	{
		assumptions: ['cartesian closed', 'initial object'],
		conclusions: ['strict initial object'],
		reason: 'See the <a href="https://ncatlab.org/nlab/show/strict+initial+object" target="_blank">nLab</a>.',
	},
	{
		equivalent: true,
		assumptions: ['Grothendieck topos'],
		conclusions: [
			'elementary topos',
			'coproducts',
			'generator',
			'locally essentially small',
		],
		reason: '<a href="https://ncatlab.org/nlab/show/Sheaves+in+Geometry+and+Logic" target="_blank">Mac Lane & Moerdijk</a>, Appendix, Prop. 4.4',
	},
	{
		assumptions: ['Grothendieck topos'],
		conclusions: ['locally presentable', 'cogenerator'],
		reason: 'For "locally presentable" see Prop. 3.4.16 in <a href="https://www.cambridge.org/core/books/handbook-of-categorical-algebra/5033A02442342401E7BCC26A042DAB94" target="_blank">Handbook of Categorical Algebra Vol. 3</a>. For "cogenerator" see the <a href="https://ncatlab.org/nlab/show/cogenerator" target="_blank">nLab</a>.',
	},
	{
		assumptions: ['subobject classifier'],
		conclusions: ['finitely complete', 'mono-regular'],
		reason: 'The first part holds by convention, and the second part: any monomorphism $U \\to X$ is the equalizer of $$\\chi_U,\\chi_X : X \\to \\Omega$.',
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
		reason: '<a href="https://ncatlab.org/nlab/show/Categories+for+the+Working+Mathematician" target="_blank">Mac Lane</a>, VIII.2., Theorem 2',
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
		reason: 'If $f : T \\to A + B$ is a morphism that factors through $A$ and $B$, then $p_B f = 0$ and $p_A f = 0$, so $f = 0$.',
	},
	{
		equivalent: true,
		assumptions: ['abelian'],
		conclusions: [
			'additive',
			'equalizers',
			'coequalizers',
			'mono-regular',
			'epi-regular',
		],
		reason: 'by definition',
	},
	{
		equivalent: true,
		assumptions: ['Grothendieck abelian'],
		conclusions: ['abelian', 'coproducts', 'generator', 'exact filtered colimits'],
		reason: 'by definition',
	},
	{
		assumptions: ['Grothendieck abelian'],
		conclusions: ['locally presentable'],
		reason: 'See <a href="https://arxiv.org/abs/1409.7051" target="_blank">Deriving Auslander\'s formula</a>, Cor. 5.2, or <a href="https://arxiv.org/abs/math/0102087" target="_blank">Sheafifiable homotopy model categories</a>, Prop. 3.10.',
	},
	{
		assumptions: ['Grothendieck abelian'],
		conclusions: ['cogenerator'],
		reason: '<a href="https://ncatlab.org/nlab/show/Categories+and+Sheaves" target="_blank">Kashiwara-Schapira</a>, Thm. 9.6.3',
	},
	{
		assumptions: ['Grothendieck abelian', 'self-dual'],
		conclusions: ['trivial'],
		reason: 'This follows since the dual of a non-trivial Grothendieck abelian category cannot be Grothendieck abelian. See Peter Freyd, <i>Abelian categories</i>, p. 116.',
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
			'mono-regular',
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
		reason: 'Let $\\mathcal{C}$ be an inhabited groupoid with binary products. Then it is connected, so we may assume $\\mathcal{C}=BG$ for a group $G$ with unique object $*$. But then $* \\times * = *$, so there are $p,q \\in G$ such that $G \\to G \\times G$, $x \\mapsto (px,qx)$ is bijective. From here it is an easy exercise to deduce $G=1$.',
	},
	{
		assumptions: ['groupoid', 'initial object'],
		conclusions: ['trivial'],
		reason: 'easy',
	},
	// miscellaneous stuff
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
	{
		assumptions: ['mono-regular'],
		conclusions: ['balanced'],
		reason: 'Any regular monomorphism that is an epimorphism must be an isomorphism.',
	},
]
