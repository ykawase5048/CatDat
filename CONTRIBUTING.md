# How to contribute

There are three options to contribute.

- [Create an issue](#option-1-create-an-issue)
- [Create a pull request](#option-2-create-a-pull-request)
- [Submit our Google form](#option-3-submit-our-google-form)

## Option 1: Create an issue

In case you want to report an issue with _CatDat_, or want to add some data but don't feel comfortable with providing a pull request, you may [**create an issue**](https://github.com/ScriptRaccoon/CatDat/issues). For this, you need a GitHub account.

1. In case you want add a [**category**](https://catdat.netlify.app/categories), include its defintion (objects, morphisms), and make sure to specify as many properties and as many non-properties of this category as possible. For this you may use the [list of available properties](https://catdat.netlify.app/properties).

2. In case you want to add a new [**property**](https://catdat.netlify.app/properties), include its definition, and if possible indicate which of the existing categories have this property, and which ones do not. Also try to list the implications that involve this property (for example, when adding the property `abelian`, you need to add `abelian => additive`, etc.)

3. In case you want to add a new [**implication**](https://catdat.netlify.app/implications), make sure that it cannot be deduced from existing implications. In case an implication uses properties that are not yet in the database, add these properties as well (see item 2).

For any non-trivial results, please provide a proof or a reference.

## Option 2: Create a pull request

Create a [**pull request**](https://github.com/ScriptRaccoon/CatDat/pulls). For this, you need a GitHub account.

- To add a new category, edit the file [categories.ts](src/lib/categories/categories.ts). Check out the [example commit](https://github.com/ScriptRaccoon/CatDat/commit/236eeb033b0f78bafc5a58c1e84989b2c7767399).
- To add a new property, edit the file [properties.ts](src/lib/properties/properties.ts). Check out the [example commit](https://github.com/ScriptRaccoon/CatDat/commit/43ba7f544fd3b1c8d76e9700fccaccc5ed21b0b3).
- To add a new implication, edit the file [implications.ts](src/lib/implications/implications.ts). Check out the [example commit](https://github.com/ScriptRaccoon/CatDat/commit/44f023dd0b6946a11256bf6b0aeb6d7c20c0da90).

See [this documentation](/docs/database.md) why we don't use a database.

For new data, follow these guidelines:

- When adding new data (categories, properties, implications), stick to the format indicated by the existing data. This is also enforced by the types and tests.

- Only "atomic" implications are allowed. Do not add implications that can be deduced from others (like "complete => finite products", using the two implications "complete => finitely complete => finite products"). They are deduced automatically. Also, implications are dualized automatically when applicable, which means you don't need to add them.

- When a new property is added, add all the implications that involve this new property alongside the existing properties. For example, by adding the property "countable products", please add the implication "countable products => finite products". If possible, refactor the existing implications with it. When done properly, for most categories it will then be inferred if the property holds or not.

- Only add those properties and non-properties to a category which cannot be deduced from the other ones. This is enforced with a unit test. For example, when a category is complete, add the property 'complete', but don't add the property 'terminal object'. The deduction system inside of _CatDat_ does this automatically.

- When a new property is added, for every existing category try to find a proof if that category has this new property or not, but only in case it cannot be deduced from existing ones.

- When a new property is added, you have to make sure that at least one category does not satisfy it (otherwise, it would not be interesting). This is enforced with a unit test, actually. If none of the existing categories fits, you need to add a new category that does not have the new property.

- Try to reduce the unknown properties of the categories in the database. Use the page with missing data to detect these.

- When a new implication is added, check if it simplifies existing implications, and also if it makes some properties and non-properties in the list of categories redundant.

- Try to add new categories that satisfy combinations of properties and non-properties which are not in the database yet. For example (in case it's not there yet), you might add a category which is abelian, but neither cocomplete nor essentially small.

- Do not add negated properties to the database of properties. For example, "large" (as the negation of "small") is not allowed. When a category should be registered as large, simply add "small" to its list of non-properties. As a rule of thumb, every registered property should be satisfied by the trivial category.

- In your pull request, provide proofs for the non-obvious new claims, in particular with regards to the properties of very special categories.

For feature requests and issues, please be as detailed as possible.

## Option 3: Submit our Google Form

The Google Form is the least technical way to submit new categories, properties, and implications. Issues and feature request may be submitted as well. This option does not require any knowledge of GitHub or coding, making it accessible to everyone.

[**Link to the Google Form**](https://forms.gle/8LBmro5FfSa43pD2A)

We will then have a look at your submission and try to implement it.
