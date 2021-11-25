const { notImplementedView } = require('../../view/501-not-implemented-view')

const { getPerson } = require('./get-person')
const { addPerson } = require('./add-person')
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