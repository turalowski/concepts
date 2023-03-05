## Concepts

1. [Execution Context](#1.-execution-context)
2. [Lexical Environment](#2.-lexical-environment)
3. [Hoisting](#3.-hoisting)
4. [Function Invocation vs Function expression](#4.-function-invocation-vs-function-declaration)
5. [Arguments keyword](#5.-arguments-keyword)
6. [Lexical environment vs Variable environment](#6.-lexical-environment-vs-variable-environment)
7. scope chain
8. function scope vs block scope
9. IIFE
10. this keyword
11. context vs scope

### 1. Execution Context

In JavaScript, an execution context is an internal data structure that contains information about the environment in which a piece of code is executed. It keeps track of the state of the code as it runs, including the values of variables, the current line of code being executed, and the scope chain.

Every time a function is called in JavaScript, a new execution context is created for that function. This execution context is then pushed onto the call stack, which keeps track of the order in which functions are called.

The execution context consists of three main components:

1. Variable Environment: This component contains all the variables and their current values that are available in the current scope. This includes function arguments, local variables, and any variables defined in the surrounding scope. The variable environment is used by the JavaScript engine to resolve variable references when executing the code.

2. Scope Chain: This component contains a reference to the outer scopes of the current function, which are used to resolve variable references when they cannot be found in the local variable environment. The scope chain is created when the function is defined and is based on the lexical scope of the code.

3. This Binding: This component contains a reference to the current value of the this keyword. The value of this depends on how the function is called and is determined at runtime.

The execution context is important for understanding how JavaScript code is executed, as it determines the scope and lifetime of variables and how they can be accessed. It is also used to handle exceptions and manage memory allocation during code execution.

### 2. Lexical environment

In JS lexical scope (available data + variables where the function was defined) determines our available variables. Not where the function is called (dynamic scope)

### 3. Hoisting

JavaScript has the concept of hoisting because it allows functions and variables to be declared before they are used in the code. This can make the code easier to read and write, especially for developers who are used to other programming languages that have similar features.

Hoisting in JavaScript works by moving variable and function declarations to the top of their respective scopes before the code is executed. This means that they can be used in the code before they are actually declared.

### 4. Function Invocation vs Function declaration

| Function declaration                                                                                                                                  | Function expression                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Function declarations are created at the top of their scope, which means that they can be called anywhere in the code, even before they are declared. | Function expressions are created when the code is run, which means that they cannot be called before they are defined.                               |
| They are defined using the function keyword followed by the function name and parameter list.                                                         | They are defined by assigning a function to a variable or constant, and they do not have to be named.                                                |
| They can be used to create named functions, which can make the code easier to read and understand.                                                    | They can be used to create anonymous functions, which can be useful for one-time use cases or for passing functions as arguments to other functions. |

**function declaration example:**

```js
function add(a, b) {
  return a + b;
}

console.log(add(1, 2));
```

**function expression example:**

```js
const add = function (a, b) {
  return a + b;
};

console.log(add(1, 2));
```

### 5. Arguments keyword

In JavaScript, the arguments keyword refers to an array-like object that contains all the arguments passed to a function. It allows a function to accept any number of arguments without having to define them in the function declaration.

The arguments object is automatically created by the JavaScript engine when a function is called. It is not a true array, but it behaves like one in that it has a length property and can be accessed using array syntax.

The arguments object is useful when the number of arguments passed to a function is not known in advance or when a function needs to be flexible in the number of arguments it can accept. It can be used to access individual arguments by index, to loop over all the arguments, or to pass arguments to another function.

Here is an example of how the arguments object can be used in a function:

```
function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3)); // Output: 6
```

In this example, the sum function accepts any number of arguments and uses the arguments object to loop over all the arguments and add them together. The function returns the total sum of all the arguments.

### 6. Lexical environment vs Variable environment

In JavaScript, the terms "variable environment" and "lexical environment" are often used interchangeably, but they actually refer to two different concepts.

A lexical environment is the set of variables and functions that are available in a certain area of the code based on where they are defined in the source code. This area is determined by the lexical structure of the code, which includes the scope chain and the order of variable and function declarations. In other words, a lexical environment is created by the way the code is written and does not change during runtime.

A variable environment, on the other hand, is the actual environment that is created when a function is executed. It contains all the variables and their values that are available in the current scope, including the function arguments, local variables, and any variables defined in the surrounding scope. The variable environment is used by the JavaScript engine to resolve variable references when executing the code.

In summary, a lexical environment is a theoretical construct that is created by the way the code is written, while a variable environment is a real object that is created at runtime when a function is executed. The lexical environment determines which variables and functions are available in a certain area of the code, while the variable environment contains the actual values of those variables and functions during execution.
