
const Stack = require('./stack');

// racecar => r<-a<-c<-e<-c<-a<-r
function isPalindrome(s) {
  const stack = new Stack();
  const str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  for(let c of str) {
    stack.push(c);
  }

  const half = Math.floor(str.length/2);
  for(let i=0; i<half; i++) {
    if(str[i] !== stack.pop()) {
      return false;
    }
  }
  return true;
}

// true, true, true
console.log(isPalindrome("dad"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("1001"));
console.log(isPalindrome("Tauhida"));