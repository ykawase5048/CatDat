import { properties } from '$lib/data/properties.data'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
	return { properties }
}
