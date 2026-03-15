CREATE TABLE related_properties (
    property_id TEXT NOT NULL,
    related_property_id TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (property_id, related_property_id),
    FOREIGN KEY (property_id) REFERENCES properties (id) ON DELETE CASCADE,
    FOREIGN KEY (related_property_id) REFERENCES properties (id) ON DELETE CASCADE
);