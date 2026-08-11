# Testing

## Manual Testing

The easiest way to test: open the website and try out the code.

**Manual Testing** -> Manually open the website and test it.

### Disadvantages of Manual Testing
1. Hard to test every situation
2. Hard to re-test

## Automated Testing

To solve these problems: **Automated Testing** = using code to test code.

**Situation = test case**

### Two Types of Test Cases
1. **Basic test cases** = tests if the code is working or not
2. **Edge cases** = test with values that are tricky

```javascript
// Basic Test Case
console.log("converts cents into dollars");
if (formatCurrency(2095) === '20.95') {
    console.log('passed');
} else {
    console.log('failed');
}

// Edge Test Case
console.log("works with 0");
if (formatCurrency(0) === '0.00') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log("rounds up to the nearest cent");
if (formatCurrency(2000.5) === '20.01') {
    console.log('passed');
} else {
    console.log('failed');
}
```

**Test suite** = group of related tests

## Testing Framework

**External libraries** => code that is outside of our project

**Testing Framework** = external library that helps us write tests easier

1. Create test suite
2. Create tests
3. Compare values and display result

### Popular Testing Frameworks
- **Jasmine** (a popular testing framework)

Most testing frameworks are similar. Other testing frameworks:
1. Jest (for ReactJS)
2. MochaJS

### Jasmine Resources
- Releases: https://github.com/jasmine/jasmine/releases/tag/v5.1.1
- Documentation: https://jasmine.github.io/pages/docs_home.html

### Jasmine Folder Structure
- `SpecRunner.html` (we can rename it) — same as `tests.html`
- `spec` — contains test cases
- `src` — contains source files where to apply test cases

> **spec** = test

## Core Jasmine Functions

### `describe(description, specDefinitions)`
Create a group of specs (often called a suite). Calls to `describe` can be nested within other calls to compose your suite as a tree.

### `it(description, testFunction (opt), timeout (opt))`
Define a single spec. A spec should contain one or more "expectations" that test the state of the code.

A spec whose expectations all succeed will be passing, and a spec with any failures will fail. The name `it` is a pronoun for the test target, not an abbreviation of anything. It makes the spec more readable by connecting the function name `it` and the argument `description` as a complete sentence.

### `expect(actual) -> {matchers}`
Create an expectation for a spec.

**Parameters:**
| Name | Type | Description |
|------|------|--------------|
| actual | Object | Actual computed value to test expectations against |

### Example Test Suite

```javascript
import { formatCurrency } from '../scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
    it('converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('rounds up to the nearest cent', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});
```

## Mocks and Spies

**Mocks** => lets us replace a method with a fake version.

```javascript
spyOn(localStorage, 'getItem').and.callFake(() => {
    return JSON.stringify([]);
});
console.log(localStorage.getItem('cart'));
```

## Complicated Tests

- **Unit Tests** = testing 1 piece of the code
- **Integration Test** = tests many units/pieces of code working together

## Hooks

A shortcut in Jasmine called **Hooks** lets us run some code for each test.

| Hook | Description |
|------|--------------|
| `beforeEach()` | Runs code before each test |
| `afterEach()` | Runs code after each test |
| `beforeAll()` | Runs code before all tests |
| `afterAll()` | Runs code after all tests |

## Lesson Summary
1. Manual and automated tests
2. Test cases and test suites
3. Testing Framework = helps us write tests easier
4. Mock and spy on methods
5. Test web pages using integration tests
6. Hooks