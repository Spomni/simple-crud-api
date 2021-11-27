const { chainPrototype } = require('./chain-prototype')
const { isMountPoint } = require('../contract/mount-point')

function doesStartWith(string, part) {
  const re = new RegExp(`^${part}`)
  return re.test(string)
}

async function readRequestBody(req) {
  return new Promise((resolve, reject) => {

    let buffer = Buffer.from([])

    req.on('data', (data) => {
      buffer = Buffer.concat([buffer, data])
    })

    req.on('end', () => {
      resolve(buffer.toString())
    });
  })
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

    throw new Error('it is not implemented')
    this._body = null
  }

  get mountPoint() {
    return this._mountPoint
  }

  get path() {
    return this._path
  }

  async readBody() {
    throw new Error('it is not implemented')
    if (!this._body) {
      await this._readBody()
    }

    return this._body.toString()
  }

  async _readBody() {
    throw new Error('it is not implemented')
    return new Promise((resolve, reject) => {

      this._body = Buffer._from([])

      req.on('error', (error) => {
        this._body = null
        reject(error)
      })

      req.on('end', () => resolve());

      req.on('data', (data) => {
        this._body = Buffer.concat([this._body, data])
      })
    })
  }
}

function createRequest(parent, { mountPoint }) {
  return new Request(parent, { mountPoint })
}

module.exports = {
  Request,
  createRequest,
}