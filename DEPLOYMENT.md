# Deployment

This page is only relevant for the maintainers of this project.

## Hosting

The application is deployed on [Netlify](https://netlify.com). The database is hosted on [Turso](https://turso.tech).

- [GitHub repository](https://github.com/ScriptRaccoon/catdat)
- [GitHub TODOs](https://github.com/users/ScriptRaccoon/projects/1/)
- [Netlify project](https://app.netlify.com/sites/catdat/overview)

## CI/CD

Every push to the `main` branch triggers the deployment pipeline on GitHub ([deploy.yaml](.github/workflows/deploy.yaml)) which updates the remote database via `pnpm db:update`, builds the application, and deploys it Netlify.

## Prerendering

Most pages are prerendered for performance reasons. This implies that the database is consumed at build time to generate static HTML pages. The only non-prerendered pages are the search and comparison pages, since they involve a dynamic list of properties and categories.

## Backups

Since the whole database is defined by static SQL files in this repository, a database backup is not strictly necessary. Still, there is an API endpoint `/api/db_dump` that dumps the SQLite database. It is secured with an API key. A Google Apps Script regularly fetches this API endpoint and saves the dump to Google Drive.

- [Backup Script](https://script.google.com/u/0/home/projects/1R9Uw-28pZoaxpQrKkNbvjIzpjmNGQXoUzae9FFskIl9HcpiTQlBY50CT/edit)

## Domains

- Main domain: <https://catdat.app>
- Backup domain: <https://catdat.netlify.app>
