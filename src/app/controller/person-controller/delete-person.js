const { badRequestView } = require('../../view/400-bad-request-view')
const { resourceNotFoundView } = require('../../view/404-resource-not-found-view')
const { personDeletedView } = require('../../view/person-deleted-view')

const crud = require('../../model/crud')

async function deletePerson(req, res) {

  const body = await req.readBody()

  let person = null

  try {
    personLike = JSON.parse(body)

    person = crud.person.getById(personLike.id)

    if (!person) {
      resourceNotFoundView(req, res)
      return null
    }

    crud.person.delete(person)

  } catch ({ message }) {
    badRequestView(req, res, { message })
    return null
  }

  personDeletedView(req, res)
  return true
}

module.exports = {
  deletePerson,
}
