# Development

## Tech Stack

- Language: [TypeScript](https://www.typescriptlang.org)
- App framework: [SvelteKit](https://svelte.dev/docs/kit/introduction)
- Database: [SQLite](https://sqlite.org/)
- App Deployment: [Netlify](https://netlify.com)
- Database Deployment: [Turso](https://turso.tech)
- TeX math rendering: [katex](https://www.npmjs.com/package/katex)

## Prerequisites

- [NodeJS](https://nodejs.org/) (version specified in [.nvmrc](.nvmrc))
- [pnpm](https://pnpm.io/)

## Setup

1. **Clone the repository**

    ```sh
    git clone https://github.com/ScriptRaccoon/CatDat.git
    ```

2. **Install Dependencies**:

    ```sh
    pnpm install
    ```

3. **Create .env from .env.example**:

    ```sh
    cp .env.example .env
    ```

4. **Build Database**:

    ```sh
    pnpm db:create
    ```

5. **Start Development Server**:

    ```sh
    pnpm dev
    ```

## Links

These links are only relevant for the maintainers of this project.

- [GitHub repository](https://github.com/ScriptRaccoon/catdat)
- [GitHub TODOs](https://github.com/users/ScriptRaccoon/projects/1/)
- [Netlify project](https://app.netlify.com/sites/catdat/overview)
- [Backup Script](https://script.google.com/u/0/home/projects/1R9Uw-28pZoaxpQrKkNbvjIzpjmNGQXoUzae9FFskIl9HcpiTQlBY50CT/edit)
