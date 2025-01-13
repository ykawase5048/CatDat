import type { CategoryPropertyImplication } from '$lib/types'

export const implications: CategoryPropertyImplication[] = [
	{
		assumption: 'locally small',
		conclusion: 'small',
	},
	{
		assumption: 'small',
		conclusion: 'well-powered',
	},
	{
		assumption: 'locally finitely presentable',
		conclusion: 'well-powered',
	},
	{
		assumption: 'abelian',
		conclusion: [
			'preadditive',
			'finitely cocomplete',
			'finitely complete',
			'pointed',
		],
	},
	{
		assumption: 'elementary topos',
		conclusion: ['cartesian closed', 'finitely complete', 'well-powered'],
	},
	{
		assumption: 'complete',
		conclusion: 'finitely complete',
	},
	{
		assumption: 'cocomplete',
		conclusion: 'finitely cocomplete',
	},
]
