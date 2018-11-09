'use strict';
const Stack = require('./stack');
const { peek, display } = require('./stackHelpers');

//input:  6 <- 3 <- 8 <- 2 <- 10
//output: 10 <- 8 <- 6 <- 3 <- 2

//input: a <- d <- k <- b <- e
//output: k <- e <- d <- b <- a

//new stack
//stackLarge save by using peek to .top
// currentLarge saved in a variable to compare to next number in stack
// when it loops to end push currentLargeNum to new stack

//FIXME: not working yet!
function sortStack(stack) {
  // create tempStack
  let tempStack = new Stack();
  // while stack.top is not empty
  while (stack.top) {
    //pop an element from input stack call it temp
    let temp = stack.pop();
    // while tempStack is not empty && top of tempStack is greater than temp
    while (tempStack.top && tempStack.top < temp) {
      //pop from tempStack and push it to input stack
      let thisOne = tempStack.pop();
      console.log(thisOne);
      stack.push(thisOne);
    }

    //push temp to tempStack
    tempStack.push(temp);
  }

  return tempStack;
}

(function main() {
  const stack = new Stack();
  stack.push(6);
  stack.push(3);
  stack.push(8);
  stack.push(2);
  stack.push(10);
  display(sortStack(stack));
})();
