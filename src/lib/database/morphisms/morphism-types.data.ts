export type MorphismType = {
	id: MorphismTypeID
	nlab_link: string
	description: string
	dual: MorphismTypeID
}

export type MorphismTypeID = (typeof MORPHISM_TYPES_INDEX)[number]['id']

export const MORPHISM_TYPES_INDEX = [
	{
		id: 'isomorphism',
		nlab_link: 'https://ncatlab.org/nlab/show/isomorphism',
		description: 'A morphism $f : X \\to Y$ is an <i>isomorphism</i> when it has an inverse $g : Y \\to X$, meaning $g \\circ f = \\mathrm{id}_X$ and $f \\circ g = \\mathrm{id}_Y$.',
		dual: 'isomorphism',
	},
	{
		id: 'monomorphism',
		nlab_link: 'https://ncatlab.org/nlab/show/monomorphism',
		description: 'A morphism $f : X \\to Y$ is a <i>monomorphism</i> if for all objects $Z$ and all morphisms $g, h : Z \\to X$, $f \\circ g = f \\circ h$ implies $g = h$.',
		dual: 'epimorphism',
	},
	{
		id: 'epimorphism',
		nlab_link: 'https://ncatlab.org/nlab/show/epimorphism',
		description: 'A morphism $f : X \\to Y$ is an <i>epimorphism</i> if for all objects $Z$ and all morphisms $g, h : Y \\to Z$, $g \\circ f = h \\circ f$ implies $g = h$.',
		dual: 'monomorphism',
	},
	{
		id: 'split monomorphism',
		nlab_link: 'https://ncatlab.org/nlab/show/split+monomorphism',
		description: 'A morphism $f : X \\to Y$ is a <i>split monomorphism</i> if there exists a morphism $g : Y \\to X$ such that $g \\circ f = \\mathrm{id}_X$. It is necessarily a monomorphism.',
		dual: 'split epimorphism',
	},
	{
		id: 'split epimorphism',
		nlab_link: 'https://ncatlab.org/nlab/show/split+epimorphism',
		description: 'A morphism $f : X \\to Y$ is a <i>split epimorphism</i> if there exists a morphism $g : Y \\to X$ such that $f \\circ g = \\mathrm{id}_Y$. It is necessarily an epimorphism.',
		dual: 'split monomorphism',
	},
	{
		id: 'extremal monomorphism',
		nlab_link: 'https://ncatlab.org/nlab/show/extremal+monomorphism',
		description: "A morphism $f : X \\to Y$ is called an <i>extremal monomorphism</i> when it is a monomorphism and $f$ does not factor through any non-trivial quotient of $X$. That is, if $f = f' \\circ p$ where $p$ is some epimorphism, then $p$ is an isomorphism.",
		dual: 'extremal epimorphism',
	},
	{
		id: 'extremal epimorphism',
		nlab_link: 'https://ncatlab.org/nlab/show/extremal+epimorphism',
		description: "A morphism $f : X \\to Y$ is called an <i>extremal epimorphism</i> when it is an epimorphism and $f$ does not factor through any non-trivial subobject of $Y$. That is, if $f = i \\circ f'$ where $i$ is some monomorphism, then $i$ is an isomorphism.",
		dual: 'extremal monomorphism',
	},
	{
		id: 'regular monomorphism',
		nlab_link: 'https://ncatlab.org/nlab/show/regular+monomorphism',
		description: 'A <i>regular monomorphism</i> is a morphism that is the equalizer of some pair of morphisms. It is automatically a monomorphism.',
		dual: 'regular epimorphism',
	},
	{
		id: 'regular epimorphism',
		nlab_link: 'https://ncatlab.org/nlab/show/regular+epimorphism',
		description: 'A <i>regular epimorphism</i> is a morphism that is the coequalizer of some pair of morphisms. It is automatically an epimorphism.',
		dual: 'regular monomorphism',
	},
	{
		id: 'effective monomorphism',
		nlab_link: 'https://ncatlab.org/nlab/show/effective+monomorphism',
		description: 'A morphism $f : X \\to Y$ is called an <i>effective monomorphism</i> when the pushout $Y \\sqcup_X Y$ exists and $f$ is the equalizer of the two inclusions $Y \\rightrightarrows Y \\sqcup_X Y$.',
		dual: 'effective epimorphism',
	},
	{
		id: 'effective epimorphism',
		nlab_link: 'https://ncatlab.org/nlab/show/effective+epimorphism',
		description: 'A morphism $f : X \\to Y$ is called an <i>effective epimorphism</i> when the pullback $X \\times_Y X$ exists and $f$ is the coequalizer of the two projections $X \\times_Y X \\rightrightarrows X$.',
		dual: 'effective monomorphism',
	},
	{
		id: 'strong monomorphism',
		nlab_link: 'https://ncatlab.org/nlab/show/strong+monomorphism',
		description: 'A <i>strong monomorphism</i> is a monomorphism that is right orthogonal to every epimorphism. This means a monomorphism $g : A \\to B$ is strong if for every epimorphism $f : X \\to Y$ and morphisms $u : X \\to A$, $v : B \\to Y$ with $v \\circ f = g \\circ u$, there exists a unique morphism $w : Y \\to A$ such that $w \\circ f = u$ and $g \\circ w = v$.',
		dual: 'strong epimorphism',
	},
	{
		id: 'strong epimorphism',
		nlab_link: 'https://ncatlab.org/nlab/show/strong+epimorphism',
		description: 'A <i>strong epimorphism</i> is an epimorphism that is left orthogonal to every monomorphism. This means an epimorphism $f : X \\to Y$ is strong if for every monomorphism $g : A \\to B$ and morphisms $u : X \\to A$, $v : Y \\to B$ with $v \\circ f = g \\circ u$, there exists a unique morphism $w : Y \\to A$ such that $w \\circ f = u$ and $g \\circ w = v$.',
		dual: 'strong monomorphism',
	},
	{
		id: 'strict monomorphism',
		nlab_link: 'https://ncatlab.org/nlab/show/strict+monomorphism',
		description: 'A <i>strict monomorphism</i> in a category is a morphism which is the joint equalizer of all pairs of parallel morphisms that it equalizes. It is automatically a monomorphism.',
		dual: 'strict epimorphism',
	},
	{
		id: 'strict epimorphism',
		nlab_link: 'https://ncatlab.org/nlab/show/strict+epimorphism',
		description: 'A <i>strict epimorphism</i> in a category is a morphism which is the joint coequalizer of all pairs of parallel morphisms that it coequalizes. It is automatically an epimorphism.',
		dual: 'strict monomorphism',
	},
	{
		id: 'morphism',
		nlab_link: 'https://ncatlab.org/nlab/show/morphism',
		description: 'A <i>morphism</i> in a category is, well, a morphism without any additional assumptions. We add this here just to formulate some implications.',
		dual: 'morphism',
	},
] as const

export const MORPHISM_TYPES: readonly MorphismType[] = MORPHISM_TYPES_INDEX
