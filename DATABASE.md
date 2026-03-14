# The database of _CatDat_

## Overview

_CatDat_ is based on a [SQLite database](https://sqlite.org/) defined in the folder [/database](/database/). It has three main tables:

- `categories`
- `properties`
- `implications`

To associate (non-)properties with categories, there are two tables:

- `category_properties`
- `category_non_properties`

To mark properties as assumptions or conclusions of an implication, there are two tables:

- `implication_assumptions`
- `implication_conclusions`

But they are abstracted away by using the view `implications_view`.

Further tables are:

- `tags`
- `category_tags`
- `related_categories`
- `prefixes`
- `category_isomorphisms`
- `category_epimorphisms`
- `category_monomorphisms`
- `related_properties`
- `category_comments`

See [tables.sql](/database/schema/01_tables.sql) in the folder [/database/schema](/database/schema) for detailed table definitions. The other files in this folder provide indices, triggers, and views for these tables.

## Source Data

The SQL files in the folder [/database/data](/database/data/) provide the data source for these tables. The command `pnpm db:seed` applies the table definitions and the SQL files to the database.

Changes to the database are made by updating the mentioned SQL files in the repository.

## Derived Data

From the defined properties for a given category, new properties can be derived automatically by using the implications (the same holds for non-properties). Also, suitable implications may be dualized.

These deductions are computed and applied to the database via the commands `pnpm db:deduce-implications` and `pnpm db:deduce-properties`. Notice that the SQL files do _not_ contain derived data.

## Commands

The command `pnpm db:create` executes all the previous commands in sequence, thus creating the database from scratch. The command `pnpm db:check` executes some sanity checks on the generated data.

For every one of the mentioned commands there is a version for the remote database hosted on [Turso](https://turso.tech). For example, `pnpm db:create:remote` creates the whole remote database.

During runtime of the application, the database is read-only.
