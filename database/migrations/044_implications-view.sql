CREATE VIEW implications_view AS
SELECT
    i.id,
    i.is_equivalence,
    i.reason,
    i.is_deduced,
    (
        SELECT json_group_array(property_id) FROM (
            SELECT property_id
            FROM implication_assumptions a
            WHERE a.implication_id = i.id
            ORDER BY lower(property_id)
        )
    ) AS assumptions,
    (
        SELECT json_group_array(property_id) FROM (
            SELECT property_id
            FROM implication_conclusions c
            WHERE c.implication_id = i.id
            ORDER BY lower(property_id)
        )
    ) AS conclusions
FROM implications i;


CREATE VIEW implication_input AS
SELECT
    NULL AS id,
    NULL AS is_equivalence,
    NULL AS assumptions,
    NULL AS conclusions,
    NULL AS reason,
    NULL AS is_deduced;


CREATE TRIGGER trg_implication_input_insert
INSTEAD OF INSERT ON implication_input
BEGIN
    INSERT INTO implications (id, is_equivalence, reason, is_deduced)
    VALUES (
        NEW.id,
        COALESCE(NEW.is_equivalence, FALSE),
        NEW.reason,
        COALESCE(NEW.is_deduced, FALSE)
    );

    INSERT INTO implication_assumptions (implication_id, property_id)
    SELECT NEW.id, value
    FROM json_each(NEW.assumptions);

    INSERT INTO implication_conclusions (implication_id, property_id)
    SELECT NEW.id, value
    FROM json_each(NEW.conclusions);
END;