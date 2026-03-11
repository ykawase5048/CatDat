DROP TRIGGER IF EXISTS trg_update_category;
DROP TRIGGER IF EXISTS trg_update_property;
DROP TRIGGER IF EXISTS trg_update_category_property;
DROP TRIGGER IF EXISTS trg_update_implication;
DROP TRIGGER IF EXISTS trg_update_category_isomorphism;
DROP TRIGGER IF EXISTS trg_update_category_epimorphism;
DROP TRIGGER IF EXISTS trg_update_category_monomorphism;
DROP TRIGGER IF EXISTS trg_implication_input_insert;


CREATE TRIGGER trg_update_category
AFTER UPDATE ON categories
FOR EACH ROW
WHEN OLD.updated_at IS NEW.updated_at
BEGIN
    UPDATE categories
    SET updated_at = CURRENT_TIMESTAMP
    WHERE id = NEW.id;
END;


CREATE TRIGGER trg_update_property
AFTER UPDATE ON properties
FOR EACH ROW
WHEN OLD.updated_at IS NEW.updated_at
BEGIN
    UPDATE properties
    SET updated_at = CURRENT_TIMESTAMP
    WHERE id = NEW.id;
END;


CREATE TRIGGER trg_update_category_property
AFTER UPDATE ON category_properties
FOR EACH ROW
WHEN OLD.updated_at IS NEW.updated_at
BEGIN
    UPDATE category_properties
    SET updated_at = CURRENT_TIMESTAMP
    WHERE id = NEW.id;
END;


CREATE TRIGGER trg_update_implication
AFTER UPDATE ON implications
FOR EACH ROW
WHEN OLD.updated_at IS NEW.updated_at
BEGIN
    UPDATE implications
    SET updated_at = CURRENT_TIMESTAMP
    WHERE id = NEW.id;
END;


CREATE TRIGGER trg_update_category_isomorphism
AFTER UPDATE ON category_isomorphisms
FOR EACH ROW
WHEN OLD.updated_at IS NEW.updated_at
BEGIN
    UPDATE category_isomorphisms
    SET updated_at = CURRENT_TIMESTAMP
    WHERE id = NEW.id;
END;


CREATE TRIGGER trg_update_category_epimorphism
AFTER UPDATE ON category_epimorphisms
FOR EACH ROW
WHEN OLD.updated_at IS NEW.updated_at
BEGIN
    UPDATE category_epimorphisms
    SET updated_at = CURRENT_TIMESTAMP
    WHERE id = NEW.id;
END;


CREATE TRIGGER trg_update_category_monomorphism
AFTER UPDATE ON category_monomorphisms
FOR EACH ROW
WHEN OLD.updated_at IS NEW.updated_at
BEGIN
    UPDATE category_monomorphisms
    SET updated_at = CURRENT_TIMESTAMP
    WHERE id = NEW.id;
END;


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