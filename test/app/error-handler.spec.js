describe('error-handler', () => {

  describe('handleError()', () => {

    it.todo('should call resourceNotFoundView() if passed error is an instance of UnresolvedRequestError');
    it.todo('should call internalServerErrorView() if passed error is not an instance of UnresolvedRequestError');
    it.todo('should call the console.error() method with error if an application is in development mode');
    it.todo('should not log error if passed error is not an instance of UnresolvedRequestError ');
  });
});
