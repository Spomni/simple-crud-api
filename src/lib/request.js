const { chainPrototype } = require('./chain-prototype')
const { isMountPoint } = require('../contract/mount-point')

function doesStartWith(string, part) {
  const re = new RegExp(`^${part}`)
  return re.test(string)
}

class Request {

  constructor(parent, { mountPoint }) {
  
    if (!isMountPoint(mountPoint)) {
      throw new TypeError(`${mountPoint} is not valid mountPoint`)
    }
    
    if (parent.mountPoint && mountPoint === '/') {
      throw new Error('new mountPoint must not be equal to parent one')
    }
    
    chainPrototype(this, parent, 1)

    this._mountPoint = (parent.mountPoint && parent.mountPoint !== '/')
      ? parent.mountPoint + mountPoint
      : mountPoint

    if (!doesStartWith(parent.url, this._mountPoint)) {
      throw new Error('new mount point is not part of parent url')
    }

    this._path = this.url
      .replace(mountPoint, '')  // remove mountPoint
      .replace(/((\?)|(\/\?)).*$/, '') // remove query and trailing slash
  }

  get mountPoint() {
    return this._mountPoint
  }
  
  get path() {
    return this._path
  }
}

function createRequest(parent, { mountPoint } = {}) {
  return new Request(parent, { mountPoint })
}

module.exports = {
  Request,
  createRequest,
}