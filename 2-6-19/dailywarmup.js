'use strict';

let arr = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10];

let forLoop = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

function whileLoop(arr) {
  let counter = 0;
  while(counter < arr.length) {
    console.log(arr[counter]);
    counter++;
  }
};

let mapper = (arr, cb) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i], i));
  }
  return newArr;
}

function filterer(a, c) {
  let nA = [];
  for (let i = 0; i < a.length; i++) {
    if(c(a[i], i)) {
      nA.push(a[i]);
    }
  }
  return nA;
};

let reducer = (arr, cb, acc) => {
  for(let i = 0; i < arr.length; i++) {
    acc = cb(arr[i], i, acc);
  }
  return acc;
};

let state = {};
let people = ['Kookla', 'Fran', 'Ollie'];
let stuff = {
  tv: 'huge',
  radio: 'broken',
  toothbrush: 'in use',
  cars: ['Toyota', 'Mazda'],
};

let newPeople = ['Odie', ...people, 'Garfield'];
let newStuff = {...stuff, cars: [...stuff.cars, 'Saturn']};
let newState = {people: [...newPeople], stuff: {...newStuff}};

console.log('people', people);
console.log('state', state);
console.log('stuff', stuff);
console.log('new people', newPeople);
console.log('new stuff', newStuff);
console.log('new state', newState);
