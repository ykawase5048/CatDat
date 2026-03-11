DROP VIEW IF EXISTS implications_view;

CREATE VIEW implications_view AS
SELECT
    i.id,
    i.is_equivalence,
    i.reason,
    (SELECT json_group_array(property_id)
     FROM (SELECT property_id
           FROM implication_assumptions a
           WHERE a.implication_id = i.id
           ORDER BY lower(property_id))
    ) AS assumptions,
    (SELECT json_group_array(property_id)
     FROM (SELECT property_id
           FROM implication_conclusions c
           WHERE c.implication_id = i.id
           ORDER BY lower(property_id))
    ) AS conclusions
FROM implications i;

DROP VIEW IF EXISTS implication_input;

CREATE VIEW implication_input AS
SELECT
    NULL AS id,
    NULL AS is_equivalence,
    NULL AS assumptions,
    NULL AS conclusions,
    NULL AS reason;

