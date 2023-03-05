/*
 =============
 Main conpects
 =============

1. How JS Engine works
2. Interpreters and compilers
3. Hidden classes + Inline caching
4. Call stack and Memory Heap
5. Stack overflow
6. Garbage Collection

How JS engine works
1. Pure JavaScript code is written by the developer.
2. The code is parsed into an Abstract Syntax Tree (AST) by the JavaScript parser.
3. Babel is used to analyze and modify the AST to transpile the modern JavaScript code into an older version.
4. The transpiled code, which is now in the form of older JavaScript code, is executed by the JavaScript interpreter in the browser or environment where it is being run.
5. Profiler checks JS code and looks for optimization ways.
6. Finally, a just-in-time (JIT) compiler or ahead-of-time (AOT) compiler may be used to optimize the code for performance.

Interpreters vs compilers

- An interpreter is a program that reads and executes code line by line, typically in a top-down fashion. When the interpreter encounters a line of code, it immediately executes that line, without any further processing. Interpreted code is generally easier to write and debug than compiled code, because the feedback loop is shorter - errors are detected immediately, and the programmer can quickly fix them.

- In contrast, a compiler is a program that takes code as input and translates it into a form that can be executed by the computer's processor. The compiler analyzes the code and generates an optimized version of the code that can run more efficiently. This optimized code is usually stored in a file, and can be executed repeatedly without needing to be recompiled.

*/
