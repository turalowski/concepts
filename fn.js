/*
 =============
 Main conpects
 =============
1. Pure functions = same input -> same output && avoid side-effects
2. Idempotent = multiple calls will not change  the final result beyond its first iteration
3. Imperative vs Declarative = jquery vs react
4. Immutability = the state can't be changed
5. Higher Order Functions = function receives function as argument or return it
6. Closures = preserve variables from the outer scope
7. Currying = nested functions with single argument
8. Partial Application = 
9. Memoization = caching
10 Compose and Pipe = argument functions calling each other (f1, f2)(args) => f1(f2(args))
11. Arity = number of arguments

*/

/*
 ==================
   Pure function
 ==================

1. same input => same output (Idempotent)
2. no side-effects (mutating input, logging, http calls, writing to disk)
*/

{
  //Side effects:
  const array = [1, 2, 3];
  function mutateArray(arr) {
    arr.pop();
  }
  function mutateArray2(arr) {
    arr.forEach(item => arr.push(1));
  }
  //The order of the function calls will matter.
  mutateArray(array);
  mutateArray2(array);
}

/*
 ==================
 Imperative vs declarative
 ==================
/* The easiest way to explain the difference between declarative and imperative code, would be that 
 imperative code focuses on writing an explicit sequence of commands to describe how you want the computer to do things
 declarative code focuses on specifying the result of what you want. 
*/

/*
 ==================
    Immutability
 ==================

If you played with a toy, well, you shouldn't destroy it, you shouldn't change it, you should play

with it and then return it back to the school so that other kids can play with it, too.
 */
