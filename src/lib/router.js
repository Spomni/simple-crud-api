const { chainPrototype } = require('./chain-prototype')
const { isMountPoint } = require('../contract/mount-point')
const { UnresolvedRequestError } = require('../contract/unresolved-request-error')
const { createRequest } = require('./request')

function createRouterFunction() {
  function router(...args) {
    router._route(...args)
  }
  chainPrototype(router, Router.prototype, 0, { inject: true })

  return router
}

function isFunction(value) {
  return typeof value === 'function'
}

class Router {

  constructor() {
    const router = createRouterFunction()
    router._routes = {}
    return router
  }

  register(...routes) {
    routes.forEach(({ path, use }) => {

      if (!isMountPoint(path)) {
        throw new Error(`path "${path}" is not a valid mount point`)
      }

      if (!isFunction(use)) {
        throw new Error(`value of the option use is not a function`)
      }
      
      if (this._getRoute(path)) {
        throw new Error(`path starting with "${path}" has already been registered`)
      }

      this._routes[path] = { path, use }
    })
  }

  get pathes() {
    return Object.keys(this._routes)
  }

  _route(req, res) {

    const route = this._getRoute(req.path || req.url)

    if (!route) throw new UnresolvedRequestError(req)

    const reqOfUse = createRequest(req, { mountPoint: route.path })
  
    route.use(reqOfUse, res)
  }
  
  _getRoute(path) {
    const routes = Object.values(this._routes)

    return routes.find((route) => {
      const re = new RegExp(`^${route.path}`)
      return re.test(path)
    })
  }
}

function createRouter(...args) {
  return new Router(...args)
}

module.exports = {
  Router,
  createRouter,
}