# CatDat

_A searchable database of categories and their properties_

https://catdat.netlify.app

_CatDat_ provides a search for [categories](https://en.wikipedia.org/wiki/Category_theory) that satisfy a given list of properties and don't satisfy another list of properties. It uses a database of categories, properties, and implications of properties. The implications provide the basis of a powerful **deduction system** that infers properties from existing properties automatically, similarly for non-properties.

## How to contribute

This project is a **community effort**. See our [contribution guidelines](CONTRIBUTING.md) to get started.

## Documentation

- [The "database" of CatDat](docs/database.md)
- [Types](docs/types.md)

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

## Similar project

The _catabase_ at https://catabase.fly.dev/ is a similar project, but it has been abandoned. See also the announcement in the [nforum](https://nforum.ncatlab.org/discussion/13419/catabase-a-database-of-categories/). It is much more ambitious when it comes to the available types of data, but it is less complete even for basic categories, the UI is not very intuitive, and there is no integrated deduction system.
