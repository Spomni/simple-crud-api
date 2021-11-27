const { badRequestView } = require('../../view/400-bad-request-view')
const { resourceNotFoundView } = require('../../view/404-resource-not-found-view')
const { personUpdatedView } = require('../../view/person-updated-view')

const crud = require('../../model/crud')

async function updatePerson(req, res) {

  const body = await req.readBody()

  let person = null

  try {
    personLike = JSON.parse(body)

    person = crud.person.getById(personLike.id)

    if (!person) {
      resourceNotFoundView(req, res)
      return null
    }

    Object.assign(person, personLike)

    person = crud.person.update(person)

  } catch ({ message }) {
    badRequestView(req, res, { message })
    return null
  }

  personUpdatedView(req, res, { person })
  return person
}

module.exports = {
  updatePerson,
}
