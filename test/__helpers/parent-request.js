const { PassThrough } = require('stream')

class ParentRequest extends PassThrough {

  constructor(url = '/some/path/to') {
    super()
    this.url = url
  }
}

module.exports = {
  ParentRequest
}