# CatDat

_A searchable database of categories and their properties_

https://catdat.netlify.app

_CatDat_ provides a search for [categories](https://en.wikipedia.org/wiki/Category_theory) that satisfy a given list of properties and don't satisfy another list of properties. It uses a database of categories, properties, and implications of properties. The implications provide the basis of a powerful **deduction system** that infers properties from existing properties automatically, similarly for non-properties.

## How to contribute

This project is a **community effort**. See our [contribution guidelines](CONTRIBUTING.md) to get started.

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

- New categories are added to the file [categories.ts](src/lib/categories/categories.ts).
- New properties are added to the file [properties.ts](src/lib/properties/properties.ts).
- New implications are added to the file [implications.ts](src/lib/implications/implications.ts).

\*We decided for TypeScript here instead of JSON to enable autocompletion in various fields. Specifically, when you add a property to a category and start typign `"com`, you get already suggestions for properties like `complete` and `cocomplete`. Also, we didn't choose an external database, for example since the data is static and since it makes the local development much simpler.

## Similar project

The _catabase_ at https://catabase.fly.dev/ is a similar project, but it has been abandoned. See also the announcement in the [nforum](https://nforum.ncatlab.org/discussion/13419/catabase-a-database-of-categories/). It is much more ambitious when it comes to the available types of data, but it is less complete even for basic categories, the UI is not very intuitive, and there is no integrated deduction system.
