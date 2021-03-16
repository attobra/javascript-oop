'use strict';
/*
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

console.log(jonas.__proto__);

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

//we never create a method inside a constructor instead we create prototypes

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is accelerating at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is braking at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.accelerate();
mercedes.brake();
*/

//javascript classes
//you can write the method inside a class

class PersonCl {
  constructor(fullName, birthYear) {
    this.birthYear = birthYear;
    this.fullName = fullName;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  //we add an underscore to avoid any naming conflict.
  //with the constructor fullName.
  //we do that anytime we want to SET a property that already exist
  //we are creating a new full name so we have to add a getter too
  //FOR VALIDATION: is it a full name or not? then its good to use a setter/getter
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype); //TRUE

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

const walter = new PersonCl('Walter', 1965);

///GETTERS AND SETTERS

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

account.latest = 50;

console.log(account.latest);
