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
accessed at random by any number of functions with non-determinstic order, which may lead to undesirable behavior such as race conditions -
different things competing for the same resources.

FP Pros: Using the functional paradigm, programmers avoid any shared state or side-effects, which eliminates bugs caused by multiple
functions competing for the same resources. With features such as the availability of point-free style, functions tend to be radically
simplified and easily recomposed for more generall reusable code compared to OOP.

FP also tends to favor declarative and denotational styles, which do not spell out step-by-step instructions for operations, but instead
concentrate on what to do, letting underlying functions take care of the how. This leaves tremendous latitude for refactoring and performance
optimization, even allow you to replace entire algorithms with more efficient ones with very little code change.

Computation that makes use of pure functions are also easy to scale across multiple processors, or across distributed computing clusters
without fear of threading resource conflicts, race conditions, etc.

FP Cons: Over exploitaton of FP features such as point-free style and large compositions can potentially reduce readability because the
resulting code is often more abstractly specified, more terse, and less concrete.

Highly OOP codebase can be extremely resistant to change and very brittle compared to an equivalent FP codebase.
Immutability gives rise to an extremely accessible and malleable program state history, allowing for easy addition of features like inifinite
undo/redo, rewind/replay, time-travel debugging. Immutability can be achieved in either paradigm, but a proliferation of shared stateful object
complicates the implementation in OOP.

*/

/*
* When is classical inheritance an appropriate choice?

Never* favor object composition over class inheritance.

*/

/*
* When is prototypal inheritance an appropriate choice?

When you need to compose objects from multiple sources.
Delegation: the protype chain
Concatenative: mixins, 'Object.assign()'
Functional: a function used to create a closure for private state/encapsulation

Each type of prototypal inheritance has its own set of use-cases, but all of them are equally useful in their ability to enable
composition, which creates has-a or uses-a or can-do relationships as opposed to the is-a relationship created with class inheritance.

*/

/*
* What does "favor object composition over class inheritance" mean?

It means that code reuse should be acheived by assembling smaller units of functionality into new objects instead of inheriting
from classes and creating object taxonomies.
In other words, use can-do, has-a, or uses-a relationships instead of is-a relationships.
Avoid class hierarchies, brittle base class problem, tight coupling, rigid taxonomy, gorilla banana problem, make code more flexible

*/

/*
* What are two-way data binding and one-way data flow, and how are they different?

Two way data binding means that UI fields are bound to model data dynamically such that when a UI field changes, the model data
changes with it and vice-versa.

One way data flow means that the model is the single souce of truth. Changes in the UI trigger messages that signal user intent to the
model (or 'store' in React). Only the model has the access to change the app's state. The effect is that data always flows in a single
direction, which makes it easier to understand.

One way data flows are deterministic, whereas two-way binding can cause side-effects which are harder to follow and understand.

React is an example of one-way data flow. Angular uses two-way binding.

*/

/*
* What are the pros and cons of monolithic and microservice architectures?

A monolithic architecture means that your app is written in one cohesive unit of code whose components are designed to work together,
sharing the same memory space and resouces.

A microservice architecture means that your app is made of lots of smaller, independent applications capable of running in their own memory
space and scaling independently from each other across potentially many seperate machines.

Monolithic Pros: A major advantage of the monolitic architecture is that more apps typically have a large number of cross-cutting concerns, such
as logging, rate limiting, and security features such audit trails and DOS protection. When everything is running through the same app, it's
easy to hook up components to those cross-cutting concerns. There can also be performance advantages, since shared-memory access is faster
than inter-process communication (IPC).

Monolithic Cons: Monolithic app services tend to get tightly coupled and entangles as the application evolves, making it difficult to
isolate services for purposes such as independent scaling or code maintainability. Monolitic architectures are also harder to understand,
because there are so many dependencies, side-effects, and magic which are not obvious when you're looking at a particulaer service or controller.

Microservice Pros: Microservice architectures are typically better organized, since each microservice has a very specific job, and is not
concerned with the jobs of other components. Decoupled services are also easier to recompose and reconfigure to serve the purposes of different
apps (for examply, serving both the web clients and public API). They can also have performance advantages depending on how they're
organized because it's possible to isolate hot services and scale them independent from the rest of the app.

Microservice Cons: As you're building a new microservice architecture, you'll likely to discover lots of cross-cutting concerns that you didn't
anticipate at design time. A monolithic app could establish shared magic helpers or middleware to handle such cross-cutting concerns without much effort.
In a microservice architecture, you'll either need to incur the overhead of separate modules for each cross-cutting concern, or encapsulate cross-
cutting concerns with another service layer that all traffic gets routed through.

Eventually, even monolithic architectures tend to route traffic through an outer service layer for cross-cutting concerns, but with a
monolithic archtecture, it's possible to delay the cost of that work until the project is much more mature. Microservices are frequently
deployed on their own virtual machines or containers, causing proliferation of VM wrangling work. These tasks are frequently automated
with container fleet management tools.

Good: Positive attitudes towards microservices, despite the higher initial cost vs monolithic apps. Aware that microservices tend to perform
and scale better in the long run. Practical about microservices vs monolithic apps. Structure the app so that services are independent from each
other at the code level, but easy to bundle together as monolithic app in the beginning. Microservice overhead costs can be delayed until it
becomes more practical to pay the price. Decouple monolithic apps such that they're easy to split into microservices when the time comes.

*/

/*
* What is asynchronous programming, and why is it important in JavaScript?

Synchronous programming means that, barring conditionals and function calls, code is executed sequentially from top-to-bottom, blocking on long-running
tasks such as network requests and disk I/O.

Asynchronous programming means that the engine runs in an event loop. When a blocking operation is needed, the request is started, and the code
keeps running without blocking for the result. When the response is ready, an interrupt is fired, which causes an event handler to be run,
where the control flow continues. In this way, a single program thread can handle many concurrent operations.

User interfaces are asynchronous by nature, and spend most of their time waiting for user input to interrupt the event loop and trigger
event handlers.

Node is asynchronous by default, meaning that the server works in much the same way, waiting in a loop for a network request, and accepting
more incoming requests while the first one is being handled. This is important in JavaScript, because it is a very natural fit for user
interface code, and very beneficial to performance on the server.
*/