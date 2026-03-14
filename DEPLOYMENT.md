# Deployment

This page is only relevant for the maintainers of this project.

## Application

This application is deployed to [Netlify](https://netlify.com). Every push to the `main` branch triggers a new deploy.

A push also locally triggers a Svelte check `pnpm check`, which includes type checking.

## Database

The database is hosted on [Turso](https://turso.tech). The command

```sh
pnpm db:create:remote
```

recreates the Turso database from the local database as defined in the [/database](/database/) folder. See [database.md](/DATABASE.md) for details on this command.

## Prerendering

Most pages are prerendered for performance reasons. This implies that the database is consumed at build time to generate static HTML pages. The only non-prerendered pages are the search and comparison pages, since they involve a dynamic list of properties and categories.

Prerendering also implies that for every deployment, database changes should be applied _before_ pushing the new code. We may automate this process in the future.

## Backups

Since the whole database is defined by static SQL files in this repository, a database backup is not strictly necessary. Still, there is an API endpoint `/api/db_dump` that dumps the SQLite database. It is secured with an API key. A Google Apps Script regularly fetches this API endpoint and saves the dump to Google Drive.
