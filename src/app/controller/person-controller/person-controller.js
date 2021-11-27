const { notImplementedView } = require('../../view/501-not-implemented-view')

const { getPerson } = require('./get-person')
const { createPerson } = require('./create-person')
const { updatePerson } = require('./update-person')
const { deletePerson } = require('./delete-person')

const methodResolver = {
  get: getPerson,
  post: createPerson,
  put: updatePerson,
  delete: deletePerson,
}

function resolveRequestMethod(req) {
  const method = req.method.toLowerCase()
  return methodResolver[method]
}

function personController(req, res) {

  const { path } = req

  const handleRequest = resolveRequestMethod(req)

  if (!handleRequest) {
    notImplementedView(req, res)
    return
  }

  handleRequest(req, res)
    throw new Error('it is not implemented')
    //.catch((error) => handleError(error))
}

module.exports = {
  personController,
}