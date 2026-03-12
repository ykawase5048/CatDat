# The database of _CatDat_

_CatDat_ is based on a SQLite database defined in the folder [database](/database/). It has three main tables:

- `categories`
- `properties`
- `implications`

To associate (non-)properties with categories, there are two tables:

- `category_properties`
- `category_non_properties`

To mark properties as assumptions or conclusions of an implication, there are two tables:

- `implication_assumptions`
- `implication_conclusions`

Further tables are:

- `tags`
- `category_tags`
- `related_categories`
- `prefixes`
- `category_isomorphisms`
- `category_epimorphisms`
- `category_monomorphisms`
- `related_properties`

See [tables.sql](/database/schema/01_tables.sql) in the folder [database/schema](/database/schema) for detailed table definitions. The other files in this folder provide indices, triggers, and views for these tables.

The SQL files in the folder [database/source_data](/database/source_data/) provide the data source for these tables. The command `pnpm db:seed` applies the table definitions and the SQL files to the database.

Changes to the database are reflected by updating the mentioned SQL files in the repository.

Crucially, from the defined properties for a given category and implications, new properties can be derived automatically (same with non-properties). Also, suitable implications may be dualized. These deductions are computed and applied to the database via the commands `pnpm db:deduce-implications` and `pnpm db:deduce-properties`. Notice that the SQL files do _not_ contain derived data.

The command `pnpm db:create` executes all the previous commands in sequence, thus creating the database from scratch.

During runtime of the application, the database is read-only.
