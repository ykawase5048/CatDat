export type Prefix = keyof typeof PREFIXES

export const PREFIXES = {
	'is': 'is not',
	'is a': 'is not a',
	'is an': 'is not an',
	'has': 'does not have',
	'has a': 'does not have a',
	'has an': 'does not have an',
} as const satisfies Record<string, string>
