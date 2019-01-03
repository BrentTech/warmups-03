'use strict';

const ll = require('../../../../data-structures-and-algorithms/linkedList/linked_list.js');

let list = new ll.LinkedList();
list.append('Brent');
list.append('Kristin');
list.append('Wicket');
list.append('Chewie');


let current = list.head;
while(current.next) {
  console.log(current.value);
  current = current.next;
};

console.log(current.value);
