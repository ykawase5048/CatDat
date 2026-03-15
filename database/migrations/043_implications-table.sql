CREATE TABLE implications (
    id TEXT PRIMARY KEY,
    reason TEXT NOT NULL CHECK (length(reason) > 0),
    is_equivalence INTEGER NOT NULL DEFAULT FALSE,
    is_deduced INTEGER NOT NULL DEFAULT FALSE,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE implication_assumptions (
    implication_id TEXT NOT NULL,
    property_id TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (implication_id, property_id),
    FOREIGN KEY (implication_id) REFERENCES implications (id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties (id) ON DELETE CASCADE
);

CREATE TABLE implication_conclusions (
    implication_id TEXT NOT NULL,
    property_id TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (implication_id, property_id),
    FOREIGN KEY (implication_id) REFERENCES implications (id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties (id) ON DELETE CASCADE
);

CREATE INDEX idx_assumptions_property ON implication_assumptions (property_id);

CREATE INDEX idx_conclusions_property ON implication_conclusions (property_id);