import type {
	FunctorImplicationDB,
	FunctorImplicationDisplay,
	FunctorProperty,
	FunctorPropertyDB,
	ImplicationDB,
	ImplicationDisplay,
	PropertyDB,
	PropertyDisplay,
} from '$lib/commons/types'
import type { RequestEvent } from '@sveltejs/kit'
import { Crawler } from 'es6-crawler-detect'

export function is_object(obj: unknown): obj is Record<string, unknown> {
	return obj != null && obj.constructor.name === 'Object'
}

export const sleep = (delay: number) => new Promise<void>((res) => setTimeout(res, delay))

export function display_implication(implication: ImplicationDB): ImplicationDisplay {
	return {
		id: implication.id,
		is_equivalence: Boolean(implication.is_equivalence),
		reason: implication.reason,
		is_deduced: Boolean(implication.is_deduced),
		assumptions: JSON.parse(implication.assumptions),
		conclusions: JSON.parse(implication.conclusions),
		dualized_from: implication.dualized_from,
	}
}

export function display_property(property: PropertyDB): PropertyDisplay {
	return {
		id: property.id,
		prefix: property.prefix,
		description: property.description,
		dual_property_id: property.dual_property_id,
		nlab_link: property.nlab_link,
		invariant_under_equivalences: Boolean(property.invariant_under_equivalences),
	}
}

export function to_placeholders(arr: string[]): string {
	return arr.map(() => '?').join(', ')
}

export function display_functor_property(property: FunctorPropertyDB): FunctorProperty {
	return {
		id: property.id,
		prefix: property.prefix,
		description: property.description,
		dual_property_id: property.dual_property_id,
		nlab_link: property.nlab_link,
		invariant_under_equivalences: Boolean(property.invariant_under_equivalences),
	}
}

export function display_functor_implication(
	implication: FunctorImplicationDB,
): FunctorImplicationDisplay {
	return {
		id: implication.id,
		is_equivalence: Boolean(implication.is_equivalence),
		reason: implication.reason,
		assumptions: JSON.parse(implication.assumptions),
		source_assumptions: JSON.parse(implication.source_assumptions),
		target_assumptions: JSON.parse(implication.target_assumptions),
		conclusions: JSON.parse(implication.conclusions),
		dualized_from: implication.dualized_from,
	}
}

const crawler_detector = new Crawler()

function is_bot(request: Request): boolean {
	const user_agent = request.headers.get('user-agent') ?? ''
	return crawler_detector.isCrawler(user_agent)
}

function is_same_origin(request: Request, site_origin: string): boolean {
	const origin = request.headers.get('origin')
	const referer = request.headers.get('referer')

	if (origin !== null) return origin === site_origin
	if (referer !== null) return referer.startsWith(site_origin)

	return false
}

export function is_allowed(event: RequestEvent): boolean {
	return is_same_origin(event.request, event.url.origin) && !is_bot(event.request)
}

function decode_base64_utf8(input: string): string {
	const bytes = Uint8Array.from(atob(input), (c) => c.charCodeAt(0))
	return new TextDecoder('utf-8').decode(bytes)
}

export function get_geo_data(request: Request): {
	country: string | null
} {
	// Netlify specific geo header
	const geo_header = request.headers.get('x-nf-geo')

	if (!geo_header) return { country: null }

	try {
		const txt = decode_base64_utf8(geo_header)
		const decoded = JSON.parse(txt)
		const country = decoded.country?.name || null
		return { country }
	} catch (_) {
		console.error('Netlify geo header cannot be parsed:', geo_header)
		return { country: null }
	}
}
