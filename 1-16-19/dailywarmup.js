'use strict';

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let forLoop = (array) => {
  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

forLoop(arr);

let whileLoop = (array) => {
  let count = 0;
  while(count <= array.length) {
    console.log(array[count]);
    count++;
  }
};

whileLoop(arr);

let mapper = (array, callback) => {
  let newArr = [];
  for(let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};

let filterer = (array, callback) => {
  let newArr = [];
  for(let i = 0; i < array.length; i++) {
    if(callback(array[i], i)) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};

let reducer = (array, callback, acc) => {
  for(let i = 0; i < array.length; i++) {
    acc = callback(array[i], i, acc);
  }
  return acc;
};

let state = {};
let people = ['Kookla', 'Fran', 'Ollie'];
let stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda'],
};

let newPeople = ['Odie', ...people, 'Garfield'];
let newStuff = {...stuff, cars:[...stuff.cars, 'Fit']};
let newState = {people: [...newPeople], stuff: {...newStuff}};

console.log('people', people);
console.log('state', state);
console.log('stuff', stuff);
console.log('new people', newPeople);
console.log('new stuff', newStuff);
console.log('new state', newState);
