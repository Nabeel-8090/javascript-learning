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