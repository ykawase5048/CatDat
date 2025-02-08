import { PROPERTIES } from '$lib/database/properties.data'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
	return { properties: Array.from(PROPERTIES) }
}
