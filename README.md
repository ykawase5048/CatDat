# CatDat

![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen)
![Tests](https://github.com/ScriptRaccoon/CatDat/actions/workflows/test.yml/badge.svg)
![Deployment](https://github.com/ScriptRaccoon/CatDat/actions/workflows/deploy.yml/badge.svg)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

_A comprehensive and searchable database of categories and their properties_

<https://catdat.info>

## Features

- **Searchable Database**: Easily find [categories](https://en.wikipedia.org/wiki/Category_theory) based on properties and non-properties.
- **Deduction System**: Automatically infers properties from existing ones, powered by a database of implications.
- **Reason/Reference for Implications**: Each implication has a reason/reference, providing a data-based knowledge base of category theory.
- **Automatic Dualization**: Automatically dualizes implications.
- **Comprehensive Definitions**: Detailed definitions of properties and categories.
- **Comparison Feature**: Compare multiple categories to see their differences.
- **Find Related Categories**: Discover categories related to your search.
- **Customizable Display**: Light/dark mode, show/hide deduced properties.
- **References to nLab**: Links to the [nLab](https://ncatlab.org) for detailed information.
- **Intuitive User Interface**: Easy to use on both mobile and desktop.

## How to contribute

This project is a **community effort**. See our [contribution guidelines](CONTRIBUTING.md) for more information

## Documentation

- [The "database" of _CatDat_](docs/database.md)

## Development

This project is built with [SvelteKit](https://svelte.dev/docs/kit/introduction) and [TypeScript](https://www.typescriptlang.org).

### Prerequisites

- [NodeJS](https://nodejs.org/) (version specified in [.nvmrc](.nvmrc))
- [pnpm](https://pnpm.io/)

### Setup

1. **Install Dependencies**:

    ```sh
    pnpm install
    ```

2. **Start Development Server**:

    ```sh
    pnpm dev
    ```

3. **Run Tests Continuously**:

    ```sh
    pnpm test
    ```

4. **Generate Coverage Report**:
    ```sh
    pnpm coverage
    ```

### Notes

- Every commit runs the tests and performs a Svelte check, which includes a type check.

## Deployment

The deployment is handled by a GitHub workflow (`deploy.yml`) that triggers the deployment on [Netlify](https://netlify.com) from the `main` branch when the tests have passed.

## Similar projects

- **[Catabase](https://catabase.fly.dev)**: A similar project that appears to be abandoned. It is more ambitious in terms of available data types but less complete for basic categories. The UI is not very intuitive, and it lacks an integrated deduction system between properties. See the [nForum announcement](https://nforum.ncatlab.org/discussion/13419/catabase-a-database-of-categories/).
- **[nLab](https://ncatlab.org)**: A wiki for (higher) category theory. _CatDat_ refers to nLab pages for detailed information on its entries.
- **[Clowder Project](https://clowderproject.com)**: A new online reference for category theory. Unlike _CatDat_, which is data-based, Clowder follows a textbook-based approach.
