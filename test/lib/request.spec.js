describe('request', () => {
  
  describe('Request', () => {
  
    constructor(parent, { mountPoint }) {
      it.todo('Should throw an error if the parent mountPoint concatenated with passed one is not leading part of the parent property "url"')
    }

    describe('instance', () => {
      
      it.todo('Should be instance of Request')
      it.todo('Should not be the same instance passed to the constructor')
      it.todo('Should have passed request in the prototype chain')
      it.todo('Should have access to own properties')
      it.todo('Should have access to own prototype properties')
      it.todo('Should have access to properties of the request passed to the constructor')
    })

    describe('#mountPoint', () => {
      it.todo('Should be read only property')
      it.todo('Should trail a parent request property "mountPoint"')
      it.todo('Should not be a string containing double slashes')
      it.todo('Should has a value passed to the constructor if parent request has no property "mountPoint"')
    })
    
    describe('#path', () => {
      it('Should be a rest of parent url after excluding current mountPoint and query')
    })
  })

  describe('createRequest', () => {
    it.todo('Should call a Request constructor with passed values')
  })
})