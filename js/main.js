// This is a single-line comment.

/*
This is a multi-line comment.
It can span across multiple lines.
*/

// Declare a variable
let message = "Hello from script.js!";

// Define a function
function greetUser(name) {
  return "Hello, " + name + "!";
}

// Get an HTML element by its ID
const heading = document.getElementById("myHeading");

// Modify the content of the HTML element
if (heading) {
  heading.textContent = message;
}

// Log a message to the console
console.log(greetUser("World"));

// Add an event listener to an element (if it exists)
const myButton = document.getElementById("myButton");
if (myButton) {
  myButton.addEventListener("click", function() {
    alert("Button clicked!");
  });
}