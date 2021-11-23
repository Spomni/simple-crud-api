describe('router', () {

  describe('createRouter()', () => {
    it.todo('should return new instance of router')
  })
  
  describe('Router', () => {
    
    describe('constructor()', () => {
      
      it.todo('should return function')
      it.todo('should return instance of Router')
    })
    
    describe('#register()', () => {
      it.todo('should throw an error if an option "path" is not mount point')
      it.todo('should throw an error if an option "use" is not a function')
      it.todo('should throw an error if any leading part of path has been registered earlier')
      it.todo('should works with array of configs')
    })
    
    describe('instance()', () => {
      
      it.todo('should throw an UnresolvedRequestError instance if it has no requestered paths with request url')
      it.todo('should call registered callback for request with related path')
    })
  })
})
