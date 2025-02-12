const routes = []

export const router = new Proxy({}, {
		get: (_, method) => (path, handler) => {
			method = ["any", "use"].includes(method) ? "*" : method.toUpperCase()
			routes.unshift({ path, method, handler })
		},
	},
)

export function route(req, res) {
	const valid = new Set(["*", req.method, req.url])

	const handle = (idx) => {
		if (idx < 0) return

		const route = routes[idx]
		const matches = valid.has(route.method) && valid.has(route.path)

		const next = () => handle(idx - 1)
		matches ? route.handler(req, res, next) : next()
	}

	handle(routes.length - 1)
}
