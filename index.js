const stack = []

export const router = new Proxy({}, {
  get: (_, method) => (path, handler) => {
	method = ['any', 'use'].includes(method) ? '*' : method.toUpperCase()
	stack.unshift({
      path, 
      method, 
      handler,
    })
  }
})

/**
 * @param {Request} req
 * @param {Response} res
 */
export function route(req, res) {
  const valid = new Set(['*', req.method, req.url])

  /**
   * @param {number} index
   */
  const handle = (idx) => {
    if (idx < 0) {
	  res.writeHead(404).end('')
      return
	}

    const route = stack[idx]

    const next = () => handle(--idx)

    const matches = valid.has(route.method) && valid.has(route.path)

    matches 
      ? route.handler(req, res, next)
      : next()
  }

  handle(stack.length - 1)
}
