CREATE TRIGGER trg_prevent_contradictory_property
BEFORE INSERT ON category_properties
FOR EACH ROW
WHEN EXISTS (
    SELECT 1 FROM category_non_properties
    WHERE
        category_id = NEW.category_id
        AND non_property_id = NEW.property_id
)
BEGIN
    SELECT RAISE(ABORT, 'Cannot insert property since it is already marked as a non-property.');
END;

CREATE TRIGGER trg_prevent_contradictory_non_property
BEFORE INSERT ON category_non_properties
FOR EACH ROW
WHEN EXISTS (
    SELECT 1 FROM category_properties
    WHERE
        category_id = NEW.category_id
        AND property_id = NEW.non_property_id
)
BEGIN
    SELECT RAISE(ABORT, 'Cannot insert non-property since it is already marked as a property.');
END;