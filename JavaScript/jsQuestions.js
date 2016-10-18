// JS Questions:

// What is a callback function?
/*
  A callback is a function that is passed as an argument to another function and is executed after
  its parent function has completed.
*/

// Explain event delegation
/*
  Event delegation allows you to avoid adding event listeners to specific nodes; instead, the event
  listener is added to one parent. That event listener analyzes bubbled events to find a match on child elements.
*/

// Explain how this works in JavaScript
/*
  http://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work
  this always refers to and holds the value of an object and is usually used inside a function or a method, but can
  also be used outside a function in the global scope.
  this is not assigned a value until an object invokes the function where this is defined. (call site vs call stack)
  the value this is assigned to is based exclusively on the object that invokes the function
*/

// Explain how prototypal inheritance works

// What do you think of AMD vs CommonJS?

// Explain why the following doesn't work as an IIFE: function foo(){ }();.

// What needs to be changed to properly make it an IIFE?

// What's the difference between a variable that is: null, undefined or undeclared?

// How would you go about checking for any of these states?

// What is a closure, and how/why would you use one?

// What's a typical use case for anonymous functions?

// How do you organize your code? (module pattern, classical inheritance?)

// What's the difference between host objects and native objects?

// Difference between: function Person(){}, var person = Person(), and var person = new Person()?

// What's the difference between .call and .apply?

// Explain Function.prototype.bind.

// When would you use document.write()?

// What's the difference between feature detection, feature inference, and using the UA string?

// Explain Ajax in as much detail as possible.

// What are the advantages and disadvantages of using Ajax?

// Explain how JSONP works (and how it's not really Ajax).

// Have you ever used JavaScript templating?

// If so, what libraries have you used?

// Explain "hoisting".

// Describe event bubbling.

// What's the difference between an "attribute" and a "property"?

// Why is extending built-in JavaScript objects not a good idea?

// Difference between document load event and document DOMContentLoaded event?

// What is the difference between == and ===?

// Explain the same-origin policy with regards to JavaScript.

// Make this work:
// duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
const duplicate = array => newArray = array.map(a => a).concat(array);

// Why is it called a Ternary expression, what does the word "Ternary" indicate?

// What is "use strict";? what are the advantages and disadvantages to using it?

// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

// Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?

// Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?

// Explain what a single page app is and how to make one SEO-friendly.

// What is the extent of your experience with Promises and/or their polyfills?

// What are the pros and cons of using Promises instead of callbacks?

// What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?

// What tools and techniques do you use debugging JavaScript code?

// What language constructions do you use for iterating over object properties and array items?

// Explain the difference between mutable and immutable objects.

// What is an example of an immutable object in JavaScript?

// What are the pros and cons of immutability?

// How can you achieve immutability in your own code?

// Explain the difference between synchronous and asynchronous functions.

// What is event loop?

// What is the difference between call stack and task queue?

// Explain the differences on the usage of foo between function foo() {} and var foo = function() {}
