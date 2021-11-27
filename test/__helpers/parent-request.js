const { PassThrough } = require('stream')

class ParentRequest extends PassThrough {

  constructor() {
    super()
    this.url = '/some/path/to'
  }
}

module.exports = {
  ParentRequest
}