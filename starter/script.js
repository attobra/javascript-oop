'use strict';

const Person = function (firstName, birthYear) {
  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never create methods inside a constructor. Instead use prototype
  //   this.calcAge = function (){
  //       console.log(2021-this.birthYear)
  //   }
};

const jonas = new Person('Jonas', 1991);

//1. new empty object {} is created
//2. function is called, this = empty object {}
//3. empty object {} is linked to prototype
//4. function automatically return empty object {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);
console.log(jonas instanceof Person); //true

//prototype of the linked object
//not prototype of person, but prototye of matilda or jonas

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(jonas)); //true
console.log(Person.prototype.isPrototypeOf(matilda)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //FALSE

// you can add some properties in the prototype but not in the object itself
Person.prototype.species = 'homo Sapiens';
console.log(jonas.species);

console.log(jonas.hasOwnProperty('firstName')); //true

console.log(jonas.hasOwnProperty('species')); //FALSE
