# In This Lesson

## Functions

A **function** is a reusable block of code that performs a specific task.

### Why Use Functions?

- Reuse code
- Avoid repetition
- Make code easier to read and maintain

## Function Syntax

```javascript
function func() {
  // Code to execute
}

func(); // Calling the function
```

## Parameters and Arguments

- **Parameters** are variables defined in a function.
- **Arguments** are the values passed when calling a function.

### Example

```javascript
function calculateTax(cost, taxPercent = 0.1) {
  console.log(cost * taxPercent);
}

calculateTax(2000, 0.2); // 400
calculateTax(1000);       // 100 (uses the default value)
```

> **Note:** `taxPercent = 0.1` is a **default parameter**. It is used when no value is passed for `taxPercent`.