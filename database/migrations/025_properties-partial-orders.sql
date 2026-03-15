INSERT INTO category_properties (
	category_id,
	property_id,
	reason
)
VALUES
	(
		'N',
		'small',
		'trivial'
	),
	(
		'N',
		'thin',
		'trivial'
	),
	(
		'N',
		'finitely cocomplete',
		'Finitely many natural numbers have a supremum natural number.'
	),
	(
		'N',
		'binary products',
		'Two natural numbers have a minimum.'
	),
	(
		'N',
		'connected limits',
		'Every non-empty set of natural numbers has a minimum.'
	),
	(
		'N',
		'skeletal',
		'The relation $\leq$ is antisymmetric.'
	),
	(
		'On',
		'thin',
		'trivial'
	),
	(
		'On',
		'locally small',
		'trivial'
	),
	(
		'On',
		'cocomplete',
		'Every set of ordinal numbers has a supremum.'
	),
	(
		'On',
		'binary products',
		'For ordinal numbers $\alpha,\beta$ their minimum exists, it is $\alpha$ when $\alpha \leq \beta$ and $\beta$ otherwise.'
	),
	(
		'On',
		'connected limits',
		'Every non-empty set of ordinal numbers has a minimum.'
	),
	(
		'On',
		'well-powered',
		'This is because for every ordinal $\alpha$ the collection of ordinals $\leq \alpha$ is a set (namely, $\alpha + 1$).'
	),
	(
		'On',
		'skeletal',
		'The relation $\leq$ is antisymmetric'
	),
	(
		'real_interval',
		'small',
		'trivial'
	),
	(
		'real_interval',
		'self-dual',
		'Take $t \mapsto 1-t$.'
	),
	(
		'real_interval',
		'cartesian closed',
		'The exponential $a \Rightarrow b$ (Heyting implication) is $1$ when $a \leq b$ and otherwise $b$.'
	),
	(
		'real_interval',
		'locally ℵ₁-presentable',
		'See <a href="https://math.stackexchange.com/questions/4481902/locally-presentable-vs-compactly-presentable-categories#comment9399784_4482185" target="_blank">MSE/4481902</a>.'
	),
	(
		'real_interval',
		'skeletal',
		'The relation $\leq$ is antisymmetric.'
	),
	(
		'Zdiv',
		'small',
		'trivial'
	),
	(
		'Zdiv',
		'products',
		'Take the $\gcd$ of a subset.'
	),
	(
		'Zdiv',
		'distributive',
		'Using prime factorizations, one can prove that $\gcd(a, \mathrm{lcm} \{b_i \}) = \mathrm{lcm} \{ \gcd(a, b_i) \}$ for finitely many $b_i$.'
	),
	(
		'Zdiv',
		'locally ℵ₁-presentable',
		'Every $\aleph_1$-directed diagram is eventually constant.'
	),
	(
		'Noo',
		'small',
		'trivial'
	),
	(
		'Noo',
		'coproducts',
		'Take the supremum.'
	),
	(
		'Noo',
		'skeletal',
		'The relation $\leq$ is antisymmetric'
	),
	(
		'Noo',
		'infinitary distributive',
		'One can show that $\sup_i \min(a,b_i) = \min(a, \sup_i b_i)$.'
	),
	(
		'Noo',
		'locally finitely presentable',
		'Every natural number is finitely presentable, and $\infty$ is the colimit of all $n < \infty$.'
	);