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