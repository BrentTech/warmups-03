'use strict';

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let forLoop = (array) => {
  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

let whileLoop = (array) => {
  let count = 0;
  while(count <= array.length) {
    console.log(array[count]);
    count++;
  }
};

let mapper = (array, callback) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push( callback(array[i], i));
  }
  return newArray;
};

let filterer = (array, callback) => {
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const people = ['Kookla', 'Fran', 'Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda'],
};

let state = {};

let newPeople = ['Odie', ...people, 'Garfield'];

const newStuff = {...stuff, cars:[...stuff.cars, 'Chevy']};

let newState = {people: [...newPeople], stuff: {...newStuff}};

console.log('people', people);
console.log('new people', newPeople);
console.log('stuff', stuff);
console.log('new stuff', newStuff);
console.log('state', state);
console.log('new state', newState);

