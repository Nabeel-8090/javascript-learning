# Intro to Backend, Callbacks, Async Await

## What Is Backend?

**Backend** = another computer that manages the data of a website.

### How Does Our Computer Send Information to the Backend?

![How does our computer send information to the backend?](./image01.png)

We use an **HTTP message**.

**HTTP** = HyperText Transfer Protocol

## XMLHttpRequest

This is a built-in class (provided by JavaScript).

```javascript
new XMLHttpRequest();
```

Creates a new HTTP message to send to the backend. Message = **request**.

```javascript
const xhr = new XMLHttpRequest();
xhr.open(HTTP_Method, Where_to_send_this_HTTP_message);
```

HTTP method like `'GET'`.

### GET

`GET` => get some information from the backend.

**Types of request:** `GET`, `POST`, `PUT`, `DELETE`

## URL

**URL** => Uniform Resource Locator
- Like an address, but for the Internet.
- Helps us locate another computer on the Internet.

```
https://amazon.com
```

`amazon.com` => domain name

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();
```

> browser > inspect > Network tab

**Request-Response Cycle** => 1 request, 1 response

## URL Paths

```
https://supersimplebackend.dev/
https://supersimplebackend.dev/hello
https://supersimplebackend.dev/products/first
```

| URL | Path |
|-----|------|
| `https://supersimplebackend.dev/` | `/` |
| `https://supersimplebackend.dev/hello` | `/hello` |
| `https://supersimplebackend.dev/products/first` | `/products/first` |

A backend only supports a certain set of URL paths.

## Status Code

- Starts with **4** or **5** (400, 404, 500) = failed
  - **4** -> our problem
  - **5** -> backend's problem
- Starts with **2** (200, 201, 204) = succeeded

```
https://supersimplebackend.dev/documentation
```
This is SuperSimpleDev Backend Documentation.

## Backend API

**API** = Application Programming Interface

The backend can respond with different types of data:
1. Text
2. JSON — `JSON.parse()` for converting into a JS Object; this allows us to send JavaScript objects across the Internet, to the backend
3. HTML
4. Image

Using the browser = making a `GET` request.

## Testing With a Backend

```javascript
beforeAll((done) => {
    loadProducts(() => {
        done();
    });
});
```

# Promises and Fetch

## Promises

- A better way to handle asynchronous code
- Similar to Jasmine's `done()` function
- Let us wait for code to finish, before going to the next step

Promise is a class:

```javascript
new Promise((resolve) => {

});
```

`resolve` => it is a function
- Similar to Jasmine's `done()` function
- Lets us control when to go to the next step

The executor function (the function passed into `new Promise()`) runs **immediately** when the promise is created.

![Promises](./image02.png)

> **Note:** JavaScript is still single-threaded — promises don't let JavaScript run multiple things in parallel. What they actually do is let JavaScript **start a slow operation (like a network request) and keep running other code while waiting**, instead of blocking everything until it finishes. When the slow operation completes, the promise's `resolve` function is called and the rest of our code continues.

### Why Do We Use Promises?

Multiple callbacks cause a lot of nesting.

If we have lots of callbacks, our code will become more and more nested (this is sometimes called "callback hell"). Promises solve this problem — they let us flatten our code.

**Use promises instead of callbacks.** Promises keep our code more flat.

### Running Multiple Promises at Once

`Promise.all()`
- Lets us run multiple promises at the same time
- And wait for all of them to finish

## Fetch

`fetch()` = a better way to make HTTP requests.

- `fetch()` uses a promise
- By default, `fetch()` will make a `GET` request
- It's a better way to make requests instead of `XMLHttpRequest()`

```javascript
fetch('https://supersimplebackend.dev/products').then((response) => {
    return response.json();
});
```

`response.json()` is asynchronous — it returns a promise.

# Async Await

An even better way to handle asynchronous code.

**Async await** is a shortcut for promises.

```javascript
async function loadPage() {
    console.log('load page');
}
```

`async` = makes a function return a promise.

This is the same as writing:

```javascript
function loadPage() {
    return new Promise((resolve) => {
        console.log('load page');
        resolve();
    });
}
```

`async` is a shortcut for this pattern.

```javascript
async function loadPage() {
    console.log('load page');
    return 'value2'; // resolve('value2')
}
loadPage().then((value) => {
    console.log('next step');
    console.log(value);
});
```

## What's the Point of This Feature?

`async` lets us use `await`.

### `await`

`await` = lets us wait for a promise to finish, before going to the next line.

It lets us write asynchronous code that looks like normal, synchronous code.

> We can only use `await` when we're inside an `async` function.

`await` is designed to work with promises — using it on a promise pauses execution until that promise settles.

### More Details About Async Await

The closest enclosing function has to be `async`.

**Async await**
- = shortcut for promises
- = lets us write asynchronous code like normal code

## Error Handling

When we're sending HTTP requests, we could get unexpected errors.

```javascript
xhr.addEventListener('error', (error) => {
    console.log('Unexpected error. Please try again later.');
});
```

### Handle Errors in Promises

```javascript
.catch((error) => {
    console.log('Unexpected error. Please try again later.');
});
```

### Handle Errors in Async Await

Use `try` / `catch`.

```javascript
try {
    await loadProductsFetch();
    await new Promise((resolve) => {
        loadCart(() => {
            resolve('value');
        });
    });
} catch (error) {
    console.log('Unexpected error. Please try again later.');
}
```

### More Details About try / catch

We can use `try` / `catch` with synchronous code (normal code) too. Whenever we get an error, it skips the rest of the code inside the `try` block and jumps to `catch`.

**Why don't we use `try` / `catch` everywhere?**
- It's meant to handle *unexpected* errors (code that is correct, but where something outside our control goes wrong — like a network failure).

### Manually Creating Errors

`throw` creates a new error.

If we're using Promises, there are 2 ways to manually create an error:
1. `throw` an error inside the promise's executor function
2. Call `reject()`

```javascript
await new Promise((resolve, reject) => {
    // reject() is a function
    // it lets us create an error in the future
});
```

## Using the Backend in Our Project

First, we add products to the cart and place an order on the checkout page, so it goes to the backend.

URL: `https://supersimplebackend.dev/orders`

To send data in a request, we need to use a different type of request.

### 4 Types of Requests

| Method | Purpose |
|--------|---------|
| `GET` | Get something from the backend |
| `POST` | Create something |
| `PUT` | Update something |
| `DELETE` | Delete something |

`GET` requests don't really let us send data to the backend. `POST` lets us send data to the backend.

## URL Parameters

`window.location` is a special object.

**URL parameters** = let us save data directly in the URL.

```
https://127.0.0.1:5500/tracking.html?orderId=123
```

> URL parameters are also called **search parameters**.

## Lesson Summary
1. Backend and HTTP
2. `XMLHttpRequest` and `fetch()`
3. Asynchronous Code (Callbacks, promises, async await)
4. How to test asynchronous code
5. Error handling
6. Use the backend in our project
7. URL parameters

