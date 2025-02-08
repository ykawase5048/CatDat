export type Tag = (typeof TAGS)[number]

export const TAGS = [
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
