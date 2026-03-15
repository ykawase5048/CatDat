INSERT INTO category_non_properties (
	category_id,
	non_property_id,
	reason
)
VALUES
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
		NULL
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
		NULL
	),
	(
		'Ring',
		'disjoint finite coproducts',
		NULL
	),
	(
		'Ring',
		'skeletal',
		'trivial'
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
		NULL
	),
	(
		'CRing',
		'disjoint finite coproducts',
		'The coproduct inclusion $\mathbb{Z}/2 \to \mathbb{Z}/2 \otimes \mathbb{Z}/3 = 0$ is not a monomorphism.'
	),
	(
		'CRing',
		'skeletal',
		'trivial'
	),
	(
		'Rng',
		'preadditive',
		NULL
	),
	(
		'Rng',
		'balanced',
		'The inclusion $\mathbb{Z} \hookrightarrow \mathbb{Q}$ is a counterexample. (The proof can be reduced to the unital case.)'
	),
	(
		'Rng',
		'cogenerator',
		NULL
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
		NULL
	),
	(
		'Mon',
		'balanced',
		NULL
	),
	(
		'Mon',
		'cogenerator',
		NULL
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
	);