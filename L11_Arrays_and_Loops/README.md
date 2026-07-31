# Arrays & Loops (Part 1)

## Arrays

An **array** is another type of value that represents a **list of values**.

```javascript
const myArray = [10, 20, 30, 40];
console.log(myArray);
```

### Accessing Elements

Each value in an array has a **position**, called an **index**.

- Indexes start from **0**.

```javascript
const myArray = [10, 20, 30, 40];

console.log(myArray[0]); // 10

myArray[0] = 50;
console.log(myArray[0]); // 50
```

---

## Arrays Can Store Any Data Type

An array can contain different types of values.

```javascript
const mixedArray = [
  1,
  "Hello",
  true,
  { name: "Socks" },
  [1, 2]
];
```

Arrays can store:

- Numbers
- Strings
- Booleans
- Objects
- Other Arrays

---

## Arrays are Objects

```javascript
console.log(typeof [1, 2]); // object
```

An array is a **special type of object**.

To check if a value is an array:

```javascript
console.log(Array.isArray([1, 2])); // true
```

---

# Array Properties & Methods

## `length`

Returns the number of elements in the array.

```javascript
const myArray = [10, 20, 30, 40];

console.log(myArray.length); // 4
```

---

## `push()`

Adds one or more elements to the **end** of the array.

```javascript
const myArray = [10, 20, 30, 40];

myArray.push(100);

console.log(myArray);
// [10, 20, 30, 40, 100]
```

---

## `splice()`

Removes elements from an array.

### Syntax

```javascript
array.splice(startIndex, deleteCount);
```

Parameters:

1. **startIndex** → Index where removal starts.
2. **deleteCount** → Number of elements to remove.

Example:

```javascript
const myArray = [10, 20, 30, 40, 50];

myArray.splice(0, 2);

console.log(myArray);
// [30, 40, 50]
```

---

# Creating an HTML Element with JavaScript

```javascript
const paragraph = document.createElement("p");

paragraph.textContent = "Hello, World!";

document.body.appendChild(paragraph);
```

---

# Loops

Loops allow us to repeat code multiple times.

---

## While Loop

```javascript
let i = 1;

while (i <= 5) {
  console.log(i);
  i += 2;
}
```

Output:

```
1
3
5
```

---

## For Loop

```javascript
for (let i = 1; i <= 5; i += 2) {
  console.log(i);
}
```

Output:

```
1
3
5
```

---

## While vs For

There are two common loops in JavaScript.

### `for` Loop

- Standard loop
- Best when you know how many times to repeat

### `while` Loop

- Non-standard loop
- Best when the number of iterations is unknown

---

# Looping Through an Array

To process every element in an array:

```javascript
const todoList = [
  "make dinner",
  "wash dishes",
  "watch youtube"
];

for (let i = 0; i < todoList.length; i++) {
  console.log(todoList[i]);
}
```

Output:

```
make dinner
wash dishes
watch youtube
```

---

# Problem: Sum of an Array

Given:

```javascript
const numbers = [1, 2, 3];
```

How do we calculate the total?

---

# Accumulator Pattern

### Steps

1. Create a variable to store the result.
2. Loop through the array.
3. Update the result during each iteration.

```javascript
const numbers = [1, 2, 3];

let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

console.log(total); // 6
```

Output:

```
6
```

---

# Main Idea of JavaScript

JavaScript applications generally follow three steps:

1. **Save the data**
2. **Generate the HTML**
3. **Make the page interactive**

---

# Arrays & Loops (Part 2)

## Arrays are References

Arrays are **reference types**.

```javascript
const array1 = [1, 2, 3];
```

The variable `array1` does **not** store the actual array.

Instead, it stores a **reference (memory address)** to the array.

---

## Copying an Array Reference

```javascript
const array1 = [1, 2, 3];

const array2 = array1;
```

`array2` is **not a new array**.

It is another reference to the **same array**.

```javascript
array2.push(4);

console.log(array1); // [1, 2, 3, 4]
console.log(array2); // [1, 2, 3, 4]
```

Since both variables reference the same array, modifying one also changes the other.

---

## Creating a Copy of an Array

To create a **new copy** of an array, use `slice()`.

```javascript
const array1 = [1, 2, 3, 4];

const array3 = array1.slice();

array3.push(5);

console.log(array1); // [1, 2, 3, 4]
console.log(array3); // [1, 2, 3, 4, 5]
```

Now the arrays are independent.

---

## `slice()` vs `splice()`

Although their names are similar, they serve different purposes.

### `slice()`

- Creates a copy of an array (or part of an array).
- Does **not** modify the original array.

```javascript
const numbers = [1, 2, 3];

const copy = numbers.slice();

console.log(copy); // [1, 2, 3]
```

---

### `splice()`

- Adds or removes elements from an array.
- **Modifies** the original array.

```javascript
const numbers = [1, 2, 3, 4];

numbers.splice(1, 2);

console.log(numbers); // [1, 4]
```

---

# Array Destructuring

Destructuring is a shortcut for extracting values from an array.

```javascript
const [firstValue, secondValue, thirdValue] = [1, 2, 3];

console.log(firstValue); // 1
console.log(secondValue); // 2
console.log(thirdValue); // 3
```

---

# More About Loops

There are two useful keywords when working with loops.

## `break`

`break` exits a loop immediately.

## `continue`

`continue` skips the current iteration and moves to the next one.

Example:

```javascript
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    continue;
  }

  console.log(i);

  if (i === 8) {
    break;
  }
}
```

Output:

```
1
2
4
5
7
8
```

---

## Using `continue` in a `while` Loop

Be careful when using `continue` inside a `while` loop.

```javascript
let i = 1;

while (i <= 10) {
  if (i % 3 === 0) {
    i++; // Important!
    continue;
  }

  console.log(i);
  i++;
}
```

> **Note:** Always update the loop variable before `continue`; otherwise, the loop may become infinite.

---

# Using Loops Inside Functions

Loops are commonly used inside functions to process arrays.

Example: Double every number in an array.

```javascript
function doubleArray(nums) {
  const numsDoubled = [];

  for (let i = 0; i < nums.length; i++) {
    numsDoubled.push(nums[i] * 2);
  }

  return numsDoubled;
}

console.log(doubleArray([0, 1, 3]));
```

Output:

```
[0, 2, 6]
```

---

# Summary

In this lesson, you learned:

- Arrays are **reference types**.
- Copying an array variable copies the **reference**, not the array.
- Use `slice()` to create a copy of an array.
- `slice()` and `splice()` have different purposes.
- Use **array destructuring** to extract values easily.
- `break` exits a loop early.
- `continue` skips the current iteration.
- Be careful with `continue` inside `while` loops.
- Loops are commonly used inside functions to process arrays.