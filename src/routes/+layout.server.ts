export const load = async (event) => {
	const mode = event.url.pathname.startsWith('/functor') ? 'functors' : 'categories'
	return { mode }
}
