export const APP_MODE_TYPES = ['categories', 'functors'] as const

export type APP_MODE_TYPE = (typeof APP_MODE_TYPES)[number]

export const APP = $state<{ MODE: APP_MODE_TYPE }>({ MODE: 'categories' })
