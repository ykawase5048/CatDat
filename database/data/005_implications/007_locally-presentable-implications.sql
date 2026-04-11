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
	'locally_presentable_consequence',
	'["locally presentable"]',
	'["locally essentially small", "well-powered", "well-copowered", "complete", "generating set"]',
	'For locally essential smallness, see the proof of Prop. 2.1.5 in <a href="https://bookstore.ams.org/conm-104" target="_blank">Makkai-Pare</a>. For the other non-trivial conclusions see <a href="https://ncatlab.org/nlab/show/Locally+Presentable+and+Accessible+Categories" target="_blank">Adamek-Rosicky</a>, Thm. 1.20, Cor. 1.28, Rem. 1.56, Thm. 1.58.',
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
	'["small", "accessible"]',
	'["small", "Cauchy complete"]',
	'See <a href="https://bookstore.ams.org/conm-104" target="_blank">Makkai-Pare</a>, Thm. 2.2.2.',
	TRUE
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
);