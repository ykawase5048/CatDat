INSERT INTO category_property_assignments (
	category_id,
	property_id,
	is_satisfied,
	reason
)
VALUES
(
	'FinSet',
	'locally small',
	TRUE,
	'There is a forgetful functor $\mathbf{FinSet} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
),
(
	'FinSet',
	'essentially small',
	TRUE,
	'Every finite set is isomorphic to some $[n] = \{1,\dotsc,n\}$ for some $n \in \mathbb{N}$.'
),
(
	'FinSet',
	'elementary topos',
	TRUE,
	'This follows easily from the fact that sets form an elementary topos.'
),
(
	'FinSet',
	'generator',
	TRUE,
	'The one-point set is a generator since it represents the forgetful functor $\mathbf{FinSet} \to \mathbf{Set}$.'
),
(
	'FinSet',
	'strongly connected',
	TRUE,
	'Every nonempty finite set is weakly terminal (by using constant maps).'
),
(
	'FinSet',
	'cogenerator',
	TRUE,
	'The two-element set is a cogenerator.'
),
(
	'FinSet',
	'small',
	FALSE,
	'Even the collection of all singletons is not a set.'
),
(
	'FinSet',
	'strict terminal object',
	FALSE,
	'This is trivial.'
),
(
	'FinSet',
	'sequential colimits',
	FALSE,
	'Let $[n] := \{1,\dotsc,n\}$. Assume the sequence of inclusion maps $[1] \to [2] \to \cdots$ has a colimit $X$ in $\mathbf{FinSet}$ with maps $f_n : [n] \to X$. Let $n_0 \geq 1$ be fixed. I claim that $f_{n_0}$ is injective, which will then yield a contradiction by taking $n_0 > \mathrm{card}(X)$. For $n \geq 1$ define $g_n : [n] \to [n_0]$ as follows. For $n \leq n_0$ it is the inclusion, and for $n \geq n_0$ it is the surjection which keeps all elements of $[n_0]$ and maps all other elements to $n_0$. Observe that $g_{n+1} |_{[n]} = g_n$. Hence, there is a unique map $g : X \to [n_0]$ with $g \circ f_n = g_n$ for all $n$. For $n = n_0$ this shows $g \circ f_{n_0} = \mathrm{id}_{[n_0]}$, and $f_{n_0}$ is injective.'
),
(
	'FinSet',
	'sequential limits',
	FALSE,
	'Let $[n] := \{1,\dotsc,n\}$. We define the projection $p_n : [n+1] \to [n]$ by extending the identity of $[n]$ with $p_n(n+1) := n$. Assume the sequence of projections $\cdots \to [2] \to [1]$ has a limit $X$ in $\mathbf{FinSet}$ with maps $f_n : X \to [n]$. Let $n_0 \geq 1$ be fixed. I claim that $f_{n_0}$ is surjective, which will then yield a contradiction by taking $n_0 > \mathrm{card}(X)$. For $n \geq 1$ define $g_n : [n_0] \to [n]$ as follows. For $n \leq n_0$ it is the projection, and for $n \geq n_0$ it is the inclusion. Observe that $p_n \circ g_{n+1} = g_n$. Hence, there is a unique map $g : [n_0] \to X$ with $f_n \circ g = g_n$ for all $n$. For $n = n_0$ this shows $f_{n_0} \circ g = \mathrm{id}_{[n_0]}$, and $f_{n_0}$ is surjective.'
),
(
	'FinSet',
	'skeletal',
	FALSE,
	'This is trivial.'
),
(
	'FinSet',
	'Malcev',
	FALSE,
	'There are lots of non-symmetric reflexive relations.'
);
