# The "database" of _CatDat_

Currently, _CatDat_ does not work with a classical database. Instead, the data comes from these three TypeScript files:

- Categories: [categories.ts](src/lib/categories/categories.ts)
- Properties: [properties.ts](src/lib/properties/properties.ts)
- Implications: [implications.ts](src/lib/implications/implications.ts)

## Advantages of using TypeScript files for the data

- Extremely fast retrieval of the data. No fetching is required.
- For example, the search results are available instantly.
- Easy access for contributors.
- Data can be edited in any text editor.
- Local development is much easier.
- No need to connect to an external service.
- Autocompletion for various fields in your IDE. For example, when you add a property to a category and start typing `com`, you get already suggestions for properties like `complete` and `cocomplete`.
- Currently, the application doesn't require complex database queries.
- AHA-principle: Right now, the data doesn't need to be in the database. When it becomes necessary, we can do that.
- Unit tests can validate the data easily.
- TypeScript is doing most of the work for us when it comes to data integrity. The rest is done via unit tests.
- This repository is the single source of truth for the whole application.

## Disadvantage of using TypeScript files for the data

- In the future, it might not be the good solution anymore. In particular, when the data might reach thousands of entries.
- The approach is not very idiomatic.
