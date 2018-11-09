'use strict';
const Stack = require('./stack');

function matchPar(data) {
  let parenStack = new Stack();
  let curlyStack = new Stack();
  let bracketStack = new Stack();
  let location = 0;

  for (let i = 0; i < data.length; i++) {
    location = i;
    //if it's opening tag then push to stack
    switch(data[i]) {
    case '(':
      parenStack.push(data[i]);
      break;
    case '{':
      curlyStack.push(data[i]);
      break;
    case '[':
      bracketStack.push(data[i]);
      break;
    // if it's closing tag then pop off last opening 
    case ')':
      if (!parenStack.top) {
        return location;
      }
      parenStack.pop();
      break;
    case '}':
      if (!curlyStack.top) {
        return location;
      }
      curlyStack.pop();
      break;
    case ']':
      if (!bracketStack.top) {
        return location;
      }
      bracketStack.pop();
      break;
    default:
      
      break;
    }
  }
  //if stack still has something in it return location
  if (parenStack.top || curlyStack.top || bracketStack.top) {
    return location + 1;
  }
}

console.log(matchPar('(({})]()')); // 5
console.log(matchPar('{{}[]()')); // 7
console.log(matchPar('}(())[]')); // 0

