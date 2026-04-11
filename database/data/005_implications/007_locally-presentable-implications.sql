INSERT INTO implication_input (
	id,
	assumptions,
	conclusions,
	reason,
	is_equivalence
)
VALUES
(
	'locally_finitely_presentable_raise',
	'["locally finitely presentable"]',
	'["locally ℵ₁-presentable"]',
	'This is trivial.',
	FALSE
),
(
	'locally_countably_presentable_raise',
	'["locally ℵ₁-presentable"]',
	'["locally presentable"]',
	'This is trivial.',
	FALSE
),
(
	'accessible_trivial_consequence',
	'["accessible"]',
	'["well-powered", "generating set"]',
	'For well-poweredness, see <a href="https://ncatlab.org/nlab/show/accessible+category#wellpoweredness_and_wellcopoweredness" target="_blank">nLab</a>. For a $\kappa$-accessible category, a skeleton of the full subcategory spanned by $\kappa$-presentable objects is small and dense, hence is a generating set.',
	FALSE
),
(
	'accessible_locally_small',
	'["accessible"]',
	'["locally essentially small"]',
	'See the proof of Prop. 2.1.5 in <a href="https://bookstore.ams.org/conm-104" target="_blank">Makkai-Pare</a>.',
	FALSE
),
(
	'accessible_wellcopowered',
	'["accessible", "pushouts"]',
	'["well-copowered"]',
	'See Thm. 2.49 in <a href="https://ncatlab.org/nlab/show/Locally+Presentable+and+Accessible+Categories" target="_blank">Adamek-Rosicky</a> or Prop. 6.1.3 in <a href="https://bookstore.ams.org/conm-104" target="_blank">Makkai-Pare</a>.',
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
	'["locally presentable", "locally copresentable"]',
	'["thin"]',
	'This follows from <a href="https://ncatlab.org/nlab/show/Locally+Presentable+and+Accessible+Categories" target="_blank">Adamek-Rosicky</a>, Thm. 1.64.',
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
	'locally_strongly_finitely_presentable_raise',
	'["locally strongly finitely presentable"]',
	'["locally finitely presentable"]',
	'See <a href="https://ncatlab.org/nlab/show/Locally+Presentable+and+Accessible+Categories" target="_blank">Adamek-Rosicky</a>, Cor. 3.7.',
	FALSE
),
(
	'locally_presentable_definition_finite',
	'["locally finitely presentable"]',
	'["finitely accessible", "cocomplete"]',
	'This is trivial.',
	TRUE
),
(
	'locally_presentable_definition_countable',
	'["locally ℵ₁-presentable"]',
	'["ℵ₁-accessible", "cocomplete"]',
	'This is trivial.',
	TRUE
),
(
	'locally_presentable_definition',
	'["locally presentable"]',
	'["accessible", "cocomplete"]',
	'This is trivial.',
	TRUE
),
(
	'finitely_accessible_raise',
	'["finitely accessible"]',
	'["ℵ₁-accessible"]',
	'This is because any regular cardinal is strictly smaller than its successor cardinal. See <a href="https://ncatlab.org/nlab/show/sharply+smaller+cardinal" target="_blank">nLab</a>.',
	FALSE
),
(
	'countably_accessible_special_case',
	'["ℵ₁-accessible"]',
	'["accessible"]',
	'This is trivial.',
	FALSE
),
(
	'accessible_require_filtered_colimit',
	'["finitely accessible"]',
	'["filtered colimits"]',
	'This is trivial.',
	FALSE
),
(
	'accessible_require_Cauchy_complete',
	'["accessible"]',
	'["Cauchy complete"]',
	'This is because the walking idempotent is $\kappa$-filtered for any regular cardinal $\kappa$.',
	FALSE
),
(
	'small_accessible_characterization',
	'["essentially small", "accessible"]',
	'["essentially small", "Cauchy complete"]',
	'See <a href="https://bookstore.ams.org/conm-104" target="_blank">Makkai-Pare</a>, Thm. 2.2.2.',
	TRUE
),
(
	'countably_accessible_thin',
	'["essentially countable", "thin"]',
	'["ℵ₁-accessible"]',
	'In general, every $\kappa$-filtered diagram in a poset whose elements are less than $\kappa$ admits the greatest element. Therefore, all the elements are $\kappa$-presentable, and the poset is $\kappa$-accessible.',
	FALSE
),
(
	'locally_presentable_another_definition',
	'["locally presentable"]',
	'["accessible", "complete"]',
	'See <a href="https://bookstore.ams.org/conm-104" target="_blank">Makkai-Pare</a>, Thm. 6.1.4.',
	TRUE
),
(
	'locally_strongly_finitely_presentable_definition',
	'["locally strongly finitely presentable"]',
	'["generalized variety", "cocomplete"]',
	'This is trivial.',
	TRUE
),
(
	'generalized_variety_require_sifted_colimit',
	'["generalized variety"]',
	'["sifted colimits"]',
	'This is trivial.',
	FALSE
),
(
	'generalized_variety_implies_accessible',
	'["generalized variety"]',
	'["ℵ₁-accessible"]',
	'See <a href="http://www.tac.mta.ca/tac/volumes/8/n3/8-03abs.html" target="_blank">[AR01, Remark 4.8(2)]</a>.',
	FALSE
),
(
	'locally_multipresentable_definition',
	'["locally multipresentable"]',
	'["accessible", "connected limits"]',
	'This is trivial.',
	TRUE
),
(
	'locally_multipresentable_another_definition',
	'["locally multipresentable"]',
	'["accessible", "multicolimits"]',
	'See <a href="https://ncatlab.org/nlab/show/Locally+Presentable+and+Accessible+Categories" target="_blank">Adamek-Rosicky</a>, 4.30.',
	TRUE
),
(
	'locally_finitely_multipresentable_definition',
	'["locally finitely multipresentable"]',
	'["finitely accessible", "connected limits"]',
	'This is trivial.',
	TRUE
),
(
	'locally_finitely_multipresentable_another_definition',
	'["locally finitely multipresentable"]',
	'["finitely accessible", "multicolimits"]',
	'See <a href="https://ncatlab.org/nlab/show/Locally+Presentable+and+Accessible+Categories" target="_blank">Adamek-Rosicky</a>, 4.30.',
	TRUE
),
(
	'locally_polypresentable_definition',
	'["locally polypresentable"]',
	'["accessible", "wide pullbacks"]',
	'This is trivial.',
	TRUE
),
(
	'multialgebraic_implies_locally_finitely_multipresentable',
	'["multialgebraic"]',
	'["locally finitely multipresentable"]',
	'This follows from the fact that a category is locally finitely multipresentable if and only if it is equivalent to the category of models of an FLC-sketch, where FLC represents finite limits and small coproducts.',
	FALSE
),
(
	'varieties_are_multialgebraic',
	'["locally strongly finitely presentable"]',
	'["multialgebraic"]',
	'This is because that every FP-sketch is an FPC-sketch.',
	FALSE
),
(
	'multialgebraic_implies_generalized_variety',
	'["multialgebraic"]',
	'["generalized variety"]',
	'See <a href="http://www.tac.mta.ca/tac/volumes/8/n3/8-03abs.html" target="_blank">[AR01, Thm. 4.4]</a>.',
	FALSE
);