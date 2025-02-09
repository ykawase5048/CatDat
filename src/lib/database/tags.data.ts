export type Tag = (typeof TAGS)[number]

export const TAGS = [
	// difficulty level
	'basic',
	'intermediate',
	'advanced',
	// does not appear in the wild
	'artificial',
	// many properties are satisfied
	'well-behaved',
	// few properties are satisfied
	'badly-behaved',
	// branches of mathematics
	'algebra',
	'algebraic geometry',
	'topology',
	'analysis',
	'order theory',
	'measure theory',
	'geometry',
	'set theory',
	'representation theory',
	'combinatorics',
	'category theory',
	'number theory',
] as const
