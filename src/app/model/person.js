const { validate: isPersonId } = require('../../lib/uuid')

class Person extends StorableInterface {
  
  constructor({ id, name, age, hobbies }) {
    this._id = id
    this._name = name
    this._age = age
    this._hobbies = hobbies
  }
  
  get id() { return this._id }
  set id(value) {
    if (!isPersonId(value)) {
      throw new InvalidPersonIdError(value)
    }
    this._id = value
  }
  
  get name() { return this._name }
  set name(value) {
    if (!isPersonName(value)) {
      throw new InvalidPersonNameError(value)
    }
  }
  
  get age() { return this._age }
  set age(value) {
    if (!isPersonAge(value)) {
      throw new InvalidPersonAgeError(value)
    }
  }
  
  get hobbies() { return this._hobbies }
  set hobbies(value) {
    if (!isPersonHobbies(value)) {
      throw new InvalidPersonHobbiesError(value)
    }
  }

  toPlain() {
    const { id, name, age, hobbies } = this
    return { id, name, age, hobbies }
  }
}

function createPerson(...args) {
  return new Person(...args)
}

function isPerson(value) {
  return value instanceof Person
}

module.exports = {
  Person,
  createPerson,
  isPerson,
}
