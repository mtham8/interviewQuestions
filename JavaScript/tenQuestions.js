/*
* Can you name two programming paradigms important for JavaScript app developers?

JavaScript is a multi-paradigm language, supporting imperative/procedural programming along with
OOP (Object-Oriented Programming) and functional programming. JavaScript supports OOP with prototypal inheritance (OLOO).
Functional programming: closures, first class functions, lambdas.
https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3#.20huvtsug
https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4#.w8kwtlc8i

*/

/*
* What is functional programming?

Functional programming produces programs by composing mathematical functions and avoids shared state & mutable data.
Functional programming allows pure functions, avoid side-effects, simple functional composition, first-class functions,
higher order functions, functions as arguments/values.

*/

/*
* What's the difference between classical inheritance and prototypal inheritance?

Class Inheritance: instances inherit from classes (like a blueprint - a description of the class), and create sub-class
relationships: hierarchical class taxonomies. Instances are typically instantiated via constructor functions with the 'new'
keyword. Class inheritance may or may not use the 'class' keyword from ES6.
Classes: create tight coupling or hierarchies/taxonomies

Prototypal Inheritance: instances inherit directly form other objects. Instances are typically instantiated via factory
functions or 'Object.create()'. Instances may be composed from many different objects, allowing for easy selective inheritance.
Prototypes: mentions of concatenative inheritance, prototype delegation, functional inheritance, object composition

*/

/*
* What are the pros and cons of functional programming vs object-oriented programming?

OOP Pros: It's easy to understand the basic concept of objects and east to interpret the meaning of method calls. OOP tend to use
and imperative style rather than a declarative style, which reads like a straight-forward set of instructions for the computer to follow.

OOP Cons: OOP typically depends on shared state. Object and behaviors are typically tacked together on the same entity, which may be
accessed at random by any number of functions with non-determinstic order, which may lead to undesirable behavior such as race conditions.

FP Pros: Using the functional paradigm, programmers avoid any shared state or side-effects, which eliminates bugs caused by multiple
functions competing for the same resources. With features such as the availability of point-free style, functions tend to be radically
simplified and easily recomposed for more generall reusable code compared to OOP.

FP also tends to favor declarative and denotational styles, which do not spell out step-by-step instructions for operations, but instead
concentrate on what to do, letting underlying functions take care of the how. This leaves tremendous latitude for refactoring and performance
optimization, even allow you to replace entire algorithms with more efficient ones with very little code change.

Computation that makes use of pure functions are also easy to scale across multiple processors, or across distributed computing clusters
without fear of threading resource conflicts, race conditions, etc.

*/

/*
* When is classical inheritance an appropriate choice?
*/

/*
* When is prototypal inheritance an appropriate choice?
*/

/*
* What does "favor object composition over class inheritance" mean?
*/

/*
* What are two-way data binding and one-way data flow, and how are they different?
*/

/*
* What are the pros and cons of monolithic and microservice architectures?
*/

/*
* What is asynchronous programming, and why is it important in JavaScript?
*/