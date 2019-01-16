'use strict';

const ll = require('../../../../data-structures-and-algorithms/linkedList/linked_list.js');
const sAndQ = require('../../../../data-structures-and-algorithms/stacks_and_queues/stacks-and-queues.js');


let list = new ll.LinkedList();
list.append('Brent');
list.append('Kristin');
list.append('Wicket');
list.append('Chewie');

let stack = new sAndQ.Stack();
stack.push('Brent');
stack.push('Kristin');
stack.push('Wicket');
stack.push('Chewie');

let queue = new sAndQ.Queue();
queue.enqueue('Brent');
queue.enqueue('Kristin');
queue.enqueue('Wicket');
queue.enqueue('Chewie');

function runList(list) {
  let current = list.head;
  while(current) {
    console.log(current.value);
    current = current.next;
  }
}

function runStack(stack) {
  while(stack.top.next) {
    console.log(stack.peek());
    stack.pop();
  }
}

function runQueue(queue) {
  while(stack.front.next) {
    console.log(queue.peek());
    queue.dequeue();
  }
}

//getting infinite loop, hit my time though.

runQueue(queue);
runStack(stack);
runList(list);

