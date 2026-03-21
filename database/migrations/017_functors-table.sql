CREATE TABLE functors (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    source TEXT NOT NULL,
    target TEXT NOT NULL,
    description TEXT NOT NULL CHECK (length(description) > 0),
    url TEXT CHECK (url IS NULL OR url like 'https://%'),
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (source) REFERENCES categories (id) ON DELETE CASCADE,
    FOREIGN KEY (target) REFERENCES categories (id) ON DELETE CASCADE
);