export const tags = [
	'basic',
	'intermediate',
	'advanced',
	'well-behaved',
	'badly-behaved',
	'artificial',
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
] as const

export type Tag = (typeof tags)[number]
