DELETE FROM category_non_properties;

INSERT INTO category_non_properties (
	category_id,	 -- ID of the category
	non_property_id, -- ID of the non-property
	reason			 -- proof or reference why the category lacks the property (if known)
)
VALUES
	(
		'0',
		'inhabited',
		NULL
	),
	(
		'2',
		'connected',
		NULL
	),
	(
		'Set',
		'strict terminal object',
		NULL
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
		NULL
	),
	(
		'Ab',
		'skeletal',
		'trivial'
	),
	(
		'Top',
		'cartesian closed',
		NULL
	),
	(
		'Top',
		'locally presentable',
		NULL
	),
	(
		'Top',
		'strict terminal object',
		NULL
	),
	(
		'Top',
		'balanced',
		NULL
	),
	(
		'Top',
		'cogenerator',
		NULL
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
		NULL
	),
	(
		'Grp',
		'subobject classifier',
		NULL
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
		NULL
	),
	(
		'Vect',
		'skeletal',
		'trivial'
	),
	(
		'Ring',
		'strict initial object',
		NULL
	),
	(
		'Ring',
		'balanced',
		NULL
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
		NULL
	),
	(
		'CRing',
		'balanced',
		NULL
	),
	(
		'CRing',
		'cogenerator',
		NULL
	),
	(
		'CRing',
		'disjoint finite coproducts',
		NULL
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
		NULL
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
		'FinSet',
		'small',
		NULL
	),
	(
		'FinSet',
		'strict terminal object',
		NULL
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
		NULL
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
		'walking_morphism',
		'subobject classifier',
		NULL
	),
	(
		'M-Set',
		'strict terminal object',
		NULL
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
		'Met',
		'sequential limits',
		NULL
	),
	(
		'Met',
		'finite coproducts',
		NULL
	),
	(
		'Met',
		'strict terminal object',
		NULL
	),
	(
		'Met',
		'balanced',
		NULL
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
		'2.7 in <a href="https://arxiv.org/abs/2006.01399" target="_blank">this paper</a>'
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
		NULL
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
		NULL
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
		NULL
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
		NULL
	),
	(
		'Meas',
		'balanced',
		NULL
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
		'N',
		'countable coproducts',
		NULL
	),
	(
		'N',
		'essentially finite',
		NULL
	),
	(
		'Cat',
		'strict terminal object',
		NULL
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
		'On',
		'terminal object',
		NULL
	),
	(
		'On',
		'well-copowered',
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
		NULL
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
		'coequalizers',
		NULL
	),
	(
		'Sch',
		'countable products',
		NULL
	),
	(
		'Sch',
		'cartesian closed',
		NULL
	),
	(
		'Sch',
		'strict terminal object',
		NULL
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
		'Fld',
		'connected',
		NULL
	),
	(
		'Fld',
		'well-copowered',
		NULL
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
		NULL
	),
	(
		'Fld',
		'skeletal',
		'trivial'
	),
	(
		'FreeAb',
		'countable products',
		NULL
	),
	(
		'FreeAb',
		'balanced',
		NULL
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
		'Z',
		'locally essentially small',
		NULL
	),
	(
		'Z',
		'strict terminal object',
		NULL
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
	(
		'BG',
		'zero morphisms',
		NULL
	),
	(
		'BG',
		'essentially finite',
		NULL
	),
	(
		'BGf',
		'zero morphisms',
		NULL
	),
	(
		'BN',
		'essentially finite',
		NULL
	),
	(
		'BN',
		'zero morphisms',
		NULL
	),
	(
		'BN',
		'equalizers',
		NULL
	),
	(
		'BN',
		'sequential limits',
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
	(
		'Setne',
		'binary coproducts',
		NULL
	),
	(
		'Setne',
		'strict terminal object',
		NULL
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
		'BOn',
		'locally essentially small',
		NULL
	),
	(
		'BOn',
		'initial object',
		NULL
	),
	(
		'BOn',
		'terminal object',
		NULL
	),
	(
		'BOn',
		'right cancellative',
		NULL
	),
	(
		'BOn',
		'zero morphisms',
		NULL
	),
	(
		'BOn',
		'balanced',
		NULL
	),
	(
		'BOn',
		'binary products',
		NULL
	),
	(
		'BOn',
		'binary coproducts',
		NULL
	),
	(
		'BOn',
		'well-powered',
		NULL
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
		NULL
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
	(
		'Sp',
		'locally small',
		NULL
	),
	(
		'Sp',
		'strict terminal object',
		NULL
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
	);