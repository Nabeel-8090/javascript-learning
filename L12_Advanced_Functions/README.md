# Advanced Functions (Part 1)

## Functions are Values

In JavaScript, **functions are values**, just like:

- Numbers
- Strings
- Booleans
- Objects
- Arrays

This means we can store, pass, and return functions just like any other value.

---

## Storing a Function in a Variable

A function without a name is called an **anonymous function**.

```javascript
const function1 = function () {
  console.log("HELLO");
};

console.log(function1);
console.log(typeof function1); // function

function1(); // HELLO
```

---

## Function Declaration vs Function Expression

### Function Expression

```javascript
const greeting = function () {
  console.log("Hello");
};
```

### Function Declaration

```javascript
function greeting() {
  console.log("Hello");
}
```

The function declaration is essentially a shortcut for the function expression.

---

## Advantages of Function Declarations

```javascript
function greeting() {
  console.log("Hello");
}
```

Advantages:

1. Easier to read.
2. Supports **hoisting**.

---

## Hoisting

Function declarations are **hoisted**.

This means you can call the function **before** it is declared.

```javascript
greeting();

function greeting() {
  console.log("Hello");
}
```

Output:

```
Hello
```

---

# Functions as Object Properties

Since functions are values, they can be stored inside objects.

```javascript
const object1 = {
  num: 2,

  fun: function () {
    console.log("Hello");
  }
};

object1.fun();
```

Output:

```
Hello
```

A function stored inside an object is called a **method**.

---

# Passing Values to Functions

Functions can receive values through parameters.

```javascript
function display(param) {
  console.log(param);
}

display(2);
```

Output:

```
2
```

---

# Passing Functions to Functions

Since functions are values, they can also be passed as arguments.

```javascript
function run(param) {
  param();
}

run(function () {
  console.log("Hi");
});
```

Output:

```
Hi
```

The function passed as an argument is called a **callback function**.

---

# `setTimeout()`

`setTimeout()` allows us to run a function **once in the future**.

### Syntax

```javascript
setTimeout(callbackFunction, delayInMilliseconds);
```

Example:

```javascript
setTimeout(function () {
  console.log("timeout");
}, 3000);

console.log("next line");
```

Output:

```
next line
```

(After 3 seconds)

```
timeout
```

---

# Asynchronous vs Synchronous Code

## Synchronous Code

- Executes one line at a time.
- Waits for the current line to finish before moving to the next.

---

## Asynchronous Code

- Does **not** wait.
- Allows the program to continue executing while another task runs in the background.

`setTimeout()` is asynchronous.

### Advantage

It **doesn't block** the rest of your code while waiting.

---

# `setInterval()`

`setInterval()` is similar to `setTimeout()`, but it repeats continuously.

```javascript
setInterval(function () {
  console.log("interval");
}, 3000);

console.log("next line");
```

Output:

```
next line
```

Then every 3 seconds:

```
interval
interval
interval
...
```

---

## Stopping `setInterval()`

`setInterval()` returns an ID.

Use that ID with `clearInterval()` to stop it.

```javascript
const intervalId = setInterval(function () {
  console.log("Running...");
}, 1000);

clearInterval(intervalId);
```

---

# Another Way to Loop Through an Array

## `forEach()`

`forEach()` is another way to iterate over arrays.

```javascript
[1, 2, 3].forEach(function (value, index) {
  console.log(value, index);
});
```

Output:

```
1 0
2 1
3 2
```

Parameters:

- `value` → Current element.
- `index` → Position of the element.

---

## Why Use `forEach()`?

It is generally preferred because it is:

- Cleaner
- More readable
- Easier to write

---

## `continue` in `forEach()`

`forEach()` does **not** support `continue`.

Instead, use `return`.

```javascript
[1, 2, 3, 4].forEach(function (value) {
  if (value === 2) {
    return;
  }

  console.log(value);
});
```

Output:

```
1
3
4
```

---

## `break` in `forEach()`

`forEach()` does **not** support `break`.

If you need to exit the loop early, use a regular `for` loop instead.

```javascript
for (let i = 0; i < array.length; i++) {
  if (condition) {
    break;
  }
}
```

---

# Summary

In this lesson, you learned:

- Functions are values.
- Anonymous functions.
- Function expressions vs function declarations.
- Hoisting.
- Functions can be stored inside objects (methods).
- Functions can be passed as arguments (callback functions).
- `setTimeout()` executes a function once after a delay.
- `setInterval()` executes a function repeatedly.
- Difference between synchronous and asynchronous code.
- `clearInterval()` stops a repeating interval.
- `forEach()` provides a cleaner way to loop through arrays.
- `return` can replace `continue` in `forEach()`.
- Use a regular `for` loop when you need `break`.

---

# Advanced Functions (Part 2)

## Arrow Functions

Arrow functions provide a **shorter syntax** for writing functions.

They mostly work the same as regular functions.

### Regular Function

```javascript
const regularFunction = function (param1, param2) {
  console.log("Regular Function");
};

regularFunction();
```

### Arrow Function

```javascript
const arrowFunction = (param1, param2) => {
  console.log("Arrow Function");
};

arrowFunction();
```

---

# Differences Between Arrow Functions and Regular Functions

Arrow functions support several shortcuts that make the code shorter and cleaner.

---

## Arrow Function with One Parameter

If there is only **one parameter**, parentheses are optional.

```javascript
const oneParam = param => {
  console.log(param + 1);
};

oneParam(2); // 3
```

---

## One-Line Arrow Function

If the function contains only **one expression**, you can omit:

- Curly braces `{ }`
- `return` keyword

```javascript
const oneLine = () => 2 + 3;

console.log(oneLine()); // 5
```

This is called an **implicit return**.

---

# Arrow Functions as Callback Functions

Arrow functions are commonly used when passing functions into other functions.

Example:

```javascript
setTimeout(() => {
  console.log("Hello");
}, 1000);
```

---

# Arrow Functions in Objects

```javascript
const object2 = {
  method: () => {
    console.log("Arrow Function");
  },

  method2() {
    console.log("Method Shorthand");
  }
};
```

For object methods, the **method shorthand** is generally preferred.

```javascript
const object = {
  method() {
    console.log("Hello");
  }
};
```

---

# `addEventListener()`

`addEventListener()` lets us attach an event listener to an element.

HTML:

```html
<button class="clickBtn">Click</button>
```

JavaScript:

```javascript
const clickBtn = document.querySelector(".clickBtn");

const eventListener = () => {
  console.log("Click");
};

clickBtn.addEventListener("click", eventListener);
```

---

## Removing an Event Listener

Use `removeEventListener()`.

```javascript
clickBtn.removeEventListener("click", eventListener);
```

> **Note:** You can only remove a listener if you pass the **same function reference** that was originally added.

---

## Using an Anonymous Arrow Function

```javascript
clickBtn.addEventListener("click", () => {
  console.log("CLICK 2");
});
```

This works, but since the function has no variable reference, it **cannot be removed later** with `removeEventListener()`.

---

## Multiple Event Listeners

An element can have multiple event listeners.

```javascript
clickBtn.addEventListener("click", () => {
  console.log("First");
});

clickBtn.addEventListener("click", () => {
  console.log("Second");
});
```

When the button is clicked:

```
First
Second
```

Both event listeners execute.

---

# Array Methods

## `.filter()`

`filter()` creates a **new array** containing only the elements that satisfy a condition.

### How it works

1. Creates a new array.
2. Returns `true` → Element is added.
3. Returns `false` → Element is skipped.

```javascript
const result = [1, -3, 5].filter((value, index) => {
  return value >= 0;
});

console.log(result);
```

Output:

```
[1, 5]
```

---

# `.map()`

`map()` transforms each element of an array into a new value.

### How it works

1. Creates a new array.
2. Whatever is returned becomes the new element.

```javascript
const result = [1, 1, 3].map((value, index) => {
  return value + 10;
});

console.log(result);
```

Output:

```
[11, 11, 13]
```

---

# Shorter Arrow Function with `.map()`

```javascript
const result = [1, 1, 3].map(value => value + 10);

console.log(result);
```

Output:

```
[11, 11, 13]
```

---

# Closure

A **closure** means:

- A function remembers the variables it has access to.
- Even after the outer function has finished executing, those variables remain available.
- The variables are **enclosed** together with the function.

Conceptually:

```javascript
function outer() {
  const message = "Hello";

  return function () {
    console.log(message);
  };
}

const inner = outer();

inner(); // Hello
```

The inner function still has access to `message`, even though `outer()` has already finished executing.

---

# Summary

In this lesson, you learned:

- Arrow functions.
- Differences between arrow functions and regular functions.
- Arrow function shortcuts.
- Implicit return.
- Using arrow functions as callback functions.
- Object method shorthand.
- `addEventListener()` and `removeEventListener()`.
- Multiple event listeners.
- The `.filter()` array method.
- The `.map()` array method.
- Short arrow function syntax with `.map()`.
- Closures.