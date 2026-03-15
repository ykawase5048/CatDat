INSERT INTO implication_input (
	id,
	assumptions,
	conclusions,
	reason,
	is_equivalence
)
VALUES
	(
		'freyd_small',
		'["essentially small", "products"]',
		'["thin"]',
		'<a href="https://ncatlab.org/nlab/show/Categories+for+the+Working+Mathematician" target="_blank">Mac Lane</a>, V.2, Prop. 3. The proof works for any category with products.',
		FALSE
	),
	(
		'freyd_finite',
		'["essentially finite", "finite products"]',
		'["thin"]',
		'<a href="https://ncatlab.org/nlab/show/Categories+for+the+Working+Mathematician" target="_blank">Mac Lane</a>, V.2, Prop. 3. The proof can easily be adapted to this case.',
		FALSE
	),

	(
		'complete_characterization',
		'["complete"]',
		'["products", "equalizers"]',
		'<a href="https://ncatlab.org/nlab/show/Categories+for+the+Working+Mathematician" target="_blank">Mac Lane</a>, V.2, Cor. 2',
		TRUE
	),
	(
		'finitely_complete_characterization',
		'["finitely complete"]',
		'["finite products", "equalizers"]',
		'<a href="https://ncatlab.org/nlab/show/Categories+for+the+Working+Mathematician" target="_blank">Mac Lane</a>, V.2, Cor. 1',
		TRUE
	),

	(
		'pullbacks_criterion',
		'["binary products", "equalizers"]',
		'["pullbacks"]',
		'The pullback of $f : X \to S$ and $g : Y \to S$ is the equalizer of $p_1 \circ f, \, p_2 \circ g : X \times Y \rightrightarrows S$.',
		FALSE
	),
	(
		'equalizers_criterion',
		'["binary products", "pullbacks"]',
		'["equalizers"]',
		'The equalizer of $f,g : X \rightrightarrows Y$ is the pullback of $(f,g) : X \to Y \times Y$ with the diagonal $Y \to Y \times Y$.',
		FALSE
	),
	(
		'connected_limits_characterization',
		'["connected limits"]',
		'["wide pullbacks", "equalizers"]',
		'The direction $\Rightarrow$ is trivial. The direction $\Leftarrow$ can be found at the <a href="https://ncatlab.org/nlab/show/connected+limit" target="_blank">nLab</a>.',
		TRUE
	),
	(
		'complete_criterion',
		'["wide pullbacks", "terminal object"]',
		'["complete"]',
		'See the <a href="https://ncatlab.org/nlab/show/wide+pullback" target="_blank">nLab</a>.',
		FALSE
	),
	(
		'wide_pullbacks_criterion',
		'["wide pullbacks"]',
		'["pullbacks", "filtered limits"]',
		'To prove $\Leftarrow$, a wide pullback can be constructed as a filtered limit of finite pullbacks, and finite pullbacks can be reduced to binary products (the empty-indexed pullback always exists). Conversely, assume that wide pullbacks exist in $\mathcal{C}$. For every object $A$ then the slice category $\mathcal{C} / A$ has wide pullbacks and a terminal object, hence is complete. Since a filtered limit can be finally reduced to such a slice, we are done.',
		TRUE
	),
	(
		'sequential_limits_criterion',
		'["equalizers", "countable products"]',
		'["sequential limits"]',
		'<a href="https://ncatlab.org/nlab/show/Categories+for+the+Working+Mathematician" target="_blank">Mac Lane</a>, V.2, Prop. 3. The proof can easily be adapted to this case. Namely, the limit of $\cdots \to X_2 \to X_1 \to X_0$ is the equalizer of two suitable endomorphisms of $\prod_{n \geq 0} X_n$.',
		FALSE
	),
	(
		'countable_products_criterion',
		'["finite products", "sequential limits"]',
		'["countable products"]',
		'If $X_1,X_2,\dotsc$ is an infinite sequence of objects, then their product is the limit of the sequence $\cdots \to X_2 \times X_1 \to X_1$.',
		FALSE
	),
	(
		'distributive_consequence',
		'["distributive"]',
		'["strict initial object"]',
		'See the <a href="https://ncatlab.org/nlab/show/distributive+category" target="_blank">nLab</a>.',
		FALSE
	),
	(
		'distributive_criterion',
		'["cartesian closed", "finite coproducts"]',
		'["distributive"]',
		'Each functor $A \times -$ is left adjoint and hence preserves finite coproducts (in fact, all colimits).',
		FALSE
	),
	(
		'infinitary_distributive_criterion',
		'["cartesian closed", "coproducts"]',
		'["infinitary distributive"]',
		'Each functor $A \times -$ is left adjoint and hence preserves coproducts (in fact, all colimits).',
		FALSE
	),
	(
		'infinite_distributive_filtered_criterion',
		'["distributive", "exact filtered colimits", "coproducts"]',
		'["infinitary distributive"]',
		'Each functor $A \times -$ preserves finite coproducts and filtered colimits, hence all coproducts.',
		FALSE
	),
	(
		'cocomplete_thin_criterion',
		'["essentially small", "thin", "complete"]',
		'["cocomplete"]',
		'The supremum of a subset in a (small) partial order is the infimum of the set of upper bounds.',
		FALSE
	),
	(
		'cartesian_closed_thin_criterion',
		'["essentially small", "thin", "complete", "infinitary distributive"]',
		'["cartesian closed"]',
		'This is an application of the adjoint functor theorem. Specifically, if $P$ is a complete lattice in which $\sup_i \inf(t,x_i) = \inf(t, \sup_i y_i)$ always holds, then the functor $\int(t,-)$ is a left adjoint because it preserves all suprema.',
		FALSE
	),
	(
		'finitary_algebraic_consequence',
		'["finitary algebraic"]',
		'["locally finitely presentable"]',
		'<a href="https://ncatlab.org/nlab/show/Locally+Presentable+and+Accessible+Categories" target="_blank">Adamek-Rosicky</a>, Cor. 3.7',
		FALSE
	),
	(
		'subobject_classifier_wellpowered',
		'["subobject classifier", "locally essentially small"]',
		'["well-powered"]',
		'<a href="https://ncatlab.org/nlab/show/Sheaves+in+Geometry+and+Logic" target="_blank">Mac Lane & Moerdijk</a>, Prop. I.3.1',
		FALSE
	),
	(
		'ccc_consequence',
		'["cartesian closed", "initial object"]',
		'["strict initial object"]',
		'See the <a href="https://ncatlab.org/nlab/show/strict+initial+object" target="_blank">nLab</a>.',
		FALSE
	),
	(
		'preadditive_products_criterion',
		'["preadditive", "finite coproducts"]',
		'["finite products"]',
		'<a href="https://ncatlab.org/nlab/show/Categories+for+the+Working+Mathematician" target="_blank">Mac Lane</a>, VIII.2., Theorem 2',
		FALSE
	),
	(
		'additive_trivial_condition',
		'["additive", "pullbacks", "subobject classifier"]',
		'["trivial"]',
		'see <a href="https://math.stackexchange.com/questions/4086192" target="_blank">MSE/4086192</a>',
		FALSE
	),
	(
		'malcev_additive_criterion',
		'["finitely complete", "additive"]',
		'["Malcev"]',
		'See Prop. 2.2.13. in <a href="https://ncatlab.org/nlab/show/Malcev,+protomodular,+homological+and+semi-abelian+categories" target="_blank">Malcev, protomodular, homological and semi-abelian categories</a>.',
		FALSE
	);