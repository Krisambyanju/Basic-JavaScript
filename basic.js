// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");
// Here are some basic concepts and examples to get you started:
// Variables and Data Types:
// Variables are used to store data. JavaScript is dynamically-typed, meaning you don't need to specify the data type explicitly. You can use var, let, or const to declare variables.
 var name = "John"; // String
let age = 30;      // Number
const isStudent = true; // Boolean
console.log(name,age,isStudent)
// console output
// console.log()
// You can print messages to the browser console using console.log() for debugging and development purposes.
// JavaScript supports various operators for arithmetic, comparison, and logical operations
let x = 5;
let y = 2;

let sum = x + y;
let isGreater = x > y;
let isEqual = x === y;
console.log(sum,isGreater,isEqual)
// Conditional statements allow you to make decisions in your code based on certain conditions.
let num = 10;

if (num > 0) {
  console.log("The number is positive.");
} else if (num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}
// Loops are used to repeat a block of code until a certain condition is met.
for (let i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}
// while loop:
let count = 0;
while (count < 5) {
  console.log("Count: " + count);
  count++;
}
// Functions are reusable blocks of code that can be called with different inputs
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice");
greet("Bob");
// Arrays are used to store collections of data.
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // Output: "apple"
console.log(fruits.length); // Output: 3
// Objects are used to store data in key-value pairs.
let person = {
  name: "John",
  age: 30,
  isStudent: true,
};

console.log(person.name); // Output: "John"
// Event Handling:
// JavaScript allows you to respond to user interactions with event handling. You can add event listeners to elements to trigger specific functions when events like clicks, keypresses, or form submissions occur.
 let button = document.getElementById("myButton");

 button.addEventListener("click", function() {
 console.log("Button clicked!");
 });
// DOM Manipulation:
// The Document Object Model (DOM) is a representation of the HTML structure of a web page. JavaScript can interact with the DOM to modify HTML elements, styles, and content dynamically.
// Change text content of an element
let element = document.getElementById("myElement");
// This declares a variable named element using the let keyword. The variable will be used to store a reference to an HTML element.
//  This method retrieves an HTML element from the DOM using its unique id attribute. In this case, we are trying to get the element with the id of "myElement". If an element with the specified id is found, it will be stored in the element variable.
element.textContent = "New text content";
// The textContent property of an element allows us to access or modify the text content of the element. In this case, we are assigning the new text content, "New text content", to the element referenced by the element variable. This changes the visible text on the web page associated with the selected element.

// Add a new element to the page
 let newElement = document.createElement("p");
 newElement.textContent = "This is a new paragraph
// the textContent property allows us to set the text content of the newly created element. In this case, we set it to "This is a new paragraph."
/document.body.appendChild(newElement);
// This line appends the newElement (the new paragraph) as a child to the <body> element in the DOM. As a result, the newly created paragraph will be added to the end of the document's body, and it will be visible on the web page.
