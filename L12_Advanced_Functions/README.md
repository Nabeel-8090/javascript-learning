# Advanced Functions

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