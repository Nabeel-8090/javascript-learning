# JavaScript Objects

## What is an Object?

An **object** groups multiple related values together.

```javascript
const product = {
    name: 'Socks',
    price: 1090
};

console.log(product);
console.log(product.name);
console.log(product.price);
console.log(typeof product);

product.name = 'Cotton Socks';
console.log(product);

product.newProperty = true;
console.log(product);

delete product.newProperty;
console.log(product);
```

---

# Why Do We Use Objects?

Objects help make our code:

- More organized
- Easier to read
- Easier to maintain

---

# Accessing Object Properties

There are two ways to access object properties:

## 1. Dot Notation (Recommended)

Use dot notation by default.

```javascript
product.name
```

---

## 2. Bracket Notation

Use bracket notation when:

- Property names contain spaces or special characters
- Property names are stored in variables

```javascript
const product2 = {
    name: 'Shirt',
    'delivery-time': '1 day'
};

console.log(product2.name);
console.log(product2['name']);

console.log(product2['delivery-time']);
```

❌ This will not work:

```javascript
product2.delivery-time;
```

JavaScript interprets `-` as the subtraction operator.

---

# Objects Can Store Any Data Type

Objects can contain:

- Strings
- Numbers
- Booleans
- Arrays
- Objects
- Functions

---

## Nested Objects

Objects can contain other objects.

```javascript
const product2 = {
    name: 'Shirt',

    rating: {
        stars: 4.5,
        count: 87
    }
};

console.log(product2.rating.count);
```

---

## Functions Inside Objects (Methods)

Objects can also store functions.

```javascript
const product2 = {
    fun: function function1() {
        console.log('Function inside object');
    }
};

product2.fun();
```

A function inside an object is called a **Method**.

Examples:

```javascript
console.log();
Math.random();
```

- `console` → Object
- `log()` → Method

- `Math` → Object
- `random()` → Method

---

# Built-in Objects

Some commonly used built-in objects are:

- `console`
- `Math`
- `JSON`
- `localStorage`

---

# JSON (JavaScript Object Notation)

JSON is used to store and transfer data.

### Why JSON?

- Similar to JavaScript objects
- More universal
- Understood by almost every programming language
- Used when sending data between computers
- Used when storing data

### Differences from JavaScript Objects

- Property names must use **double quotes**
- Functions are **not allowed**

Example:

```json
{
    "name": "Shirt",
    "delivery-time": "1 day",
    "rating": {
        "stars": 4.5,
        "count": 87
    }
}
```

---

# JSON Methods

## Convert JavaScript Object → JSON

```javascript
const jsonString = JSON.stringify(product2);

console.log(jsonString);
console.log(typeof jsonString); // string
```

---

## Convert JSON → JavaScript Object

```javascript
const object = JSON.parse(jsonString);

console.log(object);
```

Or directly:

```javascript
console.log(JSON.parse(JSON.stringify(product2)));
```

---

# localStorage

Variables are temporary.

`localStorage` lets us save data permanently (even after refreshing the page).

> **Note:** `localStorage` only stores strings.

### Save Data

```javascript
localStorage.setItem('message', 'Hello');
```

### Get Data

```javascript
console.log(localStorage.getItem('message'));
```

### Delete Data

```javascript
localStorage.removeItem('message');
```

### Storing Objects

Since `localStorage` only stores strings, convert objects to JSON before saving.

```javascript
localStorage.setItem('product', JSON.stringify(product2));
```

Retrieve the object:

```javascript
const product = JSON.parse(localStorage.getItem('product'));
```

---

# null vs undefined

## undefined

- A variable has not been assigned a value.

```javascript
let x;

console.log(x); // undefined
```

---

## null

- Intentionally means "empty" or "no value".

```javascript
let user = null;
```

Use `null` when you intentionally want something to be empty.

---

# Auto-Boxing

JavaScript automatically wraps primitive values (like strings, numbers, and booleans) in temporary objects when needed. This feature is called **Auto-Boxing**.

```javascript
console.log('hello'.length);      // 5
console.log('hello'.toUpperCase()); // HELLO
```

Here, `'hello'` is a string primitive, but JavaScript temporarily converts it into a **String object** so you can access its properties and methods.

> **Auto-Boxing** = JavaScript automatically wraps a primitive value in an object.

### Auto-Boxing works with:

- Strings
- Numbers
- Booleans

```javascript
console.log((3).toString()); // "3"
console.log(true.toString()); // "true"
```

> **Note:** When calling a method on a number, wrap it in parentheses:
>
> ```javascript
> (3).toString();
> ```
>
> Otherwise, JavaScript may treat the `.` as a decimal point.

### Auto-Boxing does NOT work with:

- `null`
- `undefined`

```javascript
null.property;      // ❌ Error
undefined.method(); // ❌ Error
```

---

# Objects are References

Objects are **stored by reference**, not by value.

```javascript
const object1 = {
    message: 'hello'
};

const object2 = object1; // Copy by reference

object1.message = 'Good Job!';

console.log(object1);
console.log(object2);
```

Output:

```javascript
{ message: 'Good Job!' }
{ message: 'Good Job!' }
```

Both variables point to the **same object** in memory.

---

## Comparing Objects

```javascript
const object3 = {
    message: 'Good Job!'
};

console.log(object2 === object1); // true
console.log(object3 === object1); // false
```

Even though `object3` contains the same data, it is a different object.

> **Objects are compared by their references, not by the values inside them.**

---

# Object Shortcuts

JavaScript provides several shortcuts to make working with objects easier.

- Destructuring
- Shorthand Property
- Shorthand Method

---

## 1. Destructuring

Instead of writing:

```javascript
const object4 = {
    message: 'Good Job!'
};

const message = object4.message;
```

You can write:

```javascript
const { message } = object4;
```

### Why use destructuring?

- Less code
- Cleaner syntax
- Easier to extract multiple properties

Example:

```javascript
const person = {
    name: 'Nabeel',
    age: 22
};

const { name, age } = person;
```

---

## 2. Shorthand Property

If the property name and variable name are the same:

Instead of:

```javascript
const message = 'Good Job!';

const object5 = {
    message: message
};
```

You can simply write:

```javascript
const message = 'Good Job!';

const object5 = {
    message
};

console.log(object5);
```

Output:

```javascript
{
    message: 'Good Job!'
}
```

This is called a **Shorthand Property**.

---

## 3. Shorthand Method

Instead of writing:

```javascript
const object6 = {
    method: function () {
        console.log('method');
    }
};
```

You can write:

```javascript
const object6 = {
    method() {
        console.log('method');
    }
};

object6.method();
```

Output:

```javascript
method
```

This is called a **Shorthand Method**.