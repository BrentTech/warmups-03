'use strict';

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function forLoop(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

function whileLoop(arr) {
  let count = 0;
  while(count < arr.length) {
    console.log(arr[count]);
    count++
  }
};

function filterer(arr, cb) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(cb(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function mapper(arr, cb) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i], i));
  }
  return newArr;
}

function reducer(arr, cb, acc) {
  for(let i = 0; i < arr.length; i++) {
    acc = cb(arr[i], i, acc);
  }
  return acc;
}

let state = {};
let people = ['Kookla', 'Fran', 'Ollie'];
let stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda'],
};

let newPoeple = ['Odie', ...people, 'Garfield'];
let newStuff = {...stuff, cars: [...stuff.cars, 'Jimmy']};
let newState = {people: [...newPeople], stuff: {...newStuff}};