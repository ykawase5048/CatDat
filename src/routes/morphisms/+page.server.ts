import { render_nested_formulas } from '$lib/commons/rendering'
import { MORPHISM_TYPES } from '$lib/database/morphisms/morphism-types.data'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
	const morphisms = MORPHISM_TYPES
	const rendered_morphisms = render_nested_formulas(morphisms)
	return { morphisms: rendered_morphisms }
}
