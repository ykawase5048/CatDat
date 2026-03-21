CREATE TEMP TABLE functor_non_properties (
    functor_id TEXT NOT NULL,
    property_id TEXT NOT NULL,
    reason TEXT NOT NULL
);

INSERT INTO functor_non_properties (
    functor_id,
    property_id,
    reason
)
VALUES
    (
       'abelianize',
       'preserves products',
       'TBA.' -- FIXME
    ),
    (
        'forget_vector',
        'preserves initial objects',
        'This is trivial.'
    ),
    (
        'free_group',
        'preserves terminal objects',
        'This is trivial'
    );


INSERT INTO functor_property_assignments
	(functor_id, property_id, reason, is_satisfied)
SELECT
	functor_id, property_id, reason, FALSE
FROM functor_non_properties;

DROP TABLE functor_non_properties;
