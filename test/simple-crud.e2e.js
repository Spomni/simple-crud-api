describe('simple-crud-api', () => {

  describe('/person', () => {

    describe('GET /person', () => {
      it.todo('should return status "200 OK"');
      it.todo('should return empty array if there are no persons in the database');
      it.todo('should return an array with all persons registered in database');
    });

    describe('GET /person/${personId}', () => {

      it.todo('should return status "200 OK"');
      it.todo('should return an object with person data');
      it.todo('should return status "400 Bad Request" if personId is invalid');
      it.todo('should return error message with body');
      it.todo('should return status "404 Not Found" if person with passed id is not found');
    });

    describe('POST /person', () => {

      it.todo('should return status "201 Created"');
      it.todo('should return an object with person data');
      it.todo('should works correct if passed object has not a property "id"');
      it.todo('should return status "400 Bad Request" if some required property is invalid');
      it.todo('should return error message with body');
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
