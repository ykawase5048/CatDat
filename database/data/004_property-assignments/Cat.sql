INSERT INTO category_property_assignments (
	category_id,
	property_id,
	is_satisfied,
	reason
)
VALUES
(
	'Cat',
	'locally small',
	TRUE,
	'There is a forgetful functor $\mathbf{Cat} \to \mathbf{Set} \times \mathbf{Set}$, $\mathcal{C} \mapsto (\mathrm{Ob}(\mathcal{C}),\mathrm{Mor}(\mathcal{C}))$, and $\mathbf{Set} \times \mathbf{Set}$ is locally small.'
),
(
	'Cat',
	'cartesian closed',
	TRUE,
	'See p. 98 in <a href="https://ncatlab.org/nlab/show/Categories+for+the+Working+Mathematician" target="_blank">Mac Lane</a>.'
),
(
	'Cat',
	'locally finitely presentable',
	TRUE,
	'See <a href="https://mathoverflow.net/questions/84460" target="_blank">MO/84460</a>.'
),
(
	'Cat',
	'infinitary extensive',
	TRUE,
	'[Sketch] This is straight forward from the fact that $\mathbf{Set}$ is infinitary extensive: A functor $\mathcal{C} \to \coprod_i \mathcal{D}_i$ yields full subcategories $\mathcal{C}_i \subseteq \mathcal{C}$ (the preimages of $\mathcal{D}_i)$ with $\mathcal{C} = \coprod_i \mathcal{C}_i$.'
),
(
	'Cat',
	'strongly connected',
	TRUE,
	'Every nonempty category is weakly terminal (by using constant functors).'
),
(
	'Cat',
	'strict terminal object',
	FALSE,
	'A functor $1 \to \mathcal{C}$ is just the choice of an object of $\mathcal{C}$, it does not force $\mathcal{C}$ to be trivial.'
),
(
	'Cat',
	'finitary algebraic',
	FALSE,
	NULL
),
(
	'Cat',
	'balanced',
	FALSE,
	NULL
),
(
	'Cat',
	'cogenerator',
	FALSE,
	NULL
),
(
	'Cat',
	'skeletal',
	FALSE,
	'This is trivial.'
),
(
	'Cat',
	'Malcev',
	FALSE,
	'Use that $\mathbf{Set}$ is not Malcev and consider sets as discrete categories.'
),
(
	'Cat',
	'locally cartesian closed',
	FALSE,
	'See Theorem 4.4 of <a href="https://www.numdam.org/item/MSMF_1964__2__R3_0/" target="_blank">Giraud 1964</a>.'
),
(
	'Cat',
	'regular',
	FALSE,
	'See Example 3.14 at the <a href="https://ncatlab.org/nlab/show/regular+category" target="_blank">nLab</a>.'
),
(
	'Cat',
	'co-Malcev',
	FALSE,
	'We can adapt the proof from <a href="/category/Mon">$\mathbf{Mon}$</a> as follows: Consider the functor $U : \mathbf{Cat} \to \mathbf{Set}^+$ sending a category $\mathcal{C}$ to the (large) set $\{(x,u) : x \in \mathrm{Ob}(\mathcal{C}) ,\, u \in \mathrm{End}(x) \}$. It is represented by $B \mathbb{N}$, the one-object category associated to the free monoid in one generator. Consider the relation $R \subseteq U^2$ consisting of those pairs $((x,u),(y,v))$ where $x = y$ and $uv = u^2$. This also representable, namely be the one-object category associated to the monoid with the presentation $\langle u,v : uv = u^2 \rangle$. Clearly, $R$ is reflexive, but not symmetric.'
);

