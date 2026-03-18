INSERT INTO category_non_properties (
	category_id,
	non_property_id,
	reason
)
VALUES
	-- basic categories
	(
		'Set',
		'strict terminal object',
		'trivial'
	),
	(
		'Set',
		'skeletal',
		'trivial'
	),
	(
		'Set',
		'Malcev',
		'There are lots of non-symmetric reflexive relations.'
	),
	(
		'Ab',
		'split abelian',
		'The short exact sequence $0 \xrightarrow{} \mathbb{Z} \xrightarrow{p} \mathbb{Z} \xrightarrow{} \mathbb{Z}/p \xrightarrow{} 0$ does not split. '
	),
	(
		'Ab',
		'skeletal',
		'trivial'
	),
	(
		'Top',
		'cartesian closed',
		'The functor $\mathbb{Q} \times - : \mathbf{Top} \to \mathbf{Top}$ does not preserve colimits, hence has no right adjoint. See <a href="https://math.stackexchange.com/questions/2969372" target="_blank">MSE/2969372</a> for a proof.'
	),
	(
		'Top',
		'locally presentable',
		'In fact, it does not have any small dense subcategory by <a href="https://math.stackexchange.com/questions/4097315/" target="_blank">MSE/4097315</a>. For a related result, see <a href="https://mathoverflow.net/questions/288648" target="_blank">MO/288648</a>.'
	),
	(
		'Top',
		'strict terminal object',
		'trivial'
	),
	(
		'Top',
		'balanced',
		'If $X$ is a set, consider the discrete space $X_d$ on $X$ and the indiscrete space $X_i$ on $X$. The identity map $X \to X$ lifts to a continuous map $X_d \to X_i$, which is bijective and therefore both a mono- and an epimorphism, but it is not an isomorphism unless $X$ has at most one element.'
	),
	(
		'Top',
		'exact filtered colimits',
		NULL
	),
	(
		'Top',
		'skeletal',
		'trivial'
	),
	(
		'Top',
		'Malcev',
		'This is clear since $\mathbf{Set}$ is not Malcev and can be interpreted as the subcategory of discrete spaces.'
	),
	(
		'Grp',
		'subobject classifier',
		'If there was a subgroup classifier $\Omega$, every subgroup of any group would be the kernel of a homomorphism to $\Omega$. But not every subgroup is normal.'
	),
	(
		'Grp',
		'cogenerator',
		'Assume there is a group $Q$ that cogenerates. Take an infinite simple group $G$ larger than $Q$ (w.r.t. cardinalities), for example an infinite alternating group. Then every homomorphism $G \to Q$ is trivial. Since $Q$ cogenerates, $G$ is trivial, a contradiction.'
	),
	(
		'Grp',
		'skeletal',
		'trivial'
	),
	(
		'Vect',
		'trivial',
		'trivial'
	),
	(
		'Vect',
		'skeletal',
		'trivial'
	),
	(
		'Ring',
		'strict initial object',
		'The homomorphism $p_1 : \mathbb{Z} \times \mathbb{Z} \to \mathbb{Z}$ is not an isomorphism, and $\mathbb{Z}$ is initial.'
	),
	(
		'Ring',
		'balanced',
		'The inclusion $\mathbb{Z} \hookrightarrow \mathbb{Q}$ is a counterexample.'
	),
	(
		'Ring',
		'cogenerator',
		'Assume that there is a ring $Q$ that cogenerates. Clearly, $Q$ is non-zero. Take an infinite field $F$ which is larger than $Q$ and admits a non-trivial automorphism (for example, a field of rational functions). Then there is no ring homomorphism $F \to Q$. Since $Q$ cogenerates, this implies that all homomorphisms $F \to F$ are equal, a contradiction.'
	),
	(
		'Ring',
		'skeletal',
		'trivial'
	),
	(
		'Alg(R)',
		'strict initial object',
		'The homomorphism $p_1 : R \times R \to R$ is not an isomorphism, and $R$ is initial.'
	),
	(
		'Alg(R)',
		'balanced',
		'Take a prime ideal $P \subseteq R$ and consider the $R$-algebra $A := R/P$ (which is an integral domain). Then the inclusion $A \hookrightarrow Q(A)$ is a counterexample.'
	),
	(
		'Alg(R)',
		'skeletal',
		'trivial'
	),
	(
		'Alg(R)',
		'cogenerator',
		'Assume that there is a $R$-algebra $Q$ that cogenerates. Clearly, $Q$ is non-zero. Take an infinite field $F$ which has a $R$-algebra structure, is larger than $Q$ and admits a non-trivial automorphism (for example, a field of rational functions over some residue field of $R$). Then there is no algebra homomorphism $F \to Q$. Since $Q$ cogenerates, this implies that all homomorphisms $F \to F$ are equal, a contradiction.'
	),
	(
		'CRing',
		'strict initial object',
		'The homomorphism $p_1 : \mathbb{Z} \times \mathbb{Z} \to \mathbb{Z}$ is not an isomorphism, and $\mathbb{Z}$ is initial.'
	),
	(
		'CRing',
		'balanced',
		'The inclusion $\mathbb{Z} \hookrightarrow \mathbb{Q}$ is a counterexample.'
	),
	(
		'CRing',
		'cogenerator',
		'Assume that there is a commutative ring $Q$ that cogenerates. Clearly, $Q$ is non-zero. Take an infinite field $F$ which is larger than $Q$ and admits a non-trivial automorphism (for example, a field of rational functions). Then there is no ring homomorphism $F \to Q$. Since $Q$ cogenerates, this implies that all homomorphisms $F \to F$ are equal, a contradiction.'
	),
	(
		'CRing',
		'skeletal',
		'trivial'
	),
	(
		'CAlg(R)',
		'strict initial object',
		'The homomorphism $p_1 : R \times R \to R$ is not an isomorphism, and $R$ is initial.'
	),
	(
		'CAlg(R)',
		'balanced',
		'Take a prime ideal $P \subseteq R$ and consider the commutative $R$-algebra $A := R/P$ (which is an integral domain). Then the inclusion $A \hookrightarrow Q(A)$ is a counterexample.'
	),
	(
		'CAlg(R)',
		'cogenerator',
		'Assume that there is a commutative $R$-algebra $Q$ that cogenerates. Clearly, $Q$ is non-zero. Take an infinite field $F$ which admits an $R$-algebra structure, is larger than $Q$ and admits a non-trivial automorphism (for example, a field of rational functions over some residue field of $R$). Then there is no homomorphism $F \to Q$. Since $Q$ cogenerates, this implies that all homomorphisms $F \to F$ are equal, a contradiction.'
	),
	(
		'CAlg(R)',
		'skeletal',
		'trivial'
	),
	(
		'Rng',
		'additive',
		'The explicit construction of coproducts of rngs (see <a href="https://math.stackexchange.com/questions/4975797" target="_blank">MSE/4975797</a>) shows that the canonical homomorphism $R \sqcup S \to R \times S$ is surjective, but in most cases not injective: The kernel contains the tensor product $R \otimes S$.'
	),
	(
		'Rng',
		'balanced',
		'The inclusion $\mathbb{Z} \hookrightarrow \mathbb{Q}$ is a counterexample. (The proof can be reduced to the unital case.)'
	),
	(
		'Rng',
		'cogenerator',
		'Assume that there is a rng $Q$ that cogenerates. Clearly, $Q$ is non-zero. Take an infinite field $F$ which is larger than $Q$ and admits a non-trivial automorphism (for example, a field of rational functions). Then every rng homomorphism $f : F \to Q$ is zero: If $e := f(1)$, then $e$ is idempotent and $f$ corestricts to a ring homomorphism $f : F \to eQ$. Since $F$ is a field but $f$ cannot be injective, we must have $eQ = 0$, so that $e = 0$ and $f = 0$. Since $Q$ cogenerates, this implies that all homomorphisms $F \to F$ are equal, a contradiction.'
	),
	(
		'Rng',
		'skeletal',
		'trivial'
	),
	(
		'Set*',
		'skeletal',
		'trivial'
	),
	(
		'Set*',
		'Malcev',
		NULL
	),
	(
		'Mon',
		'preadditive',
		'In fact, already $\mathbf{Grp}$ is not preadditive.'
	),
	(
		'Mon',
		'balanced',
		'The inclusion of additive monoids $\mathbb{N} \hookrightarrow \mathbb{Z}$ is a counterexample.'
	),
	(
		'Mon',
		'cogenerator',
		'Assume there is a monoid $Q$ that cogenerates. Take an infinite simple group $G$ larger than $Q$ (w.r.t. cardinalities), for example an infinite alternating group. Then every monoid homomorphism $G \to Q$ is trivial: it corestricts to a group homomorphism $G \to Q^{\times}$, so its kernel must be all of $G$. Since $Q$ cogenerates, $G$ is trivial, a contradiction.'
	),
	(
		'Mon',
		'skeletal',
		'trivial'
	),
	(
		'Mon',
		'Malcev',
		'Consider the submonoid $\{(a,b) : a \leq b \}$ of $\mathbb{N}^2$.'
	),
	(
		'CMon',
		'preadditive',
		'In categories with finite products and coproducts, the preadditive structure is <i>unique</i>: If $f,g : A \to B$ are morphisms, their sum $f+g : A \to B$ is the composite of $(f,g) : A \to B \times B$, the inverse of the canonical morphism $B \oplus B \to B \times B$ (which indeed must be an isomorphism), and the codiagonal $B \oplus B \to B$. In the case of $\mathbf{CMon}$, this is just the pointwise addition of maps, and this is indeed an enrichment of $\mathbf{CMon}$ over itself. But not over $\mathbf{Ab}$, since for example $\mathrm{Hom}(\mathbb{N},\mathbb{N}) \cong \mathbb{N}$ (with respect to addition) is not a group.'
	),
	(
		'CMon',
		'balanced',
		'The inclusion of additive monoids $\mathbb{N} \hookrightarrow \mathbb{Z}$ is a counterexample.'
	),
	(
		'CMon',
		'skeletal',
		'trivial'
	),
	(
		'CMon',
		'Malcev',
		'Consider the submonoid $\{(a,b) : a \leq b \}$ of $\mathbb{N}^2$.'
	),
	(
		'CMon',
		'cogenerator',
		'See <a href="https://mathoverflow.net/questions/509232" target="_blank">MO/509232</a>.'
	),
	(
		'Pos',
		'strict terminal object',
		'trivial'
	),
	(
		'Pos',
		'finitary algebraic',
		NULL
	),
	(
		'Pos',
		'balanced',
		NULL
	),
	(
		'Pos',
		'skeletal',
		'trivial'
	),
	(
		'Pos',
		'Malcev',
		NULL
	),
	(
		'M-Set',
		'strict terminal object',
		'Take any set $X$ with an element $x \in X$, endow $X$ with the trivial $M$-action. Then the morphism $x : 1 \to X$ is only an isomorphism when $X = \{x\}$.'
	),
	(
		'M-Set',
		'skeletal',
		'trivial'
	),
	(
		'M-Set',
		'Malcev',
		NULL
	),
	(
		'R-Mod',
		'split abelian',
		NULL
	),
	(
		'R-Mod',
		'skeletal',
		'trivial'
	),
	(
		'Rel',
		'preadditive',
		NULL
	),
	(
		'Rel',
		'Cauchy complete',
		NULL
	),
	(
		'Rel',
		'skeletal',
		'trivial'
	),

	-- categories of "finite" objects
	(
		'FinSet',
		'small',
		'Even the collection of all singletons is not a set.'
	),
	(
		'FinSet',
		'strict terminal object',
		'trivial'
	),
	(
		'FinSet',
		'sequential limits',
		NULL
	),
	(
		'FinSet',
		'sequential colimits',
		NULL
	),
	(
		'FinSet',
		'skeletal',
		'trivial'
	),
	(
		'FinSet',
		'Malcev',
		'There are lots of non-symmetric reflexive relations.'
	),
	(
		'FinAb',
		'small',
		'Even the collection of trivial groups is not small.'
	),
	(
		'FinAb',
		'generator',
		NULL
	),
	(
		'FinAb',
		'split abelian',
		'The sequence $0 \to \mathbb{Z}/2 \to \mathbb{Z}/4 \to \mathbb{Z}/2 \to 0$ does not split.'
	),
	(
		'FinAb',
		'sequential limits',
		NULL
	),
	(
		'FinAb',
		'skeletal',
		'There are many trivial and hence isomorphic groups, which are not equal.'
	),
	(
		'Abfg',
		'small',
		NULL
	),
	(
		'Abfg',
		'cogenerator',
		NULL
	),
	(
		'Abfg',
		'split abelian',
		NULL
	),
	(
		'Abfg',
		'countable products',
		NULL
	),
	(
		'Abfg',
		'countable coproducts',
		NULL
	),
	(
		'Abfg',
		'skeletal',
		'trivial'
	),
	(
		'B',
		'small',
		NULL
	),
	(
		'B',
		'connected',
		NULL
	),
	(
		'B',
		'generator',
		NULL
	),
	(
		'B',
		'essentially finite',
		NULL
	),
	(
		'B',
		'skeletal',
		'trivial'
	),
	(
		'FI',
		'binary coproducts',
		NULL
	),
	(
		'FI',
		'small',
		NULL
	),
	(
		'FI',
		'cogenerator',
		NULL
	),
	(
		'FI',
		'binary products',
		NULL
	),
	(
		'FI',
		'sequential colimits',
		NULL
	),
	(
		'FI',
		'essentially finite',
		NULL
	),
	(
		'FI',
		'skeletal',
		'trivial'
	),
	(
		'FS',
		'small',
		NULL
	),
	(
		'FS',
		'connected',
		NULL
	),
	(
		'FS',
		'generator',
		NULL
	),
	(
		'FS',
		'sequential limits',
		NULL
	),
	(
		'FS',
		'pullbacks',
		NULL
	),
	(
		'FS',
		'essentially finite',
		NULL
	),
	(
		'FS',
		'skeletal',
		'trivial'
	),

	(
		'FinOrd',
		'small',
		NULL
	),
	(
		'FinOrd',
		'binary coproducts',
		NULL
	),
	(
		'FinOrd',
		'strict terminal object',
		'trivial'
	),
	(
		'FinOrd',
		'subobject classifier',
		NULL
	),
	(
		'FinOrd',
		'cartesian closed',
		NULL
	),
	(
		'FinOrd',
		'sequential colimits',
		NULL
	),
	(
		'FinOrd',
		'countable products',
		NULL
	),
	(
		'FinOrd',
		'skeletal',
		'trivial'
	),
	(
		'FinOrd',
		'Malcev',
		NULL
	),

	-- tiny categories
	(
		'0',
		'inhabited',
		'trivial'
	),
	(
		'2',
		'connected',
		'The objects $0$, $1$ have no zig-zag path between them.'
	),
	(
		'walking_morphism',
		'subobject classifier',
		NULL
	),

	(
		'walking_pair',
		'initial object',
		'$0$ is not initial since it has two morphisms to $1$, and $1$ has not initial since it has no morphism to $0$.'
	),
	(
		'walking_pair',
		'zero morphisms',
		'Assume that $a : 0 \to 1$ is the zero morphism from $0$ to $1$, and the other morphism is $b$. The identity of $0$ must be the zero morphism from $0$ to $0$. But then $b = b \circ \mathrm{id}_0 = b \circ 0_{0,0} = 0_{0,1} = a$, a contradiction.'
	),
	(
		'walking_pair',
		'binary products',
		'We cannot have $0 \times 1 = 1$ since there is no morphism $1 \to 0$. So assume $0 \times 1 = 0$, say with projections $\mathrm{id}_0 : 0 \to 0$ and $a : 0 \to 1$. By applying the universal property to  $\mathrm{id}_0 : 0 \to 0$ and the other morphism $b : 0 \to 1$, it immediately follows $a=b$, which is a contradiction.'
	),
	(
		'walking_pair',
		'equalizers',
		'The two morphisms $a,b : 0 \rightrightarrows 1$ have no equalizer, since it would have to be the identity of $0$, but $a \neq b$.'
	),
	(
		'walking_pair',
		'pullbacks',
		'The two morphisms $a,b : 0 \rightrightarrows 1$ have no pullback, since it would to consist of identities $0 \leftarrow 0 \rightarrow 0$, but $a \neq b$.'
	),
	(
		'walking_isomorphism',
		'skeletal',
		'The two objects are isomorphic, but different.'
	),

	-- geometric categories
	(
		'Sh(X)',
		'additive',
		NULL
	),
	(
		'Sh(X)',
		'strict terminal object',
		'Take any set $A$ with $ > 1$ elements. Consider the constant sheaf $\underline{A}$. Morphisms $1 \to \underline{A}$ corresponds to global sections of $\underline{A}$, i.e. locally constant functions $X \to A$. There is such a function since $A$ is non-empty. If $1$ was strict, $1 \to \underline{A}$ would be an isomorphism, so that there is a unique locally constant function $X \to A$, and hence a unique constant function, which is absurd.'
	),
	(
		'Sh(X)',
		'Malcev',
		'Consider the subsheaf of $\underline{\mathbb{Z}} \times \underline{\mathbb{Z}}$ consisting of locally constant functions $(f,g) : X \to \mathbb{Z} \times \mathbb{Z}$ with $f \leq g$ pointwise. This is reflexive, but not symmetric.'
	),
	(
		'Sh(X)',
		'skeletal',
		'Consider constant sheaves for isomorphic but non-equal sets.'
	),
	(
		'Sh(X,Ab)',
		'trivial',
		'Consider constant sheaves for non-isomorphic abelian groups.'
	),
	(
		'Sh(X,Ab)',
		'skeletal',
		'Consider constant sheaves for isomorphic but non-equal abelian groups.'
	),
	(
		'sSet',
		'strict terminal object',
		NULL
	),
	(
		'sSet',
		'skeletal',
		'trivial'
	),
	(
		'sSet',
		'Malcev',
		NULL
	),
(
		'Met',
		'sequential limits',
		NULL
	),
	(
		'Met',
		'finite coproducts',
		'See <a href="https://math.stackexchange.com/questions/1778408" target="_blank">MSE/1778408</a>. We only get coproducts when allowing $\infty$ as a distance, as in $\mathbf{Met}_{\infty}$.'
	),
	(
		'Met',
		'strict terminal object',
		'trivial'
	),
	(
		'Met',
		'balanced',
		'The inclusion $\mathbb{Q} \hookrightarrow \mathbb{R}$ is a counterexample; it is an epimorphism since $\mathbb{Q}$ is dense in $\mathbb{R}$.'
	),
	(
		'Met',
		'cartesian closed',
		NULL
	),
	(
		'Met',
		'essentially small',
		NULL
	),
	(
		'Met',
		'exact filtered colimits',
		'Remark 2.7 in <a href="https://arxiv.org/abs/2006.01399" target="_blank">this paper</a>'
	),
	(
		'Met',
		'skeletal',
		'trivial'
	),
	(
		'Met',
		'Malcev',
		NULL
	),
	(
		'Met_oo',
		'strict terminal object',
		'trivial'
	),
	(
		'Met_oo',
		'balanced',
		NULL
	),
	(
		'Met_oo',
		'cartesian closed',
		NULL
	),
	(
		'Met_oo',
		'exact filtered colimits',
		'2.7 in <a href="https://arxiv.org/abs/2006.01399" target="_blank">this paper</a>'
	),
	(
		'Met_oo',
		'skeletal',
		'trivial'
	),
	(
		'Met_oo',
		'Malcev',
		NULL
	),
	(
		'Met_c',
		'products',
		NULL
	),
	(
		'Met_c',
		'strict terminal object',
		'trivial'
	),
	(
		'Met_c',
		'balanced',
		NULL
	),
	(
		'Met_c',
		'cartesian closed',
		NULL
	),
	(
		'Met_c',
		'skeletal',
		'trivial'
	),
	(
		'Met_c',
		'Malcev',
		NULL
	),

	(
		'LRS',
		'cartesian closed',
		NULL
	),
	(
		'LRS',
		'strict terminal object',
		'This is because $\mathbf{CRing}$ does not have a strict initial object.'
	),
	(
		'LRS',
		'balanced',
		'The canonical morphism $\mathrm{Spec}(\mathbb{Z}/2 \times \mathbb{Z}[1/2]) \longrightarrow \mathrm{Spec}(\mathbb{Z})$ is a mono- and an epimorphism, but no isomorphism.'
	),
	(
		'LRS',
		'skeletal',
		'trivial'
	),
	(
		'LRS',
		'Malcev',
		'This is because the category of schemes already is not Malcev.'
	),
	(
		'Sch',
		'pushouts',
		'The span $\mathbb{A}^1 \leftarrow \mathrm{Spec}(k(t)) \rightarrow \mathbb{A}^1$ has no pushout, see <a href="https://mathoverflow.net/questions/9961" target="_blank">MO/9961</a>.'
	),
	(
		'Sch',
		'countable products',
		'While all diagrams of affine schemes have a limit in the category of schemes, one can show that an infinite product of quasi-compact non-empty schemes only exists when almost all of them are affine, see <a href="https://mathoverflow.net/questions/65506" target="_blank">MO/65506</a>. Thus, for example the infinite power $(\mathbb{P}^1)^{\mathbb{N}}$ does not exist in $\mathbf{Sch}$.'
	),
	(
		'Sch',
		'cartesian closed',
		NULL
	),
	(
		'Sch',
		'strict terminal object',
		'This is because $\mathbf{CRing}$ does not have a strict initial object.'
	),
	(
		'Sch',
		'balanced',
		'The canonical morphism $\mathrm{Spec}(\mathbb{Z}/2 \times \mathbb{Z}[1/2]) \longrightarrow \mathrm{Spec}(\mathbb{Z})$ is a mono- and an epimorphism, but no isomorphism.'
	),
	(
		'Sch',
		'skeletal',
		'trivial'
	),
	(
		'Sch',
		'Malcev',
		'Consider the subscheme $V(x-y) \cup V(y) \subseteq \mathbb{A}^2$. It contains the diagonal but it is not symmetric.'
	),
	(
		'Z',
		'locally essentially small',
		NULL
	),
	(
		'Z',
		'strict terminal object',
		'This is because $\mathbf{CRing}$ does not have a strict initial object.'
	),
	(
		'Z',
		'skeletal',
		'trivial'
	),
	(
		'Z',
		'Malcev',
		NULL
	),

	-- thin categories
	(
		'N',
		'countable coproducts',
		'The numbers $0,1,2,\dotsc$ have no supremum, i.e. no coproduct.'
	),
	(
		'N',
		'essentially finite',
		'trivial'
	),
	(
		'On',
		'terminal object',
		'There is no largest ordinal $\alpha$ since $\alpha + 1$ will always be larger.'
	),
	(
		'On',
		'well-copowered',
		'The "quotients" of $0$ are all ordinals.'
	),
	(
		'real_interval',
		'essentially finite',
		NULL
	),
	(
		'real_interval',
		'locally finitely presentable',
		NULL
	),
	(
		'Zdiv',
		'essentially finite',
		'The non-negative integers are pairwise non-isomorphic in this category.'
	),
	(
		'Zdiv',
		'skeletal',
		'The integers $+1$ and $-1$ are isomorphic, but not equal.'
	),
	(
		'Zdiv',
		'self-dual',
		'The only integer with infinitely many divisors (up to isomorphism) is $0$. But many integers have infinitely many multiple (up to isomorphism).'
	),
	(
		'Zdiv',
		'infinitary distributive',
		'We have $2 \times \coprod_n 3^n = \gcd(2,\mathrm{lcm}_n(3^n)) = \gcd(2,0) = 2$, but $\coprod_n (2 \times 3^n) = \mathrm{lcm}_n \gcd(2,3^n) = \mathrm{lcm}_n 1  = 1$.'
	),
	(
		'Noo',
		'essentially finite',
		'trivial'
	),
	(
		'Noo',
		'self-dual',
		'every upper set is infinite, but every lower set is finite'
	),

	-- deloopings
	(
		'BG',
		'trivial',
		'trivial'
	),
	(
		'BG',
		'essentially finite',
		'This is because we choose $G$ to be infinite.'
	),
	(
		'BGf',
		'trivial',
		'trivial'
	),
	(
		'BN',
		'essentially finite',
		'trivial'
	),
	(
		'BN',
		'thin',
		'trivial'
	),
	(
		'BN',
		'sequential limits',
		'Assume that the sequence $\cdots \xrightarrow{1}  \bullet \xrightarrow{1} \bullet \xrightarrow{1} \bullet$ has a limit. This is a (universal) sequence of natural numbers $n_0,n_1,\dotsc$ satisfying $n_i = n_{i+1} + 1$. But then $n_i = n_0 - i$, and in particular $n_{n_0 + 1} = - 1$, a contradiction.'
	),
	(
		'BOn',
		'locally essentially small',
		'This is because $\mathbf{On}$ is large.'
	),
	(
		'BOn',
		'initial object',
		'trivial'
	),
	(
		'BOn',
		'terminal object',
		'trivial'
	),
	(
		'BOn',
		'right cancellative',
		'Since $1 + \omega = 0 + \omega$, the ordinal $\omega$ is not an epimorphism. In fact, the epimorphisms are exactly the finite ordinals (see below).'
	),
	(
		'BOn',
		'balanced',
		'Every finite ordinal is both a mono- and an epimorphism (see below), but only $0$ is an isomorphism.'
	),
	(
		'BOn',
		'binary products',
		'Assume that the unique object has a product with itself. This amounts to a pair of ordinals $\pi_1,\pi_2$ such that for every pair of ordinals $\alpha_1,\alpha_2$ there is a unique ordinal $\tau$ with $\pi_i + \tau = \alpha_i$ for $i = 1,2$. Applying this to $\alpha_i = 0$ we get $\pi_i = 0$. Now we get a contradiction for any distinct $\alpha_1,\alpha_2$.'
	),
	(
		'BOn',
		'well-powered',
		'This is because all ordinals are monomorphisms (see below) and they do not form a set.'
	),
	(
		'BOn',
		'sequential colimits',
		'Assume that the sequence $\bullet \xrightarrow{1} \bullet \xrightarrow{1} \cdots$ has a colimit. This mounts to a (universal) sequence of ordinals $\alpha_n$ with $\alpha_n = \alpha_{n+1} + 1$. But then $\alpha_{n+1} < \alpha_n$, contradicting the fact that $\alpha_0$ is well-ordered.'
	),
	(
		'BOn',
		'pushouts',
		'Assume that $1,\omega$ have a pushout. This is a (universal) pair of ordinals $\alpha,\beta$ with $\alpha + 1 = \beta + \omega$. But $\beta + \omega$ is a limit ordinal, while $\alpha + 1$ is not.'
	),

	-- various categories
	(
		'Ban',
		'preadditive',
		NULL
	),
	(
		'Ban',
		'balanced',
		NULL
	),
	(
		'Ban',
		'exact filtered colimits',
		NULL
	),
	(
		'Ban',
		'skeletal',
		'trivial'
	),
	(
		'Ban',
		'Malcev',
		'See <a href="https://math.stackexchange.com/questions/5033161" target="_blank">MSE/5033161</a>.'
	),
	(
		'Man',
		'essentially small',
		NULL
	),
	(
		'Man',
		'countable products',
		NULL
	),
	(
		'Man',
		'coproducts',
		NULL
	),
	(
		'Man',
		'cartesian closed',
		NULL
	),
	(
		'Man',
		'coequalizers',
		NULL
	),
	(
		'Man',
		'equalizers',
		NULL
	),
	(
		'Man',
		'strict terminal object',
		'trivial'
	),
	(
		'Man',
		'balanced',
		NULL
	),
	(
		'Man',
		'skeletal',
		'trivial'
	),
	(
		'Meas',
		'cartesian closed',
		NULL
	),
	(
		'Meas',
		'strict terminal object',
		'trivial'
	),
	(
		'Meas',
		'balanced',
		'Take a set $X$ with two different $\sigma$-algebras $\mathcal{A} \subset \mathcal{B}$ (for example, $\mathcal{A} = \{\emptyset,X\}$ and $\mathcal{B} = P(X)$ when $X$ has at least $2$ elements), then the identity map $(X,\mathcal{B}) \to (X,\mathcal{A})$ provides a counterexample.'
	),
	(
		'Meas',
		'skeletal',
		'trivial'
	),
	(
		'Meas',
		'Malcev',
		NULL
	),
	(
		'Cat',
		'strict terminal object',
		'A functor $1 \to \mathcal{C}$ is just the choice of an object of $\mathcal{C}$, it does not force $\mathcal{C}$ to be trivial.'
	),
	(
		'Cat',
		'finitary algebraic',
		NULL
	),
	(
		'Cat',
		'balanced',
		NULL
	),
	(
		'Cat',
		'cogenerator',
		NULL
	),
	(
		'Cat',
		'skeletal',
		'trivial'
	),
	(
		'Cat',
		'Malcev',
		NULL
	),
	(
		'Fld',
		'connected',
		'A field of characteristic $0$ cannot be connected with a field of characteristic $p > 0$. in fact, the connected components of $\mathbf{Fld}$ are the subcategories $\mathbf{Fld}_p$ of fields of characteristic $p$, where $p$ is a prime or $0$.'
	),
	(
		'Fld',
		'pushouts',
		NULL
	),
	(
		'Fld',
		'balanced',
		NULL
	),
	(
		'Fld',
		'generator',
		NULL
	),
	(
		'Fld',
		'cogenerator',
		'Assume that there is a field $Q$ that cogenerates. Take a field $F$ which is larger than $R$ and admits a non-trivial automorphism (for example, a field of rational functions). Then there is no field homomorphism $F \to Q$ (as it would be injective). Since $Q$ cogenerates, this means that all homomorphisms $F \to F$ are equal, a contradiction.'
	),
	(
		'Fld',
		'skeletal',
		'trivial'
	),
	(
		'Sp',
		'locally small',
		NULL
	),
	(
		'Sp',
		'strict terminal object',
		'trivial'
	),
	(
		'Sp',
		'countable products',
		NULL
	),
	(
		'Sp',
		'countable coproducts',
		NULL
	),
	(
		'Sp',
		'skeletal',
		'trivial'
	),
	(
		'Sp',
		'Malcev',
		NULL
	),

	-- artificial categories
	(
		'FreeAb',
		'countable products',
		NULL
	),
	(
		'FreeAb',
		'balanced',
		'The homomorphism $2 : \mathbb{Z} \to \mathbb{Z}$ is a counterexample.'
	),
	(
		'FreeAb',
		'filtered colimits',
		'See <a href="https://math.stackexchange.com/questions/5025660" target="_blank">this post</a>'
	),
	(
		'FreeAb',
		'skeletal',
		'trivial'
	),
	(
		'Setne',
		'binary coproducts',
		NULL
	),
	(
		'Setne',
		'strict terminal object',
		'trivial'
	),
	(
		'Setne',
		'sequential limits',
		NULL
	),
	(
		'Setne',
		'skeletal',
		'trivial'
	);