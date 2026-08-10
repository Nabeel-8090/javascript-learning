# External Libraries and MVC

## External Libraries

**External Libraries** = code that is outside of our project.

### Why We Use External Libraries
- Let us share code
- Save time
- Avoid duplicating work

We use the **DayJS** external library to complete our checkout page delivery option.

### Minification
**Minification** = minifying the code (compression of code).

## DayJS

Day.js is an external library, and it has proper documentation on how to use it.

```javascript
const today = dayjs();
today.add(7, 'days');
```

### Best Practices
When we need something complicated:
1. Try to find an external library first.
2. Only write the code ourselves if no suitable library exists.

### How to Find External Libraries
Search in Google, e.g. "JavaScript Date Library"

## ESM Version

**ESM** = EcmaScript Module (EcmaScript = JavaScript)

```javascript
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
```

**Why we use this syntax:** we use `dayjs` instead of `{ dayjs }`.

### Default Export
- Another way of exporting
- We can use it when we only want to export 1 thing

**How to make it:**

```javascript
export function formatCurrency(priceCents) {
    return (priceCents / 100).toFixed(2);
}
export default formatCurrency;
```

```javascript
import formatCurrency from './utils/money.js';
```

> Each file can only have 1 default export.

### Named Export vs Default Export
| Type | Import Syntax |
|------|----------------|
| Named Export | `import { formatCurrency }` |
| Default Export | `import formatCurrency` |

## MVC (Model - View - Controller)

**MVC** is a design pattern where we split our code into 3 parts:

1. **Model** = saves and manages the data
2. **View** = takes the data and displays it on the page
3. **Controller** = runs some code when we interact with the page

## Lesson Summary
1. External libraries = code outside of our project
2. DayJS external library
3. External libraries + JavaScript Modules, default export
4. MVC = Model - View - Controller