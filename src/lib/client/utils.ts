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

export function pluralize(count: number, forms: { one: string; other: string }) {
	const word = count === 1 ? forms.one : forms.other
	return word.replace('{count}', String(count))
}

export function string_to_color(str: string): string {
	let hash = 0
	for (let i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash)
	}

	const h = hash % 360
	return `hsl(${h}, 80%, 50%)`
}
