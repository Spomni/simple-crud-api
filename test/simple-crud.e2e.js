const matchers = require('jest-extended')
expect.extend(matchers)

const request = require('supertest')

const { startServer } = require('../src/lib/start-server')
const uuid = require('../src/app/lib/uuid')
const { storage } = require('../src/app/model/storage')

const server = startServer()

const defaultPersonLike = {
  id: uuid.generate(),
  name: 'Joe',
  age: 42,
  hobbies: ['beer'],
}

function fillStorage(entityCount) {
  ;[...Array(entityCount)].forEach(() => {
    storage.push(Object.assign({}, defaultPersonLike, {
      id: uuid.generate(),
      name: uuid.generate(),
    }))
  })
}

function clearStorage() {
  storage.splice(0, storage.length)
}

describe('simple-crud-api', () => {

  beforeAll(async () => {
    await new Promise((resolve, reject) => {
      server.on('listening', () => resolve())
      server.on('close', () => resolve())
    })
  })

  afterAll(() => server.close())

  describe('/person', () => {

    describe('GET /person', () => {

      it('should return status "200 OK"', (done) => {

        request(server)
          .get('/person')
          .expect(200)
          .end(done)
      });

      it('should return empty array if there are no persons in the database', (done) => {

        request(server)
          .get('/person')
          .expect(({ body }) => {
            expect(body).toEqual([])
          })
          .end(done)
      });

      it('should return an array with all persons registered in database', (done) => {

        fillStorage(5)

        request(server)
          .get('/person')
          .expect(({ body }) => {
            expect(body).toEqual(storage)
          })
          .end((err) => {
            clearStorage()
            if (err) return done(err)
            done()
          })
      });
    });

    describe('GET /person/${personId}', (done) => {

      beforeAll(() => fillStorage(5))
      afterAll(() => clearStorage())

      it('should return status "200 OK"', (done) => {
        const personId = storage[0].id

        request(server).get(`/person/${personId}`)
          .expect(200)
          .end(done)
      });

      it('should return an object with person data', (done) => {
        const person = Object.assign({}, storage[0])

        request(server).get(`/person/${person.id}`)
          .set('Accept', 'application/json')
          .expect((res) => {
            expect(res.body).toEqual(person)
          })
          .end(done)
      });

      it('should return status "400 Bad Request" if personId is invalid', (done) => {

        request(server).get('/person/uuid')
          .expect(400)
          .end(done)
      });

      it('should return error message with body if response has status code 400', (done) => {

        request(server).get('/person/uuid')
          .expect((res) => {
            expect(res.text).toMatch('invalid person id')
          })
          .end(done)
      });

      it('should return status "404 Not Found" if person with passed id is not found', (done) => {

        const personId = uuid.generate()

        request(server).get(`/person/${personId}`)
          .expect(404)
          .end(done)
      });
    });

    describe('POST /person', () => {

      it('should return status "201 Created"', (done) => {

        request(server)
          .post('/person')
          .send(defaultPersonLike)

          .expect(201)

          .end(done)
      });

      it('should return an object with person data', (done) => {

        request(server)
          .post('/person')
          .send(defaultPersonLike)

          .expect(({ body }) => {

            expect(body).toBeObject()
            expect(uuid.validate(body.id)).toBe(true)

            const person = Object.assign({}, defaultPersonLike, { id: body.id })

            expect(body).toEqual(person)
          })

          .end(done)
      });

      it('should works correct if passed object has not a property "id"', (done) => {

        const person = Object.assign({}, defaultPersonLike)
        delete person.id

        request(server)
          .post('/person')
          .send(person)

          .expect(({ body }) => {

            expect(body).toBeObject()
            expect(uuid.validate(body.id)).toBe(true)

            person.id = body.id

            expect(body).toEqual(person)
          })

          .end(done)
      });

      describe('should return status "400 Bad Request" if some required property is invalid', () => {

        it.each([
          ['invalid name', { name: ['Pit', 'Max'] }],
          ['invalid age', { age: 'twenty one' }],
          ['invalid hobbies', { hobbies: 'video games' }],
        ])('%s', (caseName, extendWith, done) => {

          const person = Object.assign({}, defaultPersonLike, extendWith)

          request(server).post('/person')
            .send(person)
            .expect(400)
            .end(done)
        })
      });

      describe('should return error message with body', () => {

        it.each([
          ['invalid name', { name: ['Pit', 'Max'] }],
          ['invalid age', { age: 'twenty one' }],
          ['invalid hobbies', { hobbies: 'video games' }],
        ])('%s', (caseName, extendWith, done) => {

          const person = Object.assign({}, defaultPersonLike, extendWith)

          request(server).post('/person')
            .send(person)
            .expect('Content-Type', /text/)
            .expect((res) => {
              expect(res.text).toMatch(caseName)
            })
            .end(done)
        })
      });
    });

    describe('PUT /person/${personId}', () => {

      it.todo('should return status "200 OK"');
      it.todo('should return an object with person data');
      it.todo('should works correct if passed object contains only one required property');
      it.todo('should return status "400 Bad Request" if some required property is invalid');
      it.todo('should return error message with body');
      it.todo('should return status "404 Not Found" if person with passed id is not found');
    });

    describe('DELETE /person/${personId}', () => {

      it.todo('should return status "204 No Content"');
      it.todo('should return status "400 Bad Request" if some required property is invalid');
      it.todo('should return error message with body');
      it.todo('should return status "404 Not Found" if person with passed id is not found');
    });

    it.todo('should return status "500 Internal Server Error"');
    it.todo('should works after internal server error');
    it.todo('should return status "404 Not Found" if request to non-existent resource is passed');
  });
});
