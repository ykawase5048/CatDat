DELETE FROM category_monomorphisms;

INSERT INTO category_monomorphisms (category_id, description, reason)
VALUES
	(
		'0',
		'none',
		''
	),
	(
		'1',
		'every morphism',
		''
	),
	(
		'2',
		'every morphism',
		''
	),
	(
		'Set',
		'injective maps',
		''
	),
	(
		'Ab',
		'injective homomorphisms',
		''
	),
	(
		'Top',
		'injective continuous maps',
		''
	),
	(
		'Grp',
		'injective homomorphisms',
		''
	),
	(
		'Vect',
		'injective linear maps',
		''
	),
	(
		'Ring',
		'injective ring homomorphisms',
		''
	),
	(
		'CRing',
		'injective ring homomorphisms',
		''
	),
	(
		'Rng',
		'injective rng homomorphisms',
		''
	),
	(
		'FinSet',
		'injective maps',
		''
	),
	(
		'FinAb',
		'injective homomorphisms',
		''
	),
	(
		'Abfg',
		'injective homomorphisms',
		''
	),
	(
		'Set*',
		'injective pointed maps',
		''
	),
	(
		'sSet',
		'pointwise injective transformations',
		''
	),
	(
		'Mon',
		'injective homomorphisms',
		''
	),
	(
		'Pos',
		'injective order-preserving functions',
		''
	),
	(
		'walking_morphism',
		'every morphism',
		''
	),
	(
		'M-Set',
		'injective $M$-maps',
		''
	),
	(
		'R-Mod',
		'injective $R$-linear maps',
		''
	),
	(
		'Met',
		'injective non-expansive maps',
		''
	),
	(
		'Met_oo',
		'injective non-expansive maps',
		''
	),
	(
		'Met_c',
		'injective continuous maps',
		''
	),
	(
		'Ban',
		'injective linear contractions',
		''
	),
	(
		'Man',
		'injective smooth maps',
		''
	),
	(
		'Meas',
		'injective measurable maps',
		''
	),
	(
		'N',
		'every morphism',
		''
	),
	(
		'Cat',
		'faithful functors that are injective on objects',
		''
	),
	(
		'On',
		'every morphism',
		''
	),
	(
		'Sch',
		'cf. EGA IV, 17.2.6',
		''
	),
	(
		'Fld',
		'every morphism',
		''
	),
	(
		'FreeAb',
		'injective homomorphisms',
		''
	),
	(
		'Z',
		'objectwise injective natural transformations',
		''
	),
	(
		'BG',
		'every morphism',
		''
	),
	(
		'BGf',
		'every morphism',
		''
	),
	(
		'BN',
		'every morphism',
		''
	),
	(
		'walking_pair',
		'every morphism',
		''
	),
	(
		'walking_isomorphism',
		'every morphism',
		''
	),
	(
		'Setne',
		'injective maps',
		''
	),
	(
		'B',
		'every morphism',
		''
	),
	(
		'FI',
		'every morphism',
		''
	),
	(
		'FS',
		'bijective maps',
		''
	),
	(
		'BOn',
		'every ordinal number',
		''
	),
	(
		'FinOrd',
		'injective order-preserving maps',
		''
	),
	(
		'Rel',
		'A relation $R : A \to B$ is a monomorphism iff the map $R_* : P(A) \to P(B)$ defined by $T \mapsto \{b \in B : \exists \, a \in T: (a,b) \in R \}$ is injective.',
		''
	),
	(
		'Sp',
		'pointwise injective natural transformations',
		''
	),
	(
		'real_interval',
		'every morphism',
		''
	),
	(
		'Zdiv',
		'every morphism',
		'It is a thin category.'
	),
	(
		'Noo',
		'every morphism',
		'It is a thin category.'
	);