INSERT INTO category_properties (
	category_id,
	property_id,
	reason
)
VALUES
	(
		'Set',
		'locally small',
		'The collection of maps between two sets $X,Y$ is a subset of $X \times Y$ and therefore a set.'
	),
	(
		'Set',
		'Grothendieck topos',
		'It is equivalent to the category of sheaves on a one-point space.'
	),
	(
		'Set',
		'finitary algebraic',
		'Use the empty algebraic theory.'
	),
	(
		'Ab',
		'locally small',
		'There is a forgetful functor $\mathbf{Ab} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Ab',
		'abelian',
		'standard'
	),
	(
		'Ab',
		'finitary algebraic',
		'Take the algebraic theory of a commutative group.'
	),
	(
		'Top',
		'locally small',
		'There is a forgetful functor $\mathbf{Top} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Top',
		'complete',
		'Take the limit of the underlying sets and endow it with the coarsest topology making all projections continuous.'
	),
	(
		'Top',
		'cocomplete',
		'Take the colimit of the underlying sets and endow it with the finest topology making all inclusions continuous.'
	),
	(
		'Top',
		'well-powered',
		'This is clear from the classification of monomorphisms as injective continuous maps.'
	),
	(
		'Top',
		'well-copowered',
		'This is clear from the classification of epimorphisms as surjective continuous maps.'
	),
	(
		'Top',
		'infinitary distributive',
		'The canonical continuous map $\coprod_i (X \times Y_i) \to X \times \coprod_{i \in I} Y_i$ is bijective since $\mathbf{Set}$ is infinitary distributive, and one easily checks with the definitions of product and coproduct topologies that it maps open sets to open sets.'
	),
	(
		'Top',
		'generator',
		'The one-point space is a generator since it represents the forgetful functor $\mathbf{Top} \to \mathbf{Set}$.'
	),
	(
		'Top',
		'cogenerator',
		'It is easily checked that the indiscrete two-point space is a cogenerator.'
	),
	(
		'Top',
		'disjoint coproducts',
		'This follows easily from the corresponding fact for sets.'
	),
	(
		'Grp',
		'locally small',
		'There is a forgetful functor $\mathbf{Grp} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Grp',
		'pointed',
		'The trivial group is a zero object.'
	),
	(
		'Grp',
		'finitary algebraic',
		'Take the algebraic theory of a group.'
	),
	(
		'Grp',
		'mono-regular',
		'See Prop. 4.2 at the <a href="https://ncatlab.org/nlab/show/regular+monomorphism#Examples" target="_blank">nLab</a>.'
	),
	(
		'Grp',
		'disjoint coproducts',
		'It follows from the normal form of the elements of coproducts of groups that the inclusions $G \to G \sqcup H \leftarrow H$ are injective (hence, monomorphisms) and that their intersection is trivial.'
	),
	(
		'Grp',
		'epi-regular',
		'This holds since every epimorphism is surjective, and surjective homomorphism $A \to B$ is the coequalizer of its kernel pair $A \times_B A \rightrightarrows A$.'
	),
	(
		'Grp',
		'Malcev',
		'See Example 2.2.4 in <a href="https://ncatlab.org/nlab/show/Malcev,+protomodular,+homological+and+semi-abelian+categories" target="_blank">Malcev, protomodular, homological and semi-abelian categories</a>.'
	),
	(
		'Vect',
		'locally small',
		'There is a forgetful functor $\mathbf{Vect} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Vect',
		'split abelian',
		'It is a fact from linear algebra that every subspace has a complement.'
	),
	(
		'Vect',
		'finitary algebraic',
		'Take the algebraic theory of a vector space.'
	),
	(
		'Ring',
		'locally small',
		'There is a forgetful functor $\mathbf{Ring} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Ring',
		'finitary algebraic',
		'Take the algebraic theory of a ring.'
	),
	(
		'Ring',
		'strict terminal object',
		'If $f : 0 \to R$ is a homomorphism, then $R$ satisfies $1=f(1)=f(0)=0$, so that $R=0$.'
	),
	(
		'Ring',
		'Malcev',
		'follows in the same way as for (additive) groups'
	),
	(
		'CRing',
		'locally small',
		'There is a forgetful functor $\mathbf{CRing} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'CRing',
		'finitary algebraic',
		'Take the algebraic theory of a commutative ring.'
	),
	(
		'CRing',
		'strict terminal object',
		'If $f : 0 \to R$ is a homomorphism, then $R$ satisfies $1=f(1)=f(0)=0$, so that $R=0$.'
	),
	(
		'CRing',
		'Malcev',
		'follows in the same way as for (additive) groups'
	),
	(
		'Rng',
		'locally small',
		'There is a forgetful functor $\mathbf{Rng} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Rng',
		'finitary algebraic',
		'Take the algebraic theory of a rng.'
	),
	(
		'Rng',
		'pointed',
		'The zero ring is a zero object.'
	),
	(
		'Rng',
		'disjoint coproducts',
		'The coproduct of two rngs $R,S$ has as underlying additive group $R \oplus S \oplus (R \otimes S) \oplus (S \otimes R) \oplus \cdots$ from which the claim easily follows.'
	),
	(
		'Rng',
		'Malcev',
		'follows in the same way as for (additive) groups'
	),

	
	(
		'Set*',
		'locally small',
		'There is a forgetful functor $\mathbf{Set}_* \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Set*',
		'pointed',
		'The singleton set is a zero object.'
	),
	(
		'Set*',
		'finitary algebraic',
		'Take the algebraic theory with just one constant.'
	),
	(
		'Set*',
		'subobject classifier',
		'The pointed set $(\{0,1\},1)$ is a subobject classifier.'
	),
	(
		'Set*',
		'cogenerator',
		'The pointed set $(\{0,1\},1)$ is a cogenerator.'
	),
	(
		'Set*',
		'disjoint coproducts',
		'This follows easily from the description of coproducts as wedge sums.'
	),
	(
		'Set*',
		'epi-regular',
		'Every epimorphism is surjective for this category, and in an algebraic category every surjective homomorphism is a regular epimorphism.'
	),

	(
		'Mon',
		'locally small',
		'There is a forgetful functor $\mathbf{Mon} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Mon',
		'pointed',
		'The trivial monoid is a zero object.'
	),
	(
		'Mon',
		'finitary algebraic',
		'Take the algebraic of a monoid.'
	),
	(
		'Mon',
		'disjoint coproducts',
		'It follows from the normal form of the elements of coproducts of monoids that the inclusions $G \to G \sqcup H \leftarrow H$ are injective (hence, monomorphisms) and that their intersection is trivial.'
	),
	(
		'Pos',
		'locally small',
		'There is a forgetful functor $\mathbf{Pos} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Pos',
		'locally finitely presentable',
		'See <a href="https://ncatlab.org/nlab/show/Locally+Presentable+and+Accessible+Categories" target="_blank">Adamek-Rosicky</a>, Example 1.10.'
	),
	(
		'Pos',
		'cartesian closed',
		'For partial orders $P,Q$ we endow $\hom(P,Q)$ with the partial order in which $f \leq g$ holds iff $f(p) \leq g(p)$ for all $p \in P$. The universal evaluation map is $\hom(P,Q) \times P \to Q$, $(f,p) \mapsto f(p)$, it is order-preserving, and it satisfies the universal property.'
	),
	(
		'Pos',
		'cogenerator',
		'We prove that the poset $\{0 < 1 \}$ is a cogenerator: Let $P$ be a poset and $a,b \in P$ be two elements such that $f(a) = f(b)$ for all order-preserving maps $f : P \to \{0 < 1 \}$. This means that $a$ and $b$ lie in the same upper sets. In particular, $b$ lies in the upper set generated by $a$, meaning %$a \leq b$, and similarly we deduce $b \leq a$. Thus, $a = b$.'
	),
	(
		'Pos',
		'disjoint coproducts',
		'This follows easily from the corresponding fact for sets, since the coproduct of posets is built using the disjoint union.'
	),
	(
		'M-Set',
		'locally small',
		'There is a forgetful functor $M{-}\mathbf{Set} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'M-Set',
		'Grothendieck topos',
		'It is the category of sheaves on the opposite of the one-object category associated to $M$.'
	),
	(
		'M-Set',
		'finitary algebraic',
		'Take the algebraic theory of an $M$-sets (having a unary operation for each $m \in M$).'
	),
	(
		'R-Mod',
		'locally small',
		'There is a forgetful functor $R{-}\mathbf{Mod} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'R-Mod',
		'abelian',
		'standard'
	),
	(
		'R-Mod',
		'finitary algebraic',
		'Take the algebraic theory of an $R$-module (given by the algebraic theory of an abelian group and for each $r \in R$ a unary operation).'
	),

	(
		'Rel',
		'locally small',
		'The set of morphisms $X \to Y$ is the set $P(X \times Y)$.'
	),
	(
		'Rel',
		'self-dual',
		'There is an isomorphism $\mathbf{Rel} \to \mathbf{Rel}^{\mathrm{op}}$ that is the identity on objects (sets) and maps a relation $R \subseteq X \times Y$ to the opposite relation $R^o \subseteq Y \times X$ defined by $R^o := \{(y,x) : (x,y) \in R \}$.'
	),
	(
		'Rel',
		'pointed',
		'The empty set is clearly both initial and terminal.'
	),
	(
		'Rel',
		'generator',
		'One checks that the the one-point set is a generator.'
	),
	(
		'Rel',
		'disjoint coproducts',
		'It is an easy exercise to deduce this from the corresponding fact for sets and that sets form a distributive category.'
	),
	(
		'Rel',
		'well-powered',
		'Any relation $R : A \to B$ induces an injective map $P(A) \to P(B)$, so that in particular there is an injective map $A \to P(B)$.'
	),
	(
		'Rel',
		'balanced',
		'See <a href="https://math.stackexchange.com/questions/5030393" target="_blank">MSE/5030393</a>.'
	);