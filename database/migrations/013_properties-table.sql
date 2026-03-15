CREATE TABLE prefixes (
    prefix TEXT PRIMARY KEY,
    negation TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO prefixes (prefix, negation) VALUES
    ('is', 'is not'),
	('is a', 'is not a'),
	('is an', 'is not an'),
	('has', 'does not have'),
	('has a', 'does not have a'),
	('has an', 'does not have an');

CREATE TABLE properties (
    id TEXT PRIMARY KEY,
    prefix TEXT NOT NULL,
    description TEXT NOT NULL,
    nlab_link TEXT CHECK (nlab_link IS NULL OR nlab_link like 'https://%'),
    invariant_under_equivalences INTEGER NOT NULL DEFAULT TRUE,
    dual_property_id TEXT,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (prefix) REFERENCES prefixes (prefix) ON DELETE RESTRICT,
    FOREIGN KEY (dual_property_id) REFERENCES properties (id) ON DELETE RESTRICT
);