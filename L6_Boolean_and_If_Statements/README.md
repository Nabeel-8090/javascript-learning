# In This Lesson

## Boolean

A **boolean** is a data type that has only two possible values:

- `true`
- `false`

## Comparison Operators

| Operator | Meaning |
|----------|---------|
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |
| `===` | Strictly equal to |
| `!==` | Strictly not equal to |

### `==` vs `===`

```javascript
console.log(5 == '5');   // true
console.log(5 === '5');  // false
```

> **Note:** Prefer using `===` instead of `==` because it checks both **value** and **data type**.

## Order of Operations

1. `(...)`
2. `*` and `/`
3. `+` and `-`
4. Comparison operators

## If Statements

`if` statements allow your program to make decisions based on conditions.

### Syntax

```javascript
if (condition) {
  // Code to execute if the condition is true
} else if (anotherCondition) {
  // Code to execute if the second condition is true
} else {
  // Code to execute if none of the above conditions are true
}
```

### Example

```javascript
if (true) {
  console.log('if');
} else if (true) {
  console.log('else if');
} else {
  console.log('else');
}
```

## `var` and Scope

> `var` does **not** follow block scope. It is **function-scoped**, unlike `let` and `const`, which are block-scoped.

## Truthy and Falsy Values

A value used in a condition is automatically treated as either **truthy** or **falsy**.

### Example

```javascript
if (5) {
  console.log('truthy');
}
```

> `5` is a **truthy** value, so the code inside the `if` block runs.

### Falsy Values

The following values are **falsy**:

- `false`
- `0`
- `''` (empty string)
- `NaN`
- `undefined`
- `null`

> Any value **not** on this list is considered **truthy**.

### Special Values

- `NaN` → Not a Number
- `undefined` → A variable has been declared but has no value.

```javascript
let variable1;   // Allowed
const variable2; // Not allowed (const must be initialized)
```

## Shortcuts for `if` Statements

### Ternary Operator (`?:`)

A shorthand for simple `if...else` statements.

```javascript
const result = true ? 'truthy' : 'falsy';
```

### Guard Operator (`&&`)

Returns the first falsy value or the last value if all are truthy.

This behavior is known as **short-circuit evaluation**.

```javascript
const message1 = false && 'hello'; // false
const message2 = true && 'hello';  // 'hello'
```

### Default Operator (`||`)

Returns the first truthy value. If the first value is falsy, it returns the second value.

```javascript
const currency1 = 'EUR' || 'USD';       // 'EUR'
const currency2 = undefined || 'USD';   // 'USD'
```
