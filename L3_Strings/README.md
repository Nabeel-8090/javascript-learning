# In this Lesson

## Concatenation (Combining Strings)

```javascript
'some' + 'text'; // 'sometext'
'hello' + 3;     // 'hello3' (Type coercion - automatic type conversion)
```

> String concatenation follows the order of operations.

## Three Ways to Create a String

1. `'...'`
2. `"..."`
3. `` `...` `` (Template literals)

## Escape Characters

```javascript
'I\'m learning JavaScript'
"He said, \"Hello!\""
'First line\nSecond line'
```

- `\'` → Single quote
- `\"` → Double quote
- `\n` → New line

## Template Literals (`` `...` ``)

### 1. Interpolation

Insert values or expressions directly into a string.

```javascript
`Items (${1 + 1}): $${(2095 + 799) / 100}`;
// 'Items (2): $28.94'
```

### 2. Multi-line Strings

```javascript
`some
text`
```

Output:

```text
some
text
```
