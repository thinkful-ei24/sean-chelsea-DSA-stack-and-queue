'use strict';

//turn list to array so we can console log
function display(list) {
  // Create return array
  let result = [];
  // Iterate through each list value
  let n = list.top;
  while (n) {
    // unshift each item to the result array
    result.unshift(n.value);
    n = n.next;
  }
  console.log(result);
}

module.exports = display;
