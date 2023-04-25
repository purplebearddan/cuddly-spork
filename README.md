# Functions, ES6 and Scope

## Lesson Objectives

To Understand...

- Functions
- ES6 Arrow Functions
- Scope

## Intros

### Functions

In JavaScript, functions are objects that can be invoked to perform a specific task. They can be declared using the function keyword, and can take zero or more parameters as input. Functions can also return a value using the return keyword. Functions in JavaScript are often used for code reuse.

#### Functions Example

```js
// define a function called "greet"
function greet(name) {
  console.log("Hello, " + name + "!");
}

// "call" the "greet" function
greet("Alice");
greet("Bob");
```

##### Functions Example Output

```text
Hello, Alice!
Hello, Bob!
```

### ES6 Arrow Functions

ES6 introduced arrow functions, which are a shorthand way of writing functions in JavaScript. Arrow functions are anonymous functions that use the => syntax to define the function body. They also have a shorter syntax and an implicit return, which can make them more concise than traditional functions.

#### Arrow Function Example

```js
const multiply = (x, y) => {
  return x * y;
};

console.log(multiply(2, 3));
console.log(multiply(4, 5));
```

#### Arrow Function Example Output

```text
6
20
```

### Scope

Scope refers to the accessibility of variables in different parts of your code. There are two types of scope in JavaScript: global scope and local scope. Variables declared outside of any function have global scope and can be accessed from anywhere in your code. Variables declared inside a function have local scope and can only be accessed within that function.

#### Scope Example

```js
let globalVar = "I'm a global variable";

function myFunction() {
  let localVar = "I'm a local variable";
  console.log(localVar);
  console.log(globalVar);
}

myFunction();
console.log(globalVar);
```

##### Scope Example Output

```text
I'm a local variable
I'm a global variable
I'm a global variable
```

## Resources

### W3 Schools

- [Functions](https://www.w3schools.com/js/js_functions.asp)
- [JavaScript Arrow Function](https://www.w3schools.com/js/js_arrow_function.asp)
- [Scope](https://www.w3schools.com/js/js_scope.asp)
- [Callback Functions](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

### MDN Docs

- [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
