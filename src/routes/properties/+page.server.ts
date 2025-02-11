import { PROPERTIES } from '$lib/database/properties.data'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
	const properties = PROPERTIES.map(({ id, prefix }) => ({
		id,
		prefix,
		reason: '',
	}))

	return { properties }
}
