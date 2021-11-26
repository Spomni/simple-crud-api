const { validate: isPersonId } = require('../../lib/uuid')
const crud = require('../../model/crud')

function getPerson(req, res) {

  const [ personId, nextChunk ] = parsePath(req)

  if (nextChunk) {
    resourceNotFoundView(req, res)
    return
  }

  if (personId === '') {
    const personList = crud.person.getAll()
    personView(req, res, { personList })
    return
  }

  if (!isPersonId(personId)) {
    invalidPersonIdView(req, res, { personId })
  }

  const person = crud.person.getById(personId)

  if (!person) {
    resourceNotFoundView(req, res)
    return
  }

  personView(req, res, { person })
}

module.exports = {
  getPerson,
}
