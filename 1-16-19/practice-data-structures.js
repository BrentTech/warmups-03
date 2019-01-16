'use strict';

const ll = require('../../../../data-structures-and-algorithms/linkedList/linked_list.js');
const sAndQ = require('../../../../data-structures-and-algorithms/stacks_and_queues/stacks-and-queues.js');
const BinaryTree = require('../../../../data-structures-and-algorithms/tree/tree.js').BinaryTree;
const Node = require('../../../../data-structures-and-algorithms/tree/tree.js').BinaryTree;

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

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

let tree = new BinaryTree();
tree.root = a;
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// traversals

function runList(list) {
  let current = list.head;
  while(current) {
    console.log(current.value);
    current = current.next;
  }
}

function runStack(stack) {
  while(stack.top) {
    console.log(stack.peek());
    stack.pop();
  }
}

function runQueue(queue) {
  while(queue.front) {
    console.log(queue.peek());
    queue.dequeue();
  }
}

function runTree(tree) {
  let _walk = (node) => {
    console.log(node.value);
    if (node.left) { _walk(node.left); }
    if (node.right) { _walk(node.right); }
  };
  _walk(this.root);
}

runQueue(queue);
runStack(stack);
runList(list);
runTree(tree);