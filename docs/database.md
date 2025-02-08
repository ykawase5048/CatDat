# The "database" of _CatDat_

Currently, _CatDat_ does not work with a classical database. Instead, the data comes from various static TypeScript files in the `database` folder, for example:

- Categories: [categories.data.ts](../src/lib/database/categories.data.ts)
- Properties: [properties.data.ts](../src/lib/database/properties.data.ts)
- Implications: [implications.data.ts](../src/lib/database/implications.data.ts)

## Advantages of using TypeScript files for the data

- During runtime of the application, the data is static anyway.
- Extremely fast retrieval of the data. No fetching is required. For example, the search results are available instantly.
- Easy access for contributors.
- Data can be edited in any text editor.
- Local development is much easier.
- The deployment is easier and cheaper.
- No need to connect to an external service.
- This repository is the single source of truth for the whole application.
- Autocompletion for various fields in your IDE For example, when you add a property to a category and start typing `com`, you get already suggestions for properties like `complete` and `cocomplete`.

<img width="600" alt="autocomplete" src="https://github.com/user-attachments/assets/f1186ea4-0d09-4f30-b8d9-c5bdbaebb919" />
 
- Currently, the application doesn't require complex database queries.
- AHA-principle: Right now, the data doesn't need to be in the database. As soon as it becomes necessary, we can do that.
- Unit tests can validate the data easily. For example, there is a unit test that verifies that from the given properties and non-properties no contradiction can be deduced.
 
<img width="600" alt="failing unit test" src="https://github.com/user-attachments/assets/5f4a6bb4-1d60-4226-8edb-032cd0a25aff" />
 
- TypeScript is doing most of the work for us when it comes to data integrity. The rest is done via unit tests.
- More flexible data structures (not just rows in a table) are easy to integrate. For example, the [property duals](../src/lib/database/property-duals.data.ts) use a fully-typed dictionary.

## Disadvantage of using TypeScript files for the data

- In the future, it might not be the good solution anymore. In particular, when the data might reach thousands of entries.
- The approach is not very idiomatic.

## Further remarks

Normalization of the data has already been taken care of within the TypeScript files, for that no classical database is necessary. For example, one file for the basic information about categories, [one file](../src/lib/database/category-properties.data.ts) for their properties, [one file](../src/lib/database/category-non-properties.data.ts) for their non-properties, etc.
