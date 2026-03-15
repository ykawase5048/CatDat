INSERT INTO implication_input (
	id,
	assumptions,
	conclusions,
	reason,
	is_equivalence
)
VALUES
	(
		'locally_presentable_consequence',
		'["locally presentable"]',
		'["locally essentially small", "well-powered", "well-copowered", "complete", "cocomplete", "generator"]',
		'For the non-trivial conclusions see <a href="https://ncatlab.org/nlab/show/Locally+Presentable+and+Accessible+Categories" target="_blank">Adamek-Rosicky</a>, Thm. 1.20, Cor. 1.28, Rem. 1.56, Thm. 1.58.',
		FALSE
	),
	(
		'locally_finitely_presentable_consequence',
		'["locally finitely presentable"]',
		'["exact filtered colimits"]',
		'Special case of <a href="https://ncatlab.org/nlab/show/Locally+Presentable+and+Accessible+Categories" target="_blank">Adamek-Rosicky</a>, Prop. 1.59 with $\lambda = \aleph_0$.',
		FALSE
	),
	(
		'locally_presentable_thin',
		'["locally presentable", "self-dual"]',
		'["thin"]',
		'This follows from <a href="https://ncatlab.org/nlab/show/Locally+Presentable+and+Accessible+Categories" target="_blank">Adamek-Rosicky</a>, Thm. 1.64.',
		FALSE
	),
	(
		'topos_consequence',
		'["elementary topos"]',
		'["finitely cocomplete", "disjoint finite coproducts", "epi-regular"]',
		'<a href="https://ncatlab.org/nlab/show/Sheaves+in+Geometry+and+Logic" target="_blank">Mac Lane & Moerdijk</a>, Cor. IV.5.4, Cor. IV.10.5, Thm. 4.7.8.',
		FALSE
	),
	(
		'topos_wellcopowered_criterion',
		'["elementary topos", "locally essentially small"]',
		'["well-copowered"]',
		'This follows from <a href="https://ncatlab.org/nlab/show/Sheaves+in+Geometry+and+Logic" target="_blank">Mac Lane & Moerdijk</a>, Theorem IV.7.8 (and Prop. I.3.1).',
		FALSE
	),
	(
		'grothendieck_topos_definition',
		'["Grothendieck topos"]',
		'["elementary topos", "coproducts", "generator", "locally essentially small"]',
		'<a href="https://ncatlab.org/nlab/show/Sheaves+in+Geometry+and+Logic" target="_blank">Mac Lane & Moerdijk</a>, Appendix, Prop. 4.4',
		TRUE
	),
	(
		'grothendieck_topos_consequence',
		'["Grothendieck topos"]',
		'["locally presentable", "cogenerator"]',
		'For "locally presentable" see Prop. 3.4.16 in <a href="https://www.cambridge.org/core/books/handbook-of-categorical-algebra/5033A02442342401E7BCC26A042DAB94" target="_blank">Handbook of Categorical Algebra Vol. 3</a>. For "cogenerator" see the <a href="https://ncatlab.org/nlab/show/cogenerator" target="_blank">nLab</a>.',
		FALSE
	),
	(
		'grothendieck_abelian_presentable',
		'["Grothendieck abelian"]',
		'["locally presentable"]',
		'See <a href="https://arxiv.org/abs/1409.7051" target="_blank">Deriving Auslander''s formula</a>, Cor. 5.2, or <a href="https://arxiv.org/abs/math/0102087" target="_blank">Sheafifiable homotopy model categories</a>, Prop. 3.10.',
		FALSE
	),
	(
		'grothendieck_abelian_cogenerator',
		'["Grothendieck abelian"]',
		'["cogenerator"]',
		'<a href="https://ncatlab.org/nlab/show/Categories+and+Sheaves" target="_blank">Kashiwara-Schapira</a>, Thm. 9.6.3',
		FALSE
	),
	(
		'grothendieck_abelian_selfdual',
		'["Grothendieck abelian", "self-dual"]',
		'["trivial"]',
		'This follows since the dual of a non-trivial Grothendieck abelian category cannot be Grothendieck abelian. See Peter Freyd, <i>Abelian categories</i>, p. 116.',
		FALSE
	);