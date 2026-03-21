CREATE TEMP TABLE functor_properties (
    functor_id TEXT NOT NULL,
    property_id TEXT NOT NULL,
    reason TEXT NOT NULL
);

INSERT INTO functor_properties (
    functor_id,
    property_id,
    reason
)
VALUES
    (
        'id_Set',
        'equivalence',
        'This is trivial.'
    ),
    (
       'abelianize',
       'left adjoint',
       'This functor is left adjoint to the forgetful functor.' 
    ),
    (
       'abelianize',
       'preserves finite products',
       'TBA.' -- FIXME
    ),
    (
        'forget_vector',
        'right adjoint',
        'This functor is right adjoint to the free vector space functor.'
    ),
    (
        'free_group',
        'left adjoint',
        'This functor is left adjoint to the forgetful functor.'
    );


INSERT INTO functor_property_assignments
	(functor_id, property_id, reason, is_satisfied)
SELECT
	functor_id, property_id, reason, TRUE
FROM functor_properties;

DROP TABLE functor_properties;
