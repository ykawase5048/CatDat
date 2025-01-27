# Types

A category can have a list of related categories, listed in the field `related` (see `src/lib/categories/categories.ts`). Only the IDs are referenced. The same is true for properties. And properties can also have a dual property, defined in the field `dual`. These values need to be type safe, so that for example only dual properties can be written down that actually exist in the list of properties.

Of course, one could just write unit tests that check this. But it is much more convenient to let TypeScript do this check. Even better: TypeScript can give us _autocompletion_. So when I start typing "cocom...", I get autocompletion to "cocomplete" and similar properties.

To implement this, we have decided to have separate files that declare the IDs of categories (`src/lib/categories/categoryIDs.ts`) and properties (`src/lib/properties/propertyIDs.ts`). The corresponding union types are then used in the definitions of the type of a category and of a property (see `src/lib/types.ts`).

```ts
export type Property = {
	id: PropertyID
	description: string
	prefix: Prefix
	dual?: PropertyID
	related?: PropertyID[]
}
```

This is an unfortunate code duplication of IDs, but apparently it is necessary to have type safety and autocompletion. Also, the naive approach of just changing the type of a category, only allowing IDs inferred from the category list, is circular, and TypeScript reports this as an error.

There was never a problem with the `Implication` type. It guarantees that only existing existing properties are used.

```ts
export type Implication = {
	equivalent?: boolean
	assumptions: PropertyID[]
	conclusions: PropertyID[]
}
```

Are there alternatives?

When one is only interested in type safety, the following would also work:

```ts
export const categories = [
	{
		id: 'Set',
		name: 'The category of sets',
        related: ["FinSet"]
	},
	{
		id: 'Ab',
		name: 'The category of abelian groups',
        related: ["Grp"]
	},
    ...
] as const satisfies Category[]


type CategoryID = (typeof categories)[number]['id']

type CategoryValid = Omit<Category, 'id' | 'related'> & {
id: CategoryID
related?: CategoryID[]
}

categories satisfies CategoryValid[]
```

The type checking is done in the last line.

Then, for example, adding `related: ["Group"]` in a category would be a type error. But also not in this exact place, but rather in the last line. Also, autocompletion is missing.

So the current solution seems to be the best one.
