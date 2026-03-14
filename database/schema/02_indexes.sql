DROP INDEX IF EXISTS idx_property_category;
DROP INDEX IF EXISTS idx_non_property_category;
DROP INDEX IF EXISTS idx_assumptions_property;
DROP INDEX IF EXISTS idx_conclusions_property;
DROP INDEX IF EXISTS idx_category_comments;

CREATE INDEX idx_property_category ON category_properties (property_id);
CREATE INDEX idx_non_property_category ON category_non_properties (non_property_id);
CREATE INDEX idx_assumptions_property ON implication_assumptions (property_id);
CREATE INDEX idx_conclusions_property ON implication_conclusions (property_id);
CREATE INDEX idx_category_comments ON category_comments (category_id);