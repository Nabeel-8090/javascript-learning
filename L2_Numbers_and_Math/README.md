# In this lesson:

## Order of Operations

- `*` and `/` are evaluated first.
- `+` and `-` are evaluated after.
- `*` and `/` have the same precedence (evaluated left to right).
- `+` and `-` have the same precedence (evaluated left to right).

## Number Types in JavaScript

- `2`, `3`, `4` → Integers
- `2.2`, `2.5` → Floating-point numbers (floats)

> Computers can have precision issues when working with floating-point numbers.

### Best Practice for Money Calculations

Perform calculations in **cents** instead of **dollars**.

**Example:**

```javascript
(2095 + 799) / 100
```

## Rounding Numbers

Use `Math.round()` to round a number to the nearest integer.

```javascript
Math.round(2.2);   // 2
Math.round(2.894); // 3
```
