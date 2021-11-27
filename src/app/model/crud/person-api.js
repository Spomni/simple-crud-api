const { createStorage } = require('../storage')
const { createPerson } = require('../person')
const { validate: isPersonId } = require('../../lib/uuid')

const storage = createStorage()

function getAll() {
  return storage.map((personLike) => createPerson(personLike))
}

function getById(id) {

  if (!isPersonId(id)) {
    throw new InvalidPersonIdError(id)
  }

  return storage.find((personLike) => personLike.id === id)
}

function create(personLike) {
  const person = createPerson(personLike)
  storage.push(person)
  return createPerson(getById(person.id))
}

function update(personLike) {
  const person = getById(personLike.id)

  if (!person) return null

  const stored = storage.find((item) => item.id === person.id)
  Object.assign(stored, person)

  return createPerson(getById(person.id))
}

function remove({ id }) {
  const person = getById(id)

  if (!person) return null

  const index = storage.find((item) => item.id === person.id)
  storage.splice(index, 1)

  return true
}

module.exports = {
 getAll,
 getById,
 create,
 update,
 delete: remove,
}
