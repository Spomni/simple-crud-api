class Request {

  constructor(parent, { mountPoint }) {
    
    chainPrototype(this, parent, 1)
    
    const parentMountPoint = parent.mountPoint || ''

    this._mountPoint = parentMountPoint + mountPoint
    this._path = this.url.replace(mountPoint, '')
  }
}

function createRequest(parent, { mountPoint } = {}) {
  return new Request(parent, { mountPoint })
}

module.exports = {
  Request,
  createRequest,
}
