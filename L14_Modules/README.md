# Modules

Modules are a better way to organize JavaScript code by splitting it into multiple files.

## Without Modules

```html
<script src="data/cart.js"></script>
<script src="data/products.js"></script>
<script src="scripts/amazon.js"></script>
```

The browser:

1. Combines all the files into one large script.
2. Executes the code in the order the files are loaded.

### Problem

This can cause **naming conflicts**.

```js
// cart.js
const cart = [];
```

Since all files share the same global scope, another file cannot declare:

```js
const cart = [];
```

---

## Using Modules

### Step 1: Add `type="module"`

```html
<script type="module" src="scripts/amazon.js"></script>
```

This file is called the **Entry Point**.

### Step 2: Export

```js
// cart.js
export const cart = [];
```

### Step 3: Import

```js
// amazon.js
import { cart } from "../data/cart.js";
```

> **Note:** ES Modules require a local server (e.g., Live Server) because browsers block module imports when opening HTML files directly using the `file://` protocol.

---

## Benefits of Modules

- Avoid naming conflicts.
- Better code organization.
- Import only what you need.
- No need to worry about the order of `<script>` tags.
- Easier to maintain and scale large projects.

---

# `findIndex()` vs `find()`

## `findIndex()`

Returns the **index** of the first matching element.

```js
const index = cart.findIndex(
  cartItem => cartItem.id === productId
);
```

Example:

```js
const cart = [
  { id: "a1" },
  { id: "b2" },
  { id: "c3" }
];

const index = cart.findIndex(item => item.id === "b2");

console.log(index); // 1
```

If no match is found, it returns:

```js
-1
```

---

## `find()`

Returns the **element (object)** itself.

```js
const cartItem = cart.find(
  cartItem => cartItem.id === productId
);
```

Example:

```js
const cart = [
  { id: "a1", quantity: 2 },
  { id: "b2", quantity: 5 }
];

const cartItem = cart.find(item => item.id === "b2");

console.log(cartItem);
```

Output:

```js
{
  id: "b2",
  quantity: 5
}
```

If no match is found, it returns:

```js
undefined
```