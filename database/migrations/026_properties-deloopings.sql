INSERT INTO category_properties (
	category_id,
	property_id,
	reason
)
VALUES
	(
		'BG',
		'small',
		'trivial'
	),
	(
		'BG',
		'groupoid',
		'trivial'
	),
	(
		'BG',
		'connected',
		'trivial'
	),
	(
		'BG',
		'generator',
		'The unique object is a generator for trivial reasons.'
	),
	(
		'BG',
		'skeletal',
		'There is just one object'
	),
	(
		'BGf',
		'finite',
		'trivial'
	),
	(
		'BGf',
		'groupoid',
		'trivial'
	),
	(
		'BGf',
		'connected',
		'trivial'
	),
	(
		'BGf',
		'generator',
		'The unique object is a generator for trivial reasons.'
	),
	(
		'BGf',
		'skeletal',
		'There is just one object'
	),
	(
		'BN',
		'small',
		'trivial'
	),
	(
		'BN',
		'connected',
		'trivial'
	),
	(
		'BN',
		'self-dual',
		'The identity is a self-duality since the addition is commutative.'
	),
	(
		'BN',
		'generator',
		'The unique object is a generator for trivial reasons.'
	),
	(
		'BN',
		'pullbacks',
		'For natural numbers $n,m$ we need to find a universal pair $p,q$ of natural numbers satisfying $n + p = m + q$. We may assume w.l.o.g. $n \leq m$. Then take $p = m-n$, $q = 0$.'
	),
	(
		'BN',
		'left cancellative',
		'This is because addition of natural numbers is cancellative.'
	),
	(
		'BN',
		'skeletal',
		'There is just one object.'
	),

	(
		'BOn',
		'connected',
		'trivial'
	),
	(
		'BOn',
		'generator',
		'There is just one object.'
	),
	(
		'BOn',
		'cogenerator',
		'There is just one object.'
	),
	(
		'BOn',
		'left cancellative',
		'It is well-known that ordinal addition satisfies $\alpha + \beta = \alpha + \gamma \implies \beta = \gamma$.'
	),
	(
		'BOn',
		'well-copowered',
		'This follows from the description of epimorphisms as finite ordinals, see <a href="https://math.stackexchange.com/questions/5029605" target="_blank">MO/5029605</a>.'
	),
	(
		'BOn',
		'equalizers',
		'See <a href="https://math.stackexchange.com/questions/5029668/" target="_blank">MSE/5029668</a>.'
	),
	(
		'BOn',
		'skeletal',
		'There is just one object.'
	);