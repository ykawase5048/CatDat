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

export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number) {
	let timer: number | undefined

	return (...args: Parameters<T>) => {
		if (timer) window.clearTimeout(timer)
		timer = window.setTimeout(() => {
			fn(...args)
		}, delay)
	}
}
