INSERT INTO category_non_properties (
	category_id,
	non_property_id,
	reason
)
VALUES
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
	);