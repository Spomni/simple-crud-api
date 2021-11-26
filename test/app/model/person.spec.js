describe('person', () => {

  describe('createPerson()', () => {
    it.todo('should return a new Person instance')
  })

  describe('Person', () => {
    
    describe('constructor()', () => {
      
      it.todo('should throw an error if options are not passed')
      it.todo('should throw an error if the id oprmtion is not valid')
      it.todo('should throw an error if the name option is not valid')
      it.todo('should throw an error if the age option is not valid')
      it.todo('should throw an error if the hobbies option is not valid')
      it.todo('should attach passed values to the matching properties of this')
      it.todo('should implement StorableInterface')
    })
    
    describe(`#id`, () => {
      it.todo('should has an id value')
      it.todo('should throw an error if passed value is not valid')
      it.todo(`should attach passed value if it is valid`)
    })
    
    describe(`#name`, () => {
      it.todo('should has a name value')
      it.todo('should throw an error if passed value is not valid')
      it.todo(`should attach passed value if it is valid`)
    })
    
    describe(`#age`, () => {
      it.todo('should has an age value')
      it.todo('should throw an error if passed value is not valid')
      it.todo(`should attach passed value if it is valid`)
    })
    
    describe(`#hobbies`, () => {
      it.todo('should has a hobbies value')
      it.todo('should throw an error if passed value is not valid')
      it.todo(`should attach passed value if it is valid`)
    })
    
    describe('#toPlain()', () => {
      it('should rerurn a plain object')
      it('should return object with properties corresponding to origina person instance')
    })
  })
  
  describe('isPerson()', () => {
    it.todo('should return true if passed value is an instance of Person')
    it.todo('should return false if passed value is not an instance of Person')
  })
})