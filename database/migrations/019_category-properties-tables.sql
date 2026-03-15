CREATE TABLE category_properties (
    category_id TEXT NOT NULL,
    property_id TEXT NOT NULL,
    reason TEXT CHECK (reason IS NULL OR length(reason) > 0),
    is_deduced INTEGER NOT NULL DEFAULT FALSE,
    position INTEGER NOT NULL DEFAULT FALSE,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (category_id, property_id),
    FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties (id) ON DELETE CASCADE
);

CREATE TABLE category_non_properties (
    category_id TEXT NOT NULL,
    non_property_id TEXT NOT NULL,
    reason TEXT CHECK (reason IS NULL OR length(reason) > 0),
    is_deduced INTEGER NOT NULL DEFAULT FALSE,
    position INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (category_id, non_property_id),
    FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE,
    FOREIGN KEY (non_property_id) REFERENCES properties (id) ON DELETE CASCADE
);

CREATE INDEX idx_property_category ON category_properties (property_id);

CREATE INDEX idx_non_property_category ON category_non_properties (non_property_id);