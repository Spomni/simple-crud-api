const { UnresolvedRequestError } = require('../../../contract/unresolved-request-error')

const { addPerson } = require('./add-person')
const { getPerson } = require('./get-person')
const { updatePerson } = require('./update-person')
const { deletePerson } = require('./delete-person')

const methodResolver = {
  get: getPerson,
  post: addPerson,
  put: updatePerson,
  delete: deletePerson,
}

function resolveRequestMethod(req) {
  const method = req.method.toLowerCase()
  return methodResolver[method]
}

function personController(req, res) {

  const { path } = req

  if (/^\/.+/.test(path)) {
    throw new UnresolvedRequestError(req)
  }

  const handleRequest = resolveRequestMethod(req)

  if (!handleRequest) {
    notImplementedView(req, res)
    return
  }

  handleRequest(req, res)
}

module.exports = {
  personController,
}