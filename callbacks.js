
// callback functions
const greetingConsole = (name) => {
  console.log(`Hello, ${name}`);
}

const greetingAlert = (name) => {
  alert(`Hello, ${name}`);
}

const greetingOnPage = (name) => {
  // Select the element we need from the page using id
  const greetingBoxElement = document.querySelector('#greetingBox')
  // add a greeting to the name
  const greeting = `Hello, ${name}`
  // put greeting into HTML Element
  greetingBoxElement.textContent = greeting
}
//////////////////////////////////////////////

// uses the callback
const processUserInput = (callback) => {
  const name = prompt("Please enter your name.");
  callback(name);
}


processUserInput(greetingConsole)
