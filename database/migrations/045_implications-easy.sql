INSERT INTO implication_input (
	id,
	assumptions,
	conclusions,
	reason,
	is_equivalence
)
VALUES
	(
		'small_consequence',
		'["small"]',
		'["locally small", "essentially small"]',
		'trivial',
		FALSE
	),
	(
		'essentially_small_consequence',
		'["essentially small"]',
		'["well-powered", "well-copowered", "locally essentially small"]',
		'trivial',
		FALSE
	),
	(
		'finite_consequence',
		'["finite"]',
		'["small", "essentially finite"]',
		'trivial',
		FALSE
	),
	(
		'essentially_finite_consequence',
		'["essentially finite"]',
		'["essentially small"]',
		'trivial',
		FALSE
	),
	(
		'locally_small_consequence',
		'["locally small"]',
		'["locally essentially small"]',
		'trivial',
		FALSE
	),
	(
		'discrete_consequence',
		'["discrete"]',
		'["essentially discrete", "locally small", "skeletal"]',
		'trivial',
		FALSE
	),
	(
		'essentially_discrete_characterization',
		'["essentially discrete"]',
		'["thin", "groupoid"]',
		'trivial',
		TRUE
	),
	(
		'essentially_discrete_consequence',
		'["essentially discrete"]',
		'["locally essentially small", "connected limits"]',
		'trivial',
		FALSE
	),
	(
		'essentially_discrete_trivial',
		'["essentially discrete", "connected"]',
		'["trivial"]',
		'trivial',
		FALSE
	),
	(
		'trivial_consequence',
		'["trivial"]',
		'["finitary algebraic", "Grothendieck topos", "split abelian", "self-dual", "essentially discrete", "essentially finite"]',
		'trivial',
		FALSE
	),

	(
		'thin_consequence',
		'["thin"]',
		'["equalizers", "left cancellative"]',
		'Any two parallel morphisms are equal, so their equalizer is the identity, and every morphism is a monomorphism as well.',
		FALSE
	),
	(
		'thin_inhabited_consequence',
		'["thin", "inhabited"]',
		'["generator"]',
		'Any object will be a generator for trivial reasons.',
		FALSE
	),
	(
		'cancellative_consequence',
		'["left cancellative", "coequalizers"]',
		'["thin"]',
		'If $f,g$ are two parallel morphisms, then their coequalizer is a regular epimorphism, but also a monomorphism by assumption, so it must be an isomorphism. But this means that $f = g$.',
		FALSE
	),
	(
		'complete_consequence',
		'["complete"]',
		'["finitely complete", "filtered limits", "wide pullbacks", "connected limits"]',
		'trivial',
		FALSE
	),

	(
		'products_consequence',
		'["products"]',
		'["finite products", "countable products"]',
		'trivial',
		FALSE
	),
	(
		'finite_products_characterization',
		'["finite products"]',
		'["terminal object", "binary products"]',
		'The non-trivial direction follows since finite products can be constructed recursively via $X_1 \times \cdots \times X_{n+1} = (X_1 \times \cdots \times X_n) \times X_{n+1}$.',
		TRUE
	),
	(
		'products_criterion',
		'["finite products", "filtered limits"]',
		'["products"]',
		'The product $\prod_{i \in I} X_i$ is the filtered limit of the finite partial products $\prod_{i \in E} X_i$ where $E$ ranges over the finite subsets of $I$.',
		FALSE
	),

	(
		'binary_products_criterion',
		'["pullbacks", "terminal object"]',
		'["binary products"]',
		'If $1$ is a terminal object, then $X \times_1 Y = X \times Y$.',
		FALSE
	),
	(
		'terminal_consequence',
		'["terminal object"]',
		'["connected"]',
		'If $1$ denotes the terminal object, then for any two objects $A,B$ we have the zig-zag $A \to 1 \leftarrow B$.',
		FALSE
	),
	(
		'pointed_characterization',
		'["pointed"]',
		'["zero morphisms", "initial object"]',
		'easy',
		TRUE
	),

	(
		'pointed_ccc_trivial',
		'["pointed", "cartesian closed"]',
		'["trivial"]',
		'We have $X \cong X \times 1 \cong X \times 0 \cong 0$ for every object $X$.',
		FALSE
	),
	(
		'disjoint_coproducts_equivalence',
		'["disjoint coproducts"]',
		'["coproducts", "disjoint finite coproducts"]',
		'easy',
		TRUE
	),
	(
		'disjoint_coproducts_consequence',
		'["disjoint finite coproducts"]',
		'["finite coproducts"]',
		'by definition',
		FALSE
	),
	(
		'disjoint_coproducts_thin_trivial',
		'["disjoint finite coproducts", "thin"]',
		'["trivial"]',
		'For every object $A$ the two inclusions $A \rightrightarrows A + A$ must be equal, so their equalizer is $A$, but also $0$ since the coproduct is disjoint. Hence $A = 0$.',
		FALSE
	),
	(
		'binary_products_consequence',
		'["binary products", "inhabited"]',
		'["connected"]',
		'For any two objects $A,B$ we have the zig-zag $A \to A \times B \to B$.',
		FALSE
	),
	(
		'strict_initial_consequence',
		'["strict initial object"]',
		'["initial object"]',
		'by definition',
		FALSE
	),
	(
		'strict_initial_trivial',
		'["strict initial object", "pointed"]',
		'["trivial"]',
		'If $0$ is the zero object, then for every object $A$ the unique morphism $A \to 0$ is an isomorphism by assumption.',
		FALSE
	),
	(
		'strict_initial_left_criterion',
		'["left cancellative", "initial object"]',
		'["strict initial object"]',
		'It suffices to prove that in general any monomorphism $f : A \to 0$ into an initial object is an isomorphism. If $g : 0 \to A$ is the unique morphism, then $f \circ g = \mathrm{id}_0$ since $0$ is initial. But then $f$ is a split epimorphism and a monomorphism, hence an isomorphism.',
		FALSE
	),

	(
		'strict_initial_right_criterion',
		'["right cancellative", "initial object"]',
		'["strict initial object"]',
		'Let $f : A \to 0$ be a morphism. Let $g : 0 \to A$ be the unique morphism. It is an epimorphism by assumption. Also, $f \circ g = \mathrm{id}_0$ since $0$ is initial. But then $g$ is a split monomorphism and an epimorphism, hence an isomorphism.',
		FALSE
	),
	(
		'equalizers_consequence',
		'["equalizers"]',
		'["Cauchy complete"]',
		'If $e : X \to X$ is an idempotent, then the equalizer of $e, \mathrm{id}_X : X \rightrightarrows X$ provides a splitting of $e$.',
		FALSE
	),
	(
		'cauchy_complete_criterion',
		'["left cancellative"]',
		'["Cauchy complete"]',
		'Any idempotent monomorphism must be the identity and therefore splits.',
		FALSE
	),
	(
		'countable_products_consequence',
		'["countable products"]',
		'["finite products"]',
		'trivial',
		FALSE
	),
	(
		'filtered_limits_consequence',
		'["filtered limits"]',
		'["sequential limits"]',
		'trivial',
		FALSE
	),
	(
		'exact_filtered_colimits_condition',
		'["exact filtered colimits"]',
		'["filtered colimits", "finitely complete"]',
		'by definition',
		FALSE
	),
	(
		'infinitary_distributive_consequence',
		'["infinitary distributive"]',
		'["finite products", "coproducts"]',
		'by definition',
		FALSE
	),
	(
		'infinitary_distributive_condition',
		'["infinitary distributive"]',
		'["distributive"]',
		'trivial',
		FALSE
	),
	(
		'distributive_condition',
		'["distributive"]',
		'["finite products", "finite coproducts"]',
		'by definition',
		FALSE
	),
	(
		'connected_criterion',
		'["zero morphisms", "inhabited"]',
		'["connected"]',
		'trivial',
		FALSE
	),
	(
		'locally_finitely_presentable_condition',
		'["locally finitely presentable"]',
		'["locally presentable"]',
		'Locally finitely presentable categories are by definition the locally $\aleph_0$-presentable categories.',
		FALSE
	),
	(
		'locally_finitely_presentable_raise',
		'["locally finitely presentable"]',
		'["locally ℵ₁-presentable"]',
		'trivial',
		FALSE
	),
	(
		'locally_countabley_presentable_raise',
		'["locally ℵ₁-presentable"]',
		'["locally presentable"]',
		'trivial',
		FALSE
	),
	(
		'topos_definition',
		'["elementary topos"]',
		'["cartesian closed", "finitely complete", "subobject classifier"]',
		'by definition',
		TRUE
	),
	(
		'ccc_condition',
		'["cartesian closed"]',
		'["finite products"]',
		'by definition',
		FALSE
	),
	(
		'subobject_classifier_consequence',
		'["subobject classifier"]',
		'["finitely complete", "mono-regular"]',
		'The first part holds by convention, and the second part: any monomorphism $U \to X$ is the equalizer of $\chi_U,\chi_X : X \to \Omega$.',
		FALSE
	),
	(
		'preadditive_consequence',
		'["preadditive"]',
		'["locally essentially small", "zero morphisms"]',
		'trivial',
		FALSE
	),
	(
		'additive_definition',
		'["additive"]',
		'["preadditive", "finite products"]',
		'by definition',
		TRUE
	),
	(
		'additive_consequence',
		'["additive"]',
		'["disjoint finite coproducts"]',
		'If $f : T \to A + B$ is a morphism that factors through $A$ and $B$, then $p_B f = 0$ and $p_A f = 0$, so $f = 0$.',
		FALSE
	),
	(
		'abelian_definition',
		'["abelian"]',
		'["additive", "equalizers", "coequalizers", "mono-regular", "epi-regular"]',
		'by definition',
		TRUE
	),
	(
		'grothendieck_abelian_definition',
		'["Grothendieck abelian"]',
		'["abelian", "coproducts", "generator", "exact filtered colimits"]',
		'by definition',
		TRUE
	),
	(
		'split_abelian_condition',
		'["split abelian"]',
		'["abelian"]',
		'by definition',
		FALSE
	),
	(
		'groupoid_criterion',
		'["left cancellative", "right cancellative", "balanced"]',
		'["groupoid"]',
		'trivial',
		FALSE
	),
	(
		'groupoid_thin',
		'["groupoid", "equalizers"]',
		'["thin"]',
		'The equalizer of any parallel pair $f,g$ must be an isomorphism, so $f=g$.',
		FALSE
	),
	(
		'groupoid_products',
		'["groupoid", "binary products", "inhabited"]',
		'["trivial"]',
		'Let $\mathcal{C}$ be an inhabited groupoid with binary products. Then it is connected, so we may assume $\mathcal{C}=BG$ for a group $G$ with unique object $*$. But then $* \times * = *$, so there are $p,q \in G$ such that $G \to G \times G$, $x \mapsto (px,qx)$ is bijective. From here it is an easy exercise to deduce $G=1$.',
		FALSE
	),
	(
		'groupoid_initial',
		'["groupoid", "initial object"]',
		'["trivial"]',
		'easy',
		FALSE
	),
	(
		'groupoid_zero',
		'["groupoid", "zero morphisms", "inhabited"]',
		'["trivial"]',
		'easy',
		FALSE
	),
	(
		'connected_consequence',
		'["connected"]',
		'["inhabited"]',
		'by definition',
		FALSE
	),
	(
		'generator_consequence',
		'["generator"]',
		'["inhabited"]',
		'trivial',
		FALSE
	),
	(
		'groupoid_consequence',
		'["groupoid"]',
		'["self-dual", "mono-regular", "pullbacks", "filtered limits", "left cancellative", "well-powered"]',
		'easy',
		FALSE
	),
	(
		'mono_regular_consequence',
		'["mono-regular"]',
		'["balanced"]',
		'Any regular monomorphism that is an epimorphism must be an isomorphism.',
		FALSE
	),
	(
		'malcev_condition',
		'["Malcev"]',
		'["finitely complete"]',
		'by definition',
		FALSE
	),
	(
		'malcev_thin_condition',
		'["thin", "finitely complete"]',
		'["Malcev"]',
		'In a thin category, every subobject of $X^2 = X$ containing $X$ is already $X$.',
		FALSE
	);
