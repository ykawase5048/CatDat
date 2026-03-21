INSERT INTO functor_implication_input (
    id,
    assumptions,
    source_assumptions,
    target_assumptions,
    conclusions,
    reason,
    is_equivalence
)
VALUES
    (
        'equivalence_criterion',
        '["full", "faithful", "essentially surjective"]',
        '[]',
        '[]',
        '["equivalence"]',
        'TBA.', -- FIXME
        TRUE
    ),
    (
        'continuous_consequences',
        '["continuous"]',
        '[]',
        '[]',
        '["preserves products", "preserves equalizers", "cofinitary"]',
        'This is trivial.',
        FALSE
    ),
    (
        'products_consequences',
        '["preserves products"]',
        '[]',
        '[]',
        '["preserves finite products"]',
        'This is trivial.',
        FALSE
    ),
    (
        'finite_products_consequences',
        '["preserves finite products"]',
        '[]',
        '[]',
        '["preserves terminal objects"]',
        'This is trivial.',
        FALSE
    ),
    (
         -- TODO: remove this later after automatic dualization
        'dual_continuous_consequences',
        '["cocontinuous"]',
        '[]',
        '[]',
        '["preserves coproducts", "preserves coequalizers", "finitary"]',
        'This is trivial.',
        FALSE
    ),
    (
        'continuous_criterion',
        '["preserves products", "preserves equalizers"]',
        '["products"]',
        '[]',
        '["continuous"]',
        'TBA.', -- FIXME
        FALSE
    ),
    (
        'continuous_criterion_filtered',
        '["left exact", "cofinitary"]',
        '["finitely complete"]',
        '[]',
        '["continuous"]',
        'This is because every limit can be written as a filtered limit of finite limits.',
        FALSE
    ),
    (
        'exact_definition',
        '["exact"]',
        '[]',
        '[]',
        '["left exact", "right exact"]',
        'This holds by definition.',
        TRUE
    ),
    (
        'left_exact_consequences',
        '["left exact"]',
        '[]',
        '[]',
        '["preserves finite products", "preserves terminal objects"]',
        'Both finite products and terminal objects are special cases of finite limits.',
        FALSE
    ),
    (
        'left_exact_criterion',
        '["preserves finite products", "preserves equalizers"]',
        '["finite products"]',
        '[]',
        '["left exact"]',
        'TBA.', -- FIXME
        FALSE
    ),
    (
        'equivalence_consequences',
        '["equivalence"]',
        '[]',
        '[]',
        '["continuous", "right adjoint"]',
        'Easy.',
        FALSE
    ),
    (
        'right_adjoint_consequences',
        '["right adjoint"]',
        '[]',
        '[]',
        '["continuous"]',
        'TBA.', -- FIXME
        FALSE
    ),
    (
        'saft',
        '["continuous"]',
        '["complete", "locally small", "well-powered", "cogenerator"]',
        '["locally small"]',
        '["right adjoint"]',
        'This is the Special Adjoint Functor Theorem. The proof can be found, for example, at the <a href="https://ncatlab.org/nlab/show/adjoint+functor+theorem" target="_blank">nLab</a>.',
        FALSE
    ),
    (
        'monadic_consequences',
        '["monadic"]',
        '[]',
        '[]',
        '["faithful", "right adjoint", "conservative"]',
        'This is clear since the forgetful functor from the category of $T$-algebras has these properties, where $T$ is any monad.',
        FALSE
    );

    -- TODO: remove this later:
    UPDATE functor_implications
    SET dualized_from = 'continuous_consequences'
    WHERE id = 'dual_continuous_consequences';