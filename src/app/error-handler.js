const { resourceNotFoundView } = require('./view/resource-not-found')
const { internalServerErrorView } = require('./view/internal-server-error')

function handleError(req, res, error) {

  if (isUnresolvedRequestError(error)) {
    resourceNotFoundView(req, res)
    return
  }

  internalServerErrorView(req, res)

  if (process.env.NODE_ENV === 'development') {
    console.error(error)
  }
}

module.exports = {
  handleError()
}
