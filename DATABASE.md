# The database of _CatDat_

## Overview

_CatDat_ is based on a [SQLite database](https://sqlite.org/). During runtime of the application, it is read-only.

The local copy of the database is located at `/database/local.db`. It has three main tables:

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

## Migrations vs. Data

Migrations update the database structure: tables, views, indexes, and triggers. They are defined in SQL files located in the subfolder [/database/migrations](/database/migrations/). The command `pnpm db:migrate` applies any new migrations.

Database entries (categories, properties, implications, etc.) are defined via SQL files in the subfolder [/database/data](/database/data). The command `pnpm db:seed` replaces the current database by clearing all existing data and inserting the entries defined in these SQL files.

## Derived Data

From the defined properties of a given category, new properties can be automatically deduced using the implications. (For example, when a category has equalizers and products, we can infer that it is complete.) The same applies to non-properties. Additionally, suitable implications may be dualized. Note that the SQL files mentioned above do _not_ contain any derived data.

The command `pnpm db:deduce` deduces implications, properties, and non-properties.

## One command for everything

Use `pnpm db:update` to run all the commands in sequence: `pnpm db:migrate`, `pnpm db:seed`, and `pnpm db:deduce`.

## Diagram

![database diagram](/static/database-diagram.png)
