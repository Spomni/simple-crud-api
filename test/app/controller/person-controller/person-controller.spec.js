jest.mock('../../../../src/app/view/501-not-implemented-view')
jest.mock('../../../../src/app/controller/person-controller/get-person')
jest.mock('../../../../src/app/controller/person-controller/add-person')
jest.mock('../../../../src/app/controller/person-controller/update-person')
jest.mock('../../../../src/app/controller/person-controller/delete-person')

const { notImplementedView } = require('../../../../src/app/view/501-not-implemented-view')
const { personController } = require('../../../../src/app/controller/person-controller')
const { getPerson } = require('../../../../src/app/controller/person-controller/get-person')
const { addPerson } = require('../../../../src/app/controller/person-controller/add-person')
const { updatePerson } = require('../../../../src/app/controller/person-controller/update-person')
const { deletePerson } = require('../../../../src/app/controller/person-controller/delete-person')

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

    it('should call the addPerson() if a request method is "POST"', () => {

      const req = { method: 'POST'}
      const res = {}

      personController(req, res)

      expect(addPerson).toHaveBeenCalledWith(req, res)
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
  });
});
