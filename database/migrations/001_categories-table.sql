CREATE TABLE categories (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    notation TEXT NOT NULL,
    objects TEXT NOT NULL,
    morphisms TEXT NOT NULL,
    description TEXT,
    nlab_link TEXT CHECK (nlab_link IS NULL OR nlab_link like 'https://%'),
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);