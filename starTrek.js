'use strict';

class _Node {
  constructor(value, next) {
    this.value = null;
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
    if (!this.top) {
      return (this.top = new _Node(value, null));
    }
    //if the top already has something then create a new node
    //add data to the new node
    // have the pointer point to the top
    let newNode = new _Node(value, this.top);
    this.top = newNode;
  }

  pop(value) {
    //in order to remove the top of the stack, you have to point
    //the pointer to the next item and that next item becomes the
    //top of the stack
    const node = this.top;
    this.top = node.next;
    return node.value;
  }
}
