# How to Contribute

There are three ways to contribute:

- [Create a Pull Request](#option-1-create-a-pull-request)
- [Submit Our Google Form](#option-2-submit-our-google-form)

## Option 1: Create a Pull Request

Create a [**pull request**](https://github.com/ScriptRaccoon/CatDat/pulls). You will need a GitHub account for this.

### Local Setup

1. Clone the repository
2. Install the dependencies with `pnpm install`
3. Create the local `.env` file based on the `.env.example` file.
4. Start the local development server with `pnpm dev`.
5. Create the local database with `pnpm db:create`.

All your updates to the _data_ happen in the folder [database/source_data](database/source_data/), see also [database.md](/docs/database.md).

### Adding a New Category

- Add the basic info of the category to the file [categories.sql](database/source_data/002_categories.sql).
- Add a related categories to [related_categories.sql](database/source_data/003_related_categories.sql) (optional).
- Add tags to [category_tags.sql](database/source_data/004_category_tags.sql).
- To add properties of the category, edit the file [category_properties.sql](database/source_data/008_category_properties.sql).
- To add non-properties of the category, edit the file [category_non_properties.sql](database/source_data/009_category_non_properties.sql).
- Add the descriptions of special morphisms in [category_isomorphisms.sql](database/source_data/010_category_isomorphisms.sql), [category_epimorphisms.sql](database/source_data/011_category_epimorphisms.sql), and [category_monomorphisms.sql](database/source_data/012_category_monomorphisms.sql) (if known).

### Adding a New Property

- Add the basic info of the property to [properties.sql](database/source_data/006_properties.sql).
- Add related properties to [related_properties](database/source_data/007_related_properties.sql) (optional).
- Add categories with and without this property (see above).
- Add implications involving this property (see below).

### Adding a New Implication

- Edit the file [implications.sql](database/source_data/013_implications.sql).

### Updating the local database

Run the command `pnpm db:create`.

### Guidelines for Adding New Data

When contributing new data (categories, properties, implications), please follow these guidelines:

- **Consistency**: Stick to the format indicated by the existing data. This is enforced by the database definition.

- **Atomic Implications**: Only add "atomic" implications. Do not add implications that can be deduced from others. For example, do not add "complete => finite products" if it can be deduced from "complete => finitely complete" and "finitely complete => finite products". These are deduced automatically. Implications are also dualized automatically when applicable.

- **Relevant implications**: When adding a new property, include all implications involving this property and existing properties. For example, when adding "countable products", also add "countable products => finite products". Refactor existing implications if necessary. Ensure that for most categories, it will be inferred if the property holds or not.

- **Non-Deducible Properties**: Only add properties and non-properties to a category that cannot be deduced from other properties. For example, if a category is complete, add the property 'complete', but do not add 'terminal object'. The application infers this property automatically.

- **Proofs for New Properties**: For every new property, for each existing category try to find a proof for whether it has this property or not, unless it can be deduced from existing properties.

- **Counterexamples**: Ensure that at least one category does not satisfy any new property added. This is enforced with a unit test. If no existing category fits, add a new category that does not have the new property.

- **Reduce Unknowns**: Aim to reduce the number of unknown properties of categories in the database. Use the [page with missing data](https://catdat.netlify.app/missing) to identify these.

- **Simplify Implications**: When adding a new implication, check if it simplifies existing implications and if it makes some properties and non-properties in the list of categories redundant.

- **New Categories**: Add new categories that satisfy combinations of properties and non-properties not yet in the database. For example, you may add a category that is abelian but neither cocomplete nor essentially small (if it is not already present).

- **Positive Properties**: Do not add negated properties to the database. For example, do not add "large" as the negation of "small". Instead, add "small" to the list of non-properties for a category. As a rule of thumb, every registered property should be satisfied by the trivial category.

- **Proofs for Claims**: Provide proofs for all new claims (properties and implications). (We are currently working on filling in the existing ones and also display them in the UI.)

## Option 2: Submit our Google Form

The Google Form is the least technical way to submit new categories, properties, and implications. Issues and feature request may be submitted as well. This option does not require any knowledge of GitHub or coding, making it accessible to everyone.

[**Link to the Google Form**](https://forms.gle/8LBmro5FfSa43pD2A)

We will then have a look at your submission and try to implement it.

## Issues

If you want to report a bug or submit a feature request, you can [**create an issue**](https://github.com/ScriptRaccoon/CatDat/issues). You will need a GitHub account for this.
