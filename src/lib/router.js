function createRouterFunction() {
  function router(...args) { this._route(...args) }
  chainPrototype(router, Router.prototype)
}

class Router extends EventEmmiter {

  constructor() {
    this._routes = {}
    return createRouterFunction().bind(this)
  }

  this.register(routes) {
    routes.forEach((currRoute) => {
      this._routes[currRoute.path] = { ...currRoute }
    })
  }

  this._route(req, rest) {
    const { path } = req
    const registeredPathes = Object.keys(this._routes)

    const mountPoint = registeredPathes.find((currPath) => {
      const re = new RegExp(`^${path}($|?|/)`)
      return re.test(currPath)
    })

    if (mountPoint) {
      const { use } = this._routes[mountPoint]
      const useRequest = createRequest(req, { mountPoint })
      use(useRequest, res)
    } else {
      this.emit('error', new UnresolvedRequestError(req))
    }
  }
}
