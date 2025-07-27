🔍 What is a Closure?
A closure is a function that remembers the variables from its outer scope even after the outer function has finished executing.

💡 Why does this happen?
Because in JavaScript, functions are first-class citizens, and they capture the lexical scope in which they were defined.
This is known as lexical scoping — a function remembers where it was defined, not where it was called.

✅ Basic Example:
js

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
📌 What's Happening?
outer() returns the inner function.

Even after outer() finishes, inner() still remembers the variable count from its outer scope.

This is a closure — inner has closed over count.

🧠 Closure = Function + Lexical Environment
Every time a function is created, a closure is created that keeps track of:

The function definition.

The scope in which it was created (including variables from outer functions).

🔁 Another Example – Multiple Closures:
js

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1(); // 1
counter1(); // 2

counter2(); // 1
🧾 Observation:
counter1 and counter2 are two different closures.

They don’t share the same memory — each has its own count.

🔄 Common Interview Closure Example (with setTimeout):
js

for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// Prints: 4, 4, 4
❓ Why 4?
Because var is function-scoped, and there is only one i shared by all callbacks.

By the time setTimeout executes, the loop has ended and i is 4.

✅ Fix Using Closure:
js

for (var i = 1; i <= 3; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  })(i);
}
// Prints: 1, 2, 3
Or simply use let:

js

for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}