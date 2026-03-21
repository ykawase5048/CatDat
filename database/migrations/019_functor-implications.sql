CREATE TABLE functor_implications (
    id TEXT PRIMARY KEY,
    reason TEXT NOT NULL CHECK (length(reason) > 0),
    dualized_from TEXT,
    is_equivalence INTEGER NOT NULL DEFAULT FALSE,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (dualized_from) REFERENCES functor_implications (id) ON DELETE SET NULL
);

CREATE TABLE functor_implication_assumptions (
    implication_id TEXT NOT NULL,
    property_id TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (implication_id, property_id),
    FOREIGN KEY (implication_id) REFERENCES functor_implications (id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES functor_properties (id) ON DELETE CASCADE
);

CREATE TABLE functor_implication_conclusions (
    implication_id TEXT NOT NULL,
    property_id TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (implication_id, property_id),
    FOREIGN KEY (implication_id) REFERENCES functor_implications (id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES functor_properties (id) ON DELETE CASCADE
);

-- property of source category
CREATE TABLE functor_implication_source_assumptions (
    implication_id TEXT NOT NULL,
    property_id TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (implication_id, property_id),
    FOREIGN KEY (implication_id) REFERENCES functor_implications (id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties (id) ON DELETE CASCADE 
);

-- property of target category
CREATE TABLE functor_implication_target_assumptions (
    implication_id TEXT NOT NULL,
    property_id TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (implication_id, property_id),
    FOREIGN KEY (implication_id) REFERENCES functor_implications (id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties (id) ON DELETE CASCADE 
);

CREATE INDEX idx_assumptions_functor_property ON functor_implication_assumptions (property_id);

CREATE INDEX idx_conclusions_functor_property ON functor_implication_conclusions (property_id);

CREATE INDEX idx_assumptions_functor_source_property ON functor_implication_source_assumptions (property_id);

CREATE INDEX idx_conclusions_functor_target_property ON functor_implication_target_assumptions (property_id);