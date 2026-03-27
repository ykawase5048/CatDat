INSERT INTO category_property_assignments (
	category_id,
	property_id,
	is_satisfied,
	reason
)
VALUES
(
	'Met',
	'locally small',
	TRUE,
	'There is a forgetful functor $\mathbf{Met} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
),
(
	'Met',
	'well-powered',
	TRUE,
	'This follows since monomorphisms are injective.'
),
(
	'Met',
	'equalizers',
	TRUE,
	'Just restrict the metric to the equalizer built from the sets.'
),
(
	'Met',
	'binary products',
	TRUE,
	'The product of two metric spaces $(X,d)$, $(Y,d)$ is $(X \times Y,d)$ with $d((x_1,y_1),(x_2,x_2)) := \sup(d(x_1,x_2),d(y_1,y_2))$.' 
),
(
	'Met',
	'terminal object',
	TRUE,
	'The one-point metric space is terminal.'
),
(
	'Met',
	'coequalizers',
	TRUE,
	NULL
),
(
	'Met',
	'directed colimits',
	TRUE,
	'Given a directed diagram $(X_i)$ of metric spaces, take the directed colimit $X$ of the underlying sets with the following metric: If $x,y \in X$, let $d(x,y)$ be infimum of all $d(x_i,y_i)$, where $x_i,y_i \in X_i$ are some preimages of $x,y$ in some $X_i$. This is only a pseudo-metric, so finally take the associated metric space (Kolmogorov quotient). The definition ensures that each $X_i \to X$ is non-expansive, and the universal property is easy to check.' 
),
(
	'Met',
	'strict initial object',
	TRUE,
	'This is because the initial object is the empty metric space.'
),
(
	'Met',
	'generator',
	TRUE,
	'The one-point metric space is a generator since it represents the forgetful functor $\mathbf{Met} \to \mathbf{Set}$.'
),
(
	'Met',
	'cogenerator',
	TRUE,
	'We claim that $\mathbb{R}$ with the usual metric is a cogenerator. Let $a,b \in X$ be two points of a metric space such that $f(a)=f(b)$ for all non-expansive maps $f : X \to \mathbb{R}$. This applies in particular to $f(x) := d(a,x)$ and shows that $0=d(a,a)=d(a,b)$, so that $a=b$.' 
),
(
	'Met',
	'well-copowered',
	TRUE,
	'If $f : X \to Y$ is an epimorphism, then $f(X)$ is dense in $Y$ (see below). Hence, there is an injective map $Y \to X^{\mathbb{N}}$, which bounds the size of $Y$.'
),
(
	'Met',
	'strongly connected',
	TRUE,
	'Every nonempty metric space is weakly terminal (by using constant maps).'
),
(
	'Met',
	'sequential limits',
	FALSE,
	NULL
),
(
	'Met',
	'finite coproducts',
	FALSE,
	'See <a href="https://math.stackexchange.com/questions/1778408" target="_blank">MSE/1778408</a>. We only get coproducts when allowing $\infty$ as a distance, as in $\mathbf{Met}_{\infty}$.'
),
(
	'Met',
	'strict terminal object',
	FALSE,
	'This is trivial.'
),
(
	'Met',
	'balanced',
	FALSE,
	'The inclusion $\mathbb{Q} \hookrightarrow \mathbb{R}$ is a counterexample; it is an epimorphism since $\mathbb{Q}$ is dense in $\mathbb{R}$.'
),
(
	'Met',
	'cartesian closed',
	FALSE,
	NULL
),
(
	'Met',
	'essentially small',
	FALSE,
	'This is trivial.'
),
(
	'Met',
	'exact filtered colimits',
	FALSE,
	'Remark 2.7 in <a href="https://arxiv.org/abs/2006.01399" target="_blank">this paper</a>'
),
(
	'Met',
	'skeletal',
	FALSE,
	'This is trivial.'
),
(
	'Met',
	'Malcev',
	FALSE,
	'Consider the metric subspace $\{(a,b) \in \mathbb{R}^2 : a \leq b\}$ of $\mathbb{R}^2$.'
);
