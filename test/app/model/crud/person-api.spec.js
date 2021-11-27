describe('person-api', () => {

  describe('getAll()', () => {
    it.todo('should return all stored persons');
    it.todo('should return empty array if storage is empty');
  });

  describe('getById()', () => {
    it.todo('should throw an error if passed id is not a valid person id');
    it.todo('should return a person object with passed id');
    it.todo('should return null if a storage does not contain person with passed id');
  });

  describe('create()', () => {
    it.todo('should throw an error if some field of passed value is an invalid person field');
    it.todo('should add person to the storage');
    it.todo('should should return new person object');
  });

  describe('delete()', () => {
    it.todo('should throw an error if passed id is not a valid person id');
    it.todo('should return null if a storage does not contain person with passed id');
    it.todo('should remove person with passed id from the storage');
  });
});