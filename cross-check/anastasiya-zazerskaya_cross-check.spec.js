const matchers = require('jest-extended')
expect.extend(matchers)

// const Person = require('./src/models/person.model')

const request = require('supertest')
const app = 'localhost:3030'

function clone(source) {
  return Object.assign({}, source)
}

const defaultPerson = {
  name: 'Joe',
  age: 33,
  hobbies: ['some', 'hobbies'],
}

describe('cross-check', () => {

  describe('POST', () => {

    it('POST /person 201', async () => {

      const personToCreate = clone(defaultPerson)

      const res = await request(app).post('/person').send(personToCreate)

      expect(res.statusCode).toBe(201)
      expect(res.body.id).toBeString()

      const expectedPerson = Object.assign(personToCreate, { id: res.body.id })
      expect(res.body).toEqual(expectedPerson)
    });

    it.each([
      'name',
      'age',
      'hobbies',
    ])(`POST /person 400 (miss %s)`, async (prop) => {

      const personToCreate = clone(defaultPerson)
      delete personToCreate[prop]

      let res = null

      try {
        res = await request(app).post('/person').send(personToCreate)
      } catch (error) {
        console.log('error = ', error);
      }


      expect(res.statusCode).toBe(400)
      expect(res.text.length).toBeGreaterThan(0)
    });
  });

  describe('GET', () => {

    it(`GET /person`, async () => {

      await request(app).post('/person')
        .send(clone(defaultPerson))

      const res = await request(app).get('/person')

      expect(res.status).toBe(200)
      expect(res.body).toBeObject()
      expect(Object.keys(res.body).length).toBeGreaterThan(0)

      Object.entries(res.body).forEach(([id, person]) => {
        expect(id).toBeString()
        expect(person.id).toBe(id)
      })
    })

    it('GET /person/{personId} 200', async () => {
      const { body: personMap } = await request(app).get('/person')
      const person = Object.values(personMap)[0]

      const res = await request(app).get(`/person/${person.id}`)

      expect(res.statusCode).toBe(200)
      expect(res.body).toEqual(person)
    });

    it('GET /person/{personId} 400', async () => {
      const res = await request(app).get(`/person/uuid`)

      expect(res.statusCode).toBe(400)
      expect(res.text.length).toBeGreaterThan(0)
    });

    it('GET /person/{personId} 404', async () => {
      const { body: person } = await request(app).post('/person').send(defaultPerson)
      await request(app).delete(`/person/${person.id}`)

      const res = await request(app).get(`/person/${person.id}`)

      expect(res.statusCode).toBe(404)
      expect(res.text.length).toBeGreaterThan(0)
    });
  });

  describe('PUT', () => {

    it('PUT /person/{personId} 200', async () => {
      const { body: personMap } = await request(app).get('/person')
      const person = Object.values(personMap)[0]
      const personToUpdate = clone(person)

      personToUpdate.hobbies = ['beer']

      const res = await request(app).put(`/person/${person.id}`)
        .send(personToUpdate)

      expect(res.statusCode).toBe(200)
      expect(res.body).toEqual(personToUpdate)
    });

    it('PUT /person/{personId} 400', async () => {
      const res = await request(app).put(`/person/uuid`)

      expect(res.statusCode).toBe(400)
      expect(res.text.length).toBeGreaterThan(0)
    });

    it('PUT /person/{personId} 404',async  () => {

      const { body: person } = await request(app).post('/person').send(defaultPerson)
      await request(app).delete(`/person/${person.id}`)

      const res = await request(app).put(`/person/${person.id}`)
        .send(defaultPerson)

      expect(res.statusCode).toBe(404)
      expect(res.text.length).toBeGreaterThan(0)
    });
  });

  describe('DELETE', () => {

    it('DELETE /person/{personId} 204', async () => {
      const { body: personMap } = await request(app).get('/person')
      const person = Object.values(personMap)[0]

      const res = await request(app).delete(`/person/${person.id}`)

      expect(res.statusCode).toBe(204)

      const { body: updatedPersonMap } = await request(app).get('/person')
      const deletedPerson = Object.values(updatedPersonMap).find(({ id }) => {
        return id === person.id
      })

      expect(deletedPerson).toBe(undefined)
    });

    it('DELETE /person/{personId} 400', async () => {
      const res = await request(app).delete(`/person/uuid`)

      expect(res.statusCode).toBe(400)
      expect(res.text.length).toBeGreaterThan(0)
    });

    it('DELETE /person/{personId} 404', async () => {

      const { body: person } = await request(app).post('/person').send(defaultPerson)
      await request(app).delete(`/person/${person.id}`)

      const res = await request(app).delete(`/person/${person.id}`)

      expect(res.statusCode).toBe(404)
      expect(res.text.length).toBeGreaterThan(0)
    });
  });

  it.skip('500 Internal Server Error', async () => {

    // const mock = jest.spyOn(Person, 'findAll')
    //   .mockImplementation(() => {
    //     throw new Error('test error')
    //   })

    const res = await request(app).get('/person').timeout(2000)
console.log(res.text)
    expect(res.status).toBe(500)
    expect(res.text.length).toBeGreaterThan(0)

    // mock.mockReset()
  });

  it('human friendly 404', async () => {
    const res = await request(app).get('/some/non/existing/resource')

    expect(res.status).toBe(404)
    expect(res.text.length).toBeGreaterThan(0)
  });
});
