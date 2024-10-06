## Explain event delegation.
Event delegation allows you to avoid adding event listeners to specific nodes; instead, the event listener is added to one parent. 
That event listener analyzes bubbled events to find a match on child elements. This is especially useful when you don't know how many child elements will be added, removed, or changed, because you don't need to manage the event listeners directly. 
This is often used to improve performance.

## Explain how `this` works in JavaScript.
The value of `this` is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called.
When a function is called, the `this` keyword refers to the object that the function is a property of. It has different values depending on where it is used:
- In a method, `this` refers to the owner object.
- Alone, `this` refers to the global object.
- In a function, `this` refers to the global object.

## Explain how prototypal inheritance works.
JavaScript is a prototype-based language, which means that objects can inherit properties directly from 
other objects. Each object has a private property which holds a link to another object called its prototype.
That prototype object has a prototype of its own, and so on until an object is reached with `null` as its prototype.

## What is the difference between a variable that is: null, undefined or undeclared?
- `null` is an assignment value. It can be assigned to a variable as a representation of no value.
- `undefined` means that the variable has been declared but has not yet been assigned a value.
- Undeclared variables are created when you assign a value to an identifier that is not previously created using `var`, `let`, or `const`.
- If you try to access an undeclared variable, a `ReferenceError` will be thrown.
- If you try to access a declared variable that has not been assigned a value, an `undefined` value will be returned.
- If a function does not return any value, it will return `undefined`.
- If a function does not have a `return` statement, it will return `undefined`.
- If you declare a variable without assigning any value to it, its default value will be `undefined`.
- If you declare a variable and do not assign a value to it, it will have the value of `undefined`.
- If you declare a variable without using the `var`, `let`, or `const` keyword, the variable will be created in the global scope.
- If you try to access an undeclared variable, JavaScript will throw a `ReferenceError` because it does not exist in any scope.
- If you try to access a variable that is in the temporal dead zone, a `ReferenceError` will be thrown.

## What is a closure, and how/why would you use one?
A closure is the combination of a function and the lexical environment within which that function was declared.
Closures are useful because they let you associate data with a function that operates on that data. This has a number of applications, such as:
- Data hiding: Closures can be used to hide data from the global scope.
- Encapsulation: Closures can be used to encapsulate private data.
- Partial application: Closures can be used to fix a number of arguments to a function, creating a new function that requires fewer arguments.
- Currying: Closures can be used to create a curried function from a function that takes multiple arguments.
- Memoization: Closures can be used to cache the results of a function call.
- Event handlers: Closures can be used to associate data with an event handler.
- Callbacks: Closures can be used to create callbacks that have access to the data they need.
- Iterators: Closures can be used to create iterators that have access to the data they need.
- Generators: Closures can be used to create generators that have access to the data they need.
- Promises: Closures can be used to create promises that have access to the data they need.
- Async/await: Closures can be used to create async functions that have access to the data they need.
- Thunks: Closures can be used to create thunks that have access to the data they need.
- Observables: Closures can be used to create observables that have access to the data they need.
- Streams: Closures can be used to create streams that have access to the data they need.
- Channels: Closures can be used to create channels that have access to the data they need.
- Transducers: Closures can be used to create transducers that have access to the data they need.
- Monads: Closures can be used to create monads that have access to the data they need.
- Functors: Closures can be used to create functors that have access to the data they need.
- Applicatives: Closures can be used to create applicatives that have access to the data they need.
- Monoids: Closures can be used to create monoids that have access to the data they need.
- Semigroups: Closures can be used to create semigroups that have access to the data they need.
- Categories: Closures can be used to create categories that have access to the data they need.
- Arrows: Closures can be used to create arrows that have access to the data they need.
- Lenses: Closures can be used to create lenses that have access to the data they need.
- Prisms: Closures can be used to create prisms that have access to the data they need.
- Isomorphisms: Closures can be used to create isomorphisms that have access to the data they need.
- Algebraic data types: Closures can be used to create algebraic data types that have access to the data they need.
- Pattern matching: Closures can be used to create pattern matching that has access to the data they need.
- Recursion: Closures can be used to create recursive functions that have access to the data they need.
- Tail recursion: Closures can be used to create tail recursive functions that have access to the data they need.
- Trampolines: Closures can be used to create trampolines that have access to the data they need.
- Lazy evaluation: Closures can be used to create lazy functions that have access to the data they need.

## What language constructions do you use for iterating over object properties and array items?
For iterating over object properties, you can use a `for...in` loop, `Object.keys()`, `Object.values()`, or `Object.entries()`.
For iterating over array items, you can use a `for` loop, `Array.prototype.forEach()`, `Array.prototype.map()`, `Array.prototype.filter()`, `Array.prototype.reduce()`, `Array.prototype.every()`, `Array.prototype.some()`, or `Array.prototype.find()`.
For iterating over both object properties and array items, you can use a `for...in` loop, `Object.keys()`, `Object.values()`, `Object.entries()`, `Array.prototype.forEach()`, `Array.prototype.map()`, `Array.prototype.filter()`, `Array.prototype.reduce()`, `Array.prototype.every()`, `Array.prototype.some()`, or `Array.prototype.find()`.

## Can you describe the main difference between the Array.forEach() loop and Array.map() methods and why you would pick one versus the other?
The `Array.forEach()` loop is used to iterate over an array and perform an action on each item in the array.
It does not return a new array, and it does not modify the original array. It is useful when you want to perform an action on each item in the array without creating a new array.
The `Array.map()` method is used to iterate over an array and create a new array with the results of calling a provided function on each item in the array.
It returns a new array, and it does not modify the original array. It is useful when you want to create a new array with the results of calling a function on each item in the array.

### Сan you describe other popular methods for iterating over arrays?
Other popular methods for iterating over arrays include `Array.prototype.filter()`, `Array.prototype.reduce()`, `Array.prototype.every()`, `Array.prototype.some()`, and `Array.prototype.find()`.
- `Array.prototype.filter()` is used to create a new array with all elements that pass a test implemented by the provided function.
- `Array.prototype.reduce()` is used to reduce an array to a single value by applying a function to each element in the array.
- `Array.prototype.every()` is used to check if all elements in an array pass a test implemented by the provided function.
- `Array.prototype.some()` is used to check if at least one element in an array passes a test implemented by the provided function.
- `Array.prototype.find()` is used to return the value of the first element in an array that passes a test implemented by the provided function.
- `Array.prototype.findIndex()` is used to return the index of the first element in an array that passes a test implemented by the provided function.
- `Array.prototype.includes()` is used to check if an array includes a certain element, returning `true` or `false` as appropriate.
- `Array.prototype.indexOf()` is used to return the first index at which a given element can be found in the array, or `-1` if it is not present.
- `Array.prototype.lastIndexOf()` is used to return the last index at which a given element can be found in the array, or `-1` if it is not present.
- `Array.prototype.keys()` is used to return a new array iterator that contains the keys for each index in the array.
- `Array.prototype.values()` is used to return a new array iterator that contains the values for each index in the array.
- `Array.prototype.entries()` is used to return a new array iterator that contains the key/value pairs for each index in the array.
- `Array.prototype.flat()` is used to create a new array with all sub-array elements concatenated into it recursively up to the specified depth.
- `Array.prototype.flatMap()` is used to first map each element using a mapping function, then flatten the result into a new array.
- `Array.prototype.sort()` is used to sort the elements of an array in place and return the sorted array.
- `Array.prototype.reverse()` is used to reverse the elements of an array in place and return the reversed array.

## What is a typical use case for anonymous functions?
Anonymous functions are often used as arguments to other functions, such as event handlers, callbacks, and higher-order functions.
They are also used to create closures, which can be used to encapsulate private data and create reusable functions.
They are useful when you need to create a function that is only used once or when you need to create a function that does not need a name.

## What is the difference between event.preventDefault() and event.stopPropagation()?
- `event.preventDefault()` is used to prevent the default action of an event from occurring. For example, if you call `event.preventDefault()` on a `click` event, the default action of following a link will not occur.
- `event.stopPropagation()` is used to stop the propagation of an event through the DOM. For example, if you call `event.stopPropagation()` on a `click` event, the event will not bubble up to parent elements.
- `event.stopImmediatePropagation()` is used to stop the propagation of an event through the DOM and prevent other event handlers on the same element from being executed.

## What is the difference between event.target and event.currentTarget?
- `event.target` is the element that triggered the event. It is the element that the event listener is attached to.
- `event.currentTarget` is the element that the event listener is attached to. It is the element that the event is currently being processed on.
- `event.target` can be different from `event.currentTarget` if the event is bubbling up the DOM tree.
- `event.target` is the element that the event originated from, while `event.currentTarget` is the element that the event is currently being processed on.

## Discuss how you might use Object-Oriented Programming principles when coding with JavaScript.
Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects," which can contain data in the form of fields (properties) and code in the form of procedures (methods).
JavaScript is a prototype-based language, which means that objects can inherit properties directly from other objects. Each object has a private property which holds a link to another object called its prototype. 
That prototype object has a prototype of its own, and so on until an object is reached with `null` as its prototype.
OOP principles can be applied in JavaScript using constructor functions, classes, and prototypes.
- Encapsulation: OOP allows you to encapsulate data and behavior within objects, which helps to keep the code organized and maintainable.
- Abstraction: OOP allows you to abstract away the details of how an object works, which makes it easier to work with complex systems.
- Inheritance: OOP allows you to create new objects that inherit properties and methods from existing objects, which helps to reduce code duplication and improve code reuse.
- Polymorphism: OOP allows you to create objects that can be used interchangeably, which makes it easier to work with different types of objects.
- Composition: OOP allows you to compose objects from other objects, which helps to build complex systems from simple parts.

## What is a promise? Where and how would you use promise?
A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
Promises are used to handle asynchronous operations in JavaScript, such as fetching data from a server, reading a file, or waiting for a timer to finish.
Promises have three states: `pending`, `fulfilled`, and `rejected`.
Promises can be created using the `Promise` constructor, which takes a function as an argument with two parameters: `resolve` and `reject`.
Promises can be consumed using the `then()` method, which takes two optional callback functions as arguments: `onFulfilled` and `onRejected`.
Promises can be chained using the `then()` method, which returns a new promise that resolves to the return value of the callback function.
Promises can be caught using the `catch()` method, which takes a callback function as an argument that handles any errors that occur during the asynchronous operation.
Promises can be used to handle multiple asynchronous operations in parallel using `Promise.all()`, which takes an array of promises as an argument and returns a new promise that resolves when all the promises have resolved.
Promises can be used to handle multiple asynchronous operations in sequence using `Promise.allSettled()`, which takes an array of promises as an argument and returns a new promise that resolves when all the promises have settled (either fulfilled or rejected).
Promises can be used to handle the first asynchronous operation that resolves or rejects

## What is the difference between while and do-while loops in JavaScript?
- The `while` loop is used to execute a block of code as long as a condition is true. The condition is evaluated before the execution of the block of code.
- The `do-while` loop is used to execute a block of code as long as a condition is true. The condition is evaluated after the execution of the block of code.

## Why you might want to create static class members?
Static class members are shared across all instances of a class and can be accessed without creating an instance of the class.
They are useful for defining properties and methods that are common to all instances of a class and do not change from one instance to another.
They are also useful for defining utility functions that do not require access to instance-specific data.

## Can you give an example of a curry function and why this syntax offers an advantage?
Currying is the process of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.
Currying allows you to create reusable functions with partial application of arguments, which can be useful for creating higher-order functions and function composition.
Currying can be implemented using a closure that captures the arguments passed to the function and returns a new function that takes the remaining arguments.

## What advantage is there for using the arrow syntax for a method in a constructor?
The arrow syntax for a method in a constructor allows you to define a method that does not have its own `this` context.
This can be useful when you want to access the `this` context of the constructor inside the method, or when you want to avoid the overhead of creating a new `this` context for each instance of the class.

## What is the definition of a higher-order function?
A higher-order function is a function that takes one or more functions as arguments or returns a function as its result.
Higher-order functions are used to create abstractions, compose functions, and build complex systems from simple parts.
They are useful for creating reusable functions, implementing function currying, and creating function decorators.

## What is the definition of a pure function?
A pure function is a function that has the following properties:
- Its return value is determined only by its input values, without observable side effects.
- It does not modify the state of the program or the external world.
- It does not depend on the state of the program or the external world.
- It does not produce any side effects, such as modifying a global variable or logging to the console.
- It is idempotent, meaning that calling the function with the same input values will always produce the same output value.
- It is referentially transparent, meaning that calling the function with the same input values can be replaced with its return value without changing the behavior of the program.
- It is deterministic, meaning that calling the function with the same input values will always produce the same output value.
- It is composable, meaning that it can be combined with other pure functions to create new functions.

## What is the difference between == and ===?
- The `==` operator is used to compare two values for equality, but it does not check for type equality. It performs type coercion before comparing the values.
- The `===` operator is used to compare two values for strict equality, which means that the values must be of the same type and have the same value.

## What is the difference between an “attribute” and a “property”?
- An attribute is a key-value pair that is associated with an HTML element and is defined in the HTML markup.
- A property is a key-value pair that is associated with a JavaScript object and is defined in the JavaScript code.
- Attributes are defined in the HTML markup using the `attribute="value"` syntax.
- Properties are defined in the JavaScript code using the `object.property = value` syntax.
- Attributes are used to set initial values for an element, while properties are used to get and set the current values of an element.

## Explain the same-origin policy in regard to JavaScript.
The same-origin policy is a security feature in web browsers that restricts how a document or script loaded from one origin can interact with a resource from another origin.
The same-origin policy prevents a script from one origin from reading or modifying the properties of a document from another origin.
The same-origin policy is enforced by the browser to prevent cross-site scripting attacks, where a malicious script from one origin can access sensitive data from another origin.

## How can you share code between files?
Code can be shared between files using modules, which are reusable pieces of code that can be imported and exported between files.
Modules can be defined using the `export` and `import` keywords, which allow you to export functions, classes, and variables from one file and import them into another file.
Modules can be used to organize code into separate files, improve code reusability, and reduce code duplication.

## What is an immediately invoked function expression (IIFE). Include an example.
An immediately invoked function expression (IIFE) is a function that is defined and executed in the same expression.
It is used to create a new scope for variables and functions, which helps to avoid naming conflicts and polluting the global scope.
It is also used to create private variables and functions that are not accessible from outside the function.
An IIFE is defined using the following syntax: `(function() { /* code */ })();`
An example of an IIFE is: `(function() { console.log('Hello, world!'); })();`

## What will be returned by each of these?
```javascript
console.log("hello" || "world");
console.log("foo" && "bar");
```
- The `||` operator returns the first truthy value, or the last value if all values are falsy. In this case, `"hello"` is a truthy value, so it will be returned.
- The `&&` operator returns the first falsy value, or the last value if all values are truthy. In this case, both `"foo"` and `"bar"` are truthy values, so the last value, `"bar"`, will be returned.