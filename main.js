console.log("Hello World")

// var vs. let

console.log(x)
var x = 9

console.log(y)
let y = 8

//Primatives (Value Types)
//Number
let num = 7
//String
let str = 'Dustin'
//Bool (True or False)
let isCoding = true
//Null
let nothing
//Undefined
//Reference Types (objectTypes)
//Object
let obj = {}
//Array
let arr = []
//Function
//NaN

let name = 'Mark'
//String Concatination
console.log('Hello ' + name)

//String Interpolation
console.log(`Hello ${name}' I am ${15 + 15} years old`)

let user = {
  name: 'mark',
  age: 31,
  married: true,
  children: ['William', 'Alexander']
  pets: {
    dogs: ['Minnie'],
    cats: []
  }
}

console.log(`
Hello my name is ${ user.name},
    I am ${ user.age} years old.
I am ${ user.married ? 'married' : 'single'}
I have ${ user.childeren.length} children
I have ${ user.pets.dog.length} dogs.
I have ${ user.pets.cats.length} cats.
`)

//braket notation
console.log(user['name'])
let something = 'name'
//the only way to access an object vaue using a variable is bracket notation
console.log(user[something])


if (user.children.length > 3 || user.pets.dogs.length > 3) {
  console.log('NO VACATIONS FOR YOU')
}

//else if (URLSearchParams.children.length > 0) {
  //console.log('Enjoy your trip to Hawaii')
}

let health = 100;

switch (health) {
  case 100:
    console.log('off on your adventure')
    break;
  case 0:
    console.log('You\'re dead')
  default:
    break;
}