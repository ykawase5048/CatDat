# CatDat

_A comprehensive and searchable database of categories and their properties_

<https://catdat.netlify.app>\*

_CatDat_ provides a search for [categories](https://en.wikipedia.org/wiki/Category_theory) that satisfy a given list of properties and don't satisfy another list of properties. It uses a database of categories, properties, and implications of properties. The implications provide the basis of a powerful **deduction system** that infers properties from existing properties automatically, similarly for non-properties.

\*The domain might change in the near future.

## How to contribute

This project is a **community effort**. See our [contribution guidelines](CONTRIBUTING.md) to get started.

## Documentation

- [The "database" of _CatDat_](docs/database.md)
- [Types](docs/types.md)

## Development

This project is built with [SvelteKit](https://svelte.dev/docs/kit/introduction) and [TypeScript](https://www.typescriptlang.org).

You need to have [NodeJS](https://nodejs.or/) and [pnpm](https://pnpm.io/) installed. The required Node version is the one in [.nvmrc](.nvmrc).

To install the dependencies, run

`pnpm install`

To start the development server, run

`pnpm dev`

To continuously run the tests, run

`pnpm test`

To get a coverage report, run

`pnpm coverage`

Every commit runs the tests once and the svelte check, which includes a type check.

## Deployment

There is a GitHub workflow `deploy.yml` that triggers the deployment on [Netlify](https://netlify.com) from the main branch when the tests have passed.

## Similar projects

The _catabase_ at <https://catabase.fly.dev> has been a similar project, which seems to be abandoned. See also the announcement in the [nForum](https://nforum.ncatlab.org/discussion/13419/catabase-a-database-of-categories/). It is much more ambitious when it comes to the available types of data, but it is less complete even for basic categories, the UI is not very intuitive, and apparently there is no integrated deduction system between properties.

The _nLab_ <https://ncatlab.org> is a wiki for (higher) category theory. _CatDat_ refers to nLab-pages for details of its entries.

The _Clowder project_ at <https://clowderproject.com> is a quite new online reference for category theory. In contrast to _CatDat_ (which is based on _data_), it follows a textbook-approach.
