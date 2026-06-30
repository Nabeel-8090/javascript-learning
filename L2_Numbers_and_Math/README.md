# In this lession:

## Order of operations:
- * / are done first
- + - are done after

(operator precedence)

- * / have the same priority (left to right)
- + - have the same priority (left to right)

# In programming:
- 2, 3, 4 = integers
- 2.2, 2.5 = floating point numbers (floats)

Computers have a problem working with floats.

How do we avoid this problem?
Best practice when calculating money = calculate in cents instead of dollars


## Calculations with floats are sometimes inaccurate.
When working with money
1. Do the calculation in cents (e.g. (2095 + 799) / 100)


## How to round a number in JavaScript
Math.round(2.2) -> 2
Math.round(2.894) -> 3


