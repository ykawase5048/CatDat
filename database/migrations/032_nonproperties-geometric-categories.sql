INSERT INTO category_non_properties (
	category_id,
	non_property_id,
	reason
)
VALUES
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
		NULL
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
	);