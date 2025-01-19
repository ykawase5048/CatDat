# CatDat

_A searchable database of categories and their properties_

https://catdat.netlify.app

_CatDat_ provides a search for [categories](https://en.wikipedia.org/wiki/Category_theory) that satisfy a given list of properties and don't satisfy another list of properties. It uses a database of categories, properties, and implications of properties. Deductions of these implications are generated automatically.

This is a **community effort**. When a category has an unknown property, or a valid combination of properties and non-properties is not yet witnessed by a category, please [contribute](#how-to-contribute) to this repository to fill in the gaps.

## Development

This project is built with [SvelteKit](https://svelte.dev/docs/kit/introduction) and TypeScript.

You need to have [NodeJS](https://nodejs.or/) and [pnpm](https://pnpm.io/) installed.

To install the dependencies, run

`pnpm install`

To start the development server, run

`pnpm dev`

To continuously run the tests, run

`pnpm test`

Every commit runs the tests once and the svelte check, which includes a type check.

To find the categories with unknown properties, run

`pnpm unknowns`

## The "database"

There are three TypeScript files\* that form the "database" of this project.

- New categories are added to the file [categories.ts](src/lib/dictionaries/categories.ts).
- New properties are added to the file [properties.ts](src/lib/dictionaries/properties.ts).
- New implications are added to the file [implications.ts](src/lib/dictionaries/implications.ts).

\*We decided for TypeScript here instead of JSON to enable autocompletion in various fields. Specifically, when you add a property to a category and start typign `"com`, you get already suggestions for properties like `complete` and `cocomplete`. Also, we didn't choose an external database, for example since the data is static and since it makes the local development much simpler.

## How to contribute

Create a pull request and follow the guidelines below.

- When adding new data (categories, properties, implications), stick to the format indicated by the existing data. This is also enforced by the types and tests.

- Only "atomic" implications are allowed. Do not add implications that can be deduced from others (like "complete => finite products", using the two implications "complete => finitely complete => finite products"). They are deduced automatically. The same holds for dual implications.

- When a new property is added, add all the implications that invole this new property alongside the existing properties. For example, by adding the property "countable products", please add the implication "countable products => finite products". If possible, refactor the existing implications with it.

- Only add those properties and non-properties to a category which cannot be deduced from the other ones. For example, when a category is complete, add the property 'complete', but don't add the property 'terminal object'. This is deduced automatically.

- When a new property is added, for every existing category try to find a proof if that category has this new property or not (in case it cannot be deduced from existing ones).

- Try to reduce the categories with unknown properties. Use the script `pnpm unknowns` of the UI to detect these.

- When a new implication is added, check if it simplifies existing implications, and also if it makes some properties and non-properties in the list of categories redundant.

- Try to add categories that satisfy combinations of properties and non-properties which are not in the database yet. For example (in case it's not there yet), you might add a category which is abelian, but neither cocomplete nor essentially small.

- Do not add non-properties to the list of properties. For example, "large" (as the opposite of "small") is not allowed. When a category should be registered as large, simply add "small" to its list of non-properties. As a rule of thumb, every registered property should be satisfied by the trivial category `1`.

- For every new feature, add a test.
