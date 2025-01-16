const stack = [];

export const get = (path, handler) => stack.push({ path, method: "GET", handler })
export const put = (path, handler) => stack.push({ path, method: "PUT", handler })
export const post = (path, handler) => stack.push({ path, method: "POST", handler })
export const patch = (path, handler) => stack.push({ path, method: "PATCH", handler })
export const del = (path, handler) => stack.push({ path, method: "DELETE", handler })
export const any = (path, handler) => stack.push({ path, method: "*", handler })

/**
 * @param {Request} req
 * @param {Response} res
 */
export function route(req, res) {
  /**
   * @param {number} index
   */
  const handle = (index) => {
    if (index < 0) {
      return
    }

    const route = stack[index]

    const routeMatch =
      [req.method, "*"].includes(route.method) &&
      [req.url, "*"].includes(route.path)

    if (routeMatch) {
      route.handler(req, res, () => handle(index - 1))
    } else {
      handle(index - 1)
    }
  }

  handle(stack.length - 1)
}
