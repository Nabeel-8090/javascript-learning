# Document Object Model (DOM)

## Built-in Objects

JavaScript provides several built-in objects:

- `console`
- `Math`
- `JSON`
- `localStorage`
- `document` (DOM)
- `window`

---

## Document Object Model (DOM)

The **DOM (Document Object Model)** is a built-in JavaScript object that represents the HTML document.

```javascript
document.body.innerHTML = "Hello";
```

---

## DOM Syntax

The `document` object provides properties and methods to access and manipulate HTML elements.

```javascript
document.querySelector("button");
```

---

## Common Properties

### `document.title`

Gets or sets the page title.

```javascript
document.title = "My Website";
```

### `document.body`

Represents the `<body>` element.

```javascript
console.log(document.body);
console.log(typeof document.body); // object
```

### `document.body.innerHTML`

Gets or sets the HTML inside the `<body>`.

```javascript
document.body.innerHTML = "<h1>Hello</h1>";
```

---

## `document.querySelector()`

Selects the **first** element that matches a CSS selector.

```javascript
const button = document.querySelector("button");
```

Examples:

```javascript
console.log(document.querySelector("button"));

console.log(document.querySelector("button").innerHTML);

document.querySelector("button").innerHTML = "Changed";
```

---

## HTML Elements Become JavaScript Objects

The DOM converts HTML elements into JavaScript objects.

```html
<button>Click Me</button>
```

```javascript
const button = document.querySelector("button");

console.log(typeof button); // object
```

Each HTML element contains properties and methods such as:

- `.innerHTML`
- `.textContent`
- `.value`
- `.style`
- `.classList`

---

## Methods vs Properties

**Property**

A value stored inside an object.

```javascript
document.title;
button.innerHTML;
```

**Method**

A function stored inside an object.

```javascript
document.querySelector("button");
button.addEventListener("click", function () {});
```

---

## Events

An **event** is something that happens in the browser.

Examples:

- Click
- Key press
- Mouse hover
- Scroll

Common event listeners:

- `onclick`
- `onkeydown`
- `onscroll`
- `onmouseenter`
- `onmouseleave`

Example:

```javascript
button.onclick = function () {
  console.log("Clicked");
};
```

or

```javascript
button.addEventListener("click", function () {
  console.log("Clicked");
});
```

---

## Event Object

Every event listener receives an **event object**.

```javascript
document.addEventListener("keydown", function (event) {
  console.log(event.key);
});
```

Example:

```javascript
if (event.key === "Enter") {
  console.log("Enter Pressed");
}
```

---

## Type Conversion

Convert values manually:

```javascript
String(25);      // "25"
Number("34");    // 34
```

### Type Coercion

JavaScript sometimes converts values automatically.

```javascript
"25" - 5; // 20
"25" + 5; // "255"
```

---

# Window Object

The **Window Object** represents the browser.

Everything in the browser exists inside the `window` object.

Examples:

```javascript
window.console.log("Hello");

window.alert("Hello");
```

Since `window` is the global object, we usually omit it.

```javascript
console.log("Hello");

alert("Hello");
```

---

## Document vs Window

| Document Object | Window Object |
|-----------------|---------------|
| Represents the web page | Represents the browser |
| Access HTML elements | Access browser features |
| `document.querySelector()` | `window.alert()` |
| `document.title` | `window.location` |
| `document.body` | `window.console` |

---

## Common methods
- `document.createElement("div");`   // Create element
- `element.textContent = "Text";`    // Add text
- `element.innerHTML = "<b>Hi</b>";` // Add HTML
- `element.classList.add("box");`    // Add class
- `element.setAttribute("id", "myDiv");` // Set attribute
- `parent.appendChild(element);`     // Add as last child
- `parent.prepend(element);`         // Add as first child

---

## Summary

- The **DOM** connects JavaScript with HTML.
- HTML elements become JavaScript objects.
- Use `document.querySelector()` to select elements.
- Use properties like `.innerHTML`, `.textContent`, and `.value`.
- Use methods like `.querySelector()` and `.addEventListener()`.
- Events allow JavaScript to respond to user actions.
- Every event listener receives an `event` object.
- `document` represents the web page.
- `window` represents the browser.