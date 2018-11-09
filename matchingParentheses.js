'use strict';
const Stack = require('./stack');

//input: "(()"
//if()
//output: 3 (index)
//input: "((())))()"
//output: 6 (index)

//if we find a close parentheses without an open - we've found the position and can return it
//if we reach end and we're missing the closing parentheses

//"(()"
//

function matchPar(data) {
  let stack = new Stack();
  let location = 0;

  for (let i = 0; i < data.length; i++) {
    location = i;
    //if there's a closing ) before any opening ( then return i
    //if it's opening ( then push to stack
    if (data[i] === '(') {
      stack.push('(');
    }
    // if it's closing ) then pop off last opening (
    if (data[i] === ')') {
      if (!stack.top) {
        return location;
      }
      stack.pop();
    }
  }
  console.log(stack);
  //if stack still has something in it return location
  if (stack.top) {
    return location + 1;
  }
}

console.log(matchPar('(()')); // 3
console.log(matchPar('((())))()')); // 6

// 0 1 2 3
// ( ( ) x

// 0 1 2 3 4 5 6
// ( ( ) ) ) ( )
