// IIFE Example

// An IIFE is a function that is 
// defined and called on the same line.

// 
((a) => { console.log('input iife:', a) })("pop");

// you need to include ';' at the
const varName = "Hello";

(function () {
  console.log("I Run straight away")
  return "secret"
})();

console.log(varName);

(() => {
  console.log("arrow function")
})();

function nameOfFunction() {
  return true
}

nameOfFunction()

const nameOfArrowFunction = () => {
  return true
}
nameOfArrowFunction()