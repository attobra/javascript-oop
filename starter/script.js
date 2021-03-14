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
