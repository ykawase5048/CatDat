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
        'continuous_consequences', -- TODO: dualize automatically
        '["continuous"]',
        '[]',
        '[]',
        '["preserves products", "preserves equalizers", "cofinitary"]',
        'This is trivial.',
        FALSE
    ),
    (
        'dual_continuous_consequences', -- TODO: remove this later
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
        'equivalence_consequences', -- TODO: dualize automatically
        '["equivalence"]',
        '[]',
        '[]',
        '["continuous", "right adjoint"]',
        'Easy.',
        FALSE
    ),
    (
        'right_adjoint_consequences', -- TODO: dualize automatically
        '["right adjoint"]',
        '[]',
        '[]',
        '["continuous"]',
        'TBA.', -- FIXME
        FALSE
    ),
    (
        'saft', -- TODO: dualize automatically,
        '["continuous"]',
        '["complete", "locally small", "well-powered", "cogenerator"]',
        '["locally small"]',
        '["right adjoint"]',
        'This is the Special Adjoint Functor Theorem. The proof can be found, for example, at the <a href="https://ncatlab.org/nlab/show/adjoint+functor+theorem" target="_blank">nLab</a>.',
        FALSE
    ),
    (
        'monadic_consequences', -- TODO: dualize automatically
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