function fromSrc(filename) {
  return global.testEnv.fromSrc(filename)
}

jest.mock(fromSrc('app/view/501-not-implemented-view'))
jest.mock(fromSrc('app/controller/person-controller/get-person'), () => ({
  getPerson: jest.fn(() => Promise.resolve())
}))
jest.mock(fromSrc('app/controller/person-controller/create-person'), () => ({
  createPerson: jest.fn(() => Promise.resolve())
}))
jest.mock(fromSrc('app/controller/person-controller/update-person'), () => ({
  updatePerson: jest.fn(() => Promise.resolve())
}))
jest.mock(fromSrc('app/controller/person-controller/delete-person'), () => ({
  deletePerson: jest.fn(() => Promise.resolve())
}))
jest.mock(fromSrc('app/error-handler'))

const { notImplementedView } = require(fromSrc('app/view/501-not-implemented-view'))
const { personController } = require(fromSrc('app/controller/person-controller'))
const { getPerson } = require(fromSrc('app/controller/person-controller/get-person'))
const { createPerson } = require(fromSrc('app/controller/person-controller/create-person'))
const { updatePerson } = require(fromSrc('app/controller/person-controller/update-person'))
const { deletePerson } = require(fromSrc('app/controller/person-controller/delete-person'))
const { handleError } = require(fromSrc('app/error-handler'))

describe('person-controller', () => {

  describe('personController()', () => {

    beforeAll(() => jest.clearAllMocks())

    it('should call notImplementedView() if a request has not implemented method', () => {

      const req = { method: 'CONNECT'}
      const res = {}

      personController(req, res)

      expect(notImplementedView).toHaveBeenCalledWith(req, res)
    });

    it('should call the getPerson() if a request method is "GET"', () => {

      const req = { method: 'GET'}
      const res = {}

      personController(req, res)

      expect(getPerson).toHaveBeenCalledWith(req, res)
    });

    it('should call the createPerson() if a request method is "POST"', () => {

      const req = { method: 'POST'}
      const res = {}

      personController(req, res)

      expect(createPerson).toHaveBeenCalledWith(req, res)
    });

    it('should call the updatePerson() if a request method is "PUT"', () => {

      const req = { method: 'PUT'}
      const res = {}

      personController(req, res)

      expect(updatePerson).toHaveBeenCalledWith(req, res)
    });

    it('should call the deletePerson() if a request method is "DELETE"', () => {

      const req = { method: 'DELETE'}
      const res = {}

      personController(req, res)

      expect(deletePerson).toHaveBeenCalledWith(req, res)
    });

    it('should call handle error if some resolver method is rejected', (done) => {

      const fixture = [
        ['GET', getPerson],
        ['POST', createPerson],
        ['PUT', updatePerson],
        ['DELETE', deletePerson],
      ]

      const error = new Error('test error')

      for (let [method, mock] of fixture) {
        mock.mockImplementation(() => Promise.reject(error))

        const req = { method }
        const res = {}

        personController(req, res)
      }

      setTimeout(() => {
        try {
          const calls = handleError.mock.calls

          calls.forEach(([req, res, rejected]) => {
            expect(rejected).toBe(error)
          })

          done()
        } catch (err) {
          done(err)
        }
      }, 100)
    });
  });
});
