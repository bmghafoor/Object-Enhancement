function createInstructor(first,last){
    return {
        first,
        last
    }
}

const favNum = 27
const person = {
    first: 'bm',
    [favNum]: 'Thats my number'
}

const obj = {
    firstName: 'Bin',
    sayHi() {return 'hi'},
    saysbye() {return this.firstName + ' says bye'}
}

function createAnimal(species, verb, noise){
    return {
      species,
      [verb](){
        return noise;
      }
    }
  }