CREATE TABLE category_isomorphisms (
    category_id TEXT PRIMARY KEY,
    description TEXT NOT NULL,
    reason TEXT NOT NULL CHECK (length(reason) > 0),
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE
);

CREATE TABLE category_epimorphisms (
    category_id TEXT PRIMARY KEY,
    description TEXT NOT NULL,
    reason TEXT NOT NULL CHECK (length(reason) > 0),
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE
);

CREATE TABLE category_monomorphisms (
    category_id TEXT PRIMARY KEY,
    description TEXT NOT NULL,
    reason TEXT NOT NULL CHECK (length(reason) > 0),
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE
);