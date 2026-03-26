INSERT INTO category_property_assignments (
	category_id,
	property_id,
	is_satisfied,
	reason
)
VALUES
(
	'Met_oo',
	'locally small',
	TRUE,
	'There is a forgetful functor $\mathbf{Met}_{\infty} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
),
(
	'Met_oo',
	'locally ℵ₁-presentable',
	TRUE,
	'Example 4.5 in <a href="https://arxiv.org/abs/1504.02660" target="_blank">this preprint</a>'
),
(
	'Met_oo',
	'infinitary extensive',
	TRUE,
	'[Sketch] Since $\mathbf{Set}$ is infinitary extensive, a map $f : Y \to \coprod_i X_i =: X$ corresponds to a decomposition $Y = \coprod_i Y_i$ (as sets) with maps $f_i : Y_i \to X_i$. Endow $Y_i$ with the restricted metric. If $f$ is non-expansive, each $f_i$ is non-expansive, and for $x_i \in Y_i$ and $i \neq j$ we have $d_Y(x_i,x_j) \geq d_X(f(x_i),f(x_j)) = \infty$, so that $Y = \coprod_i Y_i$ holds as metric spaces.'
),
(
	'Met_oo',
	'cogenerator',
	TRUE,
	'The proof is similar to $\mathbf{Met}$, a cogenerator is given by $\mathbb{R} \cup \{\infty\}$ with the metric in which $d(a,\infty)=\infty$ for $a \in \mathbb{R}$. Then one checks that the maps $d(a,-) : X \to \mathbb{R} \cup \{\infty\}$ are non-expansive and finishes as for $\mathbf{Met}$.'
),
(
	'Met_oo',
	'strongly connected',
	TRUE,
	'Every nonempty metric space is weakly terminal (by using constant maps).'
),
(
	'Met_oo',
	'strict terminal object',
	FALSE,
	'trivial'
),
(
	'Met_oo',
	'balanced',
	FALSE,
	'The inclusion $\mathbb{Q} \hookrightarrow \mathbb{R}$ provides a counterexample.'
),
(
	'Met_oo',
	'cartesian closed',
	FALSE,
	NULL
),
(
	'Met_oo',
	'exact filtered colimits',
	FALSE,
	'2.7 in <a href="https://arxiv.org/abs/2006.01399" target="_blank">this paper</a>'
),
(
	'Met_oo',
	'skeletal',
	FALSE,
	'trivial'
),
(
	'Met_oo',
	'Malcev',
	FALSE,
	'Consider the metric subspace $\{(a,b) \in \mathbb{R}^2 : a \leq b\}$ of $\mathbb{R}^2$.'
);
