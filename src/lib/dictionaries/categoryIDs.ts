export const CATEGORY_IDs = [
	'Set',
	'Ab',
	'Top',
	'Grp',
	'Ring',
	'CRing',
	'Rng',
	'FinSet',
	'FinAb',
	'Set*',
	'Mon',
	'Pos',
	'0',
	'1',
	'I',
	'M-Set',
	'R-Mod',
	'Met',
	'Man',
	'Meas',
	'N',
	'Cat',
	'On',
	'FreeAb',
	'LRS',
	'Sch',
] as const

export type CategoryID = (typeof CATEGORY_IDs)[number]

export function is_valid_category(id: string): id is CategoryID {
	return CATEGORY_IDs.includes(id as CategoryID)
}
