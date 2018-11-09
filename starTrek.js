'use strict';
const {peek, display} = require('./stackHelpers');
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

//stack
class StarTrek {
  constructor() {
    this.top = null;
  }

  push(value) {
    //if top of stack is empty the value is the top of the stack
    if (this.top === null) {
      return (this.top = new _Node(value, null));
    }
    //if the top already has something then create a new node
    //add data to the new node
    // have the pointer point to the top
    let newNode = new _Node(value, this.top);
    this.top = newNode;
  }

  pop() {
    //in order to remove the top of the stack, you have to point
    //the pointer to the next item and that next item becomes the
    //top of the stack
    const node = this.top;
    this.top = node.next;
    return node.value;
  }
}

(function main() {
  const stack = new StarTrek();
  stack.push('Kirk');
  stack.push('Spock');
  stack.push('McCoy');
  stack.push('Scotty');
  console.log(peek(stack));
  display(stack);
  stack.pop();
  stack.pop();
  display(stack);
})();
