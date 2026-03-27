INSERT INTO category_property_assignments (
	category_id,
	property_id,
	is_satisfied,
	reason
)
VALUES
(
	'Man',
	'locally small',
	TRUE,
	'There is a forgetful functor $\mathbf{Man} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
),
(
	'Man',
	'finite products',
	TRUE,
	'In short, this follows from the corresponding statement for topological spaces and $\mathbb{R}^n \times \mathbb{R}^m \cong \mathbb{R}^{n+m}$.'
),
(
	'Man',
	'well-powered',
	TRUE,
	'This follows from the fact that monomorphisms are injective here.'
),
(
	'Man',
	'well-copowered',
	TRUE,
	'This follows from the fact that epimorphisms have dense image (see below), which bounds the size of the codomain.'
),
(
	'Man',
	'generator',
	TRUE,
	'The $0$-dimensional one-point manifold is a generator since it represents the forgetful functor $\mathbf{Top} \to \mathbf{Set}$.'
),
(
	'Man',
	'cogenerator',
	TRUE,
	'The manifold $\mathbb{R}$ is a cogenerator, since for every smooth manifold $M$ and points $p \neq q$ in $M$ there is a smooth function $f : M \to \mathbb{R}$ with $f(p) = 1$ and $f(q) = 0$ (John Lee, Introduction to Smooth Manifolds, Prop. 2.25).'
),
(
	'Man',
	'extensive',
	TRUE,
	'[Sketch] Since $\mathbf{Top}$ is infinitary extensive, a continuous map $f : M \to \coprod_i N_i$ corresponds to a decomposition $M = \coprod_i M_i$ (as topological spaces) with continuous maps $f_i : M_i \to N_i$. Endow the open subset $M_i \subseteq M$ with the smooth structure inherited from $M$. Now remark that $f$ is smooth iff each $f_i$ is smooth.'
),
(
	'Man',
	'countable coproducts',
	TRUE,
	'Take the usual disjoint union, which is clearly a smooth manifold, still second-countable. (Without that condition, all coproducts would exist.)'
),
(
	'Man',
	'Cauchy complete',
	TRUE,
	'See Theorem 2.1 at the <a href="https://ncatlab.org/nlab/show/smooth+manifold" target="_blank">nLab</a>.'
),
(
	'Man',
	'strongly connected',
	TRUE,
	'Every nonempty manifold is weakly terminal (by using constant maps).'
),
(
	'Man',
	'essentially small',
	FALSE,
	NULL
),
(
	'Man',
	'countable products',
	FALSE,
	NULL
),
(
	'Man',
	'coproducts',
	FALSE,
	NULL
),
(
	'Man',
	'cartesian closed',
	FALSE,
	NULL
),
(
	'Man',
	'coequalizers',
	FALSE,
	NULL
),
(
	'Man',
	'pullbacks',
	FALSE,
	'See <a href="https://math.stackexchange.com/questions/5129579/" target="_blank">MSE/5129579</a>.'
),
(
	'Man',
	'strict terminal object',
	FALSE,
	'This is trivial.'
),
(
	'Man',
	'balanced',
	FALSE,
	'The irrational winding of a torus $\mathbb{R} \to S^1 \times S^1$, $t \mapsto (e^{i t}, \, e^{i \alpha t})$, where $\alpha \in \mathbb{R} \setminus \mathbb{Q}$, provides a counterexample. It is injective and has a dense image. Hence, it is a mono- and an epimorphism. But it is not surjective, hence no isomorphism.'
),
(
	'Man',
	'skeletal',
	FALSE,
	'This is trivial.'
);
