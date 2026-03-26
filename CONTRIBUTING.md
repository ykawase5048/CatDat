# How to Contribute

There are three ways to contribute:

- [Submit Our Google Form](#option-2-submit-our-google-form)
- [Create a Pull Request](#option-1-create-a-pull-request)
- [Create an Issue](#option-3-create-an-issue)

## Option 1: Submit our Google Form

The Google Form is the least technical way to submit new categories, properties, and implications. Issues and feature requests can also be submitted. This option does not require any knowledge of GitHub or coding, making it accessible to everyone.

[**Link to the Google Form**](https://forms.gle/8LBmro5FfSa43pD2A)

We will then review your submission and try to implement it.

## Option 2: Create a Pull Request

Create a [**pull request**](https://github.com/ScriptRaccoon/CatDat/pulls). You will need a GitHub account.

### Local Setup

You need to have [NodeJS](https://nodejs.org/) and [pnpm](https://pnpm.io/) installed.

1. Clone the repository with `git clone https://github.com/ScriptRaccoon/CatDat.git`.
2. Change the directory with `cd CatDat`.
3. Install the dependencies with `pnpm install`.
4. Create the local `.env` file based on `.env.example`.
5. Create the local database with `pnpm db:update`.
6. Start the local development server with `pnpm dev`.

### Updating the Database

All updates to the database are made by updating the SQL files in the folder [/database](database/) (see also [DATABASE.md](/DATABASE.md)). You may have a look at [an example commit](https://github.com/ScriptRaccoon/CatDat/commit/e06f85fa13e5f8eeb42049880b5662be7fc36a50) or at [an example PR](https://github.com/ScriptRaccoon/CatDat/pull/3/changes).

Apply the updates using:

```sh
pnpm db:update
```

Ensure that it does not error. You can also use

```sh
pnpm db:watch
```

to continuously run this update when a file in the subfolder [/database/data](/database/data) changes.

### Guidelines for Adding New Data

When contributing new data (categories, properties, implications), please follow these guidelines:

- **Consistency**: Stick to the format indicated by the existing data. This is enforced by the database definition.

- **Reduce Unknowns**: Try to reduce the number of unknown properties of categories, in particular when adding a new category. Use the category detail page to see its unknown properties. Use the [page with missing data](https://catdat.app/missing) to identify categories with unknown properties.

- **Atomic Properties**: Only assign properties to a category that cannot be deduced from other properties (satisfied or not). For example, if a category is complete, add the property "complete", but do not add "terminal object". The application infers this property automatically.

- **No dual categories**: Instead of adding the dual of a category already in the database, consider adding properties to the original category (use the corresponding dual properties).

- **No equivalent categories**: Do not add categories that are equivalent or even isomorphic to categories already in the database. If the equivalence is non-trivial, mention it in the description of the original category. Some exceptions are allowed, since certain properties (such as being skeletal) are not invariant under equivalence.

- **Special Objects and Morphisms**: For each new category, try to specify its special objects (terminal object, initial object, etc.) in the corresponding table. Also try to specify its special morphisms (isomorphisms, monomorphisms, epimorphisms).

- **Proofs for New Properties**: For every new property, for each existing category, try to find a proof for whether it has this property or not, in case this has not already been deduced automatically. Use the property detail page to check unknown categories.

- **Counterexamples**: Ensure that at least one category does not satisfy any new property that is added. If no existing category fits, add a new category that does not have the new property.

- **Positive Properties**: Do not add negated properties to the database. For example, do not add "large" as the negation of "small". Instead, add "small" to the list of unsatisfied properties for a category. As a rule of thumb, every registered property should be satisfied at least by the trivial category.

- **Proofs for Claims**: Provide proofs for all new claims (satisfied properties, unsatisfied properties, implications, special morphisms). (We are currently working on filling in the existing ones.)

- **Atomic Implications**: Do not add implications that can be deduced from others. For example, do not add "complete => finite products" since it can be deduced from "complete => finitely complete" and "finitely complete => finite products". These are deduced automatically.

- **No dual implications**: Implications are dualized automatically when applicable. For this reason, adding "finitely cocomplete => pushouts" is not necessary when "finitely complete => pullbacks" has already been added.

- **Relevant implications**: When adding a new property, include implications involving this property and existing properties. For example, when adding "countable products", also add "countable products => finite products". Refactor existing implications if necessary. Ensure that for most categories, it will be inferred if the property holds or not.

- **Simplify Implications**: When adding a new implication, check if it simplifies existing implications and if it deduces some previously non-deduced properties for categories.

- **New Combinations**: Add new categories that satisfy combinations of satisfied properties and unsatisfied properties and not yet in the database. For example, you may add a category that is abelian but neither cocomplete nor essentially small (if it is not already present). The [page with missing data](https://catdat.app/missing) lists consistent combinations of the form $p \land \neg q$ that are not yet witnessed by a category in the database.

## Option 3: Create an Issue

If you want to report a bug or submit a feature request, you can [**create an issue**](https://github.com/ScriptRaccoon/CatDat/issues/new). You will need a GitHub account for this.
