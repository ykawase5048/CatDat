# 🤝 How to Contribute

There are three ways to contribute:

- [🐛 Create an Issue](#option-1-create-an-issue)
- [🛠️ Create a Pull Request](#option-2-create-a-pull-request)
- [📩 Submit Our Google Form](#option-3-submit-our-google-form)

## Option 1: Create an Issue 🐛

If you want to report an issue with _CatDat_ or add data but don't feel comfortable creating a pull request, you can [**create an issue**](https://github.com/ScriptRaccoon/CatDat/issues). You will need a GitHub account for this.

1. **Adding a Category**: Include its definition (objects, morphisms) and specify as many properties and non-properties of this category as possible. You can use the [list of available properties](https://catdat.netlify.app/properties) for reference.

2. **Adding a Property**: Include its definition and, if possible, indicate which existing categories have this property and which do not. Also, list the implications involving this property (e.g., when adding the property `abelian`, include `abelian => additive`, etc.).

3. **Adding an Implication**: Ensure that the implication cannot be deduced from existing implications. If the implication involves properties not yet in the database, add these properties as well (see item 2).

For any non-trivial results, please provide a proof or a reference.

## Option 2: Create a Pull Request 🛠️

Create a [**pull request**](https://github.com/ScriptRaccoon/CatDat/pulls). You will need a GitHub account for this.

### Adding a New Category

- Add the basic info of the category to the file [categories.data.ts](src/lib/database/categories.data.ts).
- Add a list of related categories to [category-relations.data.ts](src/lib/database/category-relations.data.ts). Can be an empty list.
- Add a list of tags to [category-tags.data.ts](src/lib/database/category-tags.data.ts).
- To add properties of the category, edit the file [category-properties.data.ts](src/lib/database/category-properties.data.ts).
- To add non-properties of the category, edit the file [category-non-properties.data.ts](src/lib/database/category-non-properties.data.ts).
- Add the descriptions (including proofs) of special morphisms in to [category-monomorphisms.data.ts](src/lib/database/category-monomorphisms.data.ts), [category-epimorphisms.data.ts](src/lib/database/category-epimorphisms.data.ts), and [category-isomorphisms.data.ts](src/lib/database/category-isomorphisms.data.ts). Can be empty strings in case it's not known.

### Adding a New Property

- Add the basic info of the property to [properties.data.ts](src/lib/database/properties.data.ts).
- Add a list of related properties to [property-relations.data.ts](src/lib/database/property-relations.data.ts). Can be an empty list.
- If applicable, add its dual property to [property-duals.data.ts](src/lib/database/property-duals.data.ts).

### Adding a New Implication

- Edit the file [implications.data.ts](src/lib/database/implications.data.ts).

For more information on why we don't use a traditional database, see [this documentation](/docs/database.md).

### Guidelines for Adding New Data

When contributing new data (categories, properties, implications), please follow these guidelines:

- **Consistency**: Stick to the format indicated by the existing data. This is enforced by the types and tests.

- **Atomic Implications**: Only add "atomic" implications. Do not add implications that can be deduced from others. For example, do not add "complete => finite products" if it can be deduced from "complete => finitely complete" and "finitely complete => finite products". These are deduced automatically. Implications are also dualized automatically when applicable.

- **Relevant implications**: When adding a new property, include all implications involving this property and existing properties. For example, when adding "countable products", also add "countable products => finite products". Refactor existing implications if necessary. Ensure that for most categories, it will be inferred if the property holds or not.

- **Non-Deducible Properties**: Only add properties and non-properties to a category that cannot be deduced from other properties. This is enforced with a unit test. For example, if a category is complete, add the property 'complete', but do not add 'terminal object'. The deduction system infers this property automatically.

- **Proofs for New Properties**: For every new property, for each existing category try to find a proof for whether it has this property or not, unless it can be deduced from existing properties.

- **Counterexamples**: Ensure that at least one category does not satisfy any new property added. This is enforced with a unit test. If no existing category fits, add a new category that does not have the new property.

- **Reduce Unknowns**: Aim to reduce the number of unknown properties of categories in the database. Use the [page with missing data](https://catdat.netlify.app/missing) to identify these.

- **Simplify Implications**: When adding a new implication, check if it simplifies existing implications and if it makes some properties and non-properties in the list of categories redundant.

- **New Categories**: Add new categories that satisfy combinations of properties and non-properties not yet in the database. For example, you may add a category that is abelian but neither cocomplete nor essentially small (if it is not already present).

- **Positive Properties**: Do not add negated properties to the database. For example, do not add "large" as the negation of "small". Instead, add "small" to the list of non-properties for a category. As a rule of thumb, every registered property should be satisfied by the trivial category.

- **Proofs for Claims**: Provide proofs for all new claims (properties and implications). (We are currently working on filling in the existing ones and also display them in the UI.)

## Option 3: Submit our Google Form 📩

The Google Form is the least technical way to submit new categories, properties, and implications. Issues and feature request may be submitted as well. This option does not require any knowledge of GitHub or coding, making it accessible to everyone.

[**Link to the Google Form**](https://forms.gle/8LBmro5FfSa43pD2A)

We will then have a look at your submission and try to implement it.
