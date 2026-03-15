CREATE TABLE category_comments (
    id INTEGER PRIMARY KEY,
    category_id TEXT NOT NULL,
    comment TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE
);

CREATE INDEX idx_category_comments ON category_comments (category_id);