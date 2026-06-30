# In this Lesson

## Variables

A **variable** is a container used to store data.

JavaScript provides three ways to declare variables:

- `let`
- `const`
- `var`

## Variable Naming Rules

1. Cannot use reserved keywords (e.g. `let`, `const`, `if`).
2. Cannot start with a number.
3. Can only use letters, numbers, `$`, and `_`.

```javascript
let $name = 'SHEIKH'; // Allowed
let _name = 'SHEIKH'; // Allowed
```

## Naming Conventions

JavaScript commonly uses **camelCase**.

| Convention | Example |
|------------|---------|
| camelCase | `cartQuantity` ✅ |
| PascalCase | `CartQuantity` |
| kebab-case | `cart-quantity` *(used for file names, not variables)* |
| snake_case | `cart_quantity` |

## `const`

- The value cannot be reassigned.
- **Best practice:** Use `const` by default.

Use `let` only when the variable's value needs to change.

## `var`

- `var` is the old way of declaring variables.
- It is generally **not recommended** in modern JavaScript.

## `typeof` Operator

Use `typeof` to check the data type of a value.

```javascript
console.log(typeof 3);        // "number"
console.log(typeof 'Nabeel'); // "string"
```
