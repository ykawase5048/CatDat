PRAGMA foreign_keys = OFF;

-- delete all tables
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS related_categories;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS category_tags;
DROP TABLE IF EXISTS prefixes;
DROP TABLE IF EXISTS properties;
DROP TABLE IF EXISTS related_properties;
DROP TABLE IF EXISTS category_properties;
DROP TABLE IF EXISTS category_non_properties;
DROP TABLE IF EXISTS category_isomorphisms;
DROP TABLE IF EXISTS category_epimorphisms;
DROP TABLE IF EXISTS category_monomorphisms;
DROP TABLE IF EXISTS implications;
DROP TABLE IF EXISTS implication_conclusions;
DROP TABLE IF EXISTS implication_assumptions;

PRAGMA foreign_keys = ON;

-- categories
CREATE TABLE categories (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    notation TEXT NOT NULL,
    objects TEXT NOT NULL,
    morphisms TEXT NOT NULL,
    description TEXT,
    nlab_link TEXT CHECK (nlab_link IS NULL OR nlab_link like 'https://%'),
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- categories related to other categories
CREATE TABLE related_categories (
    category_id TEXT NOT NULL,
    related_category_id TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (category_id, related_category_id),
    FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE,
    FOREIGN KEY (related_category_id) REFERENCES categories (id) ON DELETE CASCADE
);

-- tags
CREATE TABLE tags (
    tag TEXT PRIMARY KEY,
    description TEXT NOT NULL DEFAULT '',
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- tags associated to categories
CREATE TABLE category_tags (
    category_id TEXT NOT NULL,
    tag TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (category_id, tag),
    FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE,
    FOREIGN KEY (tag) REFERENCES tags (tag) ON DELETE CASCADE
);

-- prefixes of properties
CREATE TABLE prefixes (
    prefix TEXT PRIMARY KEY,
    negation TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- properties of categories
CREATE TABLE properties (
    id TEXT PRIMARY KEY,
    prefix TEXT NOT NULL,
    description TEXT NOT NULL,
    nlab_link TEXT CHECK (nlab_link IS NULL OR nlab_link like 'https://%'),
    invariant_under_equivalences INTEGER NOT NULL DEFAULT TRUE,
    dual_property_id TEXT,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (prefix) REFERENCES prefixes (prefix) ON DELETE RESTRICT,
    FOREIGN KEY (dual_property_id) REFERENCES properties (id) ON DELETE RESTRICT
);

-- properties related to other properties
CREATE TABLE related_properties (
    property_id TEXT NOT NULL,
    related_property_id TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (property_id, related_property_id),
    FOREIGN KEY (property_id) REFERENCES properties (id) ON DELETE CASCADE,
    FOREIGN KEY (related_property_id) REFERENCES properties (id) ON DELETE CASCADE
);

-- properties satisfied by categories
CREATE TABLE category_properties (
    category_id TEXT NOT NULL,
    property_id TEXT NOT NULL,
    reason TEXT CHECK (reason IS NULL OR length(reason) > 0),
    is_deduced INTEGER NOT NULL DEFAULT FALSE,
    position INTEGER NOT NULL DEFAULT FALSE,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (category_id, property_id),
    FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties (id) ON DELETE CASCADE
);

-- properties not satisfied by categories
CREATE TABLE category_non_properties (
    category_id TEXT NOT NULL,
    non_property_id TEXT NOT NULL,
    reason TEXT CHECK (reason IS NULL OR length(reason) > 0),
    is_deduced INTEGER NOT NULL DEFAULT FALSE,
    position INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (category_id, non_property_id),
    FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE,
    FOREIGN KEY (non_property_id) REFERENCES properties (id) ON DELETE CASCADE
);

-- isomorphism descriptions of categories
CREATE TABLE category_isomorphisms (
    category_id TEXT PRIMARY KEY,
    description TEXT NOT NULL,
    reason TEXT NOT NULL CHECK (length(reason) > 0),
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE
);

-- epimorphism descriptions of categories
CREATE TABLE category_epimorphisms (
    category_id TEXT PRIMARY KEY,
    description TEXT NOT NULL,
    reason TEXT NOT NULL CHECK (length(reason) > 0),
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE
);

-- monomorphism descriptions of categories
CREATE TABLE category_monomorphisms (
    category_id TEXT PRIMARY KEY,
    description TEXT NOT NULL,
    reason TEXT NOT NULL CHECK (length(reason) > 0),
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE
);

-- implications between properties of categories
CREATE TABLE implications (
    id TEXT PRIMARY KEY,
    reason TEXT NOT NULL CHECK (length(reason) > 0),
    is_equivalence INTEGER NOT NULL DEFAULT FALSE,
    is_deduced INTEGER NOT NULL DEFAULT FALSE,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- assumptions of a given implication
CREATE TABLE implication_assumptions (
    implication_id TEXT NOT NULL,
    property_id TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (implication_id, property_id),
    FOREIGN KEY (implication_id) REFERENCES implications (id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties (id) ON DELETE CASCADE
);

-- conclusions of a given implication
CREATE TABLE implication_conclusions (
    implication_id TEXT NOT NULL,
    property_id TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (implication_id, property_id),
    FOREIGN KEY (implication_id) REFERENCES implications (id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties (id) ON DELETE CASCADE
);

