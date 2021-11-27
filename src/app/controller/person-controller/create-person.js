async function createPerson(req, res) {
  const body = await req.readBody()
  let person = null

  try {
    personLike = JSON.parse(body)
    crud.person.create(personLike)
  } catch ({ message }) {
    badRequestView(req, res, { message })
    return
  }

  personCreatedView(req, res, { person })
}

module.exports = {
  createPerson,
}
