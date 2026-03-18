import { goto } from '$app/navigation'

export function get_device_type() {
	const w = window.innerWidth
	if (w < 640) return 'mobile'
	if (w < 1024) return 'tablet'
	return 'desktop'
}

export function filter_by_tag(tag: string) {
	goto(`/categories/${tag}`)
}
